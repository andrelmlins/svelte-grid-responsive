<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Grid from '../../lib/Grid.svelte';

  $: code = `
  <script>
    import Grid from 'svelte-grid-responsive';
  <\/script>
          
  <Grid container gutter={50}>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
    <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
  </Grid>
        
`;
</script>

<main>
  <h2>Changing gutter</h2>
  <div class="card">
    <Grid container gutter={50}>
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
    </Grid>
  </div>
  <HighlightSvelte {code} />
</main>
