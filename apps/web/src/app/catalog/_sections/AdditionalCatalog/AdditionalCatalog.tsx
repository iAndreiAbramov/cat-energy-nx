import React from 'react';

import { cn } from '@/lib/utils/cn';

import { additionalProductsMocks } from './additional-products-mocks';
import { AdditionalProductCard } from './components/AdditionalProductCard';
import { GiftCard } from './components/GiftCard';

import styles from './AdditionalCatalog.module.css';

export const AdditionalCatalog: React.FC = () => {
	return (
		<section
			className={cn(
				styles['grid-layout'],
				'content-container',
				'pb-[36px] md:pb-[76px] xl:pb-[86px]',
			)}
		>
			<h2
				className={cn(
					styles['area-title'],
					'mb-[36px] mt-[24px]',
					'md:mb-[80px] md:mt-[68px] xl:mt-[76px]',
					'text-[24px] leading-none',
					'md:text-[36px]',
				)}
			>
				Дополнительные товары
			</h2>
			<ul className={styles['area-list']}>
				{additionalProductsMocks.map(({ name, basicUnit, weightGram, priceRub }) => (
					<li
						key={name}
						className={cn(
							'pb-5 pt-3 md:px-9 md:py-7 xl:px-0 xl:py-4',
							'border-t border-t-[#CDCDCD] last-of-type:border-b last-of-type:border-b-[#CDCDCD]',
							'md:border-x md:border-x-[#CDCDCD] xl:border-x-0',
						)}
					>
						<AdditionalProductCard
							name={name}
							basicUnit={basicUnit}
							priceRub={priceRub}
							weightGram={weightGram}
						/>
					</li>
				))}
			</ul>
			<GiftCard className={cn(styles['area-gift'], 'mt-9 md:mt-[68px] xl:mt-0')} />
		</section>
	);
};
