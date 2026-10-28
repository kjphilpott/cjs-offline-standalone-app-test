import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: false, // Keeps your code un-minified and clean
    rollupOptions: {
      // Specify your custom entry HTML file here
      input: {
        main: resolve(__dirname, 'circuitjs.html'), 
      },
      output: {
        compact: false,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
