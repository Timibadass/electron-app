<template>
	<section class="category">
		<div class="category-selector__div">
			<h4>Select a category of your choice</h4>
			<select
				name="category"
				id="category"
				class="category__selector"
				v-model="category"
			>
				<option
					:value="category"
					v-for="(category, index) in categories"
					:key="index"
					>{{ category }}</option
				>
			</select>
		</div>
		<h4 v-if="articles">
			Displaying
			<span class="category__name">
				{{ category }}
			</span>
			news all over the world
		</h4>
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
	import { mapActions, mapState } from "vuex";
	export default {
		name: "category-news",
		data() {
			return {
				articles: null,
				category: "general",
			};
		},
		components: {
			NewsCard,
		},
		watch: {
			category: "fetchEveryNews",
		},
		computed: {
			...mapState(["categories"]),
		},
		mounted() {
			this.fetchEveryNews();
		},
		methods: {
			...mapActions(["getEveryNews"]),
			async fetchEveryNews() {
				let query = this.category;
				this.articles = null;

				try {
					let { data } = await this.getEveryNews(query);
					this.articles = data.articles;
				} catch (error) {
					console.error(error);
				}
			},
		},
	};
</script>

<style>
	.category-selector__div {
		height: 100px;
		margin: 30px 0;
	}
	.category__selector {
		height: 30px;
		width: auto;
	}
	.category__name {
		text-transform: capitalize;
	}

	.category__name:hover {
		background-color: yellow;
		font-weight: bolder;
		text-decoration-color: teal;
	}
</style>
