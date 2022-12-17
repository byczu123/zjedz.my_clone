import express from "express";
import { getMenu } from "../controllers/menu.js";

const router = express.Router()

router.get('/get/:menu_id', getMenu)

export default router