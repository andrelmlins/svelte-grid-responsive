<script>
  import Grid from "../lib/Grid.svelte";
</script>

<style>
  main {
    padding: 38px;
    box-sizing: border-box;
    color: #263238;
  }

  h1 {
    margin-top: 0;
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
  <h1>
    Svelte Grid Responsive
    <small>(Responsive grid system based on Bootstrap for Svelte)</small>
  </h1>
  <br />
  <h2>Without define sizes</h2>
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
</main>
