'use server'

import { z } from 'zod'
import axios from 'axios'

import { RegisterSchema } from '@/schema'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const Validation = RegisterSchema.safeParse(values)

  if (!Validation) {
    return { error: 'Invalid Fields' }
  }

  if (Validation.success) {
    const { email, password, username, name } = Validation.data

    const req = axios({
      method: 'post',
      url: '/register',
      data: {
        username: username,
        name: name,
        email: email,
        password: password,
      },
    })

    console.log(req)
  }

  return ;
}
