import parserTypescript from '@typescript-eslint/parser'
import parserAstro from 'astro-eslint-parser'
import type { Linter } from 'eslint'
import pluginAstro, { configs as configsAstro } from 'eslint-plugin-astro'

export function astro(): Linter.FlatConfig[] {
  return [
    {
      files: ['**/*.astro'],
      languageOptions: {
        // @ts-expect-error -- does not confirm to type
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: parserTypescript,
        },
      },
      plugins: {
        // @ts-expect-error -- does not confirm to type
        astro: pluginAstro,
      },
      // @ts-expect-error -- does not confirm to type
      rules: configsAstro.recommended.rules,
    },
  ]
}
