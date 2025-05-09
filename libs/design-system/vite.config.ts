/// <reference types='vitest' />
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/design-system',
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  css: { transformer: 'lightningcss' },
  test: {
    watch: false,
    globals: true,
    css: true,
    environment: 'happy-dom',
    setupFiles: ['../../test-utils/vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/design-system',
      provider: 'v8',
    },
  },
  resolve: {
    alias: [
      {
        find: 'test-utils',
        replacement: fileURLToPath(
          new URL('../../test-utils', import.meta.url)
        ),
      },
    ],
  },
});
