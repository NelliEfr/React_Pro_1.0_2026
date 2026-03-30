import esbuild from 'esbuild';
import path from 'path';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild
    .build({
        plugins: [
            sassPlugin({
                type: 'style',
            }),
        ],
        entryPoints: [path.resolve(process.cwd(), 'src', 'index.ts')],
        bundle: true,
        outdir: 'build',
        jsx: 'automatic',
        target: 'es2020',
        minify: false,
        sourcemap: false,
        format: 'esm',
        external: ['react', 'react-dom', 'react-router'],
    })
    .then(console.log)
    .catch(console.error);
