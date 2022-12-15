import express from "express";
import {register, test} from "../controllers/user.js";

const router = express.Router()

router.post('/register', register)
router.get('/test', test)

export default router