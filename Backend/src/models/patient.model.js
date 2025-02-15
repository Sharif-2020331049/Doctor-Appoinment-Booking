 import mongoose, {Schema} from "mongoose";

 const patientSchema = new Schema({
  fullName: {
     type: String,
     required: true,
     trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  photo: {
    type: String
  },
  address: {
    type: String
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  birthDate: {
    type: Date,
  },
  appointment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]

 },
  {
    timestamps: true
  }
)

 export const Patient = mongoose.model("Patient", patientSchema)