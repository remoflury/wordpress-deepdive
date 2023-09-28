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