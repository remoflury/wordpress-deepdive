<script lang="ts">
	import { PUBLIC_CMS_API_URL } from '$env/static/public';
	import type { ACFCourseResultProps, CourseProps } from '$lib/types/postTypes';
	import CoursePreview from './coursePreview.svelte';

	const fetchCourses = async () => {
		const response = await fetch(`${PUBLIC_CMS_API_URL}/course`);
		const data: ACFCourseResultProps[] = await response.json();
		//@ts-ignore
		const courses: CourseProps[] = data.map((course) => {
			return { course: course.acf, id: course.id };
		});
		return courses;
	};
</script>

<div class="container content-grid overflow-y-hidden">
	{#await fetchCourses()}
		<p>Kurse werden geladen...</p>
	{:then data}
		{#each data as item, index (index)}
			<CoursePreview content={item.course} courseId={item.id} />
		{/each}
	{:catch error}
		<p>Error: {error}</p>
	{/await}
</div>
