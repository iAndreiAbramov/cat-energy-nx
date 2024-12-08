'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils/cn';
import { AppRoute } from '@/lib/constants/app-route';

import { MENU_LINKS } from '../../constants/menu-links';
import { LogoDesktopIcon, LogoTabletIcon } from '../icons';

export const HeaderDesktop: React.FC = () => {
	const pathName = usePathname();

	return (
		<header
			className={cn(
				'content-container',
				'absolute',
				'flex items-center justify-between',
				'w-full py-[24px]',
				'max-md:hidden',
			)}
		>
			<Link href={AppRoute.Home()}>
				<LogoTabletIcon className={cn('lg:hidden')} />
				<LogoDesktopIcon className={cn('max-lg:hidden')} />
			</Link>
			<nav className={cn('flex items-baseline', 'mt-[20px]')}>
				<ul className={cn('flex items-baseline gap-[34px]')}>
					{MENU_LINKS.map(({ text, href }) => (
						<li
							key={text}
							className={cn(
								'pb-[10px]',
								'text-[18px]/[133%] font-normal uppercase text-black',
								'hover:opacity-70',
								'transition-opacity duration-300',
								{
									'border-b-[2px] border-b-[#68B738]': pathName === href,
									'xl:border-b-white': pathName === href && href === AppRoute.Home(),
									'xl:text-white': pathName === AppRoute.Home(),
								},
							)}
						>
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
