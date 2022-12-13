import express from "express";
import { authResponse } from "../controllers/auth.js";

const router = express.Router()

router.get('/', authResponse)

export default router