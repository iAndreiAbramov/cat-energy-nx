import React from 'react';
import Image from 'next/image';
import * as Slider from '@radix-ui/react-slider';

import { cn } from '@/lib/utils/cn';
import fatCat from '@/app/_sections/ExampleSection/assets/images/cat-fat@2x.png';
import skinnyCat from '@/app/_sections/ExampleSection/assets/images/cat-skinny@2x.png';

import styles from './DesktopSlider.module.css';

export const DesktopSlider: React.FC<{ className?: string }> = ({ className }) => {
	const [sliderValue, setSliderValue] = React.useState([0.1]);
	const percentageWidth = sliderValue[0];
	const invertedPercentageWidth = 100 - percentageWidth;

	return (
		<div
			className={cn(
				'xl:justify-self-end',
				'flex flex-col items-center',
				'mt-[80px] xl:mt-0',
				className,
			)}
		>
			<div className={cn('relative', 'flex flex-col', 'h-[512px] w-[592px]')}>
				<div
					className={cn('absolute inset-0 z-0')}
					style={{ clipPath: `inset(0 ${percentageWidth}% 0 0)` }}
				>
					<Image
						src={fatCat}
						width={592}
						height={512}
						alt="Fat cat"
						className={styles['slider-image']}
					/>
				</div>
				<div
					className={cn('absolute inset-0 z-0')}
					style={{ clipPath: `inset(0 0 0 ${invertedPercentageWidth}%)` }}
				>
					<Image
						src={skinnyCat}
						width={592}
						height={512}
						alt="Skinny cat"
						className={styles['slider-image']}
					/>
				</div>
			</div>
			<div className={cn('flex flex-col items-center self-center', 'w-[592px]')}>
				<div
					className={cn(
						'content-container',
						'flex flex-row items-center justify-between gap-5',
						'mt-[26px]',
					)}
				>
					<button className={styles['slider-button']} onClick={() => setSliderValue([0])}>
						Было
					</button>
					<Slider.Root
						defaultValue={[50]}
						step={0.1}
						value={sliderValue}
						onValueChange={(value) => setSliderValue(value)}
						className={cn('relative', 'flex items-center self-center')}
					>
						<Slider.Track
							className={cn(
								'h-[6px] w-[426px] rounded-[6px] border border-[#cdcdcd]',
								'bg-[#DCDCDC]',
								'cursor-pointer',
							)}
						>
							<Slider.Range />
						</Slider.Track>
						<Slider.Thumb
							className={cn(
								'relative',
								'block h-[34px] w-[34px] rounded-full border border-[#cdcdcd] bg-[#FFFFFF] p-[10px]',
								'after:absolute after:inset-[12px] after:rounded-full after:bg-[#68b738]',
								'focus-visible:outline-none',
								'cursor-pointer',
							)}
						/>
					</Slider.Root>
					<button className={styles['slider-button']} onClick={() => setSliderValue([100])}>
						стало
					</button>
				</div>
			</div>
		</div>
	);
};
