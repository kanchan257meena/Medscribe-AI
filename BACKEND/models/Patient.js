const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  // phone: {
  //   type: String,
  //   required: true,
  // },

  visits: [
    {
      transcript: {
        type: String,
        required: true,
        trim: true,
      },

      symptoms: [
        {
          type: String,
        },
      ],

      soapNote: {
        subjective: String,
        objective: String,
        assessment: String,
        plan: String,
      },

      visitDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
