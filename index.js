const dot = require('dotenv').config()
const PORT = process.env.PORT || 3001

const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require('method-override')
const passportSetup = require("./passport");
const passport = require("passport");


const exerciseController = require('./Routes/exercise-router')
const authController = require("./routes/auth");



app.use(
  cookieSession(
    { name: "session", keys: ["moveit"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authController);
app.use("/auth", exerciseController)


app.listen(PORT, ()=> {
  console.log(`server running on port: ${PORT}`)
});



  