require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
// express app
const app = express()

//routes
/*
app.get('/', (req,res) =>{
    res.json({mssg: 'Welcome to Bullet Pandi Martial arts'})
})
*/
//middleware
app.use(express.json())

app.use('/api/workouts',workoutRoutes)


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

/*
// listen for requests

app.listen(4000, () =>{
    console.log('Listening on the port 4000!!!!!')
})
*/
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //console.log('connected to database')

    // listen to port
    app.listen(process.env.PORT, () => {
       console.log('connected to database and listening for requests on port', process.env.PORT)
      })
    })
    .catch((err) => {
        console.log(err)
      }) 
