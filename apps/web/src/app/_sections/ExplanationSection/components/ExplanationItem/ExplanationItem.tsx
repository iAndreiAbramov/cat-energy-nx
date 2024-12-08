import React, { ReactElement } from 'react';

import { cn } from '@/lib/utils/cn';

interface ExplanationItemProps {
	text: string;
	icon: ReactElement;
	bgText: string;
}

export const ExplanationItem: React.FC<ExplanationItemProps> = ({ icon, text, bgText }) => {
	return (
		<div
			className={cn(
				'relative',
				'flex items-center gap-[20px]',
				'md:flex-col md:items-start md:justify-center md:gap-[30px]',
				'md:h-[280px] md:min-w-[230px]',
			)}
		>
			<div className={cn('svg-container', 'w-[60px] md:w-[80px]')}>{icon}</div>
			<p className={cn('font-arial text-[14px]/[130%] text-[#444]', 'md:text-[16px]/[150%]')}>
				{text}
			</p>
			<span
				className={cn(
					'hidden md:block',
					'absolute bottom-0 right-0 z-[-1]',
					'text-[280px]/[100%] text-[#f2f2f2]',
				)}
			>
				{bgText}
			</span>
		</div>
	);
};
