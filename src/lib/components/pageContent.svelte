<script lang="ts">
	import type { ACFPageResultProps } from '$lib/types/pageTypes';
	import Baths from './baths.svelte';
	import PageStart from './pageStart.svelte';
	import VisitorCounter from './visitorCounter.svelte';

	export let content: ACFPageResultProps;
</script>

<section class="min-h-screen lg:min-h-[unset]">
	<PageStart
		titleH1={content.acf.titleH1}
		lead={content.acf.leadText}
		image={content.acf.headerImage}
	/>
	{#if content.acf.visitorCount.showVisitorCount}
		<VisitorCounter title={content.acf.visitorCount.titleCounterH2} />
	{/if}
</section>

<section class="">
	<Baths content={content.acf.baths} />
</section>
