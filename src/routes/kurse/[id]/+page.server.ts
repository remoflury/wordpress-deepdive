import { PUBLIC_CMS_API_URL } from "$env/static/public";
import type { ACFCourseResultProps } from "$lib/types/postTypes";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, fetch}) => {
  const id = params.id

  const response = await fetch(`${PUBLIC_CMS_API_URL}/course/${id}`)
  const data: ACFCourseResultProps = await response.json()

  if (!data.id) {
    throw error(404, 'Kurs existiert nicht.')
  }

  return {
    course: data
  }
};