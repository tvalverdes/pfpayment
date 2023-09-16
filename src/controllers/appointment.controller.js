import { appointmentModel } from '../models/appointment.model.js'

export const createAppointment = async (req, res) => {
  const appointment = await appointmentModel(req.body)
  appointment
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

export const getAppointments = async (req, res) => {
  appointmentModel
    .find()
    .then((data) => {
      console.log(typeof data)
      res.send(data)
    })
    .catch((error) => {
      res.send({ message: error })
    })
}
