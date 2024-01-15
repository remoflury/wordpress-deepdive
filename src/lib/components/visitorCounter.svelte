<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import WaveWrapper from './ui/waves/waveWrapper.svelte';
	import viewport from '$lib/utils/viewportObserver';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let title: string;

	const getVisitorCount = async () => {
		const response = await fetch(`${PUBLIC_CMS_URL}/wp-json/snp/v1/number/`);
		const data = await response.json();

		return Math.floor(parseFloat(data));
	};

	const count = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	$: roundedCount = Math.round($count);

	// $: console.log($count);
</script>

<WaveWrapper>
	<article class="bg-blue-dark grid place-content-center">
		{#await count}
			<p class="text-blue-light">Anzeige ladet...</p>
		{:then data}
			<div class="container" data-aos="fade-up">
				<p class="font-bold text-2xl lg:text-3xl text-blue-light text-center mb-4">{title}</p>
				<p
					use:viewport
					on:enterViewport={async () => count.set(await getVisitorCount())}
					on:exitViewport={() => count.set(0)}
					class="text-6xl lg:text-8xl text-offwhite font-bold text-center"
				>
					{roundedCount}
				</p>
			</div>
		{/await}
	</article>
</WaveWrapper>
