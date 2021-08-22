<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Grid from '../../lib/Grid.svelte';

  $: code = `
  <script>
    import Grid from 'svelte-grid-responsive';
  <\/script>
      
  <Grid container gutter={12} columns={10}>
    <Grid xs={10} md={5} lg={2}>xs=10 md=5 lg=2</Grid>
    <Grid xs={10} md={5} lg={2}>xs=10 md=5 lg=2</Grid>
    <Grid xs={10} md={5} lg={2}>xs=10 md=5 lg=2</Grid>
    <Grid xs={10} md={5} lg={2}>xs=10 md=5 lg=2</Grid>
    <Grid xs={10} md={5} lg={2}>xs=10 md=5 lg=2</Grid>
    <Grid xs={10} lg={3}>xs=10 lg=3</Grid>
    <Grid xs={10} lg={4}>xs=10 lg=4</Grid>
    <Grid xs={10} lg={3}>xs=10 lg=3</Grid>
  </Grid>
    
`;
</script>

<main>
  <h2>Setting columns count</h2>
  <div class="card">
    <Grid container gutter={12} columns={10}>
      <Grid xs={10} md={5} lg={2}>
        <div class="col">xs=10 md=5 lg=2</div>
      </Grid>
      <Grid xs={10} md={5} lg={2}>
        <div class="col">xs=10 md=5 lg=2</div>
      </Grid>
      <Grid xs={10} md={5} lg={2}>
        <div class="col">xs=10 md=5 lg=2</div>
      </Grid>
      <Grid xs={10} md={5} lg={2}>
        <div class="col">xs=10 md=5 lg=2</div>
      </Grid>
      <Grid xs={10} md={5} lg={2}>
        <div class="col">xs=10 md=5 lg=2</div>
      </Grid>
      <Grid xs={10} lg={3}>
        <div class="col">xs=10 lg=3</div>
      </Grid>
      <Grid xs={10} lg={4}>
        <div class="col">xs=10 lg=4</div>
      </Grid>
      <Grid xs={10} lg={3}>
        <div class="col">xs=10 lg=3</div>
      </Grid>
    </Grid>
  </div>
  <HighlightSvelte {code} />
</main>
