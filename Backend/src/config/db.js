 import mongoose from "mongoose"

const connectDB = async ()=>{
    try {

      await mongoose.connect(`${process.env.MONGODB_URL}/Doctor-appoint`)
      console.log('MongoDB connected successfully');
      
        
    } catch (error) {
        console.error('Failed to connect with DB', error);
        process.exit(1)
         
    }
}

export {connectDB}