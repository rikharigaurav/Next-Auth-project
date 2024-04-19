"use client"

import { useRouter } from "next/navigation";

interface RegisterButtonProps {
    children: React.ReactNode
    asChild?: boolean;
}

export const RegisterButton = ({
    children,
    asChild
}: RegisterButtonProps ) => {

    const router = useRouter();
    const onClick = () => {
        router.push('/register')
    }   

    return (
        <span 
            onClick={onClick}
        >
            {children}
        </span>
    )
}