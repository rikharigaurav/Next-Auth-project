import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db =  new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

console.log(`\n DataBase connected !! DB HOST: ${db}`)






// export const db = new PrismaClient();
