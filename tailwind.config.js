import tailwindcssAnimate from "tailwindcss-animate";

export default {
	// Only scan entry points - Tailwind will follow imports from there (tree-shaking)
	// This ensures CSS only includes styles for components actually imported in the registry
	content: [
		"./**/*.php",
		"./components.registry.tsx",
		"./ui/src/components.tsx",
		"./ui/src/styles/**/*.css",
	],
	important: "#tw-theme-app",
	plugins: [tailwindcssAnimate],
};
