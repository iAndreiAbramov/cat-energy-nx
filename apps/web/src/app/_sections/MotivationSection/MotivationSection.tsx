import React from 'react';

import { cn } from '@/lib/utils/cn';

import { CatIcon, PumaIcon } from './components/icons';
import { MotivationCard } from './components/ui/MotivationCard';
import { LinkHref, LinkText } from './constants/card-link';
import { CardText } from './constants/card-text';
import { CardTitle } from './constants/card-title';

export const MotivationSection: React.FC = () => {
	return (
		<section
			className={cn(
				'content-container',
				'flex flex-col gap-[20px] md:gap-[30px]',
				'xl:flex-row xl:gap-[80px]',
				'xl:mt-[80px]',
			)}
		>
			<h2 className={cn('visually-hidden')}>Мотивация</h2>
			<MotivationCard
				title={CardTitle.Slim}
				text={CardText.Slim}
				linkText={LinkText.Slim}
				linkHref={LinkHref.Slim}
				icon={<CatIcon />}
			/>
			<div className={cn('self-center', 'h-[3px] w-[20px]', 'bg-[#d9d9d9]', 'md:hidden')} />
			<MotivationCard
				title={CardTitle.Pro}
				text={CardText.Pro}
				linkText={LinkText.Pro}
				linkHref={LinkHref.Pro}
				icon={<PumaIcon />}
			/>
		</section>
	);
};
