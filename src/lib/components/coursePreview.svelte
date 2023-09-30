<script lang="ts">
	import type { CourseProps } from '$lib/types/postTypes';

	export let content: CourseProps;
	export let courseId: number;
</script>

<a
	href="/kurse/{courseId}"
	class="flex gap-x-4 justify-between group items-end pb-4 border-b border-blue-dark"
>
	<div class="">
		<h3 class="text-bold">{content.courseName}</h3>
		<p>{content.excerpt}</p>
	</div>
	<div class="w-8 group-hover:translate-x-4 transition">
		<svg class="max-w-full w-full" height="24" viewBox="0 -960 960 960" width="24"
			><path class="fill-black" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg
		>
	</div>
</a>
