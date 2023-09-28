import type { PageResultProps } from "$lib/types/pageTypes";
import type { PageServerLoad } from "./$types";
import { PUBLIC_CMS_API_URL } from "$env/static/public";

export const load: PageServerLoad= async ({fetch}) => {
  const pageResponse = await fetch(`${PUBLIC_CMS_API_URL}/pages/2`, {
    method: 'GET'
  })
  const page: PageResultProps = await pageResponse.json()

  const postResponse = await fetch(`${PUBLIC_CMS_API_URL}/posts`)
  const posts = await postResponse.json()

  return {
    page,
    posts
  }
};