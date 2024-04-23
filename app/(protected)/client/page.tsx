"use client"

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {

    const user = useCurrentUser();

    return (
        <div>
            <UserInfo 
                label="Client Components"
                user={user}
            />
        </div>
    )
}

export default ClientPage;