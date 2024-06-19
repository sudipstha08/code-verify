import { z } from 'zod'

export const UserValidationSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(3, 'Username is required. Minimum 3 characters')
      .max(50, 'Username be longer than 50 characters'),
    password: z
      .string()
      .min(5, 'Password is required. Minimum 5 characters')
      .max(50, 'Password cannot longer than 50 characters'),
  }),
})
