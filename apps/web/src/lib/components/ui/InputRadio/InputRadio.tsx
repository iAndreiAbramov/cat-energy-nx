'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

import './InputRadio.css';

interface IInputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string;
}

export const InputRadio = forwardRef<HTMLInputElement, IInputRadioProps>(
	({ labelText, className, ...props }, ref: React.Ref<HTMLInputElement>) => {
		return (
			<label
				className={cn(
					'input-radio-label',
					'flex items-center',
					'text-[16px]/[112%] uppercase text-[#222]',
					'md:text-[20px]',
					'cursor-pointer',
					'transition-opacity duration-300 hover:opacity-70',
					`${className}`,
				)}
			>
				<input type="radio" {...props} ref={ref} className={cn('visually-hidden')} />
				<span>{labelText}</span>
			</label>
		);
	},
);

InputRadio.displayName = 'InputRadio';
