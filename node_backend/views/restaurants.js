import express from "express";
import { getRestaurants } from "../controllers/restaurants.js";

const router = express.Router()

router.get('/get', getRestaurants)

export default router