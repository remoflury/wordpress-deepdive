<script lang="ts">
	import type { CourseDetailsProps } from '$lib/types/postTypes';
	import { formatDate } from '$lib/utils/generalUtils';

	export let content: CourseDetailsProps;
	export let courseId: number;
</script>

<a
	href="/kurse/{courseId}"
	class="flex gap-x-4 justify-between group items-end py-4 xl:py-6 first:pt-0 border-b border-blue-dark xl:col-span-7"
	data-aos="fade-up"
>
	<div class="">
		<h3 class="text-bold">{content.courseName}</h3>
		<p>{content.excerpt}</p>
		<p class="italic">{formatDate(content.date)}</p>
	</div>
	<div class="w-8 group-hover:translate-x-4 transition">
		<svg class="max-w-full w-full" height="24" viewBox="0 -960 960 960" width="24"
			><path class="fill-black" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg
		>
	</div>
</a>
