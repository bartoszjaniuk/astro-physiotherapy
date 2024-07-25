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
			fontFamily: {
				questrial: "Questrial",
				lct: "Libre Caslon Text",
			},
			backgroundImage: {
				"hero-pattern":
					"url('https://cdn.pixabay.com/photo/2016/08/28/01/37/fitness-1625279_1280.jpg')",
			},
		},
	},
	plugins: [],
};
