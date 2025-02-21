import { cloudinary } from './cloudinary.config.js'
import {  CloudinaryStorage } from 'multer-storage-cloudinary'

// set up cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Doctor_image",  // Folder name in cloudinary to store images 
        allowed_formats: ['jpg', 'jpeg', 'png'],  // allowed formats
        // transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional: Resize images

    }
   
})

export {cloudinary, storage}