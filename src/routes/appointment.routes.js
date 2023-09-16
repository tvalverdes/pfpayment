import { Router } from 'express'
import {
  createAppointment,
  getAppointments,
} from '../controllers/appointment.controller.js'

const router = Router()

router.post('/appointment', createAppointment)
router.get('/appointments', getAppointments)

export default router
