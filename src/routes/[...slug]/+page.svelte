<script lang="ts">
	import PageStart from '$lib/components/pageStart.svelte';

	export let data;

	const content = data.page.acf;

	// console.log(content);
</script>

<section class="container">
	<PageStart titleH1={content.titleH1} lead={content.leadText} image={content.headerImage} />
</section>
