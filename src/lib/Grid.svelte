<script>
  export let container;
  export let xs;
  export let sm;
  export let md;
  export let lg;
  export let xl;

  let classGeneral = "";
  let styleGeneral = "";
  let spacing = 10;

  $: {
    console.log("entrou");
    classGeneral = createClass();
    styleGeneral = createStyle();
  }

  const getValue = breakpoint => {
    return breakpoint ? `${(breakpoint / 12) * 100}%` : false;
  };

  const createClass = () => {
    let newClass = "";

    newClass += xs ? "col-xs " : "";
    newClass += sm ? "col-sm " : "";
    newClass += md ? "col-md " : "";
    newClass += lg ? "col-lg " : "";
    newClass += xl ? "col-xl " : "";
    console.log(newClass);
    return newClass;
  };

  const createStyle = () => {
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
  .col-xs {
    max-width: var(--xsWidth);
  }
  .col-sm {
    max-width: var(--smWidth);
  }
  .col-md {
    max-width: var(--mdWidth);
  }
  .col-lg {
    max-width: var(--lgWidth);
  }
  .col-xl {
    max-width: var(--xlWidth);
  }
</style>

<div style={styleGeneral} class={classGeneral}>
  <slot />
</div>
