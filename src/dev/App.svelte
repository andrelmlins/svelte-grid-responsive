<script lang="ts">
  import theme from 'svelte-highlight/src/styles/dracula.js';
  import Grid from '../lib/Grid.svelte';
  import WithoutSizes from './examples/WithoutSizes.svelte';
  import SpecifyingSizes from './examples/SpecifyingSizes.svelte';
  import SettingColumnsCount from './examples/SettingColumnsCount.svelte';
  import ColumnOrdering from './examples/ColumnOrdering.svelte';
  import ChangingGutter from './examples/ChangingGutter.svelte';
</script>

<svelte:head>
  {@html theme}
</svelte:head>

<main>
  <h1>Svelte Grid Responsive</h1>
  <h3>Responsive grid system based on Bootstrap for Svelte</h3>
  <br />
  <WithoutSizes />
  <SpecifyingSizes />
  <SettingColumnsCount />
  <ColumnOrdering />
  <ChangingGutter />
</main>

<style>
  main {
    padding: 38px;
    box-sizing: border-box;
    color: #263238;
  }

  h1 {
    margin-top: 0;
  }

  :global(.card) {
    display: block;
    border-radius: 4px 4px 0px 0px;
    background-color: white;
    box-sizing: border-box;
    padding: 24px;
  }

  :global(.card) > div {
    width: 100%;
  }

  :global(.col) {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #cfd8dc;
    color: #263238;
    border: 1px solid #263238;
    text-align: center;
    font-size: 14pt;
  }

  :global(pre) {
    margin-top: 0;
    margin-bottom: 38px;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
</style>
