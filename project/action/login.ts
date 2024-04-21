"use server";
import { LoginSchema } from "@/schema";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
// import { generateVerificationToken, generateTwoFactorToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
// import { sendVerificationEmail, sendTwoFactorEmail } from "@/lib/mail";
// import  { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import identityServer4 from "next-auth/providers/identity-server4";
import { db } from "@/lib/db";
// import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const login = async(values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;
    
    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.password || !existingUser.email)  {
        return { error: "Email does not exist!"};
    }

    
}