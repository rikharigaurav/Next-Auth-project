import { User } from "interface/user.interface"


const registerUser = async (req: Request, res: Response): Promise<void> => {

        const user: User = req.body;

        if(!user || !user.email || !user.username || !user.name || !user.password){
            return res.status(201).json({
                message: "All input are not submitted",
            })
        }

}


export {
    registerUser,
}