import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [viteTsconfigPaths() as any],
  test: {
    globals: true,
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: [
      'src/tests/setupTests.ts',
      'src/tests/mockLocalStorage.ts',
      'src/tests/mockResizeObserver.ts',
    ],
    exclude: ['node_modules', 'src/tests', 'src/intro.stories.mdx'],
    coverage: {
      provider: 'c8',
      include: ['src/**/*'],
      exclude: ['src/tests', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      reporter: ['text-summary', 'html'],
      perFile: true,
      thresholdAutoUpdate: true,
      statements: 99.51,
      branches: 97.81,
      functions: 97.75,
      lines: 99.51,
    },
  },
});
