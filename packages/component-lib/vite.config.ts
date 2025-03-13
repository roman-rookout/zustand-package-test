import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig((_) => {
  return {
    plugins: [react(),dts()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'umd'],
        name: 'zus-test',
        fileName: (format) => `index.${format}.js`
      },
      minify: false,
      copyPublicDir: false,
      rollupOptions: {
        external: ['react', 'react-dom'],
      }
    },
  }
})

