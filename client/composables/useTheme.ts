// composables/useTheme.ts
import { ref, watch, onMounted } from "vue";

export const useTheme = () => {
	// текущая тема
	const theme = ref<"light" | "dark">("light");

	// при загрузке — смотрим localStorage или системную тему
	onMounted(() => {
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") {
			theme.value = saved;
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			theme.value = "dark";
		}
		applyTheme();
	});

	// применяем класс на <html>
	const applyTheme = () => {
		document.documentElement.classList.toggle("dark", theme.value === "dark");
	};

	// переключает тему
	const toggleTheme = () => {
		theme.value = theme.value === "light" ? "dark" : "light";
	};

	// при изменении — сразу сохраняем и применяем
	watch(theme, (newVal) => {
		localStorage.setItem("theme", newVal);
		applyTheme();
	});

	return { theme, toggleTheme };
};
