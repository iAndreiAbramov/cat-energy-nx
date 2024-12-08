import { FormErrorMessage } from '@/lib/constants/form-error-message';
import { NameLength } from '@/app/program/_components/ProgramForm/schema/constants/name-length';

import { validateAge } from './utils/validate-age';
import { z } from 'zod';

const PHONE_REGEXP = /^(\+7|8)[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

export const schemaProgramForm = z.object({
	name: z
		.string()
		.min(NameLength.Min, { message: FormErrorMessage.MinLength(NameLength.Min) })
		.max(NameLength.Max, { message: FormErrorMessage.MaxLength(NameLength.Max) }),
	weightKg: z
		.string({
			required_error: FormErrorMessage.Required(),
		})
		.transform((val, ctx) => validateAge(val, ctx)),
	ageYears: z.optional(z.string()),
	typeOfProgram: z.string().min(1, { message: FormErrorMessage.Required() }),
	email: z.string({ required_error: FormErrorMessage.Required() }).email({
		message: FormErrorMessage.Email(),
	}),
	phone: z
		.string()
		.min(1, { message: FormErrorMessage.Required() })
		.refine((val) => PHONE_REGEXP.test(val), {
			message: FormErrorMessage.Phone(),
		}),
	comment: z.string().optional(),
	additional: z.array(z.string()),
});

export type TFormValues = z.infer<typeof schemaProgramForm>;
