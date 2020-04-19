# Svelte Grid Responsive

[![npm version](https://badge.fury.io/js/svelte-grid-responsive.svg)](https://www.npmjs.com/package/svelte-grid-responsive) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-grid-responsive/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-grid-responsive.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-grid-responsive) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/5697d9ca-6dcc-4839-99d1-fd0aca0e852c/deploy-status)](https://app.netlify.com/sites/svelte-grid-responsive/deploys)

Responsive grid system based on Bootstrap for Svelte.

## Installation

```
npm i svelte-grid-responsive
// OR
yarn add svelte-grid-responsive
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-grid-responsive.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-grid-responsive.git
cd svelte-grid-responsive
yarn && yarn start
```

## Examples

An example of how to use the library:

```js
<script>
  import Grid from "svelte-grid-responsive";
</script>

<Grid container gutter={12}>
  <Grid xs={12} md={4} lg={3}>
    xs=12 md=4 lg=3
  </Grid>
  <Grid xs={12} md={4} lg={3}>
    xs=12 md=4 lg=3
  </Grid>
  <Grid xs={12} md={4} lg={3}>
    xs=12 md=4 lg=3
  </Grid>
  <Grid xs={12} md={4} lg={3}>
    xs=12 md=4 lg=3
  </Grid>
</Grid>
```

## Properties

Component props:

| Prop      | Default | Type   | Description                             |
| --------- | ------- | ------ | --------------------------------------- |
| container | false   | bool   | Defines whether the grid is a container |
| gutter    | false   | number | Grid spacing in the container           |
| xs        | false   | number | Size in extra small screen              |
| sm        | false   | number | Size in small screen                    |
| md        | false   | number | Size in medium screen                   |
| lg        | false   | number | Size in large screen                    |
| xl        | false   | number | Size in extra large screen              |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-grid-responsive.png)](https://nodei.co/npm/svelte-grid-responsive/)

## License

Svelte Grid Responsive is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-grid-responsive/blob/master/LICENSE).
