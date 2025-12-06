import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({
    jsxRuntime: "classic"
  })],
  build: {
    outDir: "assets",
    emptyOutDir: false,
    minify: "esbuild",
    rollupOptions: {
      input: "src/main.tsx",
      external: (id) => id === "react" || id === "react-dom" || id.startsWith("react/") || id.startsWith("react-dom/"),
      output: {
        entryFileNames: "plugin.js",
        assetFileNames: (info) => info.name?.endsWith('.css') ? "plugin.css" : info.name || "asset",
        format: "iife",
        globals: {
          "react": "wp.element",
          "react-dom": "wp.element"
        }
      }
    }
  }
});
