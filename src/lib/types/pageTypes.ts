import type { WP_REST_API_Page } from "wp-types"

export interface ACFPageResultProps extends WP_REST_API_Page {
  acf: {
    titleH1: string,
    leadText?: string,
    headerImage: ACFImageProps,
    content: {
      titleH2: string,
      text: string
    },
    visitorCount: CounterProps,
    baths: BathsProps
  }
}
export type CounterProps = {
  showVisitorCount: boolean,
  // count: string,
  titleCounterH2: string
}

export type ACFImageProps = {
  ID: number;
  id?: number; // Some instances might have it in lowercase
  title: string;
  filename: string;
  url: string;
  link: string,
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  date: string; // Format usually 'Y-m-d H:i:s'
  modified: string;
  mime_type: string;
  type: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail?: ACFImageSizeProps;
    medium?: ACFImageSizeProps;
    large?: ACFImageSizeProps;
    [key: string]: ACFImageSizeProps | undefined;
  };
}

export type ACFImageSizeProps = {
  url: string;
  width: number;
  height: number;
}

export type BathsProps = {
  titleH2: string,
  text?: string,
  bath1: BathProps,
  bath2: BathProps,
  bath3: BathProps,
}

export type BathProps = {
  nameBath: string,
  caption?: string,
  imageBath: ACFImageProps
}