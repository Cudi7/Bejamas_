// export interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   currency: string;
//   image: {
//     src: string;
//     alt: string;
//   };
//   bestseller: boolean;
//   featured: boolean;
//   description: string;
//   people_also_buy: [Product];
//   updated_at: Date | string;
//   created_at: Date | string;
// }

export interface Products {
  data: Data;
}
export interface Data {
  current_page: number;
  data?: DataEntity[] | null;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links?: LinksEntity[] | null;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: null;
  to: number;
  total: number;
}
export interface DataEntity {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  description: string;
  people_also_buy?: (PeopleAlsoBuyEntity | null)[] | null;
  updated_at: string;
  created_at: string;
}
export interface Image {
  src: string;
  alt: string;
}
export interface PeopleAlsoBuyEntity {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  description: string;
  people_also_buy?: null[] | null;
  updated_at: string;
  created_at: string;
}
export interface LinksEntity {
  url?: string | null;
  label: string;
  active: boolean;
}

export interface SortBy {
  key: string;
  type: string;
}
