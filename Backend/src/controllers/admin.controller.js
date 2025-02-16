import { asyncHandler } from "../utils/AsyncHandler.js";


// ApI for adding doctor
const addDoctor = asyncHandler( (req, res)=>{
    try {
        
        const { name, email, password, experience, fee, about, speciality, address} = req.body
        const imageFile = req.file

        console.log({ name, email, password, experience, fee, about, speciality, address})
        console.log(imageFile);
     
        res.json({
            message: "Data comes"
        })
        
        
    } catch (error) {
        
    }
})


export {addDoctor}