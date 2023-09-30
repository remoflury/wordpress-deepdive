<script lang="ts">
	import { page } from '$app/stores';

	console.log($page);
</script>

<section>
	<article class="container">
		<p class="">{$page.status}</p>
		<h1 class="mt-0">Ups, Seite konnte nicht gefunden werden.</h1>
		<hr />
		<p class="mt-4">{$page.error?.message}</p>

		<a href="/" class="underline hover:opacity-80 transition inline-block mt-4"
			>Zurück zur Startseite</a
		>
	</article>
</section>
