#!/usr/bin/env node
// Export the game design reference builds to public/games/ for the playable
// pages.
//
// These builds are deliberately NOT committed. A Godot web export is about
// 38 MB, almost all of it the engine binary, and three of them in git history
// would dwarf the entire site repo. Firebase deploys from dist/ off this
// machine with no CI, so a generated public/games/ reaches production without
// ever entering version control.
//
// One engine, many games. The engine binary is identical across projects
// exported with the same template and feature set, so it lives once in
// public/games/engine/ and each game ships only its own pack -- about 19 KB.
// A student who has loaded one game gets the others almost instantly.
//
//   node scripts/export-games.mjs            # every game
//   node scripts/export-games.mjs junkyard   # just one

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, mkdirSync, existsSync, renameSync, copyFileSync, readFileSync, writeFileSync, statSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const GODOT = process.env.GODOT_BIN ?? "/Applications/Godot.app/Contents/MacOS/Godot";
const REPO = path.resolve(import.meta.dirname, "..");
const PROJECTS = path.join(REPO, "game-design-projects");
const PUBLIC = path.join(REPO, "public", "games");
const ENGINE = path.join(PUBLIC, "engine");

// Slug -> project folder. Add a row when a game's reference build exists.
const GAMES = {
  junkyard: "junkyard",
};

const ENGINE_FILES = [
  ["index.wasm", "godot.wasm"],
  ["index.js", "godot.js"],
  ["index.audio.worklet.js", "godot.audio.worklet.js"],
  ["index.audio.position.worklet.js", "godot.audio.position.worklet.js"],
];

function kb(p) {
  return `${Math.round(statSync(p).size / 1024)} KB`;
}

function exportGame(slug) {
  const project = path.join(PROJECTS, GAMES[slug]);
  if (!existsSync(path.join(project, "project.godot"))) {
    throw new Error(`no Godot project at ${project}`);
  }

  const staging = mkdtempSync(path.join(tmpdir(), `export-${slug}-`));
  try {
    execFileSync(GODOT, [
      "--headless",
      "--path", project,
      "--export-release", "Web",
      path.join(staging, "index.html"),
    ], { stdio: ["ignore", "ignore", "inherit"] });

    // The engine half is shared, so the first game to be exported writes it and
    // the rest confirm it matches.
    mkdirSync(ENGINE, { recursive: true });
    for (const [from, to] of ENGINE_FILES) {
      const src = path.join(staging, from);
      if (!existsSync(src)) continue;
      renameSync(src, path.join(ENGINE, to));
    }

    const dest = path.join(PUBLIC, slug);
    mkdirSync(dest, { recursive: true });
    renameSync(path.join(staging, "index.pck"), path.join(dest, `${slug}.pck`));
    for (const icon of readdirSync(staging).filter((f) => f.endsWith(".png"))) {
      copyFileSync(path.join(staging, icon), path.join(dest, icon));
    }

    // Point the shell at the shared engine instead of at sibling files. Godot's
    // own shell is kept rather than hand-written, so its loader, progress
    // reporting and error handling stay in play.
    let html = readFileSync(path.join(staging, "index.html"), "utf8");
    html = html
      .replaceAll('src="index.js"', 'src="../engine/godot.js"')
      .replaceAll('"executable":"index"', `"executable":"../engine/godot","mainPack":"${slug}.pck"`)
      .replaceAll('"index.pck"', `"${slug}.pck"`)
      .replaceAll('"index.wasm"', '"../engine/godot.wasm"');
    writeFileSync(path.join(dest, "index.html"), html);

    console.log(`  ${slug}/${slug}.pck  ${kb(path.join(dest, `${slug}.pck`))}`);
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
}

const requested = process.argv.slice(2);
const slugs = requested.length ? requested : Object.keys(GAMES);
for (const slug of slugs) {
  if (!GAMES[slug]) {
    console.error(`unknown game "${slug}" — known: ${Object.keys(GAMES).join(", ")}`);
    process.exit(1);
  }
}

console.log(`Exporting ${slugs.length} game${slugs.length === 1 ? "" : "s"} to public/games/`);
for (const slug of slugs) exportGame(slug);
console.log(`  engine/godot.wasm  ${kb(path.join(ENGINE, "godot.wasm"))}  (shared)`);
