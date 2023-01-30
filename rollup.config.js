import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

import del from 'rollup-plugin-delete';

const externalDependencies = Object.keys({
  ...pkg.peerDependencies,
  ...pkg.dependencies,
});

const extensions = ['.tsx', '.ts'];

export default [
  {
    input: ['./src/index.ts'],
    external: ['@babel/runtime', ...externalDependencies],
    plugins: [
      del({ targets: 'dist/*', runOnce: true }),
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      terser(),
    ],
    output: [
      {
        dir: pkg.publishConfig.main,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
];
