<script lang="ts">
	import { page } from '$app/stores';
</script>

<svg class="translate-y-1 relative -z-10" viewBox="0 0 1440 320">
	<path
		class="fill-blue-dark"
		d="M0,96L80,96C160,96,320,96,480,85.3C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
	/>
</svg>
<footer class="bg-blue-dark">
	<article class="container">
		<p class="text-offwhite">{$page.data.footer}</p>
	</article>
</footer>
