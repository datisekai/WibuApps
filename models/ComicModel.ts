export interface NewChapter {
  name: string;
  time: string;
  href: string;
}

export interface ComicModel {
  id?: string;
  href: string;
  name: string;
  img: string;
  uid?: string;
  description?: string;
  newChapter?: NewChapter;
  newChapters?: NewChapter[];
}

export interface HomeAxios {
  data: ComicModel[];
  totalPage: number;
}

export interface BannerModel extends ComicModel {
  info: {
    [key: string]: string;
  };
}

export interface ReadChap {
  img: string;
  alt: string;
}
