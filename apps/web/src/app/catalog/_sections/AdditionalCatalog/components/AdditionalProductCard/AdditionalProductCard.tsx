import React from 'react';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/lib/components/ui';

import { IAdditionalProduct } from '../../i-additional-product';

import styles from './AdditionalProductCard.module.css';

export const AdditionalProductCard: React.FC<IAdditionalProduct> = ({
	name,
	priceRub,
	basicUnit,
	weightGram,
}) => {
	return (
		<article className={cn(styles['grid-layout'])}>
			<h2
				className={cn(
					styles['area-name'],
					'flex items-center',
					'mb-3 md:mb-0',
					'text-4 uppercase text-[#222]',
					'md:text-5',
				)}
			>
				{name}
			</h2>
			<dl
				className={cn(
					styles['area-list'],
					'grid grid-cols-2 grid-rows-1 content-center',
					'md:grid-cols-[auto_minmax(60px,auto)] md:justify-items-end md:gap-x-[55px]',
					'xl:grid-cols-[1fr_auto] xl:justify-items-start',
					'mb-6 md:mb-0',
					'text-[14px] leading-none font-arial text-[#444]',
					'md:text-[16px]/125%',
				)}
			>
				<dt>
					<span>{basicUnit}</span>
					{weightGram ? <span> {`(${weightGram} г)`}</span> : null}
				</dt>
				<dd className={cn('ml-auto', 'uppercase')}>{priceRub} р.</dd>
			</dl>
			<Button variant="primary" text="заказать" className={cn(styles['area-button'], 'max-h-10')} />
		</article>
	);
};
