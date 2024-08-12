import parserTypescript from '@typescript-eslint/parser'
import type { Linter } from '@typescript-eslint/utils/ts-eslint'
import parserAstro from 'astro-eslint-parser'
import pluginAstro from 'eslint-plugin-astro'

export function astro(_options: unknown): Linter.ConfigType[] {
  return [
    {
      files: ['**/*.astro'],
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: parserTypescript,
        },
      },
      name: 'will-stone/astro',
      plugins: {
        astro: pluginAstro,
      },
      rules: {
        // Astro passes Components to the view which this rule doesn't like.
        'no-useless-assignment': 'off',

        'astro/missing-client-only-directive-value': 'error',
        'astro/no-conflict-set-directives': 'error',
        'astro/no-deprecated-astro-canonicalurl': 'error',
        'astro/no-deprecated-astro-fetchcontent': 'error',
        'astro/no-deprecated-astro-resolve': 'error',
        'astro/no-deprecated-getentrybyslug': 'error',
        'astro/no-exports-from-components': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/semi': 'off',
        'astro/valid-compile': 'error',

        // TODO off until checked to see if I need them.
        'astro/jsx-a11y/alt-text': 'off',
        'astro/jsx-a11y/anchor-ambiguous-text': 'off',
        'astro/jsx-a11y/anchor-has-content': 'off',
        'astro/jsx-a11y/anchor-is-valid': 'off',
        'astro/jsx-a11y/aria-activedescendant-has-tabindex': 'off',
        'astro/jsx-a11y/aria-props': 'off',
        'astro/jsx-a11y/aria-proptypes': 'off',
        'astro/jsx-a11y/aria-role': 'off',
        'astro/jsx-a11y/aria-unsupported-elements': 'off',
        'astro/jsx-a11y/autocomplete-valid': 'off',
        'astro/jsx-a11y/click-events-have-key-events': 'off',
        'astro/jsx-a11y/control-has-associated-label': 'off',
        'astro/jsx-a11y/heading-has-content': 'off',
        'astro/jsx-a11y/html-has-lang': 'off',
        'astro/jsx-a11y/iframe-has-title': 'off',
        'astro/jsx-a11y/img-redundant-alt': 'off',
        'astro/jsx-a11y/interactive-supports-focus': 'off',
        'astro/jsx-a11y/label-has-associated-control': 'off',
        'astro/jsx-a11y/lang': 'off',
        'astro/jsx-a11y/media-has-caption': 'off',
        'astro/jsx-a11y/mouse-events-have-key-events': 'off',
        'astro/jsx-a11y/no-access-key': 'off',
        'astro/jsx-a11y/no-aria-hidden-on-focusable': 'off',
        'astro/jsx-a11y/no-autofocus': 'off',
        'astro/jsx-a11y/no-distracting-elements': 'off',
        'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
        'astro/jsx-a11y/no-noninteractive-element-interactions': 'off',
        'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
        'astro/jsx-a11y/no-noninteractive-tabindex': 'off',
        'astro/jsx-a11y/no-redundant-roles': 'off',
        'astro/jsx-a11y/no-static-element-interactions': 'off',
        'astro/jsx-a11y/prefer-tag-over-role': 'off',
        'astro/jsx-a11y/role-has-required-aria-props': 'off',
        'astro/jsx-a11y/role-supports-aria-props': 'off',
        'astro/jsx-a11y/scope': 'off',
        'astro/jsx-a11y/tabindex-no-positive': 'off',
        'astro/no-set-html-directive': 'off',
        'astro/no-set-text-directive': 'off',
        'astro/no-unused-css-selector': 'off',
        'astro/prefer-class-list-directive': 'off',
        'astro/prefer-object-class-list': 'off',
        'astro/prefer-split-class-list': 'off',
      },
    },
  ]
}
