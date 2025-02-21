import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String, 
      required: true
    },
    experience: {
      type: Number,
      required: true,
      min: 0
    },
    degree: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      default: true
    },
    fee: {
      type: Number,
      required: true,
      min: 0
    },
    about: {
      type: String,
      required: true
    },
    speciality: {
      type: [String],
      required: true,
    },
    address: {
      type: String,
      required: true
    },
    slot_booked: {
      type: Object,
      default: {}
    }
  },
  
  {
    timestamps: true,
    minimize: false
  }
);

doctorSchema.pre("save", async function (next){
  
  if(!this.isModified("password")) return next()
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next()
})

doctorSchema.methods.generateAccessToken = function(){
   const token = jwt.sign(
    // payload
    {
      id:this._id,
      email: this.email,
    },
    // token secret
    process.env.ACCESS_TOKEN_SECRET
    , 
    //expireis
    {
     expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    
   )

   return token
}

doctorSchema.methods.generateRefreshToken = function(){

  const token = jwt.sign(

    //payload
    {
      id: this._id,
      email: this.email
    },
    // secret
     process.env.REFRESH_TOKEN_SECRET
     ,
     // expiries
    {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )

  return token;
}
export const Doctor = mongoose.model("Doctor", doctorSchema);
