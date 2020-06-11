<template>
	<header class="header">
		<h3>News App</h3>
		<nav class="header__nav">
			<div class="nav__link">
				<h4>
					<router-link to="/home">Home</router-link>
				</h4>
			</div>
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
