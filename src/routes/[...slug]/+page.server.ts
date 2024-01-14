import type { ACFPageResultProps } from "$lib/types/pageTypes";
import type { PageServerLoad } from "../$types";
import { PUBLIC_CMS_API_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({fetch, url}) => {
  const slugs = url.pathname.split('/')
  const slug = slugs[slugs.length - 1]

  const pageResponse = await fetch(`${PUBLIC_CMS_API_URL}/pages?slug=${slug}&acf_format=standard`, {
    method: 'GET'
  })
  const page: ACFPageResultProps[] = await pageResponse.json()

  console.log(page)

  if (!page.length) {
    throw error(404, {message: 'Ups, diese Seite konnte nicht gefunden werden.'})
  }

  return {
    page: page[0],
  }

};