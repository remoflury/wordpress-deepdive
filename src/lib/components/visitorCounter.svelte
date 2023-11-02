<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import WaveWrapper from './ui/waves/waveWrapper.svelte';
	import viewport from '$lib/utils/viewportObserver';

	export let title: string;
	let counterElem: HTMLParagraphElement;
	let count: number = 0;

	const getVisitorCount = async () => {
		const response = await fetch(`${PUBLIC_CMS_URL}/wp-json/snp/v1/number/`);
		const data = await response.json();
		return data;
	};

	function animateValue(elem: HTMLElement, start: number, end: number, duration: number) {
		let startTimestamp: number | null = null;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			elem.innerHTML = Math.floor(progress * (end - start) + start).toString();
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	onMount(async () => {
		// count = await getVisitorCount();
		// animateValue(counterElem, 0, count, count * 40);
	});

	$: if (count) {
		animateValue(counterElem, 0, count, count * 40);
	}
</script>

<WaveWrapper>
	<article class="bg-blue-dark grid place-content-center">
		{#await count}
			<p class="text-blue-light">Anzeige ladet...</p>
		{:then data}
			<div class="container" data-aos="fade-up">
				<p class="font-bold text-2xl lg:text-3xl text-blue-light text-center mb-4">{title}</p>
				<p
					bind:this={counterElem}
					use:viewport
					on:enterViewport={async () => {
						count = await getVisitorCount();
					}}
					on:exitViewport={() => (count = 0)}
					class="text-6xl lg:text-8xl text-offwhite font-bold text-center"
				/>
			</div>
		{/await}
	</article>
</WaveWrapper>
