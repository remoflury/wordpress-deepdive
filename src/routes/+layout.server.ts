import { PUBLIC_CMS_API_URL } from "$env/static/public";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch}) => {

  const getFooter = async () => {
    const response = await fetch(`${PUBLIC_CMS_API_URL}/footer`)
    const data = await response.json()
    return data
  }

  // const getNavRes =async () => {
  //   const blockResponse = await fetch(`${PUBLIC_CMS_API_URL}/navigation`)
  //   const blocks = await blockResponse.json()
  //   return blocks
  // }

  // return {
  //   blocks: await getNavRes()
    
  // }
  return {
    footer: await getFooter()
  }
  
};