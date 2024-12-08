'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

import './InputCheckbox.css';

interface IInputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string;
}

export const InputCheckbox = forwardRef<HTMLInputElement, IInputCheckboxProps>(
	({ labelText, className, ...props }, ref: React.Ref<HTMLInputElement>) => {
		return (
			<label
				className={cn(
					'input-checkbox-label',
					'flex items-center',
					'text-[16px]/[112%] uppercase text-[#222]',
					'md:text-[20px]',
					'cursor-pointer',
					'transition-opacity duration-300 hover:opacity-70',
					`${className}`,
				)}
			>
				<input type="checkbox" {...props} ref={ref} className={cn('visually-hidden')} />
				<span>{labelText}</span>
			</label>
		);
	},
);

InputCheckbox.displayName = 'InputCheckbox';
