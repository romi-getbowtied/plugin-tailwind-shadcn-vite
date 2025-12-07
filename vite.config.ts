import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "assets",
		cssCodeSplit: false,
		cssMinify: false,
		rollupOptions: {
			input: "src/plugin.tsx",
			external: [
				"react",
				"react-dom",
				"react-dom/client",
				"@wordpress/element",
				"@wordpress/components",
				"@wordpress/block-editor",
				// etc...
			],
			output: {
				format: "iife",
				name: "TailwindScopedPlugin",
				entryFileNames: "plugin.js",
				assetFileNames: "plugin.css",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react-dom/client": "ReactDOM",
					"@wordpress/element": "wp.element",
					"@wordpress/components": "wp.components",
					"@wordpress/block-editor": "wp.blockEditor",
				},
			},
		},
	},
});
