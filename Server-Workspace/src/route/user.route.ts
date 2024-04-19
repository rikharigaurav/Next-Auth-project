import { Validation } from "../middleware/validate";
import { registerUser } from "../controller/user";
import { Router } from "express";
import { RegisterSchema } from "../schema";

const router = Router()

router.route('/register').post(Validation(RegisterSchema) , registerUser)

export default router
