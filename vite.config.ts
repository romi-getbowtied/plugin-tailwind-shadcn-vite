import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "assets",
    rollupOptions: {
      input: "src/plugin.ts",
      output: {
        entryFileNames: "plugin.js",
        assetFileNames: "plugin.css",
      },
    },
  },
});

