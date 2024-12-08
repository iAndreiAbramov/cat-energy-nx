import React from 'react';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/lib/components/ui';

import PlusIcon from './assets/plus.svg';

export const MoreProductsCard: React.FC = () => {
	return (
		<article
			className={cn(
				'flex flex-col items-center',
				'md:justify-end',
				'px-[20px] py-[24px] md:mt-[80px]',
				'border-y-[1px] border-y-[#ebebeb]',
				'md:pt-[52px]',
				'md:border-x-[1px] md:border-x-[#ebebeb]',
			)}
		>
			<PlusIcon className={cn('md:mb-auto', 'md:scale-[2]')} />
			<h3
				className={cn(
					'mt-[24px]',
					'md:max-w-[40%] xl:max-w-[60%]',
					'text-[16px]/125% text-center uppercase text-[#111]',
					'md:text-[20px]/110%',
				)}
			>
				Показать еще 100500 товаров
			</h3>
			<p
				className={cn(
					cn(
						'mt-[8px]',
						'md:mb-[86px] md:mt-[22px] md:max-w-[65%] xl:max-w-[80%]',
						'text-[12px]/133% text-center font-arial text-[#444]',
					),
				)}
			>
				На самом деле вкусов гораздо больше!
			</p>
			<Button variant="alter" text="показать все" className={cn('mt-[20px] w-full')} />
		</article>
	);
};
