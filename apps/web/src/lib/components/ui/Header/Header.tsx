'use client';

import React from 'react';

import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';

export const Header: React.FC = () => {
	return (
		<>
			<HeaderDesktop />
			<HeaderMobile />
		</>
	);
};
