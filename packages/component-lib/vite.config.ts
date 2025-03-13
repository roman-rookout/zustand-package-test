import react from '@vitejs/plugin-react';
import path, { resolve } from "path";
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
//import react from '@vitejs/plugin-react-swc';

//import { viteExternalsPlugin } from "vite-plugin-externals";

import { Plugin } from 'vite';
export function logReactPath(): Plugin {
  return {
    name: 'log-react-path',
    configResolved(config) {
      // const reactPath = config.resolve.alias;
      console.log('React is resolved to:', JSON.stringify(config.resolve.alias));
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig((_) => {
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true, //DORON, PART OF LATEST COMBINA
      }),
      logReactPath(),
      // viteExternalsPlugin({
      //   // vue: 'Vue',
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      //   // value support chain, transform to window['React']['lazy']
      //   lazy: ['React', 'lazy']
      // })
    ],
    optimizeDeps: {
      exclude: ['react', 'react-dom']
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        //fileName: 'index',
        formats: ['es', 'umd'], //DORON PART OF UMD COMBINA
        name: 'zus-test',
        //TODO: FOR DORON, this is some combina which is not working but was leading somewhere
        fileName: (format) => `index.${format}.js`
      },
      minify: false,
      copyPublicDir: false
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        //  assetFileNames: 'assets/[name][extname]',
        // entryFileNames: '[name].js'
      },
    },
    resolve: {
      alias: {
        react: path.resolve(__dirname, '../../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
      },
      dedupe: ['react', 'react-dom'],
    },
  }
})

