# @will-stone/eslint-config

## 0.14.0

### Minor Changes

- da546f1: Support `unicorn/no-unnecessary-polyfills`.
- da546f1: Support `@typescript-eslint/no-useless-template-literals`.

## 0.13.0

### Minor Changes

- 9dfa9a6: Time to go all ESM: turned on `unicorn/prefer-module` rule.

## 0.12.2

### Patch Changes

- e1c73a4: Fixed Tailwind rules not loading.

## 0.12.1

### Patch Changes

- 4da29fd: Turn off all (but one) TS type rules, for now.

## 0.12.0

### Minor Changes

- a40badd: Turn off very noisy TS rule: no-unsafe-return.

## 0.11.0

### Minor Changes

- 6e05d23: Turn off very noisy TS rule: prefer-readonly-parameter-types.

## 0.10.0

### Minor Changes

- 4ef025f: Enabled type-aware TS rules by using the `tsconfigPath` option.
- 4ef025f: Allow nested ternaries to be compatible with Prettier 3.1.

## 0.9.0

### Minor Changes

- 5db2c75: Stop preventing abbreviations.

## 0.8.1

### Patch Changes

- e80a716: Support and turn off @typescript-eslint/max-params rule.

## 0.8.0

### Minor Changes

- c739a74: Report unused eslint-disable/enables.

### Patch Changes

- a22b7f3: Support (as off) `@typescript-eslint/prefer-destructuring`.

## 0.7.4

### Patch Changes

- c3bfc0a: Fixed not working as CJS against TS files.

## 0.7.3

### Patch Changes

- Fixed CJS default export (maybe for real this time).

## 0.7.2

### Patch Changes

- 1803a9f: Fix commonJS default import.

## 0.7.1

### Patch Changes

- 8028cc6: Fixed (hopefully) not working with CJS environments.

## 0.7.0

### Minor Changes

- 6bcfc6f: `no-object-constructor` error.
- c2daa78: Turn off `class-methods-use-this` ruke, which can quite often be not
  be required.

## 0.6.0

### Minor Changes

- 0ae33b7: Do not lint Next.js build artefacts.

## 0.5.1

### Patch Changes

- 8c325f3: Fixed missing node globals.

## 0.5.0

### Minor Changes

- 5891e9c: No changes (hopefully). Migrated from old will-stone/dx repo to this
  standalone one, whilst converting to TS and exporing both ESM and CJS
  versions.

## 0.4.0

### Minor Changes

- 12d89b6: Ignore files using gitignore.

### Patch Changes

- 9a4fc4b: Internal refactor to use parsers in a consistent manner.

## 0.3.0

### Minor Changes

- 7c6172a: Added full support for Astro's recommended rules.

## 0.2.1

### Patch Changes

- 5ee5299: Fixed support for Tailwind in Astro files.

## 0.2.0

### Minor Changes

- 9be0e9d: Added support for ignoring Next.Js build folder.

## 0.1.0

### Minor Changes

- de8854e: Added support for Tailwind rules.

## 0.0.10

### Patch Changes

- 17e3de3: Fixed global ignore patterns (for real this time).

## 0.0.9

### Patch Changes

- 0a0a1fd: Fixed build file ignore pattern.

## 0.0.8

### Patch Changes

- 25101d4: Ignore some common build folders.

## 0.0.7

### Patch Changes

- 3882d03: Fixed not finding mock files.

## 0.0.6

### Patch Changes

- 1ab951c: Fixed `jest` global not available in mocks.

## 0.0.5

### Patch Changes

- 4f97233: Fixed requiring use-strict in files that don't need it.

## 0.0.4

### Patch Changes

- Fixed no browser globals available. Puting these in all files for now, but
  maybe should be based on something else?

## 0.0.3

### Patch Changes

- fd613ec: Fixed cannot find TS plugin.

## 0.0.2

### Patch Changes

- e49eee7: Fixed TS parser not loading.

## 0.0.1

### Patch Changes

- 40e33d5: Initial release.
