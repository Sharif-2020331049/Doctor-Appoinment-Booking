import express from 'express'
import cors from 'cors'
import { addDoctor } from './controllers/admin.controller.js'
import adminRouter from './routers/admin.route.js'

const app = express()

// middlewares
// app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))


// api endpoints
app.use('/api/v1/admin', adminRouter)
// localhost:8000/api/v1/admin/add-doctor


app.get('/', (_req, res)=>{
    res.send("API working")
})

export {app}
