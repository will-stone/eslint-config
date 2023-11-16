export type Options = {
  /**
   * When this option is provided, type-aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  readonly tsconfigPath?: string | readonly string[]
}
