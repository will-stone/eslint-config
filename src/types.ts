export type Options = {
  readonly astro?: boolean
  readonly jest?: boolean
  readonly react?: boolean
  readonly tailwind?: boolean
  readonly typescript?:
    | boolean
    | {
        /**
         * When this option is provided, type-aware rules will be enabled.
         * @see https://typescript-eslint.io/linting/typed-linting/
         */
        tsconfigPath?: string | readonly string[]
      }
  readonly vitest?: boolean
}
