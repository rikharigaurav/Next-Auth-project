'use server'

import { z } from 'zod'

import { ResetSchema } from "@/schema"
import { getUserByEmail } from "@/data/user"

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    
    const validatedFields = ResetSchema.safeParse(values)

    if(!validatedFields.success) {
        return { error: " Invalid Email"};
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser){
        return { error: "Email not Found"}
    }

    return { success: "Reset email sent"}

}