import express from 'express'
import paymentRoutes from './routes/payment.routes.js'
import appointmentRoutes from './routes/appointment.routes.js'
import { PORT, connectDb } from './config.js'
import morgan from 'morgan'
import 'dotenv/config'
import path from 'path'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(paymentRoutes)
app.use('/api', appointmentRoutes)
app.use(express.static(path.resolve('src/public')))

const port = PORT
connectDb()
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
)
