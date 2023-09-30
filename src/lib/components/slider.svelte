<script lang="ts">
	import type { SlideshowProps } from '$lib/types/pageTypes';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// or only core styles
	import '@splidejs/svelte-splide/css/core';
	import Arrow from '$lib/assets/arrow.svelte';

	export let content: SlideshowProps;

	const slides = [
		content.image1,
		content.image2,
		content.image3,
		content.image4,
		content.image5,
		content.image6
	];

	const options = {
		rewind: true,
		gap: '1rem',
		autoplay: true,
		lazyload: true,
		pauseOnHover: true,
		interval: 4000,
		arrows: true,
		pagination: false
	};
</script>

<article class="bg-blue-dark pb-8">
	<div class="container content-grid">
		<h2 class="text-offwhite lg:col-span-6 lg:mb-12">{content.titleH2}</h2>
		<div class="lg:col-span-8 lg:col-start-3">
			<Splide {options} hasTrack={false}>
				<div class="relative">
					<div class="splide__arrows absolute flex gap-8 -bottom-4 translate-y-full right-0">
						<button
							class="splide__arrow splide__arrow--prev image-slider-btn w-5 aspect-auto rotate-180 hover:opacity-70 transition"
						>
							<Arrow />
						</button>
						<button
							class="splide__arrow splide__arrow--next image-slider-btn w-5 aspect-auto hover:opacity-70 transition"
						>
							<Arrow />
						</button>
					</div>
					<SplideTrack>
						{#each slides as slide, index (index)}
							<SplideSlide>
								<figure class="aspect-video overflow-hidden">
									<img
										class="object-center object-cover w-full h-full"
										src={slide.url}
										alt={slide.alt}
										loading="lazy"
									/>
								</figure>
							</SplideSlide>
						{/each}
					</SplideTrack>
				</div>
			</Splide>
		</div>
	</div>
</article>
