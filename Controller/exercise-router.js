const express = require('express')
const res = require('express/lib/response')
const Exercise = require('../models/exercise/top-exercise-model')
const router = express.Router()


// router.get('/search', exerciseController.querySearch)
// router.get('/search', exerciseController.querySearchName);

// router.get("/", (req, res) => {
//     const { q } = req.query;
  
    // const keys = ["name", "joint", "muscleGroup", "position"];
  
    // const search = (data) => {
    //   return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(q))
    //   );
    // };

//     const exerciseSearch = Exercise.find({$regex: q})
  
//     q ? res.json(search(exerciseSearch).slice(0, 5)) : res.json(exerciseSearch.slice(0, 5));
//   });

//get all exercises from list:
router.get("/exercises/", (req, res) => {
    const results = Exercise.find({})
    results.then((data) => { res.send(data) })
   
})

//get exercises by query
// router.get("/search", (req, res) => {
//     const {q} = req.query
//     const results = Exercise.findOne({"name": q}, )
//     results.then((data) => { res.send(data) })
//    console.log('this is the query: ' + query)
// })







//get exercises by name

// router.get("/search/", (req, res) => {
//     const searchEx = req.body.name
//     const query = {name: {$eq: searchEx}}
//     const result = Exercise.find(query)
//     result.then((data) => { res.send(data) })
// })

// router.get("/exercises-name", (req, res) => {
//     const searchEx = req.query.name
//     const query = {name: {$eq: searchEx}}
//     const result = Exercise.find(query)
//     result.then((data) => { res.send(data) })
// })



// router.get('/exercises/name', async (req, res) => {
//     const ex = req.query.name
//     try {
//         const query = {name: {$eq: ex}}
//         const results = await Exercise.find(query)
//         res.json(results)
//     } catch (error) {
//         res.status(400).json(error)
//     }
    
// })

//by id find
router.get('/exercises/:id', (req, res) => {
    const results = Exercise.findById({_id: req.params.id})
    results.then((data) => {
        res.send(data)
    })
})

module.exports = router

// router.get('/exercises/name', (req, res) => {
//     const results = Exercise.find({
//         $or: [{"name": 'radial nerve glide elbow bias'},
//             {"name": 'radial nerve glide wrist bias'},
//             {"name": 'radial nerve glide shoulder bias'},
//             {"name": 'radial nerve glide cervical bias'},
//         ]
//     })
//     results.then((data) => {
//         res.send(data)
//     })
// })

// router.get('/exercises/name', (req, res) => {
//     res.render('search', {name: ['clamshells']});
//     })

// router.get('/exercises/name', (req, res) => {
//     const results = Exercise.find({name: 'clamshells'}, (error, data) => {
//         if(error){
//             console.log(error)
//         }else{
//             console.log(data)
//         }
//     })
//     results.then(() => {
//         res.send(data)
//     })
// })
//------get library----per user login auth

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

