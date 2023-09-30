<script lang="ts">
	export let data;
	const course = data.course.acf;
</script>

<section class="container">
	<article class="redactor">
		<h1>{course.courseName}</h1>
		<p>{course.date}</p>
		<p>{course.description}</p>
		<a href={course.signUp.url} target={course.signUp.target}>{course.signUp.title}</a>
	</article>
</section>
