const { register, login } = require("../controllers/auth.js");
const { check_user } = require("../middlewares/authMiddleware.js");

const router = require("express").Router();

router.post("/", check_user); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;