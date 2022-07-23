const express = require('express')
const res = require('express/lib/response')
const Exercise = require('../models/exercise/top-exercise-model')
const router = express.Router()



router.get("/exercises/", (req, res) => {
    const results = Exercise.find({})
    results.then((data) => { res.send(data) })
   
})


router.get('/exercises/:id', (req, res) => {
    const results = Exercise.findById({_id: req.params.id})
    results.then((data) => {
        res.send(data)
    })
})

module.exports = router



//future routes for user model

// router.get('/library', async (req, res, next) => {
//     try {
//         if(!req.session) res.redirect('/login')
//         const results = await Exercise.find({});
//         console.log(results);
//         results.then((data) => { 
//             res.send(data)})
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });


//----per user library login auth, get and post and put and del new exercise custom cards---


// router.post('/new-exercise-card', async (req, res, next) => {
//     try {
//         // console.log(`The req.body is ${req.body}`)
//         const createExerciseCard = await Exercise.create(req.body);
//         console.log(`The created exercise card is ${createExerciseCard}`)
//         res.redirect('/library');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

