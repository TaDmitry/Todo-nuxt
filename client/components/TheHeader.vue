<template>
	<header class="header">
		<nav class="navigation-area">
			<section class="navigation-area__wrapper main-wrapper">
				<div class="navigation-area__logo">
					<span class="navigation-area__brand">LOGO</span>
				</div>
				<ThemeToggle />
			</section>
		</nav>
	</header>
</template>

<style scoped lang="scss">
.header {
	background-color: var(--header-bg);
	box-shadow: 0px 6px 20px 0px var(--header-bg);
}
</style>
