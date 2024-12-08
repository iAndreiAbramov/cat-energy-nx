'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { useCloseByClick } from '@/lib/hooks/useCloseByClick';
import { useCloseByEsc } from '@/lib/hooks/useCloseByEsc';
import { cn } from '@/lib/utils/cn';
import { AppRoute } from '@/lib/constants/app-route';
import { LogoMobileIcon, LogoMobileTextIcon } from '@/lib/components/ui/Header/components/icons';

import { MenuButton } from './components/MenuButton';
import { MobileMenu } from './components/MobileMenu';

export const HeaderMobile: React.FC = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const handleCloseMenu = () => setIsMenuOpened(false);

	useCloseByEsc({ isShown: isMenuOpened, cb: handleCloseMenu });
	useCloseByClick({ isShown: isMenuOpened, cb: handleCloseMenu });

	return (
		<header
			className={cn(
				'content-container',
				'absolute inset-x-0 top-0 z-10',
				'flex items-center justify-between',
				'md:hidden',
				'w-full pb-[18px] pt-[10px]',
			)}
		>
			<Link href={AppRoute.Home()}>
				<LogoMobileIcon />
			</Link>
			<Link href={AppRoute.Home()}>
				<LogoMobileTextIcon />
			</Link>
			<MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
			{isMenuOpened && <MobileMenu />}
		</header>
	);
};
