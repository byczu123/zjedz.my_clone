import express from "express";
import { submitReservation, getFirstHours, getPossibleHours, getReservations, deleteReservation } from "../controllers/reservation.js";

const router = express.Router()

router.post('/submit', submitReservation)
router.post('/first-hours', getFirstHours)
router.post('/possible-hours', getPossibleHours)
router.post('/user-reservations', getReservations)
router.post('/delete-reservation', deleteReservation)

export default router