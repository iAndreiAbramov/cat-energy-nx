import React from 'react';

import { IconProps } from '@/lib/types/icon-props';

export const IconArrow: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			width="32"
			height="12"
			viewBox="0 0 32 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<line y1="6" x2="18" y2="6" stroke="black" strokeWidth="2" />
			<path d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black" />
		</svg>
	);
};
