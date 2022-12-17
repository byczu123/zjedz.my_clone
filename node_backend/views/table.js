import express from "express";
import { getTables } from "../controllers/table.js";

const router = express.Router()

router.get('/get/:restaurant_id', getTables)

export default router