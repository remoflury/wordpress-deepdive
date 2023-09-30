import type { WP_REST_API_Post } from "wp-types";

export interface ACFCourseResultProps extends WP_REST_API_Post {
  acf: CourseProps
}

export type CourseProps = {
  courseName: string,
  excerpt: string,
  description: string,
  date: string,
  signUp: {
    title: string,
    url: string,
    target: string
  }
}