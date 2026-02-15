# Changelog

## [25.0.0](https://github.com/will-stone/eslint-config/compare/v24.0.0...v25.0.0) (2026-02-15)

### Major changes

- Sort JSX props using Perfectionist
  ([b7712b2](https://github.com/will-stone/eslint-config/commit/b7712b2bafb953585aed1d27469dfbd8a567e662))

## [24.0.0](https://github.com/will-stone/eslint-config/compare/v23.0.0...v24.0.0) (2026-02-15)

### Major changes

- Upgrade Perfectionist and support new rules
  ([5a30efe](https://github.com/will-stone/eslint-config/commit/5a30efed59cc32da9b6df97194396ebb75130695))
- Upgrade package-json and support new rules
  ([aa9ca65](https://github.com/will-stone/eslint-config/commit/aa9ca65d89dc9e07554349c01951cc388b23fd2d))
- Upgrade unicorn and support new rules
  ([29b7435](https://github.com/will-stone/eslint-config/commit/29b7435d2b5dbcff1caea49c5e160029b2250085))
- Upgrade package.json and remove deprecated rule
  ([1d7de7f](https://github.com/will-stone/eslint-config/commit/1d7de7fc6af2d23fab1dbae2c02b969dcdc217a8))
- Upgrade Perfectionist and migrate customGroups
  ([696ece7](https://github.com/will-stone/eslint-config/commit/696ece73d7bba79ab138c4bc8327ce8e16ed0307))

### Patches

- Upgrade astro deps
  ([253fd23](https://github.com/will-stone/eslint-config/commit/253fd23c75e539bc7ab80c04625434c4f471fa29))

## [23.0.0](https://github.com/will-stone/eslint-config/compare/v22.0.0...v23.0.0) (2026-02-10)

### Major changes

- Upgrade react-hooks and support recommended-latest
  ([2a563f8](https://github.com/will-stone/eslint-config/commit/2a563f8ba63ae5c45fe7b2a0e7ceec6cf6ba2957))
- Upgrade jsdoc and support new rules
  ([16eba75](https://github.com/will-stone/eslint-config/commit/16eba755e8e4d0c3717533c21e16d507f9b32cb9))

### Patches

- Turn off new stylistic rule
  ([fc134f9](https://github.com/will-stone/eslint-config/commit/fc134f9a65497635610fde981e9fc7a6b51ea52e))
- Upgrade deps within SemVer
  ([de90c5a](https://github.com/will-stone/eslint-config/commit/de90c5a2e32a86e55cf1e874e50c5efebca22ee1))

## [22.0.0](https://github.com/will-stone/eslint-config/compare/v21.4.0...v22.0.0) (2026-02-09)

### Major changes

- Begin supporting type aware linting
  ([a30e2a9](https://github.com/will-stone/eslint-config/commit/a30e2a997a877270b855577605714c607f441684))
- Support more Vitest rules
  ([8cb1c7b](https://github.com/will-stone/eslint-config/commit/8cb1c7bd2035de343531a2f61dfca481d97e1a3c))
- Support and turn on astro/no-unsafe-inline-scripts
  ([d50a3f1](https://github.com/will-stone/eslint-config/commit/d50a3f1a10f630630fe75140af0fef1e67df4e4f))
- Support more TS rules
  ([f41622d](https://github.com/will-stone/eslint-config/commit/f41622dfa5f0099091073d7a505b50978056801b))

### Minor changes

- Change @stylistic/jsx-sort-props for perfectionist/sort-jsx-props
  ([4df00f2](https://github.com/will-stone/eslint-config/commit/4df00f234682e89a32d483c8f475dcddff81e0ab))

### Patches

- Support @stylistic/exp-list-style (off), not required with Prettier
  ([42f9ba9](https://github.com/will-stone/eslint-config/commit/42f9ba92c12409f7f6124366654747037cb7cae6))
- Fix not all eslint configs being automatically activated
  ([5d6b2ad](https://github.com/will-stone/eslint-config/commit/5d6b2ad9301c1bfed019908c2256a94a7eb1e664))
- Upgrade all deps
  ([5f41d9e](https://github.com/will-stone/eslint-config/commit/5f41d9e6aa8f7e6a4d4c75c27ef31a628a89e7da))

## [21.4.0](https://github.com/will-stone/eslint-config/compare/v21.3.0...v21.4.0) (2025-09-20)

### Minor changes

- Change debug logs to show when using `--debug` flag rather than using own env var
  ([392e220](https://github.com/will-stone/eslint-config/commit/392e220096cdba4c636fb89acda080efac9267e0))

## [21.3.0](https://github.com/will-stone/eslint-config/compare/v21.2.0...v21.3.0) (2025-09-20)

### Minor changes

- Add jsdoc/require-yields-description
  ([55ede9a](https://github.com/will-stone/eslint-config/commit/55ede9a5285549f116e297fee9deaa4e3bd97e04))
- Add jsdoc/require-throws-description
  ([27e9fdd](https://github.com/will-stone/eslint-config/commit/27e9fdd5302bfbb91126eae373406f321509e5d5))
- Add jsdoc/require-next-description
  ([525a150](https://github.com/will-stone/eslint-config/commit/525a1500bdb5097c0e480341637d8a31b51b8a39))
- Add jsdoc/reject-function-type
  ([5fddf97](https://github.com/will-stone/eslint-config/commit/5fddf974a3934910f8a4a6a766141217e2c010d6))
- Add jsdoc/reject-any-type
  ([a2e577f](https://github.com/will-stone/eslint-config/commit/a2e577fd57a3d9e4a80e4ef049fc3220c9689b58))
- Add package-json/valid-directories
  ([4c6c0f0](https://github.com/will-stone/eslint-config/commit/4c6c0f0c6d5d73025bffa157e328390ccc821999))
- Add unicorn/require-module-attributes
  ([e36a3b1](https://github.com/will-stone/eslint-config/commit/e36a3b12581fbddee6252166a9a5eddba4e4ea1b))
- Add unicorn/prefer-classlist-toggle
  ([2cee694](https://github.com/will-stone/eslint-config/commit/2cee694566f37f509ce6073011bffd2adbe46c47))
- Add unicorn/prefer-bigint-literals
  ([77cb8fe](https://github.com/will-stone/eslint-config/commit/77cb8fe6fbae307256751f2083baae3938742ad4))
- Add unicorn/no-array-sort
  ([797be01](https://github.com/will-stone/eslint-config/commit/797be010ffe06bedaced73afc0a5aef3a06885c8))
- Upgrade all deps
  ([9fde2a5](https://github.com/will-stone/eslint-config/commit/9fde2a59728e0c57b357dbd05db64269a781fdcb))
- Add vitest/hoisted-apis-on-top and vitest/prefer-expect-type-of rules
  ([316012b](https://github.com/will-stone/eslint-config/commit/316012bdcbc908e15237e3527e692a5a54cfd733))
- Add preserve-caught-error rule
  ([02fbb64](https://github.com/will-stone/eslint-config/commit/02fbb6418dee25135915a4753a67f88460a3c03b))

### Patches

- Add jsdoc/type-formatting (off)
  ([8414b15](https://github.com/will-stone/eslint-config/commit/8414b155ed231756c2b7b32dfc0ce7f11d4ca355))
- Add jsdoc/required-tags (off)
  ([4c2f78e](https://github.com/will-stone/eslint-config/commit/4c2f78e4507ab3041babce1b658e86504121c485))
- Add jsdoc/require-yields-type (off)
  ([8112bbc](https://github.com/will-stone/eslint-config/commit/8112bbce3ef939839e55e3dc44e3ed0a2b7f36ad))
- Add jsdoc/require-throws-type (off)
  ([e3ac7f2](https://github.com/will-stone/eslint-config/commit/e3ac7f2122b8e4220862ce29fd340955ebdd68e3))
- Add jsdoc/require-next-type (off)
  ([adfb758](https://github.com/will-stone/eslint-config/commit/adfb75892caf52aafcc83f5384f392155985ea01))
- Remove deprecated rule
  ([8ebbe99](https://github.com/will-stone/eslint-config/commit/8ebbe99e500d0d34eeecdeabbfc2319513a4d34b))

## [21.2.0](https://github.com/will-stone/eslint-config/compare/v21.1.0...v21.2.0) (2025-08-24)

### Minor changes

- Only log loaded auto plugins on DEBUG=ws
  ([dbcd6dc](https://github.com/will-stone/eslint-config/commit/dbcd6dc77bf822fbc37910de42fc108fda3569c8))

## [21.1.0](https://github.com/will-stone/eslint-config/compare/v21.0.0...v21.1.0) (2025-08-23)

### Minor changes

- Support extra configs as subsequent arguments
  ([de10e65](https://github.com/will-stone/eslint-config/commit/de10e655e82cab50bad2dc83872c9d4f2d96d2a3))

## [21.0.0](https://github.com/will-stone/eslint-config/compare/v20.2.0...v21.0.0) (2025-08-23)

### Major changes

- Add support for all package.json rules
  ([2aeb6ba](https://github.com/will-stone/eslint-config/commit/2aeb6ba78307a56e82a5ecfa57c61274469228e2))
- Add support for no-unassigned-vars
  ([cd819c6](https://github.com/will-stone/eslint-config/commit/cd819c63e763b8646a2d782c3e8a79d77eff2936))
- Add support for more Vitest rules
  ([143954d](https://github.com/will-stone/eslint-config/commit/143954d28b4e5a3de2113ec8f036ee1abf79acb0))
- Add support for more unicorn rules
  ([36898dd](https://github.com/will-stone/eslint-config/commit/36898dd8cb429a242eadc606cda5c69e48f22deb))

## [20.2.0](https://github.com/will-stone/eslint-config/compare/v20.1.2...v20.2.0) (2025-08-23)

### Minor changes

- Sort exports
  ([ef7bf22](https://github.com/will-stone/eslint-config/commit/ef7bf222c3d0d1dd710bb348469713b1f882b63d))

## [20.1.2](https://github.com/will-stone/eslint-config/compare/v20.1.1...v20.1.2) (2025-08-23)

### Patches

- Fix auto eslint configs running in random order
  ([2b48bf6](https://github.com/will-stone/eslint-config/commit/2b48bf69b72b1f25b9ceeba7169a965d9c9f08ea))
- Require latest ESLint
  ([af1ccb2](https://github.com/will-stone/eslint-config/commit/af1ccb2d3c7cb92c6b7bbbd313d4caac1566e895))
- Upgrade all deps
  ([2baa421](https://github.com/will-stone/eslint-config/commit/2baa421b39c60c67c7960a088a608894df262851))

## [20.1.1](https://github.com/will-stone/eslint-config/compare/v20.1.0...v20.1.1) (2025-08-19)

### Patches

- Remove deprecated rules
  ([b780610](https://github.com/will-stone/eslint-config/commit/b78061090f187ba72e4eca4b7712a171290374b6))
- Support all Stylistic rules but off
  ([4757985](https://github.com/will-stone/eslint-config/commit/4757985f6517d55d5d355d4121dba5b878da2823))

## [20.1.0](https://github.com/will-stone/eslint-config/compare/v20.0.0...v20.1.0) (2025-08-19)

### Minor changes

- Stop padding groups of Vitest expect statements
  ([2e18a86](https://github.com/will-stone/eslint-config/commit/2e18a86dae0f66b4ade689830b7e934140b6bee6))
- Sort Flux Standard Actions
  ([9a3a2e1](https://github.com/will-stone/eslint-config/commit/9a3a2e1e205bc554b7cfd28bab636e1d8a5e3dfe))

### Patches

- Fix `vitest/valid-title` rule tripping when test title is a function
  ([ed3c8c5](https://github.com/will-stone/eslint-config/commit/ed3c8c5daf30e04947b5becb9156ac6f2eb38df3))

## [20.0.0](https://github.com/will-stone/eslint-config/compare/v19.0.0...v20.0.0) (2025-08-18)

### Major changes

- Migrate from TSDoc to JSDoc plugin
  ([2c0f543](https://github.com/will-stone/eslint-config/commit/2c0f543436cc48d1e176656456aaa381aec63a43))
- Remove support for Jest
  ([18221ad](https://github.com/will-stone/eslint-config/commit/18221ad04097dd0445b02b9d976be04968fba86c))

### Minor changes

- TypeScript now a default config
  ([407849f](https://github.com/will-stone/eslint-config/commit/407849ff3958e8adb8c376e7ef83ceac901fbe1a))

### Patches

- Refactor how configs receive options
  ([db0bb27](https://github.com/will-stone/eslint-config/commit/db0bb273cbcda8a967a7e4131b663aead8d929d7))
- Load auto configs in parallel
  ([c5178cd](https://github.com/will-stone/eslint-config/commit/c5178cd50e8453120386c81109e75b94ee9bc47b))

## [19.0.0](https://github.com/will-stone/eslint-config/compare/v18.1.0...v19.0.0) (2025-06-10)

### Major changes

- Sort types
  ([8aecd85](https://github.com/will-stone/eslint-config/commit/8aecd850dd3e5f8360bdf0c8a4cf6bd9f3834b7a))
- Auto sort objects
  ([c0f1617](https://github.com/will-stone/eslint-config/commit/c0f1617a869ffcb8bd5fbca4e1fa3d721863bb86))
- Sort named imports
  ([e13b8c6](https://github.com/will-stone/eslint-config/commit/e13b8c6679af7db7d57bdcc8b9aa51d876fa2fae))
- Replace import-x with Stylistic and Perfectionist
  ([728fcc2](https://github.com/will-stone/eslint-config/commit/728fcc298e738ae7582fcd0b945a4bee7a59b15e))

## [18.1.0](https://github.com/will-stone/eslint-config/compare/v18.0.0...v18.1.0) (2025-06-03)

### Minor changes

- Turn off no-top-level-await for Astro files
  ([055a368](https://github.com/will-stone/eslint-config/commit/055a3688277b7f0dd77b0a2c2a98d01c64b627a9))

## [18.0.0](https://github.com/will-stone/eslint-config/compare/v17.1.0...v18.0.0) (2025-06-03)

### Major changes

- Add support for linting TSDoc
  ([d9bda6a](https://github.com/will-stone/eslint-config/commit/d9bda6aa3357e8ae178532f6896084a009d7d671))
- Add package-json/require-type rule
  ([6b644f4](https://github.com/will-stone/eslint-config/commit/6b644f4ac65346e7548675ea9d75ac5a108a1ab1))
- Add support for n/no-top-level-await
  ([e212146](https://github.com/will-stone/eslint-config/commit/e212146afb2b50f899825bff7068a59be0448a58))
- Use updated glob pattern for finding files
  ([ccc267a](https://github.com/will-stone/eslint-config/commit/ccc267a27523bc3d9fa099f3017e48b7df1bde7c))

  Based on antfu's: https://github.com/antfu/eslint-config/blob/main/src/globs.ts

## [17.1.0](https://github.com/will-stone/eslint-config/compare/v17.0.0...v17.1.0) (2025-05-25)

### Minor changes

- Turn of package-json/require-files
  ([8ed8682](https://github.com/will-stone/eslint-config/commit/8ed8682a2a6b6a3d25729c77d8a511dffe6fe713))

  Too restrictive for non-packages.

## [17.0.0](https://github.com/will-stone/eslint-config/compare/v16.2.0...v17.0.0) (2025-05-25)

### Major changes

- Support all package.json rules
  ([ec7c969](https://github.com/will-stone/eslint-config/commit/ec7c9699bef29b708d5b3ec4016a1551e7fa33c2))
- Support new Unicorn rules
  ([bceb105](https://github.com/will-stone/eslint-config/commit/bceb105c5a432e08ad8379d01bfbb87569c7846e))

### Patches

- Turn off another TS requires-types rule
  ([a09e217](https://github.com/will-stone/eslint-config/commit/a09e2176a7beef44b765d59646ae1c9de6d7b8ce))

## [16.2.0](https://github.com/will-stone/eslint-config/compare/v16.1.0...v16.2.0) (2025-05-08)

### Minor changes

- Turn off no-non-null-assertion
  ([3fedf18](https://github.com/will-stone/eslint-config/commit/3fedf18b9f8bcc2b853cc7c3f840ae8b978fcb01))

## [16.1.0](https://github.com/will-stone/eslint-config/compare/v16.0.1...v16.1.0) (2025-05-02)

### Minor changes

- Turn off no-plusplus rule
  ([440ac8e](https://github.com/will-stone/eslint-config/commit/440ac8e5444892d2805edac3ae95e95206a8775f))

## [16.0.1](https://github.com/will-stone/eslint-config/compare/v16.0.0...v16.0.1) (2025-04-19)

### Patches

- Update README to include instructions on linting json now config lints package.json
  ([a8e097b](https://github.com/will-stone/eslint-config/commit/a8e097b2e4a5e0c005e9f62decf31d8d5e3e8bff))

## [16.0.0](https://github.com/will-stone/eslint-config/compare/v15.2.0...v16.0.0) (2025-04-19)

### Major changes

- Lint package.json
  ([542cc2b](https://github.com/will-stone/eslint-config/commit/542cc2be532af59b976dcc60ac3ef4a421e076e2))

## [15.2.0](https://github.com/will-stone/eslint-config/compare/v15.1.0...v15.2.0) (2025-04-19)

### Minor changes

- Disable fixable option of vitest/no-focused-tests rule
  ([63e75e5](https://github.com/will-stone/eslint-config/commit/63e75e5098bb7c9e52a793e0fe1d48da1e563f64))

## [15.1.0](https://github.com/will-stone/eslint-config/compare/v15.0.7...v15.1.0) (2025-04-19)

### Minor changes

- Support vitest/prefer-describe-function-title
  ([c6c691c](https://github.com/will-stone/eslint-config/commit/c6c691c71a733e65f5c68c673896c27f297558a4))

## [15.0.7](https://github.com/will-stone/eslint-config/compare/v15.0.6...v15.0.7) (2025-04-19)

### Patches

- Upgrade release-it for real this time 🙄
  ([a072589](https://github.com/will-stone/eslint-config/commit/a072589940679ac4ea6654cfd1b1b1e3dad9a065))

## [15.0.6](https://github.com/will-stone/eslint-config/compare/v15.0.5...v15.0.6) (2025-04-19)

### Patches

- Upgrade release-it
  ([22ab4b1](https://github.com/will-stone/eslint-config/commit/22ab4b1dfbe17b27c39dc67cb1317a58635b22ee))

## [15.0.5](https://github.com/will-stone/eslint-config/compare/v15.0.4...v15.0.5) (2025-04-01)

### Patches

- Upgrade deps within SemVer
  ([07e894a](https://github.com/will-stone/eslint-config/commit/07e894a0b2efb634061b9f289a08194ebbb03db0))

## [15.0.4](https://github.com/will-stone/eslint-config/compare/v15.0.3...v15.0.4) (2025-03-24)

### Patches

- Document husky auto-adds prepare script
  ([39797cc](https://github.com/will-stone/eslint-config/commit/39797ccef3b3ef0890db65f1093bf4affbbe4251))

## [15.0.3](https://github.com/will-stone/eslint-config/compare/v15.0.2...v15.0.3) (2025-03-24)

### Patches

- Remove deprecated unicorn/no-instanceof-array rule
  ([0a149e6](https://github.com/will-stone/eslint-config/commit/0a149e68dc5a6f2889b09352c4f81322927da33e))

## [15.0.2](https://github.com/will-stone/eslint-config/compare/v15.0.1...v15.0.2) (2025-03-24)

### Patches

- Update docs to use pnpm
  ([d620b24](https://github.com/will-stone/eslint-config/commit/d620b2498282486d94a83762c867b35cbceb0b30))

## [15.0.1](https://github.com/will-stone/eslint-config/compare/v15.0.0...v15.0.1) (2025-03-24)

### Patches

- Fix Tailwind plugin not loading
  ([d6a737a](https://github.com/will-stone/eslint-config/commit/d6a737a6b320a06511d65822c1d824f65db1bd09))

## [15.0.0](https://github.com/will-stone/eslint-config/compare/v14.0.0...v15.0.0) (2025-03-24)

### Major changes

- Replace import ordering plugin
  ([f31fdf1](https://github.com/will-stone/eslint-config/commit/f31fdf192eefbba1973cb36c46e396cb5a7822a2))
- Support more Unicorn rules
  ([6b88cfe](https://github.com/will-stone/eslint-config/commit/6b88cfefdd49b2547bc3357e34b7c8c4c50a8a26))

## [14.0.0](https://github.com/will-stone/eslint-config/compare/v13.0.0...v14.0.0) (2025-03-24)

### Major changes

- Lazy load plugins. Check README as you will now need to manually install plugins for some configs
  ([871b9c5](https://github.com/will-stone/eslint-config/commit/871b9c54541f1cc8e35467f5cc8e92ccef23c0e2))
- Migrate Vitest plugin, adding new rules
  ([ca099b2](https://github.com/will-stone/eslint-config/commit/ca099b2076b3b142ff06809b1f42b65032851107))

## [13.0.0](https://github.com/will-stone/eslint-config/compare/v12.1.0...v13.0.0) (2025-02-02)

### Major changes

- Only import plugins when config is used
  ([e5f7fd9](https://github.com/will-stone/eslint-config/commit/e5f7fd99389b4a89d954ae87f345047077827377))

## [12.1.0](https://github.com/will-stone/eslint-config/compare/v12.0.2...v12.1.0) (2024-12-02)

### Minor changes

- Do not require public accessibility modifier on class properties and methods
  ([8ffd060](https://github.com/will-stone/eslint-config/commit/8ffd0606abbf369c747a34531a409b70bf1debdb))

## [12.0.2](https://github.com/will-stone/eslint-config/compare/v12.0.1...v12.0.2) (2024-11-26)

### Patches

- Bump all deps and turn off new TS rules
  ([0777d2a](https://github.com/will-stone/eslint-config/commit/0777d2a990999e3f51804e4ff815d6586a987312))

## [12.0.1](https://github.com/will-stone/eslint-config/compare/v12.0.0...v12.0.1) (2024-11-02)

### Patches

- Remove deprecated Vitest rule
  ([e8d4e98](https://github.com/will-stone/eslint-config/commit/e8d4e98dfef0d0dee3f26edc7ffa611e5329605c))
- Upgrade all deps
  ([7db1742](https://github.com/will-stone/eslint-config/commit/7db174219bfa77d00e2482e760d975534031a84b))

## [12.0.0](https://github.com/will-stone/eslint-config/compare/v11.0.5...v12.0.0) (2024-10-15)

### Major changes

- Update all plugins and support all rules
  ([7409d27](https://github.com/will-stone/eslint-config/commit/7409d27a68f371048ca0caeb3a611b01aa0f5305))

## [11.0.5](https://github.com/will-stone/eslint-config/compare/v11.0.4...v11.0.5) (2024-10-15)

### Patches

- Remove reference to non-existent CJS build
  ([2c7514d](https://github.com/will-stone/eslint-config/commit/2c7514da2a2f61d33cba42d75d2af9013d38d7c9))

## [11.0.4](https://github.com/will-stone/eslint-config/compare/v11.0.3...v11.0.4) (2024-08-14)

### Patches

- Fix parser broken error on Astro files
  ([1fecc3b](https://github.com/will-stone/eslint-config/commit/1fecc3b6adc44730c2b85954f1407c8e1899c693))

## [11.0.3](https://github.com/will-stone/eslint-config/compare/v11.0.2...v11.0.3) (2024-08-12)

### Patches

- Refactor configs
  ([47a50d0](https://github.com/will-stone/eslint-config/commit/47a50d0d4f0eeacb9aaf830f1583e14db458bb68))

## [11.0.2](https://github.com/will-stone/eslint-config/compare/v11.0.1...v11.0.2) (2024-08-12)

### Patches

- Fix looking for incorrect tailwind package
  ([27c5b57](https://github.com/will-stone/eslint-config/commit/27c5b57aebb2665772b3cab406cbe73425323657))

## [11.0.1](https://github.com/will-stone/eslint-config/compare/v11.0.0...v11.0.1) (2024-08-11)

### Patches

- Fix unable to scan for deps when either deps or devDeps is missing from a package.json file
  ([13a4a74](https://github.com/will-stone/eslint-config/commit/13a4a747a532e3463439b44d82c99036749e7820))

## [11.0.0](https://github.com/will-stone/eslint-config/compare/v10.0.2...v11.0.0) (2024-08-11)

### Major changes

- Back to auto configure, but with the ability to manually turn on configs too
  ([d29c0fa](https://github.com/will-stone/eslint-config/commit/d29c0fab081206fb536361f8aa13dc7f637ef38c))
- Turn on all but testing configs by default
  ([878f3c8](https://github.com/will-stone/eslint-config/commit/878f3c844eb062698fb4f64ec44f35aad7bbb492))

### Minor changes

- Add support for Vitest
  ([e95a40d](https://github.com/will-stone/eslint-config/commit/e95a40d43668078e95e5e8776b8509745b568840))
- Use faster projectService for type-aware rules
  ([be7be05](https://github.com/will-stone/eslint-config/commit/be7be0550e231bc991412aa85841510453ae507f))

### Patches

- Fix React Hooks not linted
  ([8e5b053](https://github.com/will-stone/eslint-config/commit/8e5b0532fd1264b2e7063559702a493c21ad7490))
- Enable gitignore without scanning for the file
  ([1d3dabd](https://github.com/will-stone/eslint-config/commit/1d3dabdebe63265e904d650c1b88f096ceec3e79))

## [10.0.2](https://github.com/will-stone/eslint-config/compare/v10.0.1...v10.0.2) (2024-08-04)

### Patches

- Upgrade jest plugin that supports ESLint v9
  ([816b3b3](https://github.com/will-stone/eslint-config/commit/816b3b34c19f9f10b54be959a1820fe380551f4f))

## [10.0.1](https://github.com/will-stone/eslint-config/compare/v10.0.0...v10.0.1) (2024-07-31)

### Patches

- Fix no-useless-assignment not compatible with Astro
  ([a825d3c](https://github.com/will-stone/eslint-config/commit/a825d3c4afa935a461d93cd0d34385528ca405bf))

## [10.0.0](https://github.com/will-stone/eslint-config/compare/v9.1.0...v10.0.0) (2024-07-31)

### Major changes

- Upgrade to ESLint v9
  ([8a3ad56](https://github.com/will-stone/eslint-config/commit/8a3ad564c548b374cabf2e687f21e7be8e2f0b68))

## [9.1.0](https://github.com/will-stone/eslint-config/compare/v9.0.0...v9.1.0) (2024-06-26)

### Minor changes

- Add unicorn/no-negation-in-equality-check
  ([4a963f1](https://github.com/will-stone/eslint-config/commit/4a963f14cecd57e391a6e1bdc24de4783c1dda23))

### Patches

- Remove deprecated rules
  ([9de8f8d](https://github.com/will-stone/eslint-config/commit/9de8f8da9b92234db223e985886a5567a44b855e))

## [9.0.0](https://github.com/will-stone/eslint-config/compare/v8.0.7...v9.0.0) (2024-05-11)

### Major changes

- Add support for new rules
  ([3e3e745](https://github.com/will-stone/eslint-config/commit/3e3e7453de97d6b6aee660863b2fadb715040e7f))

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

- 44b0164: Stopped supporting Prettier from ESLint as it's slower than running Prettier directly:
  https://prettier.io/docs/en/integrating-with-linters.html#notes
- 44b0164: Removed unsupported `eslint-plugin-switch-case` plugin.

### Minor Changes

- 3a607fd: Add support for `n/prefer-node-protocol`.

## 7.2.1

### Patch Changes

- 3e7f7a4: Removed deprecated rule.

## 7.2.0

### Minor Changes

- 447a526: Added support for `astro/missing-client-only-directive-value=error`, and
  `@typescript-eslint/only-throw-error=off`.

## 7.1.0

### Minor Changes

- f176446: Added support for "@typescript-eslint/use-unknown-in-catch-callback-variable" (off).

## 7.0.0

Why the massive jump in versions? I originally had an npm package published under the same name. It
was deprecated but npm doesn't allow for overwriting versions. The last major of that old config was
v6, so going with v7 so I can start again.

### Major Changes

- 7d73d56: Release first stable version. Updated all configs and deps, adding support for new rules,
  such as `react/checked-requires-onchange-or-readonly`.

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
- c2daa78: Turn off `class-methods-use-this` ruke, which can quite often be not be required.

## 0.6.0

### Minor Changes

- 0ae33b7: Do not lint Next.js build artefacts.

## 0.5.1

### Patch Changes

- 8c325f3: Fixed missing node globals.

## 0.5.0

### Minor Changes

- 5891e9c: No changes (hopefully). Migrated from old will-stone/dx repo to this standalone one,
  whilst converting to TS and exporing both ESM and CJS versions.

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

- Fixed no browser globals available. Puting these in all files for now, but maybe should be based
  on something else?

## 0.0.3

### Patch Changes

- fd613ec: Fixed cannot find TS plugin.

## 0.0.2

### Patch Changes

- e49eee7: Fixed TS parser not loading.

## 0.0.1

### Patch Changes

- 40e33d5: Initial release.
