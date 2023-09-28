<script lang="ts">
	export let data;

	console.log(data.page);
</script>

<section class="container">
	<p>{@html data.page.content.rendered}</p>

	<h2>Blogbeiträge</h2>
	{#each data.posts as post, index (index)}
		<h3>{post.title.rendered}</h3>
		<p>{@html post.content.rendered}</p>
	{/each}
</section>
