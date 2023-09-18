import { config } from 'dotenv'
import mongoose from 'mongoose'
config()

export const PORT = process.env.PORT || 3000
export const HOST = process.env.HOST
export const KEY = process.env.KEY
const MONGODB_URI = process.env.MONGODB_URI

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('connected to mongodb atlas')
  } catch (err) {
    console.error(err)
  }
}
