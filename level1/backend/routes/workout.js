
const express  =  require('express')
//const Workout  =  require('../models/WorkoutModel')
const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout
  } = require('../controllers/workoutController')

const router  =  express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

/*
//GET all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single workout'})
})

//Post new workout
router.post('/', async(req,res) => {
    //we are sending the Post request
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout) //200 all OK
    } catch (error){
        res.status(400).json({error: error.message}) // error code
    }
   // res.json({mssg: 'Post new workout'})
})

//delete
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete'})
})

//update a workouts
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update a workouts'})
})
*/
/*
//GET all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single workout'})
})

//Post new workout
router.post('/', (req,res) => {
    res.json({mssg: 'Post new workout'})
})

//delete
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete'})
})

//update a workouts
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update a workouts'})
})
// */
/*
// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)
*/
module.exports = router