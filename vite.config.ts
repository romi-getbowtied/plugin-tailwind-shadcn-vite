import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./ui/src"),
			"@config": path.resolve(__dirname, "./"),
		},
	},
	build: {
		outDir: "ui/assets",
		cssCodeSplit: false,
		rollupOptions: {
			input: "ui/src/components.tsx",
			external: ["react", "react-dom", "react-dom/client"],
			output: {
				format: "iife",
				entryFileNames: "scripts.js",
				assetFileNames: "styles.css",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react-dom/client": "ReactDOM",
				},
			},
		},
	},
});
