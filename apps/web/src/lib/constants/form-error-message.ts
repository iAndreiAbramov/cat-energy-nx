export const FormErrorMessage = {
	Required: (): string => 'Поле обязательно для заполнения',
	Email: (): string => 'Введите корректный email',
	Phone: (): string => 'Введите корректный номер телефона',
	MinLength: (min: number): string => `Минимальное количество символов: ${min}`,
	MaxLength: (max: number): string => `Максимальное количество символов: ${max}`,
	Number: (): string => 'Введите число',
	PositiveNumber: (): string => 'Введите положительное число',
};
