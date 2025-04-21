export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	modules: ["@nuxt/eslint", "@nuxt/icon"],
	css: ["@/assets/scss/main.scss"],

	// Настройки Vite для предобработки SCSS
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/_variables.scss" as *;`,
				},
			},
		},
	},
});
