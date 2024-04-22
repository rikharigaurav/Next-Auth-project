import { Resend } from 'resend';

const resend = new Resend();

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmUrl = `http://localhost:3000/new-verification?token=${token}`;


    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Verify your email',
        html: `<p>Click <a href="${confirmUrl}">here</a> to confirm email</p>`
    })
}