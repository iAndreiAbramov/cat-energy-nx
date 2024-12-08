'use client';

import React from 'react';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/lib/components/ui';

import CrossIcon from '../../assets/cross-icon.svg';
import HamburgerIcon from '../../assets/hamburger.svg';

interface IMenuButtonProps {
	isMenuOpened: boolean;

	setIsMenuOpened(status: boolean): void;
}

export const MenuButton: React.FC<IMenuButtonProps> = ({ isMenuOpened, setIsMenuOpened }) => {
	return (
		<Button
			variant="icon"
			icon={isMenuOpened ? <CrossIcon /> : <HamburgerIcon />}
			onClick={() => setIsMenuOpened(!isMenuOpened)}
			className={cn('h-[26px] min-w-[26px]', 'focus-visible:outline-none')}
		/>
	);
};
