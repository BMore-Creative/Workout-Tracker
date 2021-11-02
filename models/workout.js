const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Please enter an exercise type',
            },
            name: {
                type: String,
                trim: true,
                required: 'Please enter an exercise name',
            },
            duration: {
                type: Number,
                required: 'Please enter a duration for the exercise',
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;