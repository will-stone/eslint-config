import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginUnicorn from 'eslint-plugin-unicorn'

export function unicorn(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        // This rule is superseded by the unicorn version below
        'no-nested-ternary': 'off',
        // Improve regexes by making them shorter, consistent, and safer
        'unicorn/better-regex': 'warn',
        // Catch error argument name should be "error"
        'unicorn/catch-error-name': 'error',
        // Use destructured variables over properties
        'unicorn/consistent-destructuring': 'warn',
        // Move function definitions to the highest possible scope
        'unicorn/consistent-function-scoping': [
          'error',
          { checkArrowFunctions: false },
        ],
        // Custom Error classes must conform to standard
        'unicorn/custom-error-definition': 'warn',
        // Enforce no spaces between braces
        'unicorn/empty-brace-spaces': 'warn',
        // Enforces a message value to be passed in when throwing built-in Error
        'unicorn/error-message': 'error',
        // Enforces defining escape sequence values with uppercase characters rather
        // than lowercase ones. This promotes readability by making the escaped
        // value more distinguishable from the identifier.
        'unicorn/escape-case': 'warn',
        // Allows todo/fixme to be given expiry conditions and will error when met
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
        'unicorn/expiring-todo-comments': 'error',
        // Don't care how if(blah.length) is checked
        'unicorn/explicit-length-check': 'off',
        // Kebab-case only
        'unicorn/filename-case': 'error',
        // Enforces requiring index file with . instead of ./, ./index or ./index.js
        // Turned off for imports where this can mess with ESM.
        'unicorn/import-index': ['warn', { ignoreImports: true }],
        // Not sure if this is useful yet
        'unicorn/import-style': 'off',
        // Enforce the use of new for all builtins, except String, Number and Boolean
        'unicorn/new-for-builtins': 'warn',
        // Enforce specifying rules to disable in eslint-disable comments
        'unicorn/no-abusive-eslint-disable': 'error',
        // Allow passing a function reference directly to iterator methods
        'unicorn/no-array-callback-reference': 'off',
        // Prefer for…of over Array#forEach(…)
        'unicorn/no-array-for-each': 'warn',
        // Disallow using the this argument in array methods
        'unicorn/no-array-method-this-argument': 'warn',
        // Enforce combining multiple Array#push() into one call
        'unicorn/no-array-push-push': 'warn',
        // for..of is much easier to read
        'unicorn/no-array-reduce': 'error',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
        'unicorn/no-await-expression-member': 'warn',
        // Do not use leading/trailing space between console.log parameters
        'unicorn/no-console-spaces': 'warn',
        // Do not use document.cookie directly
        'unicorn/no-document-cookie': 'error',
        // Disallow empty files
        // TODO turn back on when it can exclude files. As this warns about the
        // auto-generated next-env.d.ts file.
        'unicorn/no-empty-file': 'off',
        // Do not use a for loop that can be replaced with a for-of loop
        'unicorn/no-for-loop': 'warn',
        // Enforce the use of Unicode escapes instead of hexadecimal escapes
        'unicorn/no-hex-escape': 'warn',
        // Require Array.isArray() instead of instanceof Array
        'unicorn/no-instanceof-array': 'warn',
        // The removeEventListener function must be called with a reference to the same
        // function that was passed to addEventListener.
        'unicorn/no-invalid-remove-event-listener': 'error',
        // Disallow identifiers (var names) starting with new.
        // Do not check properties and allow "class" so that "className" is allowed.
        'unicorn/no-keyword-prefix': [
          'error',
          { checkProperties: false, disallowedPrefixes: ['new'] },
        ],
        // This rule adds onto the built-in no-lonely-if rule, which only forbids if
        // statements in else, not in if.
        'unicorn/no-lonely-if': 'warn',
        // This is an improved version of the no-negated-condition ESLint rule that
        // makes it automatically fixable. ESLint did not want to make it fixable.
        'unicorn/no-negated-condition': 'warn',
        // Improved version of the no-nested-ternary ESLint rule, which allows cases
        // where the nested ternary is only one level and wrapped in parens.
        'unicorn/no-nested-ternary': 'warn',
        // Disallow new Array()
        'unicorn/no-new-array': 'warn',
        // Enforce the use of Buffer.from() and Buffer.alloc() instead of the
        // deprecated new Buffer()
        'unicorn/no-new-buffer': 'warn',
        // Allow the use of the null literal, it useful for React components and empty JSON values.
        'unicorn/no-null': 'off',
        // Disallow the use of objects as default parameters
        'unicorn/no-object-as-default-parameter': 'error',
        // Extension to ESLint's no-process-exit rule, that allows process.exit() to
        // be called in files that start with a hashbang → #!/usr/bin/env node
        'unicorn/no-process-exit': 'error',
        // A class with only static members could just be an object instead
        'unicorn/no-static-only-class': 'error',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
        'unicorn/no-thenable': 'error',
        // Disallow assigning this to a variable
        'unicorn/no-this-assignment': 'error',
        // Checking if a value is undefined by using typeof value === 'undefined' is needlessly verbose.
        'unicorn/no-typeof-undefined': 'warn',
        // Disallow awaiting non-promise values
        'unicorn/no-unnecessary-await': 'warn',
        // Disallow [,, foo], use ignored vars instead
        'unicorn/no-unreadable-array-destructuring': 'error',
        // IIFE with parenthesized arrow function body is considered unreadable
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
        'unicorn/no-unreadable-iife': 'error',
        // Uses safe-regex to disallow potentially catastrophic exponential-time regular expressions.
        // Turned off for now, even Sindre doesn't like it: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/153
        'unicorn/no-unsafe-regex': 'off',
        // Recommended config turned this off so I will too
        'unicorn/no-unused-properties': 'off',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
        'unicorn/no-useless-fallback-in-spread': 'warn',
        // Disallow useless array length check
        'unicorn/no-useless-length-check': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
        'unicorn/no-useless-promise-resolve-reject': 'warn',
        // Disallow useless spread
        'unicorn/no-useless-spread': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
        'unicorn/no-useless-switch-case': 'error',
        // ❌ let foo = undefined;
        // ✅ let foo;
        'unicorn/no-useless-undefined': 'warn',
        // Disallow number literals with zero fractions or dangling dots
        'unicorn/no-zero-fractions': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
        'unicorn/number-literal-case': 'warn',
        // Enforce the style of numeric separators by correctly grouping digits
        'unicorn/numeric-separators-style': 'warn',
        // Prefer .addEventListener() and .removeEventListener() over on-functions
        'unicorn/prefer-add-event-listener': 'warn',
        // Prefer .find(…) over the first element from .filter(…)
        'unicorn/prefer-array-find': 'warn',
        // Prefer Array#flat() over legacy techniques to flatten arrays
        'unicorn/prefer-array-flat': 'warn',
        // Prefer .flatMap(…) over .map(…).flat()
        'unicorn/prefer-array-flat-map': 'warn',
        // Prefer Array#indexOf() over Array#findIndex() when looking for the index of an item
        'unicorn/prefer-array-index-of': 'warn',
        // Prefer using Array#some over Array#find when ensuring at least one element
        // in the array passes a given check.
        'unicorn/prefer-array-some': 'error',
        // Prefer .at() method for index access and String#charAt()
        'unicorn/prefer-at': 'warn',
        // Prefer Blob#arrayBuffer() over FileReader#readAsArrayBuffer(…) and Blob#text() over FileReader#readAsText(…)
        'unicorn/prefer-blob-reading-methods': 'error',
        // Prefer String#codePointAt(…) over String#charCodeAt(…)
        // and String.fromCodePoint(…) over String.fromCharCode(…)
        'unicorn/prefer-code-point': 'error',
        // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
        'unicorn/prefer-date-now': 'warn',
        // Prefer default parameters over reassignment
        'unicorn/prefer-default-parameters': 'warn',
        // Prefer Node#append() over Node#appendChild()
        'unicorn/prefer-dom-node-append': 'warn',
        // Prefer using .dataset on DOM elements over .setAttribute(…)
        'unicorn/prefer-dom-node-dataset': 'warn',
        // Prefer node.remove() over parentNode.removeChild(node) and parentElement.removeChild(node)
        'unicorn/prefer-dom-node-remove': 'warn',
        // Prefer .textContent over .innerText
        'unicorn/prefer-dom-node-text-content': 'warn',
        // Prefer EventTarget over EventEmitter.
        'unicorn/prefer-event-target': 'error',
        // Prefer `export…from` when re-exporting
        'unicorn/prefer-export-from': 'warn',
        // Prefer .includes() over .indexOf() when checking for existence or non-existence
        'unicorn/prefer-includes': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
        'unicorn/prefer-json-parse-buffer': 'warn',
        // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
        'unicorn/prefer-keyboard-event-key': 'warn',
        // Disallow ternary operators when simpler logical operator alternatives exist.
        'unicorn/prefer-logical-operator-over-ternary': 'warn',
        // Enforce the use of Math.trunc instead of bitwise operators
        'unicorn/prefer-math-trunc': 'warn',
        // e.g. foo.insertBefore(baz, bar) -> foo.before(bar, 'baz')
        'unicorn/prefer-modern-dom-apis': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
        'unicorn/prefer-modern-math-apis': 'warn',
        // Not ready yet for ESM modules
        // https://github.com/microsoft/TypeScript/issues/33079
        'unicorn/prefer-module': 'off',
        // If a function is equivalent to String, Number, BigInt, Boolean, or Symbol,
        // you should use the built-in one directly. Wrapping the built-in in a function is moot.
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
        'unicorn/prefer-native-coercion-functions': 'warn',
        // Prefer negative index over .length - index
        // for {String,Array,TypedArray}#slice() and Array#splice()
        'unicorn/prefer-negative-index': 'warn',
        // Prefer using the node: protocol when importing Node.js builtin modules
        // TODO seems like this is not well supported by webpack yet
        'unicorn/prefer-node-protocol': 'off',
        // Prefer Number static properties over global ones
        'unicorn/prefer-number-properties': 'warn',
        // Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object
        'unicorn/prefer-object-from-entries': 'warn',
        // Prefer Object.hasOwn(…) over Object.prototype.hasOwnProperty.call(…)
        'unicorn/prefer-object-has-own': 'warn',
        // Prefer omitting the catch binding parameter
        'unicorn/prefer-optional-catch-binding': 'warn',
        // Prefer borrowing methods from the prototype instead of methods from an instance
        'unicorn/prefer-prototype-methods': 'warn',
        // Prefer .querySelector() over .getElementById(),
        // .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
        'unicorn/prefer-query-selector': 'warn',
        // Prefer Reflect.apply() over Function#apply()
        'unicorn/prefer-reflect-apply': 'warn',
        // Prefer RegExp#test() over String#match() and RegExp#exec()
        'unicorn/prefer-regexp-test': 'warn',
        // Prefer Set#has() over Array#includes() when checking for existence or non-existence
        // Set#has() is faster than Array#includes().
        'unicorn/prefer-set-has': 'warn',
        // Prefer using Set#size instead of Array#length
        'unicorn/prefer-set-size': 'warn',
        // Prefer the spread operator over Array.from()
        'unicorn/prefer-spread': 'warn',
        // Prefer String#replaceAll() over regex searches with the global flag
        'unicorn/prefer-string-replace-all': 'warn',
        // Prefer String#slice() over String#substr() and String#substring()
        'unicorn/prefer-string-slice': 'warn',
        // Prefer String#startsWith() & String#endsWith() over more complex alternatives
        'unicorn/prefer-string-starts-ends-with': 'error',
        // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
        'unicorn/prefer-string-trim-start-end': 'warn',
        // Use whatever feels correct in the moment
        'unicorn/prefer-switch': 'off',
        // Prefer ternary expressions over simple if-else statements
        'unicorn/prefer-ternary': ['warn', 'only-single-line'],
        // Prefer top-level await over top-level promises and async function calls
        'unicorn/prefer-top-level-await': 'error',
        // Enforce throwing TypeError in type checking conditions
        'unicorn/prefer-type-error': 'warn',
        // Using complete words results in more readable code. Not everyone knows all your abbreviations.
        // Code is written only once, but read many times.
        'unicorn/prevent-abbreviations': [
          'warn',
          {
            allowList: {
              'next-env.d': true,
              'react-app-env.d': true,
            },
            replacements: {
              props: false,
              ref: false,
              refs: false,
            },
          },
        ],
        // Enforce the use of regex shorthands to improve readability
        'unicorn/regex-shorthand': 'warn',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
        'unicorn/relative-url-style': 'warn',
        // Enforce using the separator argument with Array#join()
        'unicorn/require-array-join-separator': 'warn',
        // Enforce using the digits argument with Number#toFixed()
        'unicorn/require-number-to-fixed-digits-argument': 'warn',
        // Enforce using the targetOrigin argument with window.postMessage()
        'unicorn/require-post-message-target-origin': 'error',
        // No swaps needed yet
        'unicorn/string-content': 'off',
        // Only allow braces when there are variable declaration or function
        // declaration which requires a scope.
        'unicorn/switch-case-braces': ['warn', 'avoid'],
        // Fix whitespace-insensitive template indentation
        'unicorn/template-indent': [
          'warn',
          {
            indent: 2,
          },
        ],
        'unicorn/text-encoding-identifier-case': 'error',
        // Require new when throwing an error
        'unicorn/throw-new-error': 'warn',
      },
    },
  ]
}
