import { TStrapiResponse } from '@/strapi-api/types/t-strapi-response';

export const fetchStrapi = async function <T>(route: string): Promise<T[]> {
  const response: TStrapiResponse<T> = await fetch(route).then((response) =>
    response.json()
  );
  return (
    response?.data?.map((item) =>
      Object.assign({}, item.attributes, { id: item.id })
    ) ?? []
  );
};
