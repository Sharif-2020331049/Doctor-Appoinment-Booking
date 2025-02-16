import express from 'express'
import { addDoctor } from '../controllers/admin.controller.js'
import dotenv from 'dotenv'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
dotenv.config()

const upload = multer({storage})

const adminRouter = express.Router()


adminRouter.post('/add-doctor', upload.single('image'), addDoctor)


export default adminRouter;

