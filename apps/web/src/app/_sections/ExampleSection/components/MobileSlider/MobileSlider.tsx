'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as Slider from '@radix-ui/react-slider';

import { cn } from '@/lib/utils/cn';

import fatCat from '../../assets/images/cat-fat@2x.png';
import skinnyCat from '../../assets/images/cat-skinny@2x.png';

import styles from './MobileSlider.module.css';

export const MobileSlider: React.FC<{ className?: string }> = ({ className }) => {
	const [sliderValue, setSliderValue] = useState([0.01]);
	const percentageWidth = sliderValue[0];
	const invertedPercentageWidth = 100 - percentageWidth;

	return (
		<div className={cn('flex flex-col items-center', 'mt-[40px]', className)}>
			<div
				className={cn(
					'relative',
					'flex flex-col items-center justify-center',
					'h-[260px] w-[280px]',
				)}
			>
				<div
					className={cn('absolute inset-0 z-0', 'flex flex-col')}
					style={{ clipPath: `inset(0 ${percentageWidth}% 0 0)` }}
				>
					<Image
						src={fatCat}
						width={280}
						height={232}
						alt="Fat cat"
						className={cn('slider-image')}
					/>
				</div>
				<div
					className={cn('absolute inset-0 z-0', 'flex flex-col')}
					style={{ clipPath: `inset(0 0 0 ${invertedPercentageWidth}%)` }}
				>
					<Image
						src={skinnyCat}
						width={280}
						height={232}
						alt="Skinny cat"
						className={styles['slider-image']}
					/>
				</div>
			</div>
			<div className={cn('content-container', 'flex justify-center gap-[14px]', 'mt-[16px]')}>
				<button className={styles['slider-button']} onClick={() => setSliderValue([0])}>
					Было
				</button>
				<Slider.Root
					defaultValue={[sliderValue[0]]}
					step={100}
					value={sliderValue}
					onValueChange={(value) => setSliderValue(value)}
					className={cn('relative', 'flex items-center')}
				>
					<Slider.Track
						className={cn(
							'h-[14px] w-[86px] rounded-[6px] border border-[#cdcdcd]',
							'bg-white',
							'cursor-pointer',
						)}
					>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb
						className={cn(
							'relative',
							'block h-[6px] w-[36px] rounded-full border-none bg-[#68b738]',
							'focus-visible:outline-none',
							'cursor-pointer',
							{
								'left-1': Math.round(sliderValue[0]) === 0,
								'right-1': Math.round(sliderValue[0]) === 100,
							},
						)}
					/>
				</Slider.Root>
				<button className={styles['slider-button']} onClick={() => setSliderValue([100])}>
					стало
				</button>
			</div>
		</div>
	);
};
