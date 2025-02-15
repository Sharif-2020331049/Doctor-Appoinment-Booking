import express from 'express'
import cors from 'cors'
import { Appointment } from './models/appointment.model.js'
import { Patient } from './models/patient.model.js'
import { Doctor } from './models/doctor.model.js'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send('App is running')
})

export {app}
