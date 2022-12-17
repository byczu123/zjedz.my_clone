import express from "express";
import { getMenu, getDishes } from "../controllers/menu.js";

const router = express.Router()

router.get('/get/:menu_id', getMenu)
router.get('/dishes/:menu_id', getDishes)

export default router