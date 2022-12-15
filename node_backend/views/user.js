import express from "express";
import { authResponse, registerResponse } from "../controllers/user.js";

const router = express.Router()

router.get('/', authResponse)
router.get('/register', registerResponse)

export default router