<script>
  import { onDestroy } from 'svelte';
  import { columnsStore } from './stores.js';

  export let container = false;
  export let gutter = false;
  export let columns = 12;
  export let xs = false;
  export let sm = false;
  export let md = false;
  export let lg = false;
  export let xl = false;

  let classGeneral = '';
  let styleGeneral = '';

  let localColumns;

  const unsubscribe = columnsStore.subscribe(value => (localColumns = value));

  $: {
    classGeneral = container ? 'container' : `col ${createClassSize()}`;

    if (container) {
      styleGeneral = createGutter();
      columnsStore.update(() => columns);
    } else {
      styleGeneral = createStyleSize();

      if (xs || sm || md || lg || xl) {
        styleGeneral += `--colFlexSGR:0;`;
      } else {
        styleGeneral = `--colFlexSGR:1;`;
      }
    }
  }

  const getValue = breakpoint => {
    if (breakpoint > localColumns) {
      breakpoint = localColumns;
    }

    return breakpoint ? `${(breakpoint / localColumns) * 100}%` : false;
  };

  const createClassSize = () => {
    let newClass = 'col-xs ';

    newClass += sm ? 'col-sm ' : '';
    newClass += md ? 'col-md ' : '';
    newClass += lg ? 'col-lg ' : '';
    newClass += xl ? 'col-xl ' : '';

    return newClass;
  };

  const createStyleSize = () => {
    let newStyle = '';

    newStyle += xs ? `--xsWidthSGR:${getValue(xs)}; ` : `--xsWidthSGR:100%; `;
    newStyle += sm ? `--smWidthSGR:${getValue(sm)}; ` : '';
    newStyle += md ? `--mdWidthSGR:${getValue(md)}; ` : '';
    newStyle += lg ? `--lgWidthSGR:${getValue(lg)}; ` : '';
    newStyle += xl ? `--xlWidthSGR:${getValue(xl)}; ` : '';

    return newStyle;
  };

  const createGutter = () => {
    return gutter
      ? `--paddingSGR:${gutter / 2}px;--marginSGR:-${gutter / 2}px`
      : '--paddingSGR:0;--marginSGR:0';
  };

  onDestroy(() => unsubscribe());
</script>

<style>
  .container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + (var(--paddingSGR) * 2));
    margin: var(--marginSGR);
  }

  .col {
    position: relative;
    box-sizing: border-box;
    flex-grow: var(--colFlexSGR);
    padding: var(--paddingSGR);
  }
  .col-xs {
    flex-basis: var(--xsWidthSGR);
    max-width: var(--xsWidthSGR);
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: var(--smWidthSGR);
      max-width: var(--smWidthSGR);
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: var(--mdWidthSGR);
      max-width: var(--mdWidthSGR);
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: var(--lgWidthSGR);
      max-width: var(--lgWidthSGR);
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      max-width: var(--xlWidthSGR);
    }
  }
</style>

<div style={styleGeneral} class={classGeneral}>
  <slot />
</div>
