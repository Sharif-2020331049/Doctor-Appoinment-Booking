import { app } from "./src/app.js";
import dotenv from 'dotenv'
import { connectDB } from "./src/config/db.js";
import { connectCloudinary } from "./src/config/cloudinary.config.js";

dotenv.config({
    path: './.env'
})
const PORT = process.env.PORT || 8000

connectDB();
connectCloudinary()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);  
})

