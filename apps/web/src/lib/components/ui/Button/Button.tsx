'use client';

import { ButtonHTMLAttributes, forwardRef, ReactElement } from 'react';

import './Button.css';

import { cn } from '@/lib/utils/cn';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'alter' | 'icon';
	text?: string;
	icon?: ReactElement;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ variant, text, icon, children, className, ...props }, ref) => {
		switch (variant) {
			case 'primary':
				return (
					<button {...props} ref={ref} className={cn('button button--primary', className)}>
						{text ? text : null}
						{children ? children : null}
					</button>
				);
			case 'alter':
				return (
					<button {...props} ref={ref} className={cn('button button--alter', className)}>
						{text ? text : null}
						{children}
					</button>
				);
			case 'icon':
				return (
					<button {...props} ref={ref} className={cn('button-icon', className)}>
						{icon ? icon : null}
					</button>
				);
		}
	},
);

Button.displayName = 'Button';
