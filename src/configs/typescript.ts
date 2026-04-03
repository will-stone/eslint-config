import type { TSESLint } from '@typescript-eslint/utils'
import type { ClassicConfig } from '@typescript-eslint/utils/ts-eslint'

import pluginTypescript from '@typescript-eslint/eslint-plugin'
import parserTypescript from '@typescript-eslint/parser'

import { GLOB_ASTRO_TS, GLOB_TS, GLOB_TSX } from '../globs.js'

const eslintRuleTweaks: Record<string, unknown> = {}

for (const config of pluginTypescript.configs['flat/all'] as ClassicConfig.Config[]) {
  for (const [ruleName, value] of Object.entries(config.rules || {})) {
    if (
      !ruleName.startsWith('@typescript') &&
      // Deprecated rules.
      !['no-new-symbol', 'no-return-await'].includes(ruleName)
    ) {
      eslintRuleTweaks[ruleName] = value
    }
  }
}

export function typescript(): TSESLint.FlatConfig.Config[] {
  return [
    {
      files: [GLOB_ASTRO_TS, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTypescript,
        parserOptions: {
          projectService: true,
        },
      },
      name: 'will-stone/typescript',
      plugins: {
        '@typescript-eslint': pluginTypescript,
      },
      rules: {
        ...eslintRuleTweaks,

        /**
         * TS Recommended.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        '@typescript-eslint/ban-ts-comment': 'error',
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
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/max-params': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'warn',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-unused-private-class-members': 'error',
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
        '@typescript-eslint/no-wrapper-object-types': 'error',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        // Unicorn does this better by providing a fixer
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        /**
         * These require type checking.
         */
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-return': 'off',
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-array-delete': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'warn',
        '@typescript-eslint/no-deprecated': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-meaningless-void-operator': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-misused-spread': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-template-expression': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unnecessary-type-conversion': 'error',
        '@typescript-eslint/no-unnecessary-type-parameters': 'error',
        // Too confusing to fix.
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        // All assertions are unsafe and this makes it more difficult to cast.
        '@typescript-eslint/no-unsafe-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        '@typescript-eslint/no-useless-default-assignment': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/only-throw-error': 'error',
        '@typescript-eslint/prefer-destructuring': [
          'warn',
          {
            AssignmentExpression: {
              array: false,
              object: false,
            },
            VariableDeclarator: {
              // Make compatible with Unicorn's no-unreadable-array-destructuring.
              array: false,
              object: true,
            },
          },
        ],
        '@typescript-eslint/prefer-find': 'error',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        // Typing all args as readonly is tiresome.
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-return-this-type': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/promise-function-async': 'warn',
        '@typescript-eslint/related-getter-setter-pairs': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/return-await': 'warn',
        // Way too noisy, not particularly helpful most of the time.
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/strict-void-return': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
      },
    },
  ]
}
