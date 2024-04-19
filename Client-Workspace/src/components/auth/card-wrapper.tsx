"use client";

import { Header } from "./header";

import { Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../ui/card";
import { Social } from "./social";
import { Backbutton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonlabel: string;
    backButtonHref: string;
    showSpecial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonlabel,
    backButtonHref,
    showSpecial
}: CardWrapperProps) => {
    return (
        <Card className="w-[500px] shadow-md ">
            <CardHeader >
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {
                showSpecial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }

            <CardFooter>
                <Backbutton label={backButtonlabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}