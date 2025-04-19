import type { TSESLint } from '@typescript-eslint/utils'
import pluginPackageJson from 'eslint-plugin-package-json'

// eslint-disable-next-line require-await
export async function packageJson(): Promise<TSESLint.FlatConfig.Config[]> {
  return [pluginPackageJson.configs.recommended]
}
