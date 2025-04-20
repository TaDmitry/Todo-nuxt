// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	// Подключение модулей (оставляем только eslint)
	modules: ["@nuxt/eslint"],
	// Глобальные стили (SCSS)
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
