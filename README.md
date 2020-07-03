# @diegoh/api-middleware-content-type-json

![Build](https://github.com/diegoh/api-middleware-content-type-json/workflows/Build/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Package Version](https://img.shields.io/npm/v/@diegoh/api-middleware-content-type-json)

Koa middleware that sets the content type of the response to `application/json`.

## Usage

### Example

```js
const Koa = require('koa');
const setContentTypeJson = require('@diegoh/api-middleware-content-type-json');

const app = new Koa();
app.use(setContentTypeJson());
```

## Development

1. Create a new branch from `master` with a name relevant to the changes you're making. `git branch -b my-new-feature-description`
2. Push the branch and open a Pull Request (PR).
3. Request a code review.

### Unit Tests

`npm run test:unit`

### Coverage

`npm run test:coverage`

### Lint

`npm run lint` or `npm run lint:fix` to automatically fix any linting issues.
