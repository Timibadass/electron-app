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
		<div v-else class="news--empty">
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
			...mapState(["countries", "countryIndex", "articles"]),
		},
		methods: {
			...mapMutations(["getRandomCounty"]),
			...mapActions(["getTopNews"]),
			async fetchTopNews() {
				let countryIndex = this.countryIndex;

				this.countryInfo = this.countries[countryIndex];
                try {
                    await this.getTopNews(
                        this.countries[countryIndex].value
                    );
                } catch (error) {
                    console.error(error);
                }
			},
		},
	};
</script>
