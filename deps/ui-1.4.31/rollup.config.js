import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';
const ESM = process.env.ESM;

const argv = process.argv.slice(2);
const BUNDLE_ANALYZE = argv.indexOf('--config-analyze') !== -1;

const extensions = ['.js', '.jsx'];

const plugins = [
  progress(),
  peerDepsExternal(),
  resolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    babelHelpers: 'runtime',
    include: ['src/**/*'],
    exclude: 'node_modules/**',
  }),
  image(),
  json(),
  filesize(),
  BUNDLE_ANALYZE && visualizer({ filename: 'bundle-analysis.html', open: true, gzipSize: true }),
];

console.log(`Building ${pkg.name} v${pkg.version}`);
export default [
  {
    input: 'src/index.js',
    output: { file: ESM ? pkg.module : pkg.main, format: ESM ? 'es' : 'cjs' },
    plugins,
  },
];
