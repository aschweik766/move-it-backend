const dot = require('dotenv').config()
const PORT = process.env.PORT || 3001

const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
  

const exerciseRoutes = require('./routes/exercises.js')
const authRoutes = require("./routes/auth.js");

app.use(cookieParser());
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "https://moveit-frontend.herokuapp.com/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('hello welcome to move-it backend')
})


app.use("/auth", authRoutes);
app.use("/ex", exerciseRoutes)


app.listen(PORT, ()=> {
  console.log(`server running on port: ${PORT}`)
});



  