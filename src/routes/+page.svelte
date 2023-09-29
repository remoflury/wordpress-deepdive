<script lang="ts">
	import type { ACFPageResultProps } from '$lib/types/pageTypes.js';
	import PageStart from '$lib/components/pageStart.svelte';
	import WaveWrapper from '$lib/components/ui/waves/waveWrapper.svelte';
	import VisitorCounter from '$lib/components/visitorCounter.svelte';

	export let data;
	const content: ACFPageResultProps = data.page.acf;

	console.log(content);

	// console.log(data.posts);
	// console.log(data.blocks);
</script>

<section class="min-h-screen">
	<PageStart titleH1={content.titleH1} lead={content.leadText} image={content.headerImage} />
	{#if content.visitorCount.showVisitorCount}
		<VisitorCounter title={content.visitorCount.titleCounterH2} />
	{/if}
</section>

<section class="">
	<article class="container">
		<h2 class="">{content.content.titleH2}</h2>
	</article>
</section>
