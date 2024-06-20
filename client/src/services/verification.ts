import { API } from '@/lib'
import { MutationFunction } from '@tanstack/react-query'

const verifyCode: MutationFunction<{
  data: string
  code: string
}> = async code => {
  return API.post('/users/validate', { code })
}

export const userService = { verifyCode }
