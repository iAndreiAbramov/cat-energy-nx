'use client';

import React from 'react';

import { cn } from '@/lib/utils/cn';
import { Button, InputText } from '@/lib/components/ui';
import { InputCheckbox } from '@/lib/components/ui/InputCheckbox';
import { InputRadio } from '@/lib/components/ui/InputRadio';
import { zodResolver } from '@hookform/resolvers/zod';

import IconEmail from './assets/icons/icon-email.svg';
import IconPhone from './assets/icons/icon-phone.svg';
import { schemaProgramForm, TFormValues } from './schema/program-form-schema';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import './ProgramForm.css';

export const ProgramForm: React.FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitted, isValid },
	} = useForm<TFormValues>({
		resolver: zodResolver(schemaProgramForm),
		defaultValues: {
			additional: [],
		},
	});

	const handleFormSubmit: SubmitHandler<FieldValues> = (values) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<div className={cn('mx-[-20px] md:mx-0', 'xl:flex xl:justify-between xl:gap-[80px]')}>
				<fieldset
					className={cn(
						'flex flex-col gap-3',
						'xl:flex xl:basis-1/2 xl:flex-col xl:justify-between xl:gap-[20px]',
						'px-[20px] pb-[24px]',
						'md:px-0 xl:pb-0',
					)}
				>
					<legend className={cn('visually-hidden')}>Общая информация</legend>
					<InputText
						labelText="имя"
						placeholder="Барсик"
						isRequired
						inputMode="text"
						errorText={errors.name?.message}
						{...register('name')}
					/>
					<InputText
						labelText="Вес (кг):"
						placeholder="7"
						isRequired
						inputMode="numeric"
						errorText={errors.weightKg?.message}
						{...register('weightKg')}
					/>
					<InputText
						labelText="Возраст (лет):"
						placeholder="7"
						isRequired={false}
						inputMode="numeric"
						errorText={errors.ageYears?.message}
						{...register('ageYears')}
					/>
				</fieldset>
				<fieldset
					className={cn(
						'p-[20px] md:p-[28px]',
						'border-y border-y-[#D9D9D9]',
						'md:border md:border-[#D9D9D9]',
						'xl:flex xl:basis-1/2 xl:flex-col xl:content-between',
					)}
				>
					<legend className={cn('visually-hidden')}>тип программы</legend>
					<InputRadio
						value="похудение"
						labelText="похудение"
						defaultChecked
						className={cn('mb-[14px]')}
						{...register('typeOfProgram')}
					/>
					<InputRadio
						value="набор массы"
						labelText="набор массы"
						className={cn('mb-[14px]')}
						{...register('typeOfProgram')}
					/>
					<InputRadio
						value="не знаю"
						labelText="Не знаю (Нужен ваш совет)"
						{...register('typeOfProgram')}
					/>
				</fieldset>
			</div>
			<fieldset className={cn('legend-decoration')}>
				<legend className={cn('legend-text')}>Контактные данные (владельца кота)</legend>
				<div className={cn('flex flex-col gap-[14px]', 'xl:grid xl:grid-cols-2 xl:gap-[78px]')}>
					<InputText
						labelText="E-mail:"
						placeholder="kuklachev@gmail.com"
						isRequired
						inputMode="text"
						icon={<IconEmail />}
						errorText={errors.email?.message}
						{...register('email')}
					/>
					<InputText
						labelText="Телефон:"
						placeholder="8 (960) 900-60-90"
						isRequired
						inputMode="numeric"
						icon={<IconPhone />}
						errorText={errors.phone?.message}
						{...register('phone')}
					/>
				</div>
			</fieldset>
			<fieldset className={cn('legend-decoration legend-decoration--oneline', 'after:top-[-30px]')}>
				<legend className={cn('legend-text', 'pr-[22px]')}>Комментарий</legend>
				<textarea
					className={cn('input-text', 'h-[250px] resize-none px-[16px] py-[12px]')}
					placeholder="Расскажите обо всех повадках кота"
					{...register('comment')}
				/>
			</fieldset>
			<fieldset className={cn('legend-decoration legend-decoration--oneline', 'after:top-[-30px]')}>
				<legend className={cn('legend-text', 'pr-[22px]')}>Дополнительно</legend>
				<div
					className={cn(
						'grid gap-y-[12px]',
						'md:grid-cols-2 md:gap-x-[100px]',
						'xl:grid-cols-4 xl:gap-x-[104px]',
					)}
				>
					<InputCheckbox
						labelText="сахарозаменитель"
						value="сахарозаменитель"
						{...register('additional')}
					/>
					<InputCheckbox
						labelText="питьевая вода"
						value="питьевая вода"
						{...register('additional')}
					/>
					<InputCheckbox labelText="молоко" value="молоко" {...register('additional')} />
					<InputCheckbox labelText="витамины" value="витамины" {...register('additional')} />
				</div>
			</fieldset>
			<div
				className={cn(
					'flex flex-col items-center gap-[20px]',
					'md:flex-row md:gap-[60px]',
					'py-[32px]',
					'md:pb-[40px] md:pt-[72px]',
					'xl:pb-[82px] xl:pt-[60px]',
				)}
			>
				<Button
					variant="primary"
					text="отправить заявку"
					className={cn(
						'min-h-[40px] w-full',
						'md:min-h-[52px] md:w-[282px]',
						'text-[16px] md:text-[20px]',
					)}
					disabled={isSubmitted && !isValid}
				/>
				<span className={cn('font-arial text-[14px]/[114%] text-black', 'md:text-[16px]/[100%]')}>
					* — Обязательные поля
				</span>
			</div>
		</form>
	);
};
