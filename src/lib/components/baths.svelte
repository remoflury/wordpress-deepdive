<script lang="ts">
	import type { BathsProps } from '$lib/types/pageTypes';
	import SingleBath from './singleBath.svelte';

	export let content: BathsProps;
</script>

<article class="container content-grid">
	<h2 class="lg:col-span-6">{content.titleH2}</h2>
	{#if content.text}
		<p class="lg:col-span-6 lg:col-start-1">{content.text}</p>
	{/if}

	<div class="grid gap-6 mt-10 lg:grid-cols-3 lg:mt-16">
		<SingleBath content={content.bath1} />
		<SingleBath content={content.bath2} />
		<SingleBath content={content.bath3} />
	</div>
</article>
