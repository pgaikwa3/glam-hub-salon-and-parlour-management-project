const validateAppointment = (req, res, next) => {
  const { customerName, service, date, time } = req.body;

  if (!customerName || !service || !date || !time) {
    return res.status(400).json({
      message: "All appointment fields are required",
    });
  }

  next();
};

module.exports = validateAppointment;
