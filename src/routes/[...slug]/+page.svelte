<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import PageStart from '$lib/components/pageStart.svelte';
	import type { ACFPageResultProps } from '$lib/types/pageTypes.js';

	export let data;

	const content: ACFPageResultProps = data.page.acf;

	console.log(content);
</script>

<section class="container">
	<PageStart titleH1={content.titleH1} lead={content.leadText} image={content.headerImage} />
</section>
