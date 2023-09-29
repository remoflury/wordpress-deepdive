<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import WaveWrapper from './ui/waves/waveWrapper.svelte';

	export let title: string;
	let counterElem: HTMLParagraphElement;
	let count: number;

	const getVisitorCount = async () => {
		const response = await fetch(`${PUBLIC_CMS_URL}/wp-json/snp/v1/number/`);
		const data = await response.json();
		count = data;
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
		const visitorCount = await getVisitorCount();
		animateValue(counterElem, 0, count, count * 50);
	});
</script>

{#await getVisitorCount()}
	<p>loading...</p>
{:then data}
	<WaveWrapper>
		<article class="bg-blue-dark py-8 grid place-content-center">
			<div class="container">
				<p class="font-bold text-2xl text-blue-light text-center mb-4">{title}</p>
				<p bind:this={counterElem} class="text-6xl text-offwhite font-bold text-center" />
			</div>
		</article>
	</WaveWrapper>
{/await}
