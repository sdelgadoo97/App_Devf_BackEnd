const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    doc_id: {
      type: Number,
      required: true,
    },
    tipo_id: {
      type: String,
      enum: ['CC','TI','CE','NIT'],
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
      required: false,
    },
    patient_birthdate: {
      type: Date,
      required: true,
    },
    patient_age: {
      type: Number,
      required: true,
    },
    patient_gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    patient_height: {
      type: Number,
      required: false,
    },
    patient_weight: {
      type: Number,
      required: false,
    },
    patient_allergies: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

userSchema.index({ doc_id: 1, tipo_id: 1 }, { unique: true });

const User = mongoose.model("patients", userSchema);

module.exports = User;
