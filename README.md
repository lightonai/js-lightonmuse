# <img src="https://muse.lighton.ai/img/logo.ed57408e.png" width=60/> LightOn Muse JS Bindings

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Twitter](https://img.shields.io/twitter/follow/LightOnIO?style=social)](https://twitter.com/LightOnIO)

JavaScript bindings for the Muse API: production-ready intelligence primitives powered by state-of-the-art language models. By LightOn.

> Create. Process. Understand. Learn.

Uplift your product with the natural language generation & understanding capabilities of Muse. State-of-the-art large language models in French, English, Italian, and Spanish—with more to come—are just an API call away. Our models can help you build conversational AI, copywriting tools, text classifiers, semantic search, and more.

> 🛣️ Accessing the Muse API public beta
>
> The Muse API is currently in public beta. Learn more about Muse and sign up at [muse.lighton.ai](https://muse.lighton.ai/).

## Installation and documentation

To add the Muse API client to your project, run one of the following commands:

```bash
yarn add lighton-muse
```

or

```bash
npm install lighton-muse
```

The library documentation is available at [lightonai.github.io/js-lightonmuse/](https://lightonai.github.io/js-lightonmuse/).
Guides and documentation can be found at the [API docs website](https://muse-docs.lighton.ai).

## Examples

You can find more examples in the [repository](https://github.com/lightonai/lightonmuse/blob/master/examples/)

```bash
yarn build-examples
# and then
node examples/<example-name>.js
```

## Quickstart

Using `lighton-muse` is pretty simple, the interface matches the endpoints offered by the Muse API. The whole API is typed.

You can initialize the client with your token.

```js
import { MuseRequest, ApiModel, Endpoint } from 'lighton-muse';

const client = new MuseRequest('<your-api-key>');
// or
const client = new MuseRequest('API_KEY', 'Your own API base URL');
```

### Create

```js
let { error, response } = client.query(ApiModel.OrionFr, Endpoint.Create, {
	text: 'Hello, world!',
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

### Select

```js
let { error, response } = client.query(ApiModel.OrionFr, Endpoint.Select, {
	reference: 'Quel nom est correct ?',
	candidates: ['pain au chocolat', 'chocolatine'],
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

### Analyse

```js
let { error, response } = client.query(ApiModel.OrionFr, Endpoint.Analyse, {
	text: "Avec `Analyse` on peut toujours trouver les parties plus surprenantes d'une phrase.",
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

### Embed

```js
let { error, response } = client.query(ApiModel.LyraEn, Endpoint.Embed, {
	text: 'This sentence will be transformed in a nice matrix of numbers.',
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

### Compare

```js
let { error, response } = client.query(ApiModel.LyraEn, Endpoint.Compare, {
	reference: 'This is the reference.',
	candidates: [
		'This is close to the reference',
		'While this is most definitely not',
	],
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

### Tokenize

```js
let { error, response } = client.query(ApiModel.LyraEn, Endpoint.Tokenize, {
	text: "Let's discover how many tokens is this text",
});

if (error) {
	console.error(error);
} else {
	console.log(response);
}
```

## Access to LightOn Muse

Access the public beta of LightOn Muse and try our intelligence primitives at [muse.lighton.ai](https://muse.lighton.ai/)
