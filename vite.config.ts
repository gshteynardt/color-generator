import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'color-generator',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
