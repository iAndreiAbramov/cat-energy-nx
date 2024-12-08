import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils/cn';

import { IconArrow } from '../../icons';

import type { MotivationCardProps } from './types/motivation-card-props';

import styles from './MotivationCard.module.css';

export const MotivationCard: React.FC<MotivationCardProps> = ({
	title,
	icon,
	text,
	linkText,
	linkHref,
}) => {
	return (
		<article
			className={cn(
				styles['grid-areas'],
				'items-center',
				'p-[22px] md:p-[76px_62px_52px_52px] xl:p-[48px_52px_56px]',
				'bg-[#f2f2f2]',
			)}
		>
			<div
				className={cn(styles['area-image'], 'svg-container', 'h-[54px] md:h-[210px] xl:h-[106px]')}
			>
				{icon}
			</div>
			<h3
				className={cn(
					styles['area-title'],
					'ml-[20px] md:ml-0 xl:ml-[62px]',
					'text-[24px]/[154%] font-normal uppercase md:text-[36px] md:leading-none',
				)}
			>
				{title}
			</h3>
			<p
				className={cn(
					styles['area-text'],
					'md:self-start',
					'mt-[22px] border-b border-b-[#D9D9D9] pb-[24px] xl:mt-[40px]',
					'md:border-none md:pb-0',
					'font-arial text-[14px] text-[#444] md:text-[16px]/[150%]',
				)}
			>
				{text}
			</p>
			<Link
				href={linkHref}
				className={cn(
					styles['area-link'],
					'flex items-center gap-[16px]',
					'mt-[16px] md:mt-48px xl:mt-[24px]',
					'transition-opacity duration-300 hover:opacity-80 active:opacity-30',
				)}
			>
				<span className={cn('text-[16px] uppercase leading-none text-black md:text-[20px]')}>
					{linkText}
				</span>
				<IconArrow />
			</Link>
		</article>
	);
};
