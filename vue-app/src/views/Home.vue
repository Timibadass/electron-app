<template>
	<section class="home">
		<h1>Welcome to News App</h1>
		<h4>Displaying Top News from {{ countryInfo.name }}</h4>
		<div class="articles__div" v-if="articles">
			<news-card
				v-for="(article, index) in articles"
				:key="index"
				:article="article"
			></news-card>
		</div>
		<div v-else class="home--empty">
			<p>Loading...</p>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapState, mapMutations } from "vuex";
	import NewsCard from "../components/NewsCard";

	export default {
		data() {
			return {
				articles: "",
				countryInfo: "",
			};
		},
		components: {
			NewsCard,
		},
		created() {
			this.getRandomCounty();
		},
		mounted() {
			this.fetchTopNews();
		},
		computed: {
			...mapState(["countries", "countryIndex"]),
		},
		methods: {
			...mapMutations(["getRandomCounty"]),
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				let countryIndex = this.countryIndex;

				this.countryInfo = this.countries[countryIndex];

				let { data } = await this.getTopNews(
					this.countries[countryIndex].value
				);
				this.articles = data.articles;
			},
		},
	};
</script>

<style scoped>
	.articles__div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.home--empty {
		height: 250px;
		margin-top: 30px;
		animation: blink 0.8s ease-in-out infinite alternate both;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Lobster", cursive;
	}
</style>
