<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Grid from '../../lib/Grid.svelte';

  $: code = `
  <script>
    import Grid from 'svelte-grid-responsive';
  <\/script>
    
  <Grid container gutter={12}>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} lg={6}>xs=12 lg=6</Grid>
    <Grid xs={12} lg={6}>xs=12 lg=6</Grid>
    <Grid lg={4}>lg=4</Grid>
    <Grid lg={4}>lg=4</Grid>
    <Grid lg={4}>lg=4</Grid>
  </Grid>
  
`;
</script>

<main>
  <h2>Specifying sizes</h2>
  <div class="card">
    <Grid container gutter={12}>
      <Grid xs={12} md={4} lg={3}>
        <div class="col">xs=12 md=4 lg=3</div>
      </Grid>
      <Grid xs={12} md={4} lg={3}>
        <div class="col">xs=12 md=4 lg=3</div>
      </Grid>
      <Grid xs={12} md={4} lg={3}>
        <div class="col">xs=12 md=4 lg=3</div>
      </Grid>
      <Grid xs={12} md={4} lg={3}>
        <div class="col">xs=12 md=4 lg=3</div>
      </Grid>
      <Grid xs={12} lg={6}>
        <div class="col">xs=12 lg=6</div>
      </Grid>
      <Grid xs={12} lg={6}>
        <div class="col">xs=12 lg=6</div>
      </Grid>
      <Grid lg={4}>
        <div class="col">lg=4</div>
      </Grid>
      <Grid lg={4}>
        <div class="col">lg=4</div>
      </Grid>
      <Grid lg={4}>
        <div class="col">lg=4</div>
      </Grid>
    </Grid>
  </div>
  <HighlightSvelte {code} />
</main>
