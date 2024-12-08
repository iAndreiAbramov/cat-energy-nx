import buckwheat500 from '../../_assets/buckwheat-500.png';
import buckwheat1000 from '../../_assets/buckwheat-1000.png';
import chicken500 from '../../_assets/chicken-500.png';
import chicken1000 from '../../_assets/chicken-1000.png';
import fish500 from '../../_assets/fish-500.png';
import fish1000 from '../../_assets/fish-1000.png';
import rice500 from '../../_assets/rice-500.png';

import type { IProduct } from './i-product';

export const productsMocks: IProduct[] = [
	{
		id: '1',
		image: chicken500,
		productBrand: 'Cat Energy',
		productCategory: 'PRO',
		productWeight: 500,
		productTaste: 'Курица',
		productPrice: 700,
	},
	{
		id: '2',
		image: chicken1000,
		productBrand: 'Cat Energy',
		productCategory: 'PRO',
		productWeight: 1000,
		productTaste: 'Курица',
		productPrice: 1000,
	},
	{
		id: '3',
		image: fish500,
		productBrand: 'Cat Energy',
		productCategory: 'PRO',
		productWeight: 500,
		productTaste: 'Рыба',
		productPrice: 700,
	},
	{
		id: '4',
		image: fish1000,
		productBrand: 'Cat Energy',
		productCategory: 'PRO',
		productWeight: 1000,
		productTaste: 'Рыба',
		productPrice: 1000,
	},
	{
		id: '5',
		image: buckwheat500,
		productBrand: 'Cat Energy',
		productCategory: 'SLIM',
		productWeight: 500,
		productTaste: 'Гречка',
		productPrice: 700,
	},
	{
		id: '6',
		image: buckwheat1000,
		productBrand: 'Cat Energy',
		productCategory: 'SLIM',
		productWeight: 500,
		productTaste: 'Гречка',
		productPrice: 700,
	},
	{
		id: '7',
		image: rice500,
		productBrand: 'Cat Energy',
		productCategory: 'SLIM',
		productWeight: 500,
		productTaste: 'Рис',
		productPrice: 700,
	},
];
