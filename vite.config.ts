import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    console.log({ mode });

    return {
        plugins: [react(), tsconfigPaths()],

        optimizeDeps: {
            include: ['@emotion/react', '@emotion/styled', '@mui/icons-material', '@mui/material'],
        },

        build: {
            outDir: 'build',
            target: 'es2020',

            sourcemap: true,

            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes('node_modules')) {
                            if (id.includes('@mui')) {
                                return 'mui';
                            }

                            if (id.includes('react-hook-form')) {
                                return 'react-hook-form';
                            }
                        }
                    },
                },
            },
        },
    };
});
