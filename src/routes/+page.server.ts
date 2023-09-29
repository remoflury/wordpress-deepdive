import type { PageResultProps } from "$lib/types/pageTypes";
import type { PageServerLoad } from "./$types";
import { PUBLIC_CMS_API_URL } from "$env/static/public";

export const load: PageServerLoad= async ({fetch}) => {

  const getPageRes = async () => {
    const pageResponse = await fetch(`${PUBLIC_CMS_API_URL}/pages/2?acf_format=standard`)
    const page: PageResultProps = await pageResponse.json()
    return page
  }

  const getPostRes = async () => {
    const postResponse = await fetch(`${PUBLIC_CMS_API_URL}/posts`)
    const posts = await postResponse.json()
    return posts
  }

  return {
    page: await getPageRes(),
    posts: await getPostRes(),
  }
};