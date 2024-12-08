import { AppRoute } from '@/lib/constants/app-route';

interface IMenuLink {
	text: string;
	href: string;
}

export const MENU_LINKS: IMenuLink[] = [
	{
		text: 'главная',
		href: AppRoute.Home(),
	},
	{
		text: 'каталог продукции',
		href: AppRoute.Catalog(),
	},
	{
		text: 'подбор программы',
		href: AppRoute.Program(),
	},
];
