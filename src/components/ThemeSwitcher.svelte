<script lang="ts">
  import { onMount } from "svelte";

  let darkTheme: HTMLBodyElement | null;
  let themeStyles: CSSStyleDeclaration;

  function setColorTheme(color: string) {
    if (!darkTheme) return;

    let colorMap: Record<string, string> = {
      "color-theme": `--${color}`,
      "color-theme-rgb": `--${color}-rgb`,
      "color-theme-lighten": `--${color}-lighten`,
      "color-theme-darken": `--${color}-darken`,
    };

    for (const [themeProp, mappedVar] of Object.entries(colorMap)) {
      let mappedVarStyle = themeStyles.getPropertyValue(mappedVar);
      darkTheme.style.setProperty(`--${themeProp}`, mappedVarStyle);
      localStorage.setItem(themeProp, mappedVarStyle);
    }
  }

  onMount(() => {
    darkTheme = document.querySelector<HTMLBodyElement>(
      '[data-bs-theme="dark"]',
    );

    if (darkTheme) {
      themeStyles = getComputedStyle(darkTheme);
    }
  });
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="dropdown">
  <svg style="display: none;">
    <symbol id="icon-diamond-half" viewBox="0 0 16 16" fill="currentColor">
      <path
        d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.5.5 0 0 1-.35.145z"
      />
    </symbol>
  </svg>
  <button
    class="btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    <svg width="16" height="16">
      <use xlink:href="#icon-diamond-half" style="color: var(--color-theme);"
      ></use>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-cyan");
      }}
    >
      <a href="#" style="color: var(--skynest-cyan);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-red");
      }}
    >
      <a href="#" style="color: var(--skynest-red);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-green");
      }}
    >
      <a href="#" style="color: var(--skynest-green);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-blue");
      }}
    >
      <a href="#" style="color: var(--skynest-blue);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-purple");
      }}
    >
      <a href="#" style="color: var(--skynest-purple);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-gold");
      }}
    >
      <a href="#" style="color: var(--skynest-gold);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-orange");
      }}
    >
      <a href="#" style="color: var(--skynest-orange);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-yellow");
      }}
    >
      <a href="#" style="color: var(--skynest-yellow);">
        <svg width="16" height="16">
          <use xlink:href="#icon-diamond-half"></use>
        </svg>
      </a>
    </li>
  </ul>
</div>

<style>
  .dropdown-menu {
    --bs-dropdown-min-width: 0;
  }
</style>
