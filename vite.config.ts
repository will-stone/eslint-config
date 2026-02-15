import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import package_ from './package.json' with { type: 'json' }

const __dirname = import.meta.dirname

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        // Externalise all node modules as this package is not used in a browser environment.
        /^node:/u,
        // Externalise all deps and peer deps stated in the package.json file.
        ...Object.keys({
          ...package_.dependencies,
          ...package_.peerDependencies,
        })
          // All nested imports need to also be excluded from the build. Typing these all in by hand
          // would be very time consuming, and some could be missed. Regex is used here to ensure
          // all imports are captured.
          .map((dep) => new RegExp(`^${dep}(/.+)?$`, 'u')),
      ],
    },
  },
  plugins: [dts({ entryRoot: 'src', include: ['src'], rollupTypes: true })],
})
