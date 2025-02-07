# jest-preset-preact

Jest preset containing all required configuration for writing tests for [preact](https://github.com/preactjs/preact).

Features:

- Transpiles JSX to `h()`
- Aliases for `"react"` imports to point to `preact/compat`
- Automatically serialize Preact `VNodes` in snapshots
- Stub style imports (`.css`, `.less`, `.sass/scss`, etc)
- Add typeahead preview for filtering in jest's watch mode

## Usage

Install it via npm or yarn:

```bash
npm install --save-dev jest-preset-preact
# or via yarn
yarn add -D jest-preset-preact
```

...and add the preset to your `jest.config.js` file.

```js
// jest.config.js
module.exports = {
	preset: 'jest-preset-preact',
};
```

## License

MIT, see [the LICENSE file](./LICENSE).
