<template>
	<button class="theme-toggle" @click="toggleTheme">
		<Icon v-if="theme === 'light'" name="basil:sun-solid" />
		<Icon v-else id="Icon__moon" name="fa6-solid:moon" />
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

	span {
		color: white;
		width: 28px;
		height: 28px;
	}
}
</style>
