import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig((_) => {
  return {
    plugins: [
      react(),
      dts()],
    optimizeDeps: {
      exclude: ['react', 'react-dom']
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'umd'], //DORON PART OF UMD COMBINA
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

