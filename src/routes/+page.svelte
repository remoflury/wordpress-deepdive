<script lang="ts">
	import PageContent from '$lib/components/pageContent.svelte';

	export let data;
	const content = data.page;
</script>

<PageContent {content} />
