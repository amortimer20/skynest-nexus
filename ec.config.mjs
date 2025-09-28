import { defineEcConfig } from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets';

export default defineEcConfig({
    themes: ['material-theme-ocean'],
      frames: {
        showCopyToClipboardButton: false
      },
      shiki: {
        transformers: [transformerColorizedBrackets()]
      },
      plugins: [
        pluginCollapsibleSections(),
        pluginLineNumbers()
      ],
      styleOverrides: {
        textMarkers: {
          backgroundOpacity: '25%'
        }
      }
})