<script>
  export let container = false;
  export let gutter = 0;
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
    styleGeneral = createStyleSize();
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

    newStyle += xs ? `--xsWidth:${getValue(xs)}; ` : "";
    newStyle += sm ? `--smWidth:${getValue(sm)}; ` : "";
    newStyle += md ? `--mdWidth:${getValue(md)}; ` : "";
    newStyle += lg ? `--lgWidth:${getValue(lg)}; ` : "";
    newStyle += xl ? `--xlWidth:${getValue(xl)}; ` : "";

    return newStyle;
  };
</script>

<style>
  .container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .col {
    position: relative;
  }
  .col-xs {
    flex-basis: var(--xsWidth);
    max-width: var(--xsWidth);
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: var(--smWidth);
      max-width: var(--smWidth);
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: var(--mdWidth);
      max-width: var(--mdWidth);
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: var(--lgWidth);
      max-width: var(--lgWidth);
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      max-width: var(--xlWidth);
    }
  }
</style>

<div style={styleGeneral} class={classGeneral}>
  <slot />
</div>
