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
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Goldman",
      cssVariable: "--font-goldman"
    },
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-space-mono"
    }
  ]
});