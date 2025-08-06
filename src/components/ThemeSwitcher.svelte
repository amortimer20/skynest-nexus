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
  <button
    class="btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    <i class="si-square-fill text-skynest-theme fs-5"></i>
  </button>
  <ul class="dropdown-menu">
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-cyan");
      }}
    >
        <i class="si-square-fill text-skynest-cyan fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-red");
      }}
    >
        <i class="si-square-fill text-skynest-red fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-green");
      }}
    >
        <i class="si-square-fill text-skynest-green fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-blue");
      }}
    >
        <i class="si-square-fill text-skynest-blue fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-purple");
      }}
    >
        <i class="si-square-fill text-skynest-purple fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-orange");
      }}
    >
        <i class="si-square-fill text-skynest-orange fs-5"></i>
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("skynest-yellow");
      }}
    >
      <i class="si-square-fill text-skynest-yellow fs-5"></i>
    </li>
  </ul>
</div>

<style>
  .dropdown-menu {
    --bs-dropdown-min-width: 0;
  }
</style>
