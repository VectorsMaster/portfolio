import typescript from '@rollup/plugin-typescript';
import nodeResolve  from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/script.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    nodeResolve({ browser: true }),
    terser()
  ],
};
