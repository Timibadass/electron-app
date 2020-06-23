<template>
	<div id="app">
		<app-header />
		<router-view />
	</div>
</template>

<script>
	import appHeader from "@/components/Header.vue";
	export default {
		name: "layout",
		components: {
			appHeader,
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Abel&family=Lobster&family=Staatliches&display=swap");
	html,
	#app {
		min-height: 100vh;
	}

	#app {
		font-family: "Abel", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #fff;
	}

	#app h1 {
		font-family: "Staatliches", cursive;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a.router-link-exact-active {
		color: #42b983;
	}

	.articles__div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	.news--empty {
		height: 250px;
		margin-top: 30px;
		animation: blink 0.8s ease-in-out infinite alternate both;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Lobster", cursive;
	}
</style>
