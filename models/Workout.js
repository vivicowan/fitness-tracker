const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
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
        trim: true,
        required: "Enter a number for the duration of exercise",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
