<template>
	<section class="top-news">
		<div class="country-selector__div">
			<p>Select a country of your choice</p>
			<select name="country" class="country__selector" id="country" v-model="country">
				<option :value="country" v-for="(country, index) in countries" :key="index">{{ country.name }}</option>
			</select>
		</div>
		<h4 v-if="articles">Top News from {{ country.name }}</h4>
		<div class="articles__div" v-if="articles">
			<news-card v-for="(article, index) in articles" :key="index" :article="article"></news-card>
		</div>
		<div v-else class="top-news--empty">
			<p>Loading...</p>
		</div>
	</section>
</template>

<script>
	import NewsCard from "@/components/NewsCard";
	import { mapActions, mapState, mapGetters } from "vuex";
	export default {
		name: "top-news",
		data() {
			return {
				country: "",
				articles: null
			};
		},
		components: {
			NewsCard
		},
		computed: {
			...mapState(["countries"]),
			...mapGetters(["getRandomCounty"])
		},
		mounted() {
			this.country = this.countries[this.getRandomCounty];
		},
		watch: {
			country: "fetchTopNews"
		},
		methods: {
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				this.articles = null;
				let country = this.country.value;
				let { data } = await this.getTopNews(country);
				this.articles = data.articles;
			}
		}
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
	.top-news--empty {
		height: 250px;
		margin-top: 30px;
		animation: blink 0.8s ease-in-out infinite alternate both;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Lobster", cursive;
	}
</style>
