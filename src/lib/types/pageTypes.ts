// import { WP_REST_API_Page } from "wp-types"

export type PageResultProps = {
  _links: {
    about: {href: string}[],
    author: {
      embeddable: boolean,
      href: string
    }[],
    collection: {
      href: string
    }[],
    curies: {
      href: string,
      name: string,
      templated: boolean
    }[],
    replies: {
      embeddable: boolean,
      href: string
    }[],
    self: {
      href: string
    }[],
  },
  acf: ACFPageResultProps,
  author: number,

  comment_status: string,
  content: {
    protected: false,
    rendered: string,
  },
  date: string,
  date_gmt: string,
  excerpt: {
    protected: false,
    rendered: string
  },
  featured_media: number,
  guid: {rendered: string},
  id: number,
  link: string,
  menu_order: 0,
  meta: {
    footnotes: string
  },
  modified: string,
  modified_gmt: string,
  parent: number,
  ping_status: string,
  slug: string,
  status: string,
  template: string,
  title: {
    rendered: string
  },
  type: string
}

export type ACFPageResultProps = {
  titleH1: string,
  leadText?: string,
  headerImage: ACFImageProps,
  content: {
    titleH2: string,
    text: string
  },
  visitorCount: CounterProps
}

export type CounterProps = {
  showVisitorCount: boolean,
  count: string,
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


