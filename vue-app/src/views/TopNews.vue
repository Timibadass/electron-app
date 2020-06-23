<template>
	<section class="top-news">
		<div class="country-selector__div">
			<h4>Select a country of your choice</h4>
			<select
				name="country"
				class="country__selector"
				id="country"
				v-model="country"
			>
				<option
					:value="country"
					v-for="(country, index) in countries"
					:key="index"
					>{{ country.name }}</option
				>
			</select>
		</div>
		<h4 v-if="articles">Top News from {{ country.name }}</h4>
		<div class="articles__div" v-if="articles">
			<news-card
				v-for="(article, index) in articles"
				:key="index"
				:article="article"
			></news-card>
		</div>
		<div v-else class="news--empty">
			<p>Loading...</p>
		</div>
	</section>
</template>

<script>
	import NewsCard from "@/components/NewsCard";
	import { mapActions, mapState, mapMutations } from "vuex";
	export default {
		name: "top-news",
		data() {
			return {
				country: "",
				articles: null,
			};
		},
		components: {
			NewsCard,
		},
		computed: {
			...mapState(["countries", "countryIndex"]),
		},
		created() {
			this.getRandomCounty();
		},
		mounted() {
			this.country = this.countries[this.countryIndex];
		},
		watch: {
			country: "fetchTopNews",
		},
		methods: {
			...mapMutations(["getRandomCounty"]),
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				this.articles = null;
				let country = this.country.value;
				let { data } = await this.getTopNews(country);
				this.articles = data.articles;
			},
		},
	};
</script>

<style>
	.country-selector__div {
		height: 100px;
		margin: 30px 0;
	}
	.country__selector {
		height: 30px;
		width: auto;
	}
</style>
