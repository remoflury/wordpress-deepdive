<script lang="ts">
	import PageStart from '$lib/components/pageStart.svelte';
	import VisitorCounter from '$lib/components/visitorCounter.svelte';
	import Baths from '$lib/components/baths.svelte';

	export let data;
	const content = data.page.acf;

	// console.log(data);
</script>

<section class="min-h-screen lg:min-h-[unset]">
	<PageStart titleH1={content.titleH1} lead={content.leadText} image={content.headerImage} />
	{#if content.visitorCount.showVisitorCount}
		<VisitorCounter title={content.visitorCount.titleCounterH2} />
	{/if}
</section>

<section class="">
	<Baths content={content.baths} />
</section>
