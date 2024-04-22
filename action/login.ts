"use server";
import { LoginSchema } from "@/schema";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
// import  { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import identityServer4 from "next-auth/providers/identity-server4";
import { db } from "@/lib/db";
import { AuthError } from "next-auth";
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

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)

         await sendVerificationEmail(
           verificationToken.email,
           verificationToken.token
         )

        return { success: " Confirmation email sent "}
    };

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if( error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials" }

                default:
                    return { error: "Something went wrong" }
            }
        }

        throw error
    }


    
}