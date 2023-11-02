<script lang="ts">
	import type { BathProps } from '$lib/types/pageTypes';

	export let content: BathProps;
	export let index: number = 0;
</script>

<article
	class="group bg-gradient-to-b from-blue-dark from-75% to-75% to-transparent p-4 lg:p-6 lg:from-70% lg:to-70%"
	data-aos="fade-up"
	data-aos-delay={index * 200 + 150}
>
	<h3 class="text-offwhite mb-6">
		{content.nameBath}
	</h3>
	<figure class="">
		<div class="aspect-video overflow-hidden shadow-lg">
			<img
				class="object-cover object-center w-full h-full group-hover:scale-105 transition duration-700"
				src={content.imageBath.url}
				alt={content.imageBath.alt}
				loading="lazy"
			/>
		</div>
		{#if content.caption}
			<figcaption class="italic text-sm mt-1 lg:mt-3 lg:text-base">{content.caption}</figcaption>
		{/if}
	</figure>
</article>
