# Changelog

## [8.0.7](https://github.com/will-stone/eslint-config/compare/v8.0.5...v8.0.7) (2024-05-09)

### Patches

- Dummy commit to test release
  ([c6492fc](https://github.com/will-stone/eslint-config/commit/c6492fc0a51cb35131ba4a620d9fdd36c0f832dd))
- Automate release
  ([b898fc0](https://github.com/will-stone/eslint-config/commit/b898fc01e000b77f5538808c01f77f640004346c))

## [8.0.4](https://github.com/will-stone/eslint-config/compare/v8.0.3...v8.0.4) (2024-04-28)

### Patches

- Run hooks and check using dummy release commit
  ([cf7736e](https://github.com/will-stone/eslint-config/commit/cf7736e8d1838334602ee8adf000b09801aebea4))

## [8.0.3](https://github.com/will-stone/eslint-config/compare/v8.0.2...v8.0.3) (2024-04-28)

### Patches

- Upgrade deps
  ([5ccdbe2](https://github.com/will-stone/eslint-config/commit/5ccdbe29cc5cfdde830cd4f49470d129cba02a0d))

## 8.0.2

### Patch Changes

- fba1aa0: Upgrade deps.

## 8.0.1

### Patch Changes

- 9222b00: Remove deprecated `jest/no-if` rule.

## 8.0.0

### Major Changes

- 44b0164: Stopped supporting Prettier from ESLint as it's slower than running
  Prettier directly:
  https://prettier.io/docs/en/integrating-with-linters.html#notes
- 44b0164: Removed unsupported `eslint-plugin-switch-case` plugin.

### Minor Changes

- 3a607fd: Add support for `n/prefer-node-protocol`.

## 7.2.1

### Patch Changes

- 3e7f7a4: Removed deprecated rule.

## 7.2.0

### Minor Changes

- 447a526: Added support for `astro/missing-client-only-directive-value=error`,
  and `@typescript-eslint/only-throw-error=off`.

## 7.1.0

### Minor Changes

- f176446: Added support for
  "@typescript-eslint/use-unknown-in-catch-callback-variable" (off).

## 7.0.0

Why the massive jump in versions? I originally had an npm package published
under the same name. It was deprecated but npm doesn't allow for overwriting
versions. The last major of that old config was v6, so going with v7 so I can
start again.

### Major Changes

- 7d73d56: Release first stable version. Updated all configs and deps, adding
  support for new rules, such as `react/checked-requires-onchange-or-readonly`.

## 0.15.0

### Minor Changes

- 05330fb: Turn off deprecated stylistic rules.

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
