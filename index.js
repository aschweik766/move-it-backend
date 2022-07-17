//planning: boilerplate to begin here, setup localhost port
const express = require('express')
const dotenv = require('dotenv').config()
dotenv.config();
const cors = require('cors')
const methodOverride = require('method-override')
const db = require('./models/index')
const bodyparser = require('body-parser');

require('./config/Database/connection')
const PORT = process.env.PORT || 3001
const app = express()
const passport = require('passport')
const createError = require('http-errors')
const authRouter = require('./Controller/Routes/auth')
const profilesRouter = require('./Controller/Routes/profiles')

const userController = require('./Controller/Routes/user-router')
const exerciseController = require('./Controller/Routes/exercise-router')

app.use(cors()) // to prevent cors errors, open access to all origins
app.use(express.json())

app.use('/public', express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: 'lax', //cookie could be 1 hour, or many things.
        }
    })
)


require('./config/Database/passport')
app.use(passport.initialize())
app.use(passport.session())


//controllers and routes to use
app.use(userController)
app.use(exerciseController)
app.use('./routes/profiles', profilesRouter)
app.use('./routes/auth', authRouter)



app.get('/', async (req, res, next) => {
    try {
        // if(!req.session) res.redirect('/login')
        const facts = await db.Facts.find({});
        const context = { facts }
        console.log(facts);
        return res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

app.post('/', async (req, res, next) => {
    try {
        // console.log(`The req.body is ${req.body}`)
        const createdFact = await db.Facts.create(req.body);
        console.log(`The created product is ${createdFact}`)
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

app.listen(PORT, ()=> {
    console.log(`server running on port: ${PORT}`)
});

