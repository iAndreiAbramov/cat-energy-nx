import React from 'react';

import { cn } from '@/lib/utils/cn';
import {
	AcademyLogoIcon,
	FbIcon,
	FooterLogoText,
	InstaIcon,
	VkIcon,
} from '@/lib/components/ui/Footer/components/icons';
import { MapArticle } from '@/lib/components/ui/Footer/components/ui/MapArticle';

export const Footer: React.FC = () => {
	return (
		<footer className={cn('w-full')}>
			<MapArticle />
			<div
				className={cn(
					'content-container',
					'flex flex-col items-center',
					'md:flex-row',
					'w-full',
					'md:py-[58px]',
					'bg-[#f2f2f2]',
				)}
			>
				<div className={cn('pb-[32px] pt-[38px]', 'md:py-0')}>
					<FooterLogoText />
				</div>
				<div
					className={cn(
						'flex items-center justify-center gap-[36px]',
						'w-full py-[22px]',
						'md:py-0',
						'border-y-[1px] border-y-[#D9D9D9]',
						'md:border-y-0',
					)}
				>
					<VkIcon />
					<InstaIcon />
					<FbIcon />
				</div>
				<div
					className={cn(
						'flex w-full items-center justify-between',
						'md:gap-[22px]',
						'md:w-auto',
						'py-[22px]',
						'md:py-0',
					)}
				>
					<span className={cn('font-arial text-[16px] font-normal text-[#444444]')}>
						HTML&nbsp;Academy
					</span>
					<AcademyLogoIcon />
				</div>
			</div>
		</footer>
	);
};
