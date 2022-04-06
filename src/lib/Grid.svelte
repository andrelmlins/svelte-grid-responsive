<script lang="ts">
  import { onDestroy } from 'svelte';
  import { columnsStore } from './stores.js';

  export let container: boolean | undefined = false;
  export let columns: number | undefined = 12;
  export let gutter: number | null = null;
  export let order: number | null = null;
  export let xs: number | null = null;
  export let sm: number | null = null;
  export let md: number | null = null;
  export let lg: number | null = null;
  export let xl: number | null = null;
  export let xsOffset: number | null = null;
  export let smOffset: number | null = null;
  export let mdOffset: number | null = null;
  export let lgOffset: number | null = null;
  export let xlOffset: number | null = null;

  let classGeneral: string = '';
  let styleGeneral: string = '';

  let localColumns: number;

  const unsubscribe = columnsStore.subscribe((value) => (localColumns = value));

  $: {
    classGeneral = container ? 'containerSGR' : `colSGR ${createClassSize()}`;

    if (container) {
      styleGeneral = createGutter();
      columnsStore.update(() => columns || 12);
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

    if ($$restProps.style) {
      styleGeneral += $$restProps.style;
    }

    if ($$restProps.class) {
      classGeneral += ` ${$$restProps.class}`;
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

    newClass += xsOffset ? 'colSGR-offset-xs ' : '';
    newClass += smOffset ? 'colSGR-offset-sm ' : '';
    newClass += mdOffset ? 'colSGR-offset-md ' : '';
    newClass += lgOffset ? 'colSGR-offset-lg ' : '';
    newClass += xlOffset ? 'colSGR-offset-xl ' : '';

    return newClass;
  };

  const createStyleSize = () => {
    let newStyle = '';

    newStyle += xs ? `--xsWidthSGR:${getValue(xs)}; ` : `--xsWidthSGR:100%; `;
    newStyle += sm ? `--smWidthSGR:${getValue(sm)}; ` : '';
    newStyle += md ? `--mdWidthSGR:${getValue(md)}; ` : '';
    newStyle += lg ? `--lgWidthSGR:${getValue(lg)}; ` : '';
    newStyle += xl ? `--xlWidthSGR:${getValue(xl)}; ` : '';

    newStyle += xsOffset ? `--xsOffset:${getValue(xsOffset)}; ` : '';
    newStyle += smOffset ? `--smOffset:${getValue(smOffset)}; ` : '';
    newStyle += mdOffset ? `--mdOffset:${getValue(mdOffset)}; ` : '';
    newStyle += lgOffset ? `--lgOffset:${getValue(lgOffset)}; ` : '';
    newStyle += xlOffset ? `--xlOffset:${getValue(xlOffset)}; ` : '';

    return newStyle;
  };

  const createGutter = () => {
    return gutter
      ? `--paddingSGR:${gutter / 2}px;--marginSGR:-${gutter / 2}px;`
      : '--paddingSGR:0px;--marginSGR:0px;';
  };

  onDestroy(() => unsubscribe());
</script>

<div {...$$restProps} style={styleGeneral} class={classGeneral}>
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

  .colSGR-offset-xs {
    margin-left: var(--xsOffset);
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
    .colSGR-offset-sm {
      margin-left: var(--smOffset);
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: var(--mdWidthSGR);
      max-width: var(--mdWidthSGR);
    }
    .colSGR-offset-md {
      margin-left: var(--mdOffset);
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: var(--lgWidthSGR);
      max-width: var(--lgWidthSGR);
    }
    .colSGR-offset-lg {
      margin-left: var(--lgOffset);
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      max-width: var(--xlWidthSGR);
    }
    .colSGR-offset-xl {
      margin-left: var(--xlOffset);
    }
  }
</style>
