const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["Cardio", "Resistance"],
    required: "Only valid choices are 'Cardio' and 'Resistance'",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise",
  },
  duration: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});
