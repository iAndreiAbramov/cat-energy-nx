import { ReactElement } from 'react';

export interface MotivationCardProps {
	icon: ReactElement;
	title: string;
	text: string;
	linkText: string;
	linkHref: string;
}
