import pluginTypescript from '@typescript-eslint/eslint-plugin'
import parserTypescript from '@typescript-eslint/parser'
import type { Linter } from 'eslint'

export function typescript(): Linter.FlatConfig[] {
  return [
    {
      files: ['**/*.{ts,tsx,astro}'],
      languageOptions: {
        // @ts-expect-error -- does not confirm to type
        parser: parserTypescript,
      },
      plugins: {
        // @ts-expect-error -- does not confirm to type
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
        // ts(2588)
        'no-new-symbol': 'off',
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
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        'no-array-constructor': 'off',
        'no-empty-function': 'off',
        'no-extra-semi': 'off',

        /**
         * These are for type checking which I don't use eslint for
         */
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-mixed-enums': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-return-this-type': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        '@typescript-eslint/unbound-method': 'off',

        /**
         * Off for Prettier
         * https://github.com/prettier/eslint-config-prettier/blob/main/index.js
         */
        '@typescript-eslint/block-spacing': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/key-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-around-comment': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-blocks': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',

        /**
         * Superseded by TS rules below
         */
        'class-methods-use-this': 'off',
        'default-param-last': 'off',
        'lines-between-class-members': 'off',
        'no-duplicate-imports': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-restricted-imports': 'off',
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'padding-line-between-statements': 'off',

        /**
         * The rest
         */
        // Requires using T[] over Array<T> for arrays
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        // Bans // tslint:<rule-flag> comments from being used
        '@typescript-eslint/ban-tslint-comment': 'warn',
        // Ensures that literals on classes are exposed in a consistent style
        '@typescript-eslint/class-literal-property-style': 'warn',
        '@typescript-eslint/class-methods-use-this': 'off',
        // https://typescript-eslint.io/rules/consistent-generic-constructors/
        '@typescript-eslint/consistent-generic-constructors': 'warn',
        // Enforce the use of the record type
        '@typescript-eslint/consistent-indexed-object-style': 'warn',
        // Enforces consistent usage of type assertions
        '@typescript-eslint/consistent-type-assertions': 'error',
        // Enforce using types for object type definitions
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        // Enforces consistent usage of type imports
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
        // Enforce default parameters to be last
        '@typescript-eslint/default-param-last': ['error'],
        // Don't mind if functions do not have return types.
        '@typescript-eslint/explicit-function-return-type': 'off',
        // Require explicit accessibility modifiers ("public") on class properties and methods
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        // Initialise vairables however you like
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'warn',
          'always',
          { exceptAfterOverload: true },
        ],
        // Require a consistent member declaration order
        '@typescript-eslint/member-ordering': 'error',
        // ❌
        // interface T1 {
        //  func(arg: string): number;
        // }
        // ✅
        // interface T1 {
        //  func: (arg: string) => number;
        // }
        '@typescript-eslint/method-signature-style': 'warn',
        // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
        // Disallow duplicate class members
        '@typescript-eslint/no-dupe-class-members': 'error',
        // ❌
        // enum E {
        //   A = 0,
        //   B = 0,
        // }
        // ✅
        // enum E {
        //   A = 0,
        //   B = 1,
        // }
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        // Deleting missing key/value is safe
        '@typescript-eslint/no-dynamic-delete': 'off',
        // ❌ const bar = foo!!!.bar
        // ✅ const bar = foo!.bar
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        // Warns when a class is accidentally used as a namespace
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        // Disallow this keywords outside of classes or class-like objects
        '@typescript-eslint/no-invalid-this': 'error',
        // Disallows usage of void type outside of generic or return types
        '@typescript-eslint/no-invalid-void-type': 'error',
        // Disallow function declarations that contain unsafe references inside loop statements
        '@typescript-eslint/no-loop-func': 'error',
        // Disallow literal numbers that lose precision
        '@typescript-eslint/no-loss-of-precision': ['error'],
        // Disallowing magic numbers causes all sorts of problems
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-imports': 'off',
        // Disallow variable declarations from shadowing variables declared in the outer scope
        '@typescript-eslint/no-shadow': ['error'],
        // Aliasing can be useful
        '@typescript-eslint/no-type-alias': 'off',
        // Disallows unnecessary constraints on generic types
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        // Aims to eliminate unused expressions which have no effect on the state of the program.
        '@typescript-eslint/no-unused-expressions': ['error'],
        // Variables must be used unless name ends with "ignored"
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
        // Disallow empty exports that don't change anything in a module file
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          { blankLine: 'always', next: '*', prev: 'multiline-block-like' },
          { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
          { blankLine: 'always', next: '*', prev: 'multiline-const' },
          { blankLine: 'always', next: 'multiline-const', prev: '*' },
          { blankLine: 'always', next: '*', prev: 'multiline-let' },
          { blankLine: 'always', next: 'multiline-let', prev: '*' },
          { blankLine: 'always', next: '*', prev: 'multiline-var' },
          { blankLine: 'always', next: 'multiline-var', prev: '*' },
        ],
        // Not sure I need this, how many classes do I write?!
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/parameter-properties.md
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        // Unicorn does this better by providing a fixer
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',
        // Require that all enum members be literal values to prevent unintended enum member name shadow issues.
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        // Recommends using // @ts-expect-error over // @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/sort-type-constituents': 'warn',
        // Not sure if required yet. Might be too strict and produce noist code.
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ]
}
