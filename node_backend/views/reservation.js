import express from "express";
import { getUserReservations, submitReservation } from "../controllers/reservation.js";

const router = express.Router()

router.post('/submit', submitReservation)
router.get('/get/:user_id', getUserReservations)


export default router