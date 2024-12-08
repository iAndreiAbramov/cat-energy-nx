'use client';

import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import { cn } from '@/lib/utils/cn';

import './InputText.css';

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
	errorText?: string;
	isRequired?: boolean;
	icon?: ReactElement;
}

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
	({ labelText, errorText, isRequired = false, icon, ...props }, ref) => {
		return (
			<div className={cn('flex flex-col gap-1')}>
				{labelText && (
					<label
						className={cn(
							'flex items-center gap-[10px]',
							'text-nowrap text-[16px] uppercase leading-none text-[#444]',
							'md:text-[20px]',
							'cursor-pointer',
							{ 'label-with-icon': icon },
						)}
					>
						{labelText}
						{isRequired && '*'}
						<input
							type="text"
							ref={ref}
							className={cn('input-text', {
								'input-text--error': errorText,
								'input-text--with-icon': icon,
							})}
							{...props}
						/>
						{icon ? icon : null}
					</label>
				)}
				{errorText && <span className="error-text">{errorText}</span>}
			</div>
		);
	},
);

InputText.displayName = 'InputText';
