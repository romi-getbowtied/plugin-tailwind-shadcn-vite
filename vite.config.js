import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  resolve: {
    alias: {
      react: "wp.element",
      "react-dom": "wp.element",
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "assets",
    emptyOutDir: false,
    minify: "esbuild",
    rollupOptions: {
      input: "src/main.tsx",
      external: (id) => id === "react" || id === "react-dom" || id.startsWith("react/") || id.startsWith("react-dom/"),
      output: {
        entryFileNames: "plugin.js",
        assetFileNames: (info) => info.name?.endsWith(".css") ? "plugin.css" : "[name][extname]",
        format: "iife",
        globals: {
          react: "wp.element",
          "react-dom": "wp.element"
        }
      }
    }
  }
});
