import express from "express";
import { submitReservation, getFirstHours } from "../controllers/reservation.js";

const router = express.Router()

router.post('/submit', submitReservation)
router.post('/first-hours', getFirstHours)

export default router