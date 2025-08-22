import { defineEcConfig } from "astro-expressive-code";
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
      plugins: [pluginLineNumbers()],
      styleOverrides: {
        textMarkers: {
          backgroundOpacity: '25%'
        }
      }
})