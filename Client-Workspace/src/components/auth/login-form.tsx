"use client";

import { CardWrapper } from "./card-wrapper"
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { LoginSchema } from "@/schema/index"

import { useState, useTransition } from "react";


import {
    Form,
    FormControl,
    FormLabel,
    FormItem,
    FormMessage,
    FormField
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";

export const LoginForm = () => {

    const [error, setError ] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome"
            backButtonHref="/register"
            backButtonlabel="Don't have an account"
            showSpecial
        >

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-6"
                    >
                    <FormField 
                        control={form.control}
                        name = "email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg"
                                >Email</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        placeholder="jhon.doe@example.com"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name = "password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg " >Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        placeholder="********"
                                        type="password"
                                        />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormError message={error}/>   
                        <FormSuccess message={success}/>
                        <div>
                        <Button
                            type="submit"
                            className="w-full "
                            size="lg"
                            >
                            Login 
                        </Button>
                    </div>

                </form>
            </Form>
        </CardWrapper>
    )
}