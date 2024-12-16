import { notFound } from 'next/navigation';

import { fetchStrapi } from '@/strapi-api/fetch-strapi';
import { StrapiRoute } from '@/strapi-api/strapi-route';

import { IAdditionalProduct } from '../_sections/AdditionalCatalog/i-additional-product';
import { IProduct } from '../_sections/MainCatalog/i-product';

export const getProducts = async () => {
	try {
		const [mainProducts, additionalProducts] = await Promise.all([
			fetchStrapi<IProduct>(StrapiRoute.MainProducts('*')),
			fetchStrapi<IAdditionalProduct>(StrapiRoute.AdditionalProducts()),
		]);

		return { mainProducts, additionalProducts };
	} catch {
		notFound();
	}
};
