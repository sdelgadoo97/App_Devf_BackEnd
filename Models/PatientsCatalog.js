const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    doc_id: {
      type: Number,
      required: true,
      unique: true,
    },
    tipo_id: {
      type: String,
      required: true,
    },
    patient_name: {
      type: String,
      required: true,
    },
    patient_address: {
      type: String,
      required: true,
    },
    patient_phone: {
      type: Number,
      required: true,
    },
    patient_email: {
      type: String,
      required: true,
    },
    patient_birthdate: {
      type: Date,
      required: true,
    },
    patiend_age: {
      type: Number,
      required: true,
    },
    patient_gender: {
      type: String,
      required: true,
    },
    patient_height: {
      type: Number,
      required: true,
    },
    patient_weight: {
      type: Number,
      required: true,
    },
    patient_allergies: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("patients", userSchema);

module.exports = User;
