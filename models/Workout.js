const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Workout schema for mongoose
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      name: {
        // type: Schema.Types.ObjectId,
        type: String,
        trim: true,
        required: 'What is the name of workout?',
      },
      type: {
        type: String,
        trim: true,
        required: 'What is the type of workout?',
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
