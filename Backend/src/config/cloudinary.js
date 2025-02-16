import { cloudinary } from './cloudinary.config.js'
import {  CloudinaryStorage } from 'multer-storage-cloudinary'

// set up cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
   
})

export {cloudinary, storage}