<script>
  export let container = false;
  export let gutter = false;
  export let xs = false;
  export let sm = false;
  export let md = false;
  export let lg = false;
  export let xl = false;

  let classGeneral = "";
  let styleGeneral = "";
  let spacing = 10;

  $: {
    classGeneral = container ? "container" : `col ${createClassSize()}`;
    if (container) {
      styleGeneral = createGutter();
    } else {
      styleGeneral = createStyleSize();

      if (styleGeneral) {
        styleGeneral += `--colFlexSGR:0;`;
      } else {
        styleGeneral = `--colFlexSGR:1;`;
      }
    }
  }

  const getValue = breakpoint => {
    return breakpoint ? `${(breakpoint / 12) * 100}%` : false;
  };

  const createClassSize = () => {
    let newClass = "";

    newClass += xs ? "col-xs " : "";
    newClass += sm ? "col-sm " : "";
    newClass += md ? "col-md " : "";
    newClass += lg ? "col-lg " : "";
    newClass += xl ? "col-xl " : "";

    return newClass;
  };

  const createStyleSize = () => {
    let newStyle = "";

    newStyle += xs ? `--xsWidthSGR:${getValue(xs)}; ` : "";
    newStyle += sm ? `--smWidthSGR:${getValue(sm)}; ` : "";
    newStyle += md ? `--mdWidthSGR:${getValue(md)}; ` : "";
    newStyle += lg ? `--lgWidthSGR:${getValue(lg)}; ` : "";
    newStyle += xl ? `--xlWidthSGR:${getValue(xl)}; ` : "";

    return newStyle;
  };

  const createGutter = () => {
    return gutter
      ? `--paddingSGR:${gutter / 2}px;--marginSGR:-${gutter / 2}px`
      : "--paddingSGR:0;--marginSGR:0";
  };
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
