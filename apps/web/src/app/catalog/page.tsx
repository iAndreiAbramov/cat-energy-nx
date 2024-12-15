import { AdditionalCatalog } from './_sections/AdditionalCatalog';
import { MainCatalog } from './_sections/MainCatalog';
import { fetchStrapi } from '@/strapi-api/fetch-strapi';
import { StrapiRoute } from '@/strapi-api/strapi-route';
import { IProduct } from '@/app/catalog/_sections/MainCatalog/i-product';

export default async function PageCatalog() {
  const products: IProduct[] = await fetchStrapi(StrapiRoute.MainProducts('*'));

  return (
    <>
      <MainCatalog products={products} />
      <AdditionalCatalog />
    </>
  );
}
