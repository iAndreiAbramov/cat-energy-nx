import React from 'react';

import { cn } from '@/lib/utils/cn';

import GiftIcon from './assets/gift-icon.svg';

import styles from './GiftCard.module.css';

export const GiftCard: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<article
			className={cn(
				styles['gift-bg-image'],
				'relative',
				'w-full h-[290px] md:h-[200px] xl:h-full xl:w-[246px]',
				'bg-cover bg-no-repeat',
				'after:absolute after:top-0 after:left-0',
				'after:w-full after:h-full after:bg-[rgba(104,183,56,0.85)]',
				className,
			)}
		>
			<div
				className={cn(
					'absolute z-10 top-0	left-0',
					'flex flex-col items-center justify-center gap-12',
					'md:flex-row md:justify-between xl:flex-col xl:justify-center gap-12',
					'w-full h-full md:pl-20 md:pr-40 xl:px-0',
				)}
			>
				<GiftIcon />
				<h3
					className={cn(
						'max-w-[50%] md:max-w-40 xl:max-w-[70%]',
						'text-[#fff] text-[16px]/125% font-arial text-center md:text-start xl:text-center',
					)}
				>
					Закажите все и&nbsp;получите чехол для кота в подарок!
				</h3>
			</div>
		</article>
	);
};
