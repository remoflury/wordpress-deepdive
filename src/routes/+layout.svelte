<script lang="ts">
	import '../css/main.css';
	import { PUBLIC_CMS_URL } from '$env/static/public';

	export let data;
</script>

<svelte:head>
	<title>Wordpress Deep Dive</title>
</svelte:head>

<nav class="container">{@html data.blocks[0].content.rendered.replaceAll(PUBLIC_CMS_URL, '')}</nav>
<main>
	<slot />
</main>
