import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    watch: true,
    globals: true,
    css: true,
    environment: 'happy-dom',
    setupFiles: ['../../test-utils/vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/jesse-website',
      provider: 'v8',
    },
  },
  css: { transformer: 'lightningcss' },
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/jesse-website',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
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
  build: {
    outDir: '../../dist/apps/jesse-website',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
