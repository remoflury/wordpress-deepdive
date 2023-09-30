<script lang="ts">
	import type { ACFImageProps } from '$lib/types/pageTypes';

	export let titleH1: string;
	export let image: ACFImageProps;
	export let lead: string = '';
</script>

<article class="container content-grid">
	<div class="relative">
		<figure class="aspect-video md:aspect-[2.2/1] lg:aspect-[3/1] overflow-hidden group bleed-out">
			<img
				class="object-center object-cover w-full h-full group-hover:scale-105 duration-700 transition"
				src={image.url}
				alt={image.alt}
			/>
		</figure>
	</div>

	<h1 class="lg:col-span-6">{titleH1}</h1>

	{#if lead}
		<p class="lead lg:col-span-6 lg:col-start-1">{lead}</p>
	{/if}
</article>

<style>
	.bleed-out {
		margin: 0 calc(50% - 50vw);
	}
</style>
