import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


const authAdmin = asyncHandler (  async (req, _res, next)=>{
    const  token  = req.header('Authorization')?.replace("Bearer ", "");
 
    
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    if( decodedToken.email !== process.env.ADMIN_EMAIL || decodedToken.password !== process.env.ADMIN_PASSWORD)
    {
        throw new ApiError(401, "Unauthorize to access admin")
    }
    // console.log(decodedToken);

    req.admin = decodedToken
    next()

})

export { authAdmin }