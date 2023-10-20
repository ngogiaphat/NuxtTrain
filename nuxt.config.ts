// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	pages: true,
	typescript: {
		strict: true,
	},
	devtools: {
		enabled: true,
	},
	modules: [
		"nuxt-icon",
		"nuxt-lodash",
		"@pinia/nuxt",
		// '@nuxtjs/supabase',
		"@nuxtjs/tailwindcss",
		"@pinia-plugin-persistedstate/nuxt",
	],
	runtimeConfig: {
		public: {
			stripePk: process.env.STRIPE_PK_KEY,
		},
	},
	app: {
		head: {
			script: [
				{
					src: "https://js.stripe.com/v3/",
					defer: true,
				},
			],
		},
	},
});