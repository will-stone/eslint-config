# @will-stone/eslint-config

## Usage

### Install

```bash
npm i -D eslint @will-stone/eslint-config
```

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

### VS Code support (auto fix)

Install
[VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true
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
    "*.{js,jsx,ts,tsx}": ["eslint --fix"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```

and then

```bash
npm i -D husky lint-staged
```

## Credits

Inspired by the excellent
[Flat eslint-config](https://github.com/antfu/eslint-config) by
[Anthony Fu](https://github.com/antfu).
