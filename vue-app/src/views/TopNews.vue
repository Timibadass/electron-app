<template>
	<section class="top-news">
		<div class="country-selector">
			<select name="country" id="country" v-model="country">
				<option value="Select A country of your choice" selected disabled
					>Select A country of your choice</option
				>
				<option :value="country" v-for="(country, index) in countries" :key="index">
					{{ country.name }}
				</option>
			</select>
			<button @click="fetchTopNews">GO</button>
		</div>
		<div class="articles__div" v-if="articles">
			<h4>Top News from {{ country.name }}</h4>
			<news-card
				v-for="(article, index) in articles"
				:key="index"
				:article="article"
			></news-card>
		</div>
	</section>
</template>

<script>
	import NewsCard from "@/components/NewsCard";
	import { mapActions, mapState } from "vuex";
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
			...mapState(["countries"]),
		},
		methods: {
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				let country = this.country.value;
				let { data } = await this.getTopNews(country);
				this.articles = data.articles;
			},
		},
	};
</script>

<style></style>
