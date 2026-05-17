const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/appointments",
  authMiddleware,
  bookingController.createAppointment
);

router.put(
  "/appointments/:id",
  authMiddleware,
  bookingController.updateAppointment
);

router.delete(
  "/appointments/:id",
  authMiddleware,
  bookingController.cancelAppointment
);

module.exports = router;
