import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const target = (process.env.BUILD_TARGET ?? "frontend") as "frontend" | "backend";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	define: { REGISTRY: JSON.stringify(`@config/components.registry.${target}`) },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./ui/src"),
			"@config": path.resolve(__dirname, "./"),
		},
	},
	build: {
		outDir: `ui/assets/${target}`,
		cssCodeSplit: false,
		emptyOutDir: true,
		rollupOptions: {
			input: "ui/src/main.tsx",
			external: ["react", "react-dom", "react-dom/client"],
			output: {
				format: "iife",
				entryFileNames: "scripts.js",
				assetFileNames: "styles.css",
				globals: {
					"react": "React",
					"react-dom": "ReactDOM",
					"react-dom/client": "ReactDOM",
				},
			},
		},
	},
});
