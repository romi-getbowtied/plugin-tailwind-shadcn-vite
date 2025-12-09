import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "./components/src") },
			{ find: "@config", replacement: path.resolve(__dirname, "./") },
		],
	},
	build: {
		outDir: "components/assets",
		cssCodeSplit: false,
		cssMinify: false,
		rollupOptions: {
			input: "components/src/components.tsx",
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
				entryFileNames: "scripts.js",
				assetFileNames: "styles.css",
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
