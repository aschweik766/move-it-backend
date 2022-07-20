//planning: boilerplate to begin here, setup localhost portconst 
require('dotenv').config();
const mongoose = require('./config/Database/connection');
const express = require('express')
const app = express();

const cors = require('cors')
const session = require('express-session')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3001
const logger = require('morgan');
const MongoStore = require('connect-mongo');

const passport = require('./config/authenticate')
const bodyparser = require('body-parser');
// const createError = require('http-errors')



const authController = require('./Controller/Routes')
// const userController = require('./Controller/Routes/user-router')
const exerciseController = require('./Controller/exercise-router')



app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.SECRET_KEY,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 12 * 60 * 60,
        autoRemove: 'native'
      }),
    })
  );
app.use(passport.initialize())
app.use(passport.session())


app.use(logger('dev'))
app.use(express.json())
// app.use('/public', express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(cors());

//controllers and routes to use
app.use('/api', authController)

// app.use('/user', userController);
app.use('/ex', exerciseController);
// app.use('/auth', authController);

app.listen(PORT, ()=> {
    console.log(`server running on port: ${PORT}`)
});

