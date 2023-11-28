import { PUBLIC_CMS_API_URL } from "$env/static/public";
import type { FooterProps } from "$lib/types/globalTypes";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch}) => {

  const getFooter = async () => {
    const response = await fetch(`${PUBLIC_CMS_API_URL}/footer-details/v1/data/`)
    const data = await response.json()
    console.log(data)
    const formattedData: FooterProps = {
      title: data.uberschrift || '',
      mondayToFriday: data.montag_bis_freitag || '',
      saturday: data.samstag || '',
      sunday: data.sonntag || ''
    }
    return formattedData
  }

  return {
    footer: await getFooter()
  }
  
};