import bcryptjs from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { LoginSchema } from './schema'

import { db } from './lib/db'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const isValid = LoginSchema.safeParse(credentials)

        if (isValid.success) {
          const { email, password } = isValid.data

          const user = await db.user.findUnique({
            where: {
              email: email,
            },
          })

          if (!user || !('password' in user)) return null

          if (user.password === null) return null // Add this check

          const passwordMatch = await bcryptjs.compare(password, user.password)

          if (passwordMatch) return user
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
