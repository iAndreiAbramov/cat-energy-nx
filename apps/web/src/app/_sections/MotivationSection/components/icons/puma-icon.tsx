import React from 'react';

import { IconProps } from '@/lib/types/icon-props';

export const PumaIcon: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			width="67"
			height="50"
			viewBox="0 0 67 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<circle cx="34.5" cy="25" r="25" fill="#68B738" />
			<g clipPath="url(#clip0_95_1)">
				<path
					d="M61.55 13.9C62.1272 12.9815 62.8944 12.1973 63.8 11.6C64.3 11.25 64.6 11.25 64.9 11.9C65.3 12.85 65.65 13.85 65.35 14.9C65.2954 15.0781 65.2851 15.2668 65.3199 15.4497C65.3548 15.6327 65.4338 15.8044 65.55 15.95C65.85 16.35 66.1 16.75 66.35 17.1C66.6902 17.5319 66.9109 18.0456 66.9899 18.5897C67.0689 19.1339 67.0034 19.6892 66.8 20.2C66.6164 20.6959 66.5817 21.2346 66.7 21.75C66.7999 22.245 66.7999 22.755 66.7 23.25C66.6596 23.6207 66.5095 23.9709 66.2691 24.2559C66.0286 24.5409 65.7086 24.7478 65.35 24.85C64.7104 24.9717 64.1396 25.3284 63.75 25.85C63.7028 25.9268 63.6365 25.9901 63.5577 26.0339C63.4789 26.0777 63.3901 26.1005 63.3 26.1C62.7 26.2 61.2 24.85 61.2 24.25V23.95C61.25 22.15 61.15 22 59.5 21.25C59.1546 21.1282 58.8452 20.9219 58.6 20.65C58.3 20.25 57.9 20.3 57.45 20.45C57 20.6 56.75 20.9 56.8 21.4C56.9508 22.6104 57.0009 23.8313 56.95 25.05C56.9533 25.1891 56.9875 25.3257 57.05 25.45C58.6 27.7 59.2 30.35 59.95 32.9C60.55 34.85 61.65 35.9 63.65 36.05C63.97 36.0755 64.2876 36.1257 64.6 36.2C65.0109 36.266 65.3926 36.4538 65.6956 36.739C65.9987 37.0242 66.2092 37.3938 66.3 37.8C66.65 38.85 66.45 39.1 65.4 39.1H62.15C61.7292 39.1213 61.3167 38.9778 61 38.7C60.4939 38.2729 59.9191 37.9348 59.3 37.7C58.6155 37.4473 58.0231 36.9943 57.6 36.4C57.0143 35.5817 56.3439 34.8275 55.6 34.15C54.2 32.7 52.7 31.3 51.4 29.8C50.4103 28.7779 49.8395 27.4221 49.8 26C49.8 25.55 49.7 25.35 49.2 25.55C49.0503 25.645 48.8773 25.6969 48.7 25.7C47.3 25.7 46.6 26.55 46.1 27.8C45.65 28.85 45.05 29.85 44.5 30.9C44.1881 31.5572 44.0178 32.2727 44 33C44 34.2 44.3 34.6 45.4 35C46.1 35.25 46.75 35.5 47.1 36.2C47.5 37 47.4 37.2 46.55 37.25H43.15C42.954 37.2694 42.7568 37.2267 42.5864 37.1281C42.4159 37.0294 42.2807 36.8796 42.2 36.7L41.3 35.2C41.0347 34.8086 40.8648 34.3605 40.8041 33.8916C40.7433 33.4227 40.7932 32.9461 40.95 32.5C41.1664 31.6317 41.1835 30.7258 41 29.85C40.8739 29.24 40.8848 28.6097 41.0318 28.0045C41.1788 27.3993 41.4582 26.8342 41.85 26.35C42.15 26 42.15 25.85 41.65 25.75C39.6054 25.3157 37.6233 24.627 35.75 23.7C35.7367 23.7 35.724 23.6947 35.7146 23.6853C35.7052 23.676 35.7 23.6632 35.7 23.65C34.1 23.05 33.8 23.15 33.35 24.8C32.95 26.2 32.55 27.6 32.25 29.05C31.9 30.65 32.3 32.15 32.8 33.65C33 34.25 33.6 34.2 34.05 34.35C35.05 34.65 35.9 35.05 36.3 36.1C36.65 36.9 36.6 37 35.75 37C34.9 37 34.05 36.95 33.15 37C32.3905 37.0137 31.6493 36.7667 31.05 36.3C28.65 34.7 27.95 32.25 27.75 29.6C27.65 27.95 26.75 26.65 25.7 25.4C25.5 25.15 25.3 25.05 25 25.25C23.9267 25.8418 22.8062 26.3435 21.65 26.75C19.2371 27.602 17.1198 29.1292 15.55 31.15C14.9638 31.8875 14.5842 32.7675 14.45 33.7C14.3 34.6 14.55 35 15.45 35.25C16.35 35.5 16.8 36 16.9 36.95C16.95 37.35 16.8 37.55 16.4 37.55H12.35C12.2174 37.5406 12.0891 37.4993 11.9759 37.4297C11.8628 37.36 11.7681 37.2641 11.7 37.15C11.0719 36.3724 10.7358 35.3995 10.75 34.4C10.7237 32.6724 10.8745 30.9468 11.2 29.25C11.2667 28.7418 11.4564 28.2576 11.7527 27.8394C12.0489 27.4212 12.4427 27.0815 12.9 26.85C15.85 25.45 17.4 22.8 18.8 20.05C19.1 19.5 18.85 19.4 18.35 19.45C16.9506 19.6442 15.6248 20.1952 14.5 21.05C13.0271 22.1244 11.6396 23.3113 10.35 24.6C8.9748 25.9968 7.15133 26.8643 5.19998 27.05C1.54998 27.25 -0.150021 25.2 -2.12286e-05 21.9C0.03351 20.7748 0.457802 19.6964 1.19998 18.85C1.45799 18.5155 1.80985 18.2655 2.21061 18.1319C2.61138 17.9983 3.04287 17.9872 3.44998 18.1C4.19998 18.3 4.39998 18.7 4.09998 19.45C3.94998 19.75 3.74998 20 3.59998 20.3C3.38428 20.6065 3.21574 20.9435 3.09998 21.3C2.54998 22.8 3.29998 23.85 4.84998 24C6.49998 24.15 7.84998 23.45 9.09998 22.45C10.6059 21.2441 11.9503 19.8493 13.1 18.3C13.9596 17.1687 15.042 16.2256 16.2804 15.529C17.5188 14.8325 18.8868 14.3971 20.3 14.25C21.45 14.1 22.45 13.6 23.55 13.3C25.6072 12.6728 27.7495 12.3692 29.9 12.4C30.896 12.4415 31.8883 12.2533 32.8 11.85C35.25 10.85 37.8 10.85 40.35 11.35C42.35 11.75 44.35 12.25 46.3 12.75C47.4605 12.9662 48.6537 12.9321 49.8 12.65C51.9943 12.0937 54.2389 11.7587 56.5 11.65C57.9812 11.5779 59.4576 11.8697 60.8 12.5C61.8 12.95 61.8 12.95 61.55 13.9Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_95_1">
					<rect width="67" height="28" fill="white" transform="translate(0 11)" />
				</clipPath>
			</defs>
		</svg>
	);
};
