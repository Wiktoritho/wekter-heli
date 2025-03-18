import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html";
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(
  {
  base: "/wekter-heli/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    injectHTML()
  ]
}
)