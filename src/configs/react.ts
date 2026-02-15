import type { TSESLint } from '@typescript-eslint/utils'

import globals from 'globals'

import type { ConfigContext } from '../model.js'

import { GLOB_SRC } from '../globs.js'
import { interopDefault } from '../utils/interop-default.js'

export async function react(_configContext: ConfigContext): Promise<TSESLint.FlatConfig.Config[]> {
  const [pluginJsxA11y, pluginReact, pluginReactHooks] = await Promise.all([
    // @ts-expect-error -- no types
    interopDefault(import('eslint-plugin-jsx-a11y')),
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('eslint-plugin-react-hooks')),
  ] as const)

  return [
    {
      files: [GLOB_SRC],
      languageOptions: {
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      name: 'will-stone/react',
      plugins: {
        'jsx-a11y': pluginJsxA11y,
        react: pluginReact,
        'react-hooks': pluginReactHooks,
      },
      rules: {
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-ambiguous-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/control-has-associated-label': [
          'off',
          {
            ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
            ignoreRoles: [
              'grid',
              'listbox',
              'menu',
              'menubar',
              'radiogroup',
              'row',
              'tablist',
              'toolbar',
              'tree',
              'treegrid',
            ],
            includeRoles: ['alert', 'dialog'],
          },
        ],
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': [
          'error',
          {
            tabbable: [
              'button',
              'checkbox',
              'link',
              'searchbox',
              'spinbutton',
              'switch',
              'textbox',
            ],
          },
        ],
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/media-has-caption': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
          'error',
          {
            canvas: ['img'],
            tr: ['none', 'presentation'],
          },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
          'error',
          {
            alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            body: ['onError', 'onLoad'],
            dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            handlers: [
              'onClick',
              'onError',
              'onLoad',
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp',
            ],
            iframe: ['onError', 'onLoad'],
            img: ['onError', 'onLoad'],
          },
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'error',
          {
            fieldset: ['radiogroup', 'presentation'],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            table: ['grid'],
            td: ['gridcell'],
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          },
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
          'error',
          {
            allowExpressionValues: true,
            roles: ['tabpanel'],
            tags: [],
          },
        ],
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': [
          'error',
          {
            allowExpressionValues: true,
            handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
          },
        ],
        'jsx-a11y/prefer-tag-over-role': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',

        /**
         * Off for Prettier.
         * @see https://github.com/prettier/eslint-config-prettier/blob/main/index.js
         */
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',

        /**
         * React.
         */
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/checked-requires-onchange-or-readonly': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': 'error',
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'error',
        'react/forbid-elements': 'error',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': 'error',
        'react/forward-ref-uses-ref': 'error',
        'react/function-component-definition': 'off',
        'react/hook-use-state': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-boolean-value': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': 'warn',
        'react/jsx-handler-names': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-depth': 'off',
        // I haven't found any modern benchmarks for disallowing inline arrow
        // functions, and quite frankly it feels like this "optimisation" is just
        // people repeating sentiments from old blog posts.
        'react/jsx-no-bind': [
          'error',
          {
            allowArrowFunctions: true,
          },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': 'warn',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-spread-multi': 'error',
        'react/jsx-props-no-spreading': 'off',
        // Covered by Perfectionist.
        'react/jsx-sort-props': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-invalid-html-attribute': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-namespace': 'error',
        'react/no-object-type-as-default-prop': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'warn',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-exact-props': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': 'error',
        'react/sort-default-props': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': 'error',
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: [GLOB_SRC],
      languageOptions: {
        globals: globals.browser,
      },
      name: 'will-stone/react-hooks',
      ...pluginReactHooks.configs.flat['recommended-latest'],
    },
  ]
}
