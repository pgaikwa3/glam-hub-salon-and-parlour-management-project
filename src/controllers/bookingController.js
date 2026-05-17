const bookingService = require("../services/bookingService");

const createAppointment = (req, res) => {
  const appointment = bookingService.createAppointment(req.body);

  res.status(201).json({
    message: "Appointment created successfully",
    appointment,
  });
};

const updateAppointment = (req, res) => {
  const appointment = bookingService.updateAppointment(
    req.params.id,
    req.body
  );

  if (!appointment) {
    return res.status(404).json({
      message: "Appointment not found",
    });
  }

  res.json({
    message: "Appointment updated successfully",
    appointment,
  });
};

const cancelAppointment = (req, res) => {
  const appointment = bookingService.cancelAppointment(req.params.id);

  if (!appointment) {
    return res.status(404).json({
      message: "Appointment not found",
    });
  }

  res.json({
    message: "Appointment cancelled successfully",
    appointment,
  });
};

module.exports = {
  createAppointment,
  updateAppointment,
  cancelAppointment,
};
