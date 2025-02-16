import mongoose, { Schema } from "mongoose";

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
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
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

export const Doctor = mongoose.model("Doctor", doctorSchema);
