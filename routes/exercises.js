const { selectOne, fetchAll } = require("../controllers/exercises.js");

const router = require("express").Router();

router.get('/exercises/:id', selectOne); 
router.get("/exercises", fetchAll);

module.exports = router;