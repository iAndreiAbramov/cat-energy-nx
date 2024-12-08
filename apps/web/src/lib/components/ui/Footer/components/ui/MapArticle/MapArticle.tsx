'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils/cn';

export const MapArticle: React.FC = () => {
	const [isMapZoomDisabled, setIsMapZoomDisabled] = useState(true);
	const pathName = usePathname();

	return (
		<article className={cn('relative')}>
			<div
				className={cn(
					'flex items-center justify-between gap-5',
					'px-5 py-6',
					'md:px-[70px] md:py-[56px]',
					'xl:absolute xl:left-[100px] xl:top-[98px]',
					'xl:w-[566px] xl:px-[80px] xl:py-[56px]',
					'bg-[#f2f2f2] xl:bg-white',
					{
						'bg-white': pathName === '/',
					},
				)}
			>
				<h2 className={cn('text-[16px]/[125%] uppercase text-[#111111]', 'md:text-[20px]/[130%]')}>
					приглашаем
					<br />
					к сотрудничеству
					<br />
					дилеров!
				</h2>
				<address
					className={cn(
						'flex flex-col',
						'md:items-end md:gap-6',
						'xl:items-start',
						'font-arial text-[14px]/[143%] not-italic text-[#444]',
						'md:text-[16px]/[125%]',
					)}
				>
					<span className={cn('md:text-end', 'xl:text-start')}>
						ул. Большая <br /> Конюшенная,&nbsp;д.&nbsp;19/8
					</span>
					<span>Санкт-Петербург</span>
				</address>
			</div>
			<div
				onClick={() => setIsMapZoomDisabled(false)}
				onMouseLeave={() => setIsMapZoomDisabled(true)}
				title="Кликните по карте для взаимодействия"
				className={cn('h-[362px] w-full', 'md:h-[400px]')}
			>
				<iframe
					className={cn('h-full w-full', 'md:h-[400px]', {
						'pointer-events-none': isMapZoomDisabled,
					})}
					title="Мы на Яндекс карте"
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A62e81ce561876e07377615a9d5bdd031a5ff2d634367a6a66c65dcc68c7469b3&amp;source=constructor"
				></iframe>
			</div>
		</article>
	);
};
