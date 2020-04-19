<script>
  import Grid from "../lib/Grid.svelte";
</script>

<style>
  main {
    padding: 38px;
    box-sizing: border-box;
    color: #263238;
  }

  div {
    width: 100%;
  }
  .card {
    display: flex;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    background-color: white;
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 38px;
  }
  .col {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #cfd8dc;
    color: #263238;
    border: 1px solid #263238;
    text-align: center;
    font-size: 14pt;
  }
</style>

<main>
  <h1>Svelte Grid Responsive</h1>
  <div class="card">
    <div>
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
  </div>
  <div class="card">
    <div>
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
  </div>
</main>
