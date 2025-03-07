import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from "vite-plugin-singlefile"
import path from 'path';
//import { viteExternalsPlugin } from 'vite-plugin-externals';

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

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), viteSingleFile(), logReactPath(),
      //    viteExternalsPlugin({
      //   vue: 'Vue',
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      //   // value support chain, transform to window['React']['lazy']
      //   lazy: ['React', 'lazy']
      // }, { disableInServe: true })
    ],
    optimizeDeps: {
      include: ['@test/component-lib']
    },
    rollupOptions: {
      output: {
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
       // assetFileNames: 'assets/[name][extname]',
       // entryFileNames: '[name].js',
      },
    },
    resolve: {
      alias: {
        react: path.resolve(__dirname, '../../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
      },
      dedupe: ["react", "react-dom"],
    },
  }
})
