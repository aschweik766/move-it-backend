const express = require('express')
const res = require('express/lib/response')
const Exercise = require('../models/exercise/top-exercise-model')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Exercise App')
})

router.get('/exercises', (req, res) => {
    const results = Exercise.find({})
    results.then((data) => {
        res.send(data)
    })
})
router.get('/exercises/:id', (req, res) => {
    const results = Exercise.findById({_id: req.params.id})
    results.then((data) => {
        res.send(data)
    })
})

// router.get('/exercises/:name', (req, res) => {
//     const results = Exercise.find({name: req.params.name})
//     results.then((data) => {
//         res.send(data)
//     })
// })

module.exports = router
