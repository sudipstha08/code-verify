import { z } from 'zod'

export const UserValidationSchema = z.object({
  body: z.object({
    code: z
      .string()
      .min(6, 'Verification code must be 6 characters long')
      .max(6, 'Verification code must be 6 characters long'),
  }),
})
