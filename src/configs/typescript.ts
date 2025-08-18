import type { TSESLint } from '@typescript-eslint/utils'

import type { ConfigContext } from '../model.js'

import { GLOB_ASTRO_TS, GLOB_TS, GLOB_TSX } from '../globs.js'
import { interopDefault } from '../utils/interop-default.js'

export async function typescript({
  options: { typescript: rawOptions },
}: ConfigContext): Promise<TSESLint.FlatConfig.Config[]> {
  const options =
    !rawOptions || typeof rawOptions === 'boolean' ? {} : rawOptions

  const [pluginTypescript, parserTypescript] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      files: [GLOB_ASTRO_TS, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTypescript,
        parserOptions: {
          ...(options.tsconfigPath
            ? {
                projectService: {
                  allowDefaultProject: ['./*.js'],
                  defaultProject: options.tsconfigPath,
                },
                tsconfigRootDir: process.cwd(),
              }
            : {}),
        },
      },
      name: 'will-stone/typescript',
      plugins: {
        '@typescript-eslint': pluginTypescript,
      },
      rules: {
        /**
         * Recommended to turn off these eslint built-in rules
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
         */
        // ts(2335) & ts(2377)
        'constructor-super': 'off',
        // ts(2378)
        'getter-return': 'off',
        // ts(2588)
        'no-const-assign': 'off',
        // ts(2300)
        'no-dupe-args': 'off',
        // ts(2393) & ts(2300)
        'no-dupe-class-members': 'off',
        // ts(1117)
        'no-dupe-keys': 'off',
        // ts(2539)
        'no-func-assign': 'off',
        // ts(2539) & ts(2540)
        'no-import-assign': 'off',
        // ts(2349)
        'no-obj-calls': 'off',
        // ts(2408)
        'no-setter-return': 'off',
        // ts(2376)
        'no-this-before-super': 'off',
        // ts(2304)
        'no-undef': 'off',
        // ts(7027)
        'no-unreachable': 'off',
        // ts(2365) & ts(2360) & ts(2358)
        'no-unsafe-negation': 'off',
        // ts transpiles let/const to var, so no need for vars any more
        'no-var': 'error',
        // ts provides better types with const
        'prefer-const': 'warn',
        // ts provides better types with rest args over arguments
        'prefer-rest-params': 'error',
        // ts transpiles spread to apply, so no need for manual apply
        'prefer-spread': 'error',
        // ts(2367)
        'valid-typeof': 'off',

        /**
         * TS Recommended
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'warn',
        '@typescript-eslint/no-wrapper-object-types': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        'no-array-constructor': 'off',
        'no-empty-function': 'off',

        /**
         * These require type checking
         */
        ...(options?.tsconfigPath
          ? {
              '@typescript-eslint/await-thenable': 'off',
              '@typescript-eslint/consistent-return': 'off',
              '@typescript-eslint/consistent-type-exports': 'warn',
              '@typescript-eslint/dot-notation': 'off',
              '@typescript-eslint/naming-convention': 'off',
              '@typescript-eslint/no-array-delete': 'off',
              '@typescript-eslint/no-base-to-string': 'off',
              '@typescript-eslint/no-confusing-void-expression': 'off',
              '@typescript-eslint/no-deprecated': 'off',
              '@typescript-eslint/no-duplicate-type-constituents': 'off',
              '@typescript-eslint/no-floating-promises': 'off',
              '@typescript-eslint/no-for-in-array': 'off',
              '@typescript-eslint/no-implied-eval': 'off',
              '@typescript-eslint/no-meaningless-void-operator': 'off',
              '@typescript-eslint/no-misused-promises': 'off',
              '@typescript-eslint/no-misused-spread': 'off',
              '@typescript-eslint/no-mixed-enums': 'off',
              '@typescript-eslint/no-redundant-type-constituents': 'off',
              '@typescript-eslint/no-unnecessary-boolean-literal-compare':
                'off',
              '@typescript-eslint/no-unnecessary-condition': 'off',
              '@typescript-eslint/no-unnecessary-qualifier': 'off',
              '@typescript-eslint/no-unnecessary-template-expression': 'error',
              '@typescript-eslint/no-unnecessary-type-arguments': 'off',
              '@typescript-eslint/no-unnecessary-type-assertion': 'off',
              '@typescript-eslint/no-unnecessary-type-conversion': 'off',
              '@typescript-eslint/no-unnecessary-type-parameters': 'error',
              '@typescript-eslint/no-unsafe-argument': 'off',
              '@typescript-eslint/no-unsafe-assignment': 'off',
              '@typescript-eslint/no-unsafe-call': 'off',
              '@typescript-eslint/no-unsafe-enum-comparison': 'off',
              '@typescript-eslint/no-unsafe-member-access': 'off',
              '@typescript-eslint/no-unsafe-return': 'off',
              '@typescript-eslint/no-unsafe-type-assertion': 'off',
              '@typescript-eslint/no-unsafe-unary-minus': 'off',
              '@typescript-eslint/non-nullable-type-assertion-style': 'off',
              '@typescript-eslint/only-throw-error': 'off',
              '@typescript-eslint/prefer-destructuring': 'off',
              '@typescript-eslint/prefer-find': 'off',
              '@typescript-eslint/prefer-includes': 'off',
              '@typescript-eslint/prefer-nullish-coalescing': 'off',
              '@typescript-eslint/prefer-optional-chain': 'off',
              '@typescript-eslint/prefer-promise-reject-errors': 'off',
              '@typescript-eslint/prefer-readonly': 'off',
              '@typescript-eslint/prefer-readonly-parameter-types': 'off',
              '@typescript-eslint/prefer-reduce-type-parameter': 'off',
              '@typescript-eslint/prefer-regexp-exec': 'off',
              '@typescript-eslint/prefer-return-this-type': 'off',
              '@typescript-eslint/prefer-string-starts-ends-with': 'off',
              '@typescript-eslint/promise-function-async': 'off',
              '@typescript-eslint/related-getter-setter-pairs': 'off',
              '@typescript-eslint/require-array-sort-compare': 'off',
              '@typescript-eslint/require-await': 'off',
              '@typescript-eslint/restrict-plus-operands': 'off',
              '@typescript-eslint/restrict-template-expressions': 'off',
              '@typescript-eslint/return-await': 'off',
              '@typescript-eslint/strict-boolean-expressions': 'off',
              '@typescript-eslint/switch-exhaustiveness-check': 'off',
              '@typescript-eslint/unbound-method': 'off',
              '@typescript-eslint/use-unknown-in-catch-callback-variable':
                'off',
            }
          : {}),

        /**
         * Superseded by TS rules below
         */
        'class-methods-use-this': 'off',
        'default-param-last': 'off',
        'no-duplicate-imports': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-redeclare': 'off',
        'no-restricted-imports': 'off',
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        /**
         * The rest
         */
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        '@typescript-eslint/ban-tslint-comment': 'warn',
        '@typescript-eslint/class-literal-property-style': 'warn',
        '@typescript-eslint/class-methods-use-this': 'off',
        '@typescript-eslint/consistent-generic-constructors': 'warn',
        '@typescript-eslint/consistent-indexed-object-style': 'warn',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/max-params': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unnecessary-parameter-property-assignment':
          'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            // Useful for extracting args from props and ignoring them:
            // { style: _style, ...restProps }
            argsIgnorePattern: '^_',
            varsIgnorePattern: '[iI]gnored',
          },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        // Unicorn does this better by providing a fixer
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        // TODO Not sure if required yet. Might be too strict and produce noisy code.
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ]
}
