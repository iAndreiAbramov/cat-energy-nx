import { AdditionalCatalog } from './_sections/AdditionalCatalog';
import { MainCatalog } from './_sections/MainCatalog';
import { fetchStrapi } from '@/strapi-api/fetch-strapi';
import { StrapiRoute } from '@/strapi-api/strapi-route';
import { IProduct } from '@/app/catalog/_sections/MainCatalog/i-product';
import { IAdditionalProduct } from '@/app/catalog/_sections/AdditionalCatalog/i-additional-product';

export default async function PageCatalog() {
  const mainProducts: IProduct[] = await fetchStrapi(
    StrapiRoute.MainProducts('*')
  );
  const additionalProducts: IAdditionalProduct[] = await fetchStrapi(
    StrapiRoute.AdditionalProducts()
  );

  return (
    <>
      <MainCatalog products={mainProducts} />
      <AdditionalCatalog products={additionalProducts} />
    </>
  );
}
