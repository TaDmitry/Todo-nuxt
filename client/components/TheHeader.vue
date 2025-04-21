<template>
	<header class="header">
		<nav class="nav">
			<section class="nav-section">
				<div class="nav-section__logo">
					<h1>LOGO</h1>
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

.nav-section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
}

.nav-section__logo h1 {
	color: $white;
}
</style>
