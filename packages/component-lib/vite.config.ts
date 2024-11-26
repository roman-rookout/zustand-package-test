import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((_) => {
  return {
    plugins: [
      dts({
        insertTypesEntry: true
      }),
      react()
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        fileName: 'index',
        formats: ['es'],
        name: 'zus-test'
      },
      copyPublicDir: false
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'zustand'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          zustand: 'zustand',
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      },
    },
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    // resolve: {
    //   alias: {
    //     react: 'react',
    //     'react-dom': 'react-dom'
    //   }
    // }

    // resolve: {
    //   alias: {
    //     'react': '../../../node_modules' //path.resolve(__dirname, 'node_modules/react'),
    //   },
    // },
  }
})
