<template>
	<section class="news">
		<!-- <div class="news__section">
			<h1 class="news__title">
				<a class="article__link" :href="article.url" target="_blank">{{ article.title }}</a>
			</h1>
			<h3 class="news__author" v-if="article.author">{{ article.author }}</h3>
			<p class="article__paragraph">{{ article.description }}</p>
			<h5 class="article__published">{{ new Date(article.publishedAt) }}</h5>
		</div>
		<div class="image__container">
			<img
				class="news__img"
				src="../assets/logo.png"
				:data-src="article.urlToImage"
				:alt="article.title"
			/>
		</div> -->
		<div class="article__info">
			<h3 class="article__author">{{ article.author }}</h3>
			<h4 class="article__published">
				{{ $dayjs(article.publishedAt).format("DD-MM-YY") }}
			</h4>
		</div>
		<div class="article__main">
			<h1 class="article__title">
				<a class="article__link" :href="article.url" target="_blank">{{
					article.title
				}}</a>
			</h1>
			<p class="article__paragraph">{{ article.description }}</p>

			<div class="image__container">
				<img
					class="news__img"
					src="../assets/logo.png"
					:data-src="article.urlToImage"
					:alt="article.title"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "news-card",
		props: {
			article: Object,
		},
		mounted() {
			this.lazyLoadImages();
		},
		methods: {
			lazyLoadImages() {
				const images = document.querySelectorAll(".news__img");

				const options = {
					// If the image gets within 50px in the Y axis, start the download.
					root: null, // Page as root
					rootMargin: "0px",
					threshold: 0.1,
				};

				const fetchImage = (url) => {
					return new Promise((resolve, reject) => {
						const image = new Image();
						image.src = url;
						image.onload = resolve;
						image.onerror = reject;
					});
				};

				const loadImage = (image) => {
					const src = image.dataset.src;
					fetchImage(src).then(() => {
						image.src = src;
					});
				};

				const handleIntersection = (entries) => {
					entries.forEach((entry) => {
						if (entry.intersectionRatio > 0) {
							loadImage(entry.target);
						}
					});
				};

				// The observer for the images on the page
				const observer = new IntersectionObserver(handleIntersection, options);

				images.forEach((img) => {
					observer.observe(img);
				});
			},
		},
	};
</script>

<style>
	.news {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 700px;
		box-shadow: 2px 1px 7px 1px #eee;
		padding: 20px 5px;
		box-sizing: border-box;
		margin: 15px 5px;
		border-radius: 4px;
	}

	.article__info {
		width: 100%;
		max-width: 180px;
	}

	.article__author {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #0f0f0f;
	}

	.article__published {
		font-weight: normal;
		font-size: 14px;
		line-height: 24px;
		color: #0f0f0f;
	}

	.article__main {
		width: 100%;
		max-width: 500px;
	}

	.article__title {
		font-weight: 600;
		font-size: 24px;
		line-height: 40px;
		color: #0f0f0f;
	}

	.article__paragraph {
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		color: #0f0f0f;
	}

	.image__container {
		max-width: 560px;
		height: 280px;
	}

	.news__img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
