import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient", // Reference to Patient model
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor", // Reference to Doctor model
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    paymentOption: {
      type: String,
      enum: ["Cash", "Credit Card", "Debit Card", "Mobile Payment"], // Allowed options
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
