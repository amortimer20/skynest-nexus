// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';

import expressiveCode from "astro-expressive-code";
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    expressiveCode({
      themes: ['tokyo-night'],
      frames: {
        showCopyToClipboardButton: false
      },
      shiki: {
        transformers: [transformerColorizedBrackets()]
      }
    })
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Orbitron",
        cssVariable: "--font-orbitron"
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono"
      }
    ]
  }
});