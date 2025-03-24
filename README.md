# @will-stone/eslint-config

My personal [ESLint](https://eslint.org/) config.

## Usage

### Install

```bash
npm i -D eslint @will-stone/eslint-config
```

### Optional Peer Dependencies

If you are using any of the following packages, you will also need to install
the corresponding plugin.

| Package       | Plugin                                          |
| ------------- | ----------------------------------------------- |
| `astro`       | `astro-eslint-parser eslint-plugin-astro`       |
| `jest`        | `eslint-plugin-jest`                            |
| `react`       | `eslint-plugin-react eslint-plugin-react-hooks` |
| `tailwindcss` | `eslint-plugin-tailwindcss`                     |
| `vitest`      | `@vitest/eslint-plugin`                         |

### Create config file

```js
// eslint.config.js
import config from '@will-stone/eslint-config'

export default config()
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Lint Staged

If you would like to apply lint and auto-fix before every commit, you can add
the following to your `package.json`:

```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"]
  }
}
```

and then

```bash
npm i -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx --no lint-staged"
```

## Credits

Inspired by the excellent
[Flat eslint-config](https://github.com/antfu/eslint-config) by
[Anthony Fu](https://github.com/antfu).
