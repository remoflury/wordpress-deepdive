<script lang="ts">
	import PageStart from '$lib/components/pageStart.svelte';
	import VisitorCounter from '$lib/components/visitorCounter.svelte';
	import Baths from '$lib/components/baths.svelte';
	import PageContent from '$lib/components/pageContent.svelte';

	export let data;
	const content = data.page;
</script>

<PageContent {content} />
