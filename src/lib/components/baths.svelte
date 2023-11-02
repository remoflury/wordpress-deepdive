<script lang="ts">
	import type { BathsProps } from '$lib/types/pageTypes';
	import SingleBath from './singleBath.svelte';

	export let content: BathsProps;

	const baths = [content.bath1, content.bath2, content.bath3];
</script>

<article class="container content-grid">
	<h2 class="lg:col-span-6" data-aos="fade-up">{content.titleH2}</h2>
	{#if content.text}
		<p class="lg:col-span-6 lg:col-start-1" data-aos="fade-up">{content.text}</p>
	{/if}

	<div class="grid gap-6 mt-10 lg:grid-cols-3 lg:mt-16">
		{#each baths as bath, index}
			<SingleBath content={bath} {index} />
		{/each}
	</div>
</article>
