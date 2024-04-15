import bcryptjs from 'bcryptjs'
import express from 'express'

import { getUserByEmail } from '../data/user'
import { db } from '../db/db'
import { Url } from 'url'

export const RegisterUser = async (req: express.Request, res: express.Request) => {
  const { username, name, email, password } = req.body

  console.log(req.body)

  const hashedPassword = await bcryptjs.hash(password, 10)

  const existingEmail = await getUserByEmail(email)
  if (existingEmail) {
    return { error: 'Email already exists' }
  }

  // const existingUsername = await getUserByUsername(username)
  // if(existingUsername) {
  //     return { error: "Username already exists"}
  // }

  const usercreated = await db.user.create({
    data: {
      username,
      name,
      email,
      password: hashedPassword,
    },
  })

  if (!usercreated) {
    return { error: 'Something went wrong' }
  }

  return { success: 'user created' }
}
