'use client';

import { useLayoutEffect, useState } from 'react';

export const useInnerWidth = (): number | null => {
	const [innerWidth, setInnerWidth] = useState<number | null>(null);

	useLayoutEffect(() => {
		const updateInnerWidth = () => {
			if (typeof window !== 'undefined') {
				setInnerWidth(window.innerWidth);
			}
		};

		window.addEventListener('resize', updateInnerWidth);
		setTimeout(() => {
			if (typeof window !== 'undefined') {
				setInnerWidth(window.innerWidth);
			}
		}, 0);

		return () => {
			window.removeEventListener('resize', updateInnerWidth);
		};
	});

	return innerWidth;
};
