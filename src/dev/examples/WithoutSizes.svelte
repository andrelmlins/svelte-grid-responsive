<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Grid from '../../lib/Grid.svelte';

  $: code = `
  <script>
    import Grid from 'svelte-grid-responsive';
  <\/script>
  
  <Grid container gutter={12}>
    <Grid>col</Grid>
    <Grid>col</Grid>
    <Grid>col</Grid>
  </Grid>
  <Grid container gutter={12}>
    <Grid>col</Grid>
    <Grid>col</Grid>
    <Grid>col</Grid>
    <Grid>col</Grid>
    <Grid>col</Grid>
  </Grid>

`;
</script>

<main>
  <h2>Without define sizes</h2>
  <div class="card">
    <Grid container gutter={12}>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
    </Grid>
    <Grid container gutter={12}>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
      <Grid>
        <div class="col">col</div>
      </Grid>
    </Grid>
  </div>
  <HighlightSvelte {code} />
</main>
