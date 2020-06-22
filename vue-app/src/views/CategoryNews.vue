<template>
	<section class="category">
		<h1>HI</h1>
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
	import NewsCard from "@/components/NewsCard";
	import { mapActions, mapState } from "vuex";
	export default {
		name: "category-news",
		data() {
			return {
				articles: null,
				category: "",
			};
		},
		components: {
			NewsCard,
		},
		computed: {
			...mapState(["categories"]),
		},
		methods: {
			...mapActions(["getTopNews"]),
		},
	};
</script>

<style></style>
