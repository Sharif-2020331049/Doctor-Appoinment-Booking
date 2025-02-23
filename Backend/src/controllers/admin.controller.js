import { Doctor } from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import validator from 'validator'
import jwt from 'jsonwebtoken'

const generateAccessAndRefreshToken = async (userId)=>{
    try {

        await Doctor.findOne()

        
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }
}

// ApI for adding doctor
const addDoctor = asyncHandler( async (req, res)=>{
 
        
        const { name, email, password, degree, experience, fee, about, speciality, address} = req.body
        const imageURL = req.file?.path  

        // checking for all-data to add doctor
        if( [name, email, password, degree, experience, fee, about, speciality, address].some(
            (field)=>field?.trim() === "" )){
                throw new ApiError(400, "All fields are required")
            };    

        // image validator
        if(!imageURL){
            throw new ApiError(400, "Image file is required!")
        }
         
        // validating email format
        if( !validator.isEmail(email) ){
             throw new ApiError(401, "Please enter a valid email")
        }

        // validate strong password
        if(password.length < 8 ){
            throw new ApiError(400, "Password must be at least 8 characters long");
        }

             
             

      const doctor = await Doctor.create({
            name,
            password,
            email,
            image: imageURL,
            degree,
            experience,
            speciality,
            fee,
            about,
            address
        });


      
        return res
        .status(201)
        .json(
            new ApiResponse(200, doctor, "Doctor added successfully")
        )
})

const updateDoctor = asyncHandler( async (req, res)=>{
   
})

const deleteDoctor = asyncHandler( async (req, res)=>{

})

// API for logIn Admin
const loginAdmin = asyncHandler( async(req, res)=>{
   const { email, password } = req.body

     // Validate input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }
  
    
   if((email !== process.env.ADMIN_EMAIL) ||  (password !== process.env.ADMIN_PASSWORD)){
      throw new ApiError(401, "Invalid credentials")
   }

    const token = jwt.sign(
        {
            email,
            password
        },
        process.env.ACCESS_TOKEN_SECRET
    );
    

    return res.
    status(201)
    .json(
        new ApiResponse(201, token, "Admin-login successfully")
    )
})

export {
    addDoctor,
    loginAdmin,
    deleteDoctor,
    updateDoctor,
    
    }