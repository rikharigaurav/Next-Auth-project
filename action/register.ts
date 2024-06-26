"use server";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from '@/lib/token'
import { sendVerificationEmail } from "@/lib/mail";

export const register = async(values: z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { username, name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await getUserByEmail(email);

    if(user) {
        return { error: "Email already in use!" }
    }

    await db.user.create({
        data: {
            username,
            name,
            email,
            password: hashedPassword,
        },
    })

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: "Conformation email sent!" };
}