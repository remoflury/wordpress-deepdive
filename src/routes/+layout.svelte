<script lang="ts">
	import '../css/main.css';
	import FooterComp from '$lib/components/footerComp.svelte';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<svelte:head>
	<title>Wordpress Deep Dive</title>
</svelte:head>

<Navigation />
<main class="min-h-[70vh] overflow-x-hidden">
	<slot />
</main>

<FooterComp />
