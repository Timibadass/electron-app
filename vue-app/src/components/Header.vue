<template>
	<header class="header">
		<h3>News App</h3>
		<nav class="header__nav">
			<h4 class="nav__link">
				<router-link to="/home">Home</router-link>
			</h4>
			<h4 class="nav__link">
				<router-link to="/top-news">Top News</router-link>
			</h4>
			<h4 class="nav__link">
				<router-link to="/categories">News By Category</router-link>
			</h4>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "app-header",
	};
</script>

<style>
	.header {
	}
</style>
