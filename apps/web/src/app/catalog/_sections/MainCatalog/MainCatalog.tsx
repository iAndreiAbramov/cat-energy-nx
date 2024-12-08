import React from 'react';

import { cn } from '@/lib/utils/cn';

import { MoreProductsCard } from './components/MoreProductsCard';
import { ProductCard } from './components/ProductCard';
import { productsMocks } from './products-mocks';

import styles from './MainCatalog.module.css';

export const MainCatalog: React.FC = () => {
	return (
		<section className={cn('border-t border-y-[#ebebeb]', 'md:border-none')}>
			<h1
				className={cn(
					'content-container',
					'py-[26px] md:py-[64px] lg:py-[74px]',
					'text-[36px] leading-none md:text-[60px]',
				)}
			>
				Каталог продукции
			</h1>
			<ul
				className={cn(
					`${styles['catalog-container']}`,
					'md:grid md:grid-cols-2 md:gap-[60px]',
					'xl:gap-x-20 xl:grid-cols-4 xl:gap-y-[60px]',
				)}
			>
				{productsMocks.map(
					(
						{ productBrand, productPrice, image, productCategory, productWeight, productTaste, id },
						index,
					) => (
						<li key={id}>
							<ProductCard
								id={id}
								image={image}
								productBrand={productBrand}
								productCategory={productCategory}
								productWeight={productWeight}
								productTaste={productTaste}
								productPrice={productPrice}
								priority={index < 3}
							/>
						</li>
					),
				)}
				<MoreProductsCard />
			</ul>
		</section>
	);
};
