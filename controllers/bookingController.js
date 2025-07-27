const Booking = require("../models/Booking");

exports.bookActivity = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user.id,
      activity: req.params.activityId,
    });
    res.status(201).json({ msg: "Activity booked", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("activity");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
