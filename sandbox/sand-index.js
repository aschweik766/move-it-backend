// //planning: boilerplate to begin here, setup localhost portconst 
// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const methodOverride = require('method-override')

// const app = express()
// const PORT = process.env.PORT || 3001
// const cookieSession = require("cookie-session");
// const passportStrategy = require('./config/Database/passport')
// const mongoose = require('mongoose')
// const passport = require('passport')
// const bodyparser = require('body-parser');
// // const createError = require('http-errors')



// const authController = require('./Controller/Routes/auth-router')
// const userController = require('./Controller/Routes/user-router')
// const exerciseController = require('./Controller/Routes/exercise-router')

// app.use(express.json())
// app.use('/public', express.static(__dirname + 'public'))
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({extended: true}))

// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["moveithep"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );

// app.use(passport.initialize())
// app.use(passport.session())

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );


// //controllers and routes to use
// app.use('/user', userController);
// app.use('/ex', exerciseController);
// app.use('/auth', authController);

// app.listen(PORT, ()=> {
//     console.log(`server running on port: ${PORT}`)
// });

