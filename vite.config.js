import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "assets",
    emptyOutDir: false,
    rollupOptions: {
      input: "src/plugin.js",
      output: {
        entryFileNames: "plugin.js",
        assetFileNames: "plugin.css",
      },
    },
    minify: "esbuild",
  },
});
