#!/usr/bin/env node
/**
 * Generate an annotated board diagram from the RedBoard RP2350 vector art.
 *
 * The source SVG (src/assets/courses/foce/img/redboard-rp2350.svg) is an
 * Affinity export in which every header pin is its own <g>. Those groups are
 * named Header, Header1 ... Header31 with no indication of which physical pin
 * each one is, so PIN_IDS below records the mapping. It was verified by
 * recolouring each group by id in a browser and reading which silkscreen label
 * the recoloured pin landed under, for all 32 pins.
 *
 * If the board art is ever re-exported from Affinity, re-check PIN_IDS and
 * PIN_X: both depend on the exporter's group naming and nested transforms.
 *
 * Usage:
 *   node scripts/gen-board-diagram.mjs <out-name> <pin> [pin ...] [--title=..] [--label=..]
 *
 * Examples:
 *   node scripts/gen-board-diagram.mjs redboard-rp2350-pin-card 28 29 30 31 32 33
 *   node scripts/gen-board-diagram.mjs redboard-rp2350-pin-28 28 --label="GPIO 28"
 */

import { execFileSync } from "node:child_process";
import { readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const IMG = `${ROOT}/src/assets/courses/foce/img`;
const SOURCE = `${IMG}/redboard-rp2350.svg`;

const CYAN = "rgb(27,212,215)";

/**
 * Silkscreen label -> group id in the source art.
 *
 * Keys are exactly what the board prints. Several labels are abbreviated on the
 * silkscreen itself -- it really does read "AR", "G", "IOR", "RST" rather than
 * AREF/GND/IOREF/RESET -- so the spelled-out forms are accepted as aliases
 * below. The three GND pins are distinguished by suffix.
 */
const PIN_IDS = {
  // Top header, ten-pin block, left to right
  "5": "Header31", "4": "Header30", AR: "Header29", G: "Header28",
  "22": "Header27", "20": "Header26", "23": "Header25", "21": "Header24",
  "35": "Header23", "34": "Header22",
  // Top header, eight-pin block, left to right
  "33": "Header21", "32": "Header20", "31": "Header19", "30": "Header18",
  "29": "Header17", "28": "Header16", "0": "Header15", "1": "Header14",
  // Bottom header, power block, left to right
  LEDO: "Header13", IOR: "Header12", RST: "Header11", "3V3": "Header10",
  "5V": "Header9", "GND-A": "Header8", "GND-B": "Header7", VIN: "Header6",
  // Bottom header, analog block, left to right. A0-A5 are GPIO 40-45.
  A5: "Header5", A4: "Header4", A3: "Header3", A2: "Header2",
  A1: "Header1", A0: "Header",
};

/** Spelled-out names, for callers who reach for the function not the silkscreen. */
const ALIASES = {
  AREF: "AR", "GND-TOP": "G", IOREF: "IOR", RESET: "RST", LED0: "LEDO",
};
for (const [from, to] of Object.entries(ALIASES)) PIN_IDS[from] = PIN_IDS[to];

/**
 * Bounding boxes in source user units, measured off a real render. Only the
 * header rows are recorded because that is all the annotation layer needs.
 * Pitch is not quite uniform -- Header20 sits 134.62 from Header19 where every
 * other neighbour pair is 154.56 apart -- so these are measured, not derived.
 */
const PIN_X = {
  Header31: 1268.36, Header30: 1422.92, Header29: 1577.48, Header28: 1732.04,
  Header27: 1886.60, Header26: 2041.16, Header25: 2195.72, Header24: 2350.28,
  Header23: 2504.84, Header22: 2659.40,
  Header21: 2926.28, Header20: 3080.84, Header19: 3215.46, Header18: 3370.02,
  Header17: 3524.58, Header16: 3679.14, Header15: 3833.70, Header14: 3988.26,
  Header13: 1825.17, Header12: 1979.73, Header11: 2134.29, Header10: 2288.85,
  Header9: 2443.41, Header8: 2597.97, Header7: 2752.53, Header6: 2907.09,
  Header5: 3201.24, Header4: 3355.80, Header3: 3510.36, Header2: 3664.92,
  Header1: 3819.48, Header: 3974.04,
};
const PIN_W = 155.60;

/** Top header: pins 242.63..459.68, silkscreen numbers 471.64..661.24. */
const TOP_ROW = { pinTop: 242.63, pinBottom: 459.68, labelBottom: 661.24 };
/** Bottom header: pins 3199.24..3416.29, numbers sit above them. */
const BOTTOM_ROW = { pinTop: 3199.24, pinBottom: 3416.29, labelTop: 3010.0 };

const isTopRow = (id) => {
  const n = id === "Header" ? 0 : Number(id.slice(6));
  return n >= 14 && n <= 31;
};

// ---------------------------------------------------------------------------

const argv = process.argv.slice(2);
const flags = {};
const positional = [];
// Whitelisted so a typo like --bear is a hard error rather than being silently
// ignored, which would quietly emit a full card where a bare one was wanted.
const KNOWN_FLAGS = new Set(["bare", "title", "label"]);

for (const a of argv) {
  // Accept both --key=value and bare boolean --key.
  const m = /^--([a-z]+)(?:=(.*))?$/.exec(a);
  if (m) {
    if (!KNOWN_FLAGS.has(m[1])) {
      console.error(`unknown option: --${m[1]}`);
      console.error(`known options: ${[...KNOWN_FLAGS].map((f) => "--" + f).join(" ")}`);
      process.exit(1);
    }
    flags[m[1]] = m[2] ?? true;
  } else if (a.startsWith("-")) {
    console.error(`unrecognised option: ${a}`);
    process.exit(1);
  } else positional.push(a);
}

const outName = positional.shift();
const pins = positional;
if (!outName || pins.length === 0) {
  console.error("usage: gen-board-diagram.mjs <out-name> <pin> [pin ...] [options]");
  console.error("  --bare         board and highlight only, cropped to the PCB, no");
  console.error("                 title/callout/caption. For slides and inline figures,");
  console.error("                 where the surrounding page already gives the context.");
  console.error("  --title=TEXT   card heading (full mode only)");
  console.error("  --label=TEXT   callout text (full mode only)");
  process.exit(1);
}

// A full card is ~0.93 aspect, which is far too tall for a reveal.js slide that
// also carries a heading and a paragraph. Bare mode crops to the board itself
// (~1.29) and drops the chrome the surrounding page already provides.
const bare = "bare" in flags;

const unknown = pins.filter((p) => !(p in PIN_IDS));
if (unknown.length) {
  console.error(`unknown pin(s): ${unknown.join(", ")}`);
  console.error(`known: ${Object.keys(PIN_IDS).join(" ")}`);
  process.exit(1);
}

const ids = pins.map((p) => PIN_IDS[p]);
if (!ids.every(isTopRow) && !ids.every((i) => !isTopRow(i))) {
  console.error("all pins must be on the same header row");
  process.exit(1);
}

const onTop = isTopRow(ids[0]);
const row = onTop ? TOP_ROW : BOTTOM_ROW;

// Highlight box: the pins plus their silkscreen numbers, padded.
const PAD_X = 32;
const left = Math.min(...ids.map((i) => PIN_X[i])) - PAD_X;
const right = Math.max(...ids.map((i) => PIN_X[i])) + PIN_W + PAD_X;
const boxTop = onTop ? row.pinTop - 30 : row.labelTop - 30;
const boxBottom = onTop ? row.labelBottom + 30 : row.pinBottom + 30;
const boxW = right - left;
const boxH = boxBottom - boxTop;
const boxMidX = left + boxW / 2;

// Card layout. In full mode the board is nudged down to leave room for a
// heading and callout above it, and a note underneath. In bare mode the canvas
// is just the PCB bounding box plus a hairline margin, and nothing moves.
const PCB = { x: 169.06, y: 196.21, w: 4200.31, h: 3267.57 };
const BARE_MARGIN = 50;

const BOARD_DY = bare ? 0 : 700;
const CARD_W = bare ? PCB.w + BARE_MARGIN * 2 : 4393;
const CARD_H = bare ? PCB.h + BARE_MARGIN * 2 : 4740;
const VIEW_X = bare ? PCB.x - BARE_MARGIN : 0;
const VIEW_Y = bare ? PCB.y - BARE_MARGIN : 0;

const title = flags.title ?? "SparkFun IoT RedBoard RP2350";
const label = flags.label ?? (pins.length > 1
  ? `GPIO ${pins[0]}–${pins[pins.length - 1]}`
  : `GPIO ${pins[0]}`);

// Callout box, horizontally centred over the highlight where there is room.
const CALLOUT_W = Math.max(900, label.length * 108 + 220);
const CALLOUT_H = 250;
const calloutX = Math.min(Math.max(boxMidX - CALLOUT_W / 2, 170), CARD_W - 170 - CALLOUT_W);
const calloutY = 330;

const src = readFileSync(SOURCE, "utf8");
const inner = src.slice(src.indexOf(">", src.indexOf("<svg")) + 1, src.lastIndexOf("</svg>"));

const chrome = bare ? "" : `
  <text x="170" y="150" fill="white" font-size="132" font-family="sans-serif" font-weight="bold">${title}</text>
  <text x="170" y="268" fill="rgb(170,170,180)" font-size="96" font-family="sans-serif">The pins you will wire to in this unit</text>

  <!-- Callout, pointing down at the highlighted block -->
  <rect x="${calloutX.toFixed(2)}" y="${calloutY}" width="${CALLOUT_W}" height="${CALLOUT_H}"
        rx="34" fill="none" stroke="${CYAN}" stroke-width="8" />
  <text x="${(calloutX + CALLOUT_W / 2).toFixed(2)}" y="${calloutY + 168}" text-anchor="middle"
        fill="${CYAN}" font-size="126" font-family="sans-serif" font-weight="bold">${label}</text>
  <line x1="${boxMidX.toFixed(2)}" y1="${calloutY + CALLOUT_H}" x2="${boxMidX.toFixed(2)}"
        y2="${(boxTop + BOARD_DY - 22).toFixed(2)}" stroke="${CYAN}" stroke-width="8"
        marker-end="url(#calloutArrow)" />
`;

const caption = bare ? "" : `
  <text x="170" y="${CARD_H - 300}" fill="white" font-size="98" font-family="sans-serif">
    The numbers printed beside the headers are <tspan font-weight="bold" fill="${CYAN}">GPIO numbers, not positions</tspan> &#8212;
  </text>
  <text x="170" y="${CARD_H - 176}" fill="white" font-size="98" font-family="sans-serif">
    which is why they do not run in order. Read the number, not the place.
  </text>
`;

// Concrete width/height rather than the source art's 100%/100%. A percentage
// gives the file no intrinsic size, so an <img> cannot derive an aspect ratio
// and renders it square (naturalWidth reports 0). Real numbers make the file
// behave correctly as an <img>, in Astro's image pipeline, and in Affinity.
const out = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${CARD_W.toFixed(2)}" height="${CARD_H.toFixed(2)}"
     viewBox="${VIEW_X.toFixed(2)} ${VIEW_Y.toFixed(2)} ${CARD_W.toFixed(2)} ${CARD_H.toFixed(2)}" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:serif="http://www.serif.com/" xml:space="preserve"
     style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
  <!-- Generated by scripts/gen-board-diagram.mjs; edit that, not this file.
       Pins highlighted: ${pins.join(" ")} -->
  <defs>
    <filter id="pinGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="0" stdDeviation="26" flood-color="${CYAN}" flood-opacity="0.95" />
    </filter>
    <marker id="calloutArrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${CYAN}" />
    </marker>
  </defs>

  <!-- Opaque background in the site body colour. The other diagrams in this
       folder are white-on-transparent, which only works because they are always
       composited on the dark page; a pin card gets printed, so it carries its
       own background. This is the skynest-dark value, so it stays seamless
       against the page. -->
  <rect x="${VIEW_X.toFixed(2)}" y="${VIEW_Y.toFixed(2)}" width="${CARD_W.toFixed(2)}" height="${CARD_H.toFixed(2)}" fill="rgb(27,23,40)" />
${chrome}
  <g transform="translate(0,${BOARD_DY})">
${inner}
    <!-- Annotation layer: sits above the board art -->
    <rect x="${left.toFixed(2)}" y="${boxTop.toFixed(2)}" width="${boxW.toFixed(2)}" height="${boxH.toFixed(2)}"
          rx="40" fill="none" stroke="${CYAN}" stroke-width="14" filter="url(#pinGlow)" />
  </g>

${caption}</svg>
`;

// SVG is XML, and XML is far stricter than the HTML parser a browser uses to
// render an inlined snippet: a well-formedness error can look perfectly fine in
// Chromium and still be rejected outright by Affinity. So validate every time.
// Stage to a temp path first, so a failure leaves no broken file behind for the
// next step in the pipeline to pick up and render as if it were good.
const outPath = `${IMG}/${outName}.svg`;
const tmpPath = `${outPath}.tmp`;
writeFileSync(tmpPath, out);

try {
  execFileSync("xmllint", ["--noout", tmpPath], { stdio: "pipe" });
} catch (err) {
  console.error(`\nXML validation FAILED, ${outName}.svg not written:\n`);
  console.error(String(err.stderr ?? err.message).replaceAll(tmpPath, outPath).trim());
  rmSync(tmpPath, { force: true });
  process.exit(1);
}

renameSync(tmpPath, outPath);
console.log(`wrote ${outPath}  (well-formed XML)`);
console.log(`  pins      ${pins.join(" ")}  ->  ${ids.join(" ")}`);
console.log(`  highlight x ${left.toFixed(1)}..${right.toFixed(1)}  y ${boxTop.toFixed(1)}..${boxBottom.toFixed(1)}`);
console.log(`  size      ${(out.length / 1024).toFixed(0)} KB`);
