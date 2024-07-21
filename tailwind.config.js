/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			colors: {
				primary: "#6EA3CA",
				text: "#323130",
				bgColor: "#d9d9d9",
			},
		},
	},
	plugins: [],
};
