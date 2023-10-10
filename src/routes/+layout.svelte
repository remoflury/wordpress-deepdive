<script lang="ts">
	import '../css/main.css';
	import FooterComp from '$lib/components/footerComp.svelte';
</script>

<svelte:head>
	<title>Wordpress Deep Dive</title>
</svelte:head>

<main class="min-h-[70vh] overflow-x-hidden">
	<slot />
</main>

<FooterComp />
