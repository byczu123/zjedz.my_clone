import express from "express";
import { submitReservation, getFirstHours, getPossibleHours } from "../controllers/reservation.js";

const router = express.Router()

router.post('/submit', submitReservation)
router.post('/first-hours', getFirstHours)
router.post('/possible-hours', getPossibleHours)

export default router