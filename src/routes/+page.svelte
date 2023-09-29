<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';

	export let data;

	// console.log(data.posts);
	// console.log(data.blocks);
</script>

<section class="container">
	<h1>{data.page.title.rendered}</h1>
	<article class="redactor">{@html data.page.content.rendered}</article>

	<h2>Blogbeiträge</h2>
	{#each data.posts as post, index (index)}
		<h3>{post.title.rendered}</h3>
		<article class="redactor">
			{@html post.content.rendered}
		</article>
	{/each}
</section>
