<script lang="ts">
	import '../css/main.css';
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import FooterComp from '$lib/components/footerComp.svelte';

	export let data;

	console.log(data.footer);
</script>

<svelte:head>
	<title>Wordpress Deep Dive</title>
</svelte:head>

<!-- <nav class="container">{@html data.blocks[0].content.rendered.replaceAll(PUBLIC_CMS_URL, '')}</nav> -->
<main class="min-h-[70vh] overflow-x-hidden">
	<slot />
</main>

<FooterComp />
