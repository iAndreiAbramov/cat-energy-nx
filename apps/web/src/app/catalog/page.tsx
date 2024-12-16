import { AdditionalCatalog } from './_sections/AdditionalCatalog';
import { MainCatalog } from './_sections/MainCatalog';
import { getProducts } from './_utils/get-products';

export default async function PageCatalog() {
	const { mainProducts, additionalProducts } = await getProducts();

	return (
		<>
			<MainCatalog products={mainProducts} />
			<AdditionalCatalog products={additionalProducts} />
		</>
	);
}
