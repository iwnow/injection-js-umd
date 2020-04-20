import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';

const config = (isProd = false, format = 'umd') => ({
    input: path.resolve(__dirname, './src/index.ts'),
    output: {
        file: `dist/injection-js.${format}${isProd ? '.min' : ''}.js`,
        format: format,
        name: 'injection-js'
    },
    plugins: [
        typescript({ tsconfig: path.resolve(__dirname, './tsconfig.json') }),
        resolve(),
        isProd ? terser({ output: { comments: false } }) : null
    ]
})

export default [config(), config(true), config(false, 'esm')];