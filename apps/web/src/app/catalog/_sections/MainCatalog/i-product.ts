import { IStrapiImage } from '@/strapi-api/types/i-strapi-image';

export interface IProduct {
  id: number;
  image: IStrapiImage;
  productBrand: string;
  productCategory: string;
  productWeight: number;
  productTaste: string;
  productPrice: number;
}
