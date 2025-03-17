import { defineConfig } from "vite"

export default defineConfig(
  {
  base: "/wekter-heli/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}
)