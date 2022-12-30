import express from "express";
import { getHomeFormData } from "../controllers/data.js";

const router = express.Router()

router.get('/get/home-form', getHomeFormData)

export default router