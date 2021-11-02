const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);

    res.status(200).json(workouts);
  } catch (error) {
      res.status(400).json(error)
  }
});

router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create({})

        res.status(200).json(newWorkout);
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/workouts/range', async (req, res) => {
    try {
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration',
                    },
                },
            },
        ]).sort({ _id: -1}).limit(7)

        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/workouts/:id', async (req, res) => {
    try {
        const workouts = await Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body },
        })

        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;
