import { db } from "../db/db";
import express from 'express'
import { User } from "../interface/user.interface";

const registerUser = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
        // Assuming req.body is JSON data
        const user: User = req.body;
        const { username, name, email, password }: User = user;
        if(!user){
            console.log("Fields required")
        }
        // Now you can use username, name, email, and password as expected
        // Example: save the user to a database
        const userCreated = await db.user.create({
          data: {
            username,
            name,
            email,
            password,
          }
        })

        if(!userCreated){
            throw new Error("Something went wrong")
        }
        // Send a success response
        return res.json({
            message: "User Created Succesfully"
        })
    } catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
    }
};



export {
    registerUser,
}