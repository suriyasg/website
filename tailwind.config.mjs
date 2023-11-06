/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"mora-purple": {
					50: "hsl(310, 100%, 98%)",
					100: "hsl(310, 100%, 95%)",
					200: "hsl(310, 100%, 90%)",
					300: "hsl(312, 100%, 83%)",
					400: "hsl(312, 100%, 72%)",
					500: "hsl(312, 93%, 61%)",
					600: "hsl(313, 77%, 49%)",
					700: "hsl(314, 80%, 40%)",
					800: "hsl(315, 77%, 33%)",
					900: "hsl(316, 71%, 28%)",
					950: "hsl(316, 100%, 22%)",
				},
				"mora-black": "#020903",
			},
		},
	},
	plugins: [],
};
