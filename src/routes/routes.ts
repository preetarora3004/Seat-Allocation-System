import { Router } from "express";
import { Controller } from "../controller/controller";

const router = Router();
const controller = new Controller();

router.get("/available-seat/:seatName", controller.checkAvailablity);
router.post("/book-seat/:seatName", controller.bookSeat);
router.post("/add-reservation/:seatName", controller.bookReservation);

export default router;
