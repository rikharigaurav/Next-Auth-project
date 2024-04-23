"use client"

import { signOut } from "@/auth";
import { useCurrentUser } from "@/hooks/use-current-user";

const Board = () => {

    const session = useCurrentUser();

    const onClick = () => {
        signOut;
    } 

    return (
        <div>
            {JSON.stringify(session)}
                <button onClick={onClick} type="submit">
                    SignOut
                </button>
        </div>
    )
}

export default Board;