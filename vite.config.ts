import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Shared configuration (DRY)
const sharedConfig = {
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./ui/src"),
			"@config": path.resolve(__dirname, "./"),
		},
	},
};

const sharedRollupOutput = {
	format: "iife" as const,
	entryFileNames: "scripts.js",
	assetFileNames: "styles.css",
	globals: {
		react: "React",
		"react-dom": "ReactDOM",
		"react-dom/client": "ReactDOM",
	},
};

const sharedRollupOptions = {
	external: ["react", "react-dom", "react-dom/client"],
};

// Build target from env or default to both
const target = process.env.BUILD_TARGET;

// Frontend bundle config
const frontendConfig: UserConfig = {
	...sharedConfig,
	build: {
		outDir: "ui/assets/frontend",
		cssCodeSplit: false,
		emptyOutDir: true,
		rollupOptions: {
			...sharedRollupOptions,
			input: "ui/src/frontend.tsx",
			output: sharedRollupOutput,
		},
	},
};

// Backend bundle config
const backendConfig: UserConfig = {
	...sharedConfig,
	build: {
		outDir: "ui/assets/backend",
		cssCodeSplit: false,
		emptyOutDir: true,
		rollupOptions: {
			...sharedRollupOptions,
			input: "ui/src/backend.tsx",
			output: sharedRollupOutput,
		},
	},
};

// Export based on BUILD_TARGET env variable
// Usage:
//   npm run build:frontend  -> builds frontend only
//   npm run build:backend   -> builds backend only
//   npm run build           -> builds both sequentially
//   npm run dev             -> watches both
export default defineConfig(
	target === "frontend"
		? frontendConfig
		: target === "backend"
			? backendConfig
			: frontendConfig // Default for single build, use npm scripts for both
);
