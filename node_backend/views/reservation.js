import express from "express";
import { submitReservation } from "../controllers/reservation.js";

const router = express.Router()

router.post('/submit', submitReservation)

export default router