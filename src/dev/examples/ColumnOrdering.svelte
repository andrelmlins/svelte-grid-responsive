<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import Grid from '../../lib/Grid.svelte';

  $: code = `
  <script>
    import Grid from 'svelte-grid-responsive';
  <\/script>
        
  <Grid container gutter={12}>
    <Grid xs={12} lg={4} order={2}>First, but second</Grid>
    <Grid xs={12} lg={4} order={3}>Second, but last</Grid>
    <Grid xs={12} lg={4}>Third, but unordered</Grid>
  </Grid>
      
`;
</script>

<main>
  <h2>Column ordering</h2>
  <div class="card">
    <Grid container gutter={12}>
      <Grid xs={12} lg={4} order={2}>
        <div class="col">First, but second</div>
      </Grid>
      <Grid xs={12} lg={4} order={3}>
        <div class="col">Second, but last</div>
      </Grid>
      <Grid xs={12} lg={4}>
        <div class="col">Third, but unordered</div>
      </Grid>
    </Grid>
  </div>
  <HighlightSvelte {code} />
</main>
