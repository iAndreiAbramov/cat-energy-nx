import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/lib/components/ui';

import { IProduct } from '../../i-product';

import styles from './ProductCard.module.css';

export const ProductCard: React.FC<IProduct & { priority: boolean }> = ({
	productBrand,
	productCategory,
	productPrice,
	productWeight,
	productTaste,
	image,
	priority,
}) => {
	return (
		<article
			className={cn(
				styles['card-areas'],
				'md:flex md:flex-col md:items-center',
				'px-[20px] pb-[32px] pt-[12px] min-h-[280px]',
				'md:px-[36px] md:pb-[40px] md:pt-0 md:min-h-0',
				'border-t border-t-[#ebebeb] md:border-none',
				'md:bg-gradient-to-b md:from-transparent md:from-[80px]',
				'md:via-[#f2f2f2] md:via-[80px] md:to-[#f2f2f2] md:to-100%',
			)}
		>
			<Image
				src={image}
				alt={`${productBrand} ${productCategory} ${productTaste} ${productWeight}`}
				width={140}
				height={164}
				className={cn(`${styles['area-image']}`, 'md:h-[200px] md:w-[168px]')}
				priority={priority}
			/>
			<h3
				className={cn(
					styles['area-title'],
					styles['title-areas'],
					'md:mt-[34px]',
					'text-[16px]/125% uppercase text-[#222]',
					'md:text-[20px]/120%',
				)}
			>
				<span className={cn(`${styles['title-area-brand']}`)}>{productBrand}</span>
				<span className={cn(`${styles['title-area-category']}`)}>{productCategory}</span>
				<span className={cn(`${styles['title-area-weight']}`)}>{`${productWeight} г`}</span>
			</h3>
			<dl
				className={cn(
					styles['area-list'],
					'flex flex-col gap-[6px]',
					'mt-[18px] md:mt-[20px]',
					'md:w-full',
					'font-arial text-[12px]/[133%] text-[#444]',
					'md:text-[16px] md:leading-none',
				)}
			>
				<div className={cn(styles['list-row'])}>
					<dt>Масса</dt>
					<dd>{productWeight} г</dd>
				</div>
				<div className={cn(styles['list-row'])}>
					<dt>Вкус</dt>
					<dd>{productTaste}</dd>
				</div>
				<div className={cn(styles['list-row'])}>
					<dt>Цена</dt>
					<dd>{productPrice} Р.</dd>
				</div>
			</dl>
			<Button
				variant="primary"
				text="заказать"
				className={cn(styles['area-button'], 'mt-[12px] md:mt-[30px]', 'md:w-full')}
			/>
		</article>
	);
};
