import express from "express";
import { getRestaurants, getRestaurant } from "../controllers/restaurant.js";

const router = express.Router()

router.get('/get', getRestaurants)
router.get('/get/:restaurant_id', getRestaurant)

export default router