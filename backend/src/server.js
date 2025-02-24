import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import Router from "./router/student.router.js"
import Router from '../src/router/student.router.js'
import { addevent, adminlogin, contact_Us, getLatestEvent, getParticipants, registerParticipant } from './controller/student.controller.js'

dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000
app.use(cors())
// app.get('/', (req, res) => {
//   return res.send('Hello World!')
// })
app.use("/api", Router)
app.get("/api/addevent", addevent)
app.get("/api/ContactUs", contact_Us)
app.get("/api/LatestEvent", getLatestEvent)
app.get("/api/login", adminlogin)
app.post("/api/events/:eventId/register", registerParticipant);
app.get("/api/events/:eventId/participants", getParticipants); 


app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})