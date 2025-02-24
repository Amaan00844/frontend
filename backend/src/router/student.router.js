import express from 'express'

import { register, adminlogin, addevent, contact_Us, getLatestEvent, getParticipants, registerParticipant } from '../controller/student.controller.js'
const server = express()

server.post("/register", register)
server.post("/studentregister", registerParticipant)
server.post("/participants", getParticipants)

server.post("/login", adminlogin)
server.post("/addevent", addevent)
server.post("/ContactUs", contact_Us)
server.post("/LatestEvent", getLatestEvent)

export default server   