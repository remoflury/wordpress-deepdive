import type { PageResultProps } from "$lib/types/pageTypes";
import type { PageServerLoad } from "../$types";
import { PUBLIC_CMS_API_URL } from "$env/static/public";

export const load: PageServerLoad = async ({fetch, url}) => {
  const slugs = url.pathname.split('/')
  const slug = slugs[slugs.length - 1]

  const pageResponse = await fetch(`${PUBLIC_CMS_API_URL}/pages?slug=${slug}&acf_format=standard`, {
    method: 'GET'
  })
  const page: PageResultProps[] = await pageResponse.json()

  return {
    page: page[0]
  }
};