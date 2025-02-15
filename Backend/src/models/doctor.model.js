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
    phone: {
      type: String,
      unique: true,
      trim: true
    },
    photo: {
      type: String, 
    },
    experience: {
      type: Number,
      min: 0
    },
    fee: {
      type: Number,
      min: 0
    },
    about: {
      type: String
    },
    specialization: {
      type: [String]
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
