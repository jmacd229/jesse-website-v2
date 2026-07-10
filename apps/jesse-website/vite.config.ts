import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
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
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tsconfigPaths(),
    viteStaticCopy({ targets: [{ src: 'README.md', dest: '.' }] }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: 'test-utils',
        replacement: fileURLToPath(
          new URL('../../test-utils', import.meta.url)
        ),
      },
      {
        find: /^@jmacd229\/design-system\//,
        replacement: `${fileURLToPath(new URL('../../libs/design-system/', import.meta.url))}/`,
      },
      {
        find: '@jmacd229/design-system',
        replacement: fileURLToPath(
          new URL('../../libs/design-system/src/index.ts', import.meta.url)
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
