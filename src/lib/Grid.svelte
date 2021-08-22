<script lang="ts">
  import { onDestroy } from 'svelte';
  import { columnsStore } from './stores.js';

  type GridSizeType = number | false | null;

  export let container: boolean = false;
  export let columns: number = 12;
  export let gutter: GridSizeType = false;
  export let xs: GridSizeType = false;
  export let sm: GridSizeType = false;
  export let md: GridSizeType = false;
  export let lg: GridSizeType = false;
  export let xl: GridSizeType = false;
  export let order: number | false | null = false;

  let classGeneral: string = '';
  let styleGeneral: string = '';

  let localColumns: number;

  const unsubscribe = columnsStore.subscribe((value) => (localColumns = value));

  $: {
    classGeneral = container ? 'containerSGR' : `colSGR ${createClassSize()}`;

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

      if (order || order === 0) {
        styleGeneral += `--orderSGR:${order};`;
      }
    }
  }

  const getValue = (breakpoint: number) => {
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
      : '--paddingSGR:0px;--marginSGR:0px';
  };

  onDestroy(() => unsubscribe());
</script>

<div style={styleGeneral} class={classGeneral}>
  <slot />
</div>

<style>
  .containerSGR {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + (var(--paddingSGR) * 2));
    margin: var(--marginSGR);
  }

  .colSGR {
    position: relative;
    box-sizing: border-box;
    flex-grow: var(--colFlexSGR);
    padding: var(--paddingSGR);
    order: var(--orderSGR);
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
