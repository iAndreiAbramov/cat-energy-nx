import { cn } from '@/lib/utils/cn';

import { ProgramForm } from './_components/ProgramForm';

export default function PageProgram() {
	return (
		<div
			className={cn(
				'content-container',
				'md:mx-10 xl:mx-0',
				'border-t border-t-[#d9d9d9] md:border-none',
			)}
		>
			<h1
				className={cn(
					'mb-[36px] mt-[28px] md:mb-[54px] md:mt-[42px] xl:mt-[54px]',
					'text-[36px] leading-none md:text-[60px]',
				)}
			>
				Подбор программы
			</h1>
			<span className={cn('block', 'mb-10', 'text-[14px]/[129%] uppercase md:text-[20px]/[150%]')}>
				Заполните анкету, и мы подберем <br /> программу питания для вашего кота
			</span>
			<ProgramForm />
		</div>
	);
}
