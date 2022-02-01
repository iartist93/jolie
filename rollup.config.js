import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json';

export default {
  input: 'src/install.js',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true,
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions: ['.js', '.vue', '.jsx', '.json', '.ts'] }),
    vue(),
    postcss(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    commonjs(),
  ],
};
