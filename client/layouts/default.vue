<template>
	<div class="layout">
		<TheHeader />
		<main>
			<NuxtPage />
		</main>
		<TheFooter />
	</div>
</template>

<script setup>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<style scoped lang="scss">
main {
	flex: auto;
}
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: var(--bg);
}
</style>
