# @diegoh/template-nodejs

![](https://github.com/diegoh/template-nodejs/workflows/Test/badge.svg) ![](https://github.com/diegoh/template-nodejs/workflows/Security/badge.svg) ![](https://github.com/diegoh/template-nodejs/workflows/Publish/badge.svg)

## Usage

### Example

```js
// Add description
```

## Development

1. Create a new branch from `master` with a name relevant to the changes you're making. `git branch -b my-new-feature-description`
2. Push the branch and open a Pull Request (PR).
3. Request a code review.
4. **Squash merge** your commits and keep things tidy.

### Unit Tests

`npm run test:unit`

### Coverage

`npm run test:coverage`

### Lint

`npm run lint` or `npm run lint-fix` to automatically fix any linting issues.

### CI/CD

This project uses GitHub actions for CI/CD.
The following secrets are required to publish this package.

- `NPM_TOKEN`
