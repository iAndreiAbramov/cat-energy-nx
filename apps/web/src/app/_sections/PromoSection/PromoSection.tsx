import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils/cn';
import { AppRoute } from '@/lib/constants/app-route';

import imageCanDesktop from './assets/images/index-can-desktop.png';

import styles from './PromoSection.module.css';

export const PromoSection: React.FC = () => {
	return (
		<section
			className={cn(
				styles['promo-section-bg'],
				'content-container',
				'flex flex-col items-center',
				'pb-[20px] pt-[28px] md:min-h-[860px] xl:min-h-[696px]',
			)}
		>
			<h1
				className={cn(
					'md:self-start',
					'md:ml-[10%] md:w-[420px] xl:ml-[80px] xl:mt-[100px]',
					'text-center text-[36px] font-normal leading-none text-white',
					'leading-none md:text-[60px] md:text-left md:text-black',
				)}
			>
				Функциональное питание для котов
			</h1>
			<span
				className={cn(
					'with-text-shadow',
					'md:self-start',
					'mb-[20px] mt-[28px]',
					'md:mb-[50px] md:mt-[40px] md:ml-[10%] xl:ml-[80px]',
					'text-uppercase text-center font-[14px] text-white',
					'md:text-[20px] md:text-black',
				)}
			>
				<style>
					{`@media (min-width: 768px) and (max-width: 1279px) {
							.with-text-shadow {
								text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
							}
						}`}
				</style>
				Занялся собой? Займись котом!
			</span>
			<div
				className={cn(
					'md:absolute md:top-[230px] md:z-[-1] xl:right-[23%] xl:z-20',
					'h-[270px] w-[280px]',
					'md:h-[610px] md:w-[710px]',
					'xl:h-[500px] xl:w-[552px]',
				)}
			>
				<Image
					src={imageCanDesktop}
					alt="cup"
					width={280}
					height={270}
					sizes="(max-width: 768px) 280px, (max-width: 1280px) 710px, 552px"
					style={{ objectFit: 'contain', width: '100%', height: '100%' }}
					priority
				/>
			</div>
			<Link
				href={AppRoute.Program()}
				className={cn(
					'flex items-center justify-center',
					'md:self-start',
					'h-[40px] w-full md:h-[54px] md:w-[244px] md:ml-[10%] xl:ml-[80px]',
					'md:border md:border-black xl:border-none',
					'text-[14px] md:text-[20px] text-white leading-none uppercase active:text-opacity-30',
					'bg-[#68b738] hover:bg-[#5eaa2f] active:bg-[#5eaa2f]',
					'transition-colors duration-300',
				)}
			>
				подобрать программу
			</Link>
		</section>
	);
};
