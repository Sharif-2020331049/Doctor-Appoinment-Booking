import express from 'express'
import { addDoctor, loginAdmin } from '../controllers/admin.controller.js'
import dotenv from 'dotenv'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
import { authAdmin } from '../middlewares/authAdmin.middleware.js'
dotenv.config()

const upload = multer({storage})

const adminRouter = express.Router()

// routes
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin)


export default adminRouter;

