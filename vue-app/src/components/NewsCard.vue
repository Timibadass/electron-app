<template>
	<section class="news">
		<div class="news__section">
			<h1 class="news__title">
				<a class="article__link" :href="article.url" target="_blank">
					{{ article.title }}
				</a>
			</h1>
			<h3 class="news__author" v-if="article.author">{{ article.author }}</h3>
			<!-- <p class="article__paragraph">{{ article.description }}</p> -->
			<h5 class="article__published">{{ new Date(article.publishedAt) }}</h5>
		</div>
		<div class="image__container">
			<img class="news__img" :src="article.urlToImage" :alt="article.title" />
		</div>
	</section>
</template>

<script>
	export default {
		name: "news-card",
		props: {
			article: Object,
		},
	};
</script>

<style>
	.news {
		width: 100%;
		display: flex;
		/* flex-wrap: wrap; */
		flex-direction: row;
		align-items: flex-start;
		max-width: 550px;
		box-shadow: 2px 1px 7px 1px #eee;
		padding: 20px 5px;
		box-sizing: border-box;
		margin: 15px 5px;
		border-radius: 4px;
	}
	.news__section {
		width: 100%;
		max-width: 350px;
		margin-right: 5px;
	}
	.image__container {
		width: 100%;
		max-width: 150px;
		max-height: 150px;
	}

	.news__title {
		font-size: 15px;
		text-align: left;
		margin-top: 0;
	}

	.news__author {
		font-size: 14px;
		text-align: left;
		font-weight: normal;
	}
	.article__published {
		text-align: left;
	}

	.news__img {
		max-width: 100%;
		max-height: 180px;
	}

	.article__link {
		text-decoration: none;
		color: inherit;
	}
</style>
