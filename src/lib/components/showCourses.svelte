<script lang="ts">
	import { PUBLIC_CMS_API_URL } from '$env/static/public';
	import type { ACFCourseResultProps } from '$lib/types/postTypes';
	import CoursePreview from './coursePreview.svelte';

	const fetchCourses = async () => {
		const response = await fetch(`${PUBLIC_CMS_API_URL}/course`);
		const data: ACFCourseResultProps[] = await response.json();
		return data;
	};
</script>

<div class="container">
	{#await fetchCourses()}
		<p>Kurse werden geladen...</p>
	{:then data}
		{#each data as result, index (result.id)}
			<CoursePreview content={result.acf} courseId={result.id} />
		{/each}
	{:catch error}
		<p>Error: {error}</p>
	{/await}
</div>
