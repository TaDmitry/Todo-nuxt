<template>
	<button @click="toggleTheme" class="theme-toggle">
		<span v-if="theme === 'light'">🌞</span>
		<span v-else>🌜</span>
	</button>
</template>

<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";
const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
}
</style>
