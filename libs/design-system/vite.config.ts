import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/design-system',
  plugins: [
    react({ compiler: true }),
    viteStaticCopy({ targets: [{ src: 'README.md', dest: '.' }] }),
  ],
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
    tsconfigPaths: true,
    alias: [
      {
        find: 'test-utils',
        replacement: fileURLToPath(
          new URL('../../test-utils', import.meta.url)
        ),
      },
      {
        find: /^@jmacd229\/design-system\//,
        replacement: `${fileURLToPath(new URL('./', import.meta.url))}/`,
      },
      {
        find: '@jmacd229/design-system',
        replacement: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      },
    ],
  },
});
