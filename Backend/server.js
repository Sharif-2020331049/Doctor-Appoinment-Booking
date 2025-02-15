import { app } from "./src/app.js";
import dotenv from 'dotenv'
import { connectDB } from "./src/config/db.js";

dotenv.config({
    path: './.env'
})

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);  
})

