const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/:activityId", authMiddleware, bookingController.bookActivity);
router.get("/me", authMiddleware, bookingController.getMyBookings);

module.exports = router;
