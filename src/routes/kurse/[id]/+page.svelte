<script lang="ts">
	import type { CourseDetailsProps } from '$lib/types/postTypes.js';
	export let data;
	import { formatDate } from '$lib/utils/generalUtils.js';

	//@ts-ignore
	const course: CourseDetailsProps = data.course.acf;
</script>

<section class="container content-grid">
	<a href="/" title="zurück" class="group flex gap-x-3 items-center mb-6" data-aos="fade-up">
		<svg
			class="rotate-180 -translate-x-1 group-hover:-translate-x-4 transition"
			height="24"
			viewBox="0 -960 960 960"
			width="24"
		>
			<path class="fill-black" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
		</svg>
		<p>zurück</p>
	</a>
	<article class="redactor xl:col-span-9">
		<h1 data-aos="fade-up">{course.courseName}</h1>
		<p class="italic mb-8" data-aos="fade-up">{formatDate(course.date)}</p>
		<p data-aos="fade-up">{course.description}</p>
		<a
			class="mt-8 inline-block"
			href={course.signUp.url}
			target={course.signUp.target}
			data-aos="fade-up"
		>
			{course.signUp.title}
		</a>
	</article>
</section>
