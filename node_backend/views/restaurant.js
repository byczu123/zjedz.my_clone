import express from "express";
import { getRestaurants, getRestaurant } from "../controllers/restaurant.js";

const router = express.Router()

router.post('/get', getRestaurants)
router.get('/get/:restaurant_id', getRestaurant)

export default router