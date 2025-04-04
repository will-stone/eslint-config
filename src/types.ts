export type Options = {
  readonly astro?: boolean
  readonly jest?: boolean
  readonly react?: boolean
  readonly tailwind?:
    | {
        config?: string
        cssFiles?: string[]
      }
    | boolean
  readonly typescript?:
    | boolean
    | {
        /**
         * When this option is provided, type-aware rules will be enabled.
         * @see https://typescript-eslint.io/linting/typed-linting/
         */
        tsconfigPath?: string
      }
  readonly vitest?: boolean
}
