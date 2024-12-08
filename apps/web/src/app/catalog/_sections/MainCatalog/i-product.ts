import { StaticImageData } from 'next/image';

export interface IProduct {
	id: string;
	image: StaticImageData;
	productBrand: string;
	productCategory: string;
	productWeight: number;
	productTaste: string;
	productPrice: number;
}
