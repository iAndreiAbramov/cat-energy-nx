import React from 'react';

import { cn } from '@/lib/utils/cn';

import FirstIcon from './assets/icons/first-icon.svg';
import FourthIcon from './assets/icons/fourth-icon.svg';
import SecondIcon from './assets/icons/second-icon.svg';
import ThirdIcon from './assets/icons/third-icon.svg';
import { ExplanationItem } from './components/ExplanationItem';
import { ExplanationText } from './constants/explanation-text';

export const ExplanationSection: React.FC = () => {
	return (
		<section
			className={cn(
				'content-container',
				'pb-[26px] pt-[20px]',
				'md:border-b md:border-b-[#E6E6E6] md:py-[46px]',
				'xl:border-none',
			)}
		>
			<h2 className={cn('mb-[40px] md:mb-[32px]', 'text-[36px]/[110%] md:text-[60px]/[100%]')}>
				Как это работает
			</h2>
			<div
				className={cn(
					'grid gap-y-[20px]',
					'md:grid-cols-2 md:gap-x-[150px] md:gap-y-[40px]',
					'xl:grid-cols-4 xl:justify-between xl:gap-[94px]',
				)}
			>
				<ExplanationItem text={ExplanationText.First} bgText="1" icon={<FirstIcon />} />
				<ExplanationItem text={ExplanationText.Second} bgText="2" icon={<SecondIcon />} />
				<ExplanationItem text={ExplanationText.Third} bgText="3" icon={<ThirdIcon />} />
				<ExplanationItem text={ExplanationText.Fourth} bgText="4" icon={<FourthIcon />} />
			</div>
		</section>
	);
};
