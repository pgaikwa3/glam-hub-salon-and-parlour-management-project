const appointments = require("../models/appointmentModel");

const createAppointment = (data) => {
  const appointment = {
    id: appointments.length + 1,
    customerName: data.customerName,
    service: data.service,
    date: data.date,
    time: data.time,
    status: "Booked",
  };

  appointments.push(appointment);
  return appointment;
};

const updateAppointment = (id, data) => {
  const appointment = appointments.find((a) => a.id == id);

  if (!appointment) {
    return null;
  }

  appointment.customerName = data.customerName || appointment.customerName;
  appointment.service = data.service || appointment.service;
  appointment.date = data.date || appointment.date;
  appointment.time = data.time || appointment.time;

  return appointment;
};

const cancelAppointment = (id) => {
  const appointment = appointments.find((a) => a.id == id);

  if (!appointment) {
    return null;
  }

  appointment.status = "Cancelled";
  return appointment;
};

module.exports = {
  createAppointment,
  updateAppointment,
  cancelAppointment,
};
