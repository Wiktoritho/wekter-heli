import { defineConfig } from "vite"
import injectHTML from 'vite-plugin-html-inject';
import { resolve } from 'path';

export default defineConfig(
  {
    base: '/wekter-heli/',
    build: {
    outDir: 'dist',
      assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
      },
    },
  },
  plugins: [
    injectHTML()
  ]
}
)