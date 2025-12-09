import tailwindcssAnimate from "tailwindcss-animate";

export default {
	content: ["./**/*.php", "./components/src/**/*.{ts,tsx,js,jsx}"],
	important: "#tw-theme-app",
	plugins: [tailwindcssAnimate],
};
