const express = require("express")

const { signinController, signupController } = require("../controllers/auth2.js")

const router = express.Router()

router.post("/signin", signinController)
router.post("/signup", signupController)

module.exports = router;