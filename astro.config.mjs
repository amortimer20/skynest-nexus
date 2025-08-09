// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    expressiveCode()
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