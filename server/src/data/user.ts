import { db } from '../db/db'

const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch (error) {
    return { error: '' }
  }
}

const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    })
    return user
  } catch (error) {
    return { error: '' }
  }
}

const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    })
    return user
  } catch (error) {
    return { error: '' }
  }
}

export { getUserByEmail, getUserByUsername, getUserById }
