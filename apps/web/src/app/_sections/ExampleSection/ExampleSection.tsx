'use client';

import React from 'react';

import { useInnerWidth } from '@/lib/hooks/useInnerWidth';
import { cn } from '@/lib/utils/cn';
import { Breakpoint } from '@/lib/constants/breakpoint';

import { DesktopSlider } from './components/DesktopSlider';
import { MobileSlider } from './components/MobileSlider';

import styles from './ExampleSection.module.css';

export const ExampleSection: React.FC = () => {
	const innerWidth = useInnerWidth();

	return (
		<section
			className={cn(
				styles['section-grid'],
				'content-container',
				'pb-[40px] pt-[24px]',
				'md:pb-[56px] md:pt-[44px]',
				'xl:pb-[65px] xl:pt-0',
				'bg-[#EAEAEA]',
				'md:bg-gradient-to-b md:from-[#FFFFFF] md:from-[58%] md:via-[#EAEAEA] md:via-[58%] md:to-[#EAEAEA]',
				'xl:bg-gradient-to-b xl:from-[#FFFFFF] xl:from-[30%] xl:via-[#EAEAEA] xl:via-[30%] xl:to-[#EAEAEA]',
			)}
		>
			<h2
				className={cn(
					styles['area-title'],
					'xl:flex xl:items-center',
					'text-[36px]/[111%] font-normal text-black',
					'md:text-[60px]/[100%]',
				)}
			>
				Живой пример
			</h2>
			<p
				className={cn(
					styles['area-text'],
					'xl:flex xl:items-center',
					'mt-[40px] md:mt-[64px] xl:mt-0',
					'font-arial text-[14px]/[130%] text-[#444]',
					'md:text-[16px]/[150%]',
				)}
			>
				Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim.
				Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и
				по-прежнему спит по 16 часов в день.
			</p>
			<dl
				className={cn(
					styles['area-list'],
					styles['dl-grid-layout'],
					'mt-[20px] md:mt-[54px] xl:mt-0',
				)}
			>
				<div className={cn(styles['first-area'], styles['bordered-item'])}>
					<dd className={styles['bordered-item_description']}>5&nbsp;КГ</dd>
					<dt className={styles['bordered-item_title']}>снижение веса</dt>
				</div>
				<div className={cn(styles['second-area'], styles['bordered-item'])}>
					<dd className={styles['bordered-item_description']}>60&nbsp;ДНЕЙ</dd>
					<dt className={styles['bordered-item_title']}>затрачено времени</dt>
				</div>
				<div
					className={cn(
						styles['third-area'],
						'flex gap-1',
						'md:flex-col md:items-end md:gap-2 md:justify-self-end',
						'xl:flex-row xl:justify-between xl:justify-self-center',
						'xl:w-full',
						'text-[16px]/[125%] uppercase',
						'md:text-[20px] md:leading-none',
					)}
				>
					<dt>Затраты на питание:</dt>
					<dd className={cn('xl:mr-[48px]')}>15 000 РУБ.</dd>
				</div>
			</dl>
			<div className={cn(styles['area-slider'], 'min-h-[336px] md:min-h-[652px] xl:min-h-[512px]')}>
				{innerWidth && <>{innerWidth >= Breakpoint.Md ? <DesktopSlider /> : <MobileSlider />}</>}
			</div>
		</section>
	);
};
