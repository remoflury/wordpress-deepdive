<script lang="ts">
	export let data;

	console.log(data.page);
</script>

<section class="container">
	<h1>{data.page.title.rendered}</h1>
	<p>{@html data.page.content.rendered}</p>
</section>
