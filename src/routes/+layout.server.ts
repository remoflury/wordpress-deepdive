import { PUBLIC_CMS_API_URL } from "$env/static/public";
import type { FooterProps } from "$lib/types/globalTypes";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch}) => {

  const getFooter = async () => {
    const response = await fetch(`${PUBLIC_CMS_API_URL}/footer`)
    const data = await response.json()
    const formattedData: FooterProps = {
      title: data.opening_hours_title || '',
      hours1: data.monday_to_friday || '',
      hours2: data.saturday_to_sunday || ''
    }
    return formattedData
  }

  return {
    footer: await getFooter()
  }
  
};