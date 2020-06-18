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
	</section>
</template>

<script>
	import { mapActions, mapState } from "vuex";
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
		mounted() {
			this.fetchTopNews();
		},
		computed: {
			...mapState(["countries"]),
		},
		methods: {
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				let countriesLength = this.countries.length;
				let countryIndex = Math.floor(Math.random() * (countriesLength - 1) + 1);

				this.countryInfo = this.countries[countryIndex];

				let { data } = await this.getTopNews(this.countries[countryIndex].value);
				this.articles = data.articles;
			},
		},
	};
</script>

<style>
	.articles__div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
