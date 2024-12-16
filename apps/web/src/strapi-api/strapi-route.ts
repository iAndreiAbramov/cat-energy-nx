import { BASE_URL } from '@/lib/constants/base-url';

export const StrapiRoute = {
  MainProducts: (populate?: string): string =>
    populate
      ? `${BASE_URL}/api/main-products?populate=${populate}`
      : `${BASE_URL}/api/main-products`,
  AdditionalProducts: (populate?: string): string =>
    populate
      ? `${BASE_URL}/api/additional-products?populate=${populate}`
      : `${BASE_URL}/api/additional-products`,
};
