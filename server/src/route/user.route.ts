import { registerUser } from "../controller/user";
import { Router } from "express";

const router = Router()

router.route('/register').post(registerUser)

export default router