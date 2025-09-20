import type { TSESLint } from '@typescript-eslint/utils'

import jsdocPlugin from 'eslint-plugin-jsdoc'

import { GLOB_TS, GLOB_TSX } from '../globs.js'

export function jsdoc(): TSESLint.FlatConfig.Config[] {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      name: 'will-stone/jsdoc',
      plugins: { jsdoc: jsdocPlugin },
      rules: {
        'jsdoc/check-access': 'off',
        'jsdoc/check-alignment': 'warn',
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': 'off',
        'jsdoc/check-line-alignment': ['warn', 'never', { wrapIndent: '  ' }],
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-property-names': 'off',
        'jsdoc/check-syntax': 'off',
        'jsdoc/check-tag-names': [
          'warn',
          { definedTags: ['jest-environment'], typed: false },
        ],
        'jsdoc/check-template-names': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/check-values': 'warn',
        'jsdoc/convert-to-jsdoc-comments': 'off',
        'jsdoc/empty-tags': 'warn',
        'jsdoc/implements-on-classes': 'off',
        'jsdoc/imports-as-dependencies': 'off',
        'jsdoc/informative-docs': 'warn',
        'jsdoc/lines-before-block': 'off',
        'jsdoc/match-description': 'off',
        'jsdoc/match-name': 'off',
        'jsdoc/multiline-blocks': 'off',
        'jsdoc/no-bad-blocks': 'warn',
        'jsdoc/no-blank-block-descriptions': 'warn',
        'jsdoc/no-blank-blocks': 'off',
        'jsdoc/no-defaults': 'warn',
        'jsdoc/no-missing-syntax': 'off',
        'jsdoc/no-multi-asterisks': 'warn',
        'jsdoc/no-restricted-syntax': 'off',
        'jsdoc/no-types': 'warn',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/reject-any-type': 'error',
        'jsdoc/reject-function-type': 'error',
        'jsdoc/require-asterisk-prefix': 'warn',
        'jsdoc/require-description': 'off',
        'jsdoc/require-description-complete-sentence': 'warn',
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        // TODO let's possibly turn this one on in time as it requires JSDoc
        // everywhere, which is technically the right thing to do.
        'jsdoc/require-jsdoc': 'off',
        // TODO Should we be documenting everything?
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-property-name': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-template': 'off',
        'jsdoc/require-throws': 'warn',
        'jsdoc/require-yields': 'warn',
        'jsdoc/require-yields-check': 'warn',
        'jsdoc/sort-tags': 'warn',
        'jsdoc/tag-lines': 'off',
        'jsdoc/text-escaping': 'off',
        'jsdoc/valid-types': 'off',
      },
    },
  ]
}
