import express from "express";
import { getRestaurants, getRestaurant, getAllRestaurants } from "../controllers/restaurant.js";

const router = express.Router()

router.post('/get', getRestaurants)
router.get('/get/:restaurant_id', getRestaurant)
router.get('/all-restaurants', getAllRestaurants)

export default router