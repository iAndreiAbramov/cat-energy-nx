import { AdditionalCatalog } from './_sections/AdditionalCatalog';
import { MainCatalog } from './_sections/MainCatalog';

export default async function PageCatalog() {
	// const products = await fetch('http://localhost:1337/api/main-products').then((res) => res.json());
	// console.log(products);

	return (
		<>
			<MainCatalog />
			<AdditionalCatalog />
		</>
	);
}
