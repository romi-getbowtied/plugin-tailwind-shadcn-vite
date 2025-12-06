import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "assets",
    emptyOutDir: false,
    minify: "esbuild",
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: "plugin.js",
        assetFileNames: (info) => info.name?.endsWith(".css") ? "plugin.css" : "[name][extname]",
        format: "iife"
      }
    }
  }
});
