import type { TSESLint } from '@typescript-eslint/utils'

import pluginTsdoc from 'eslint-plugin-tsdoc'

import { GLOB_TS, GLOB_TSX } from '../globs.js'

// eslint-disable-next-line require-await
export async function tsdoc(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      name: 'will-stone/tsdoc',
      plugins: { tsdoc: pluginTsdoc },
      rules: {
        'tsdoc/syntax': 'error',
      },
    },
  ]
}
