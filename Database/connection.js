const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = Promise

const mongoURI =
    process.env.NODE_ENV === 'production' 
    ? process.env.DB_URL
    : 'mongodb://localhost/moveIt'
    // : process.env.DB_URL
    

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then((instance)=>
    console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log(`Connection failed`, error));




// mongoose.connect(connectionStr);

// // mongoDB connection on success
// mongoose.connection.on('connected', () => {
//     console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected...`)
// })

// // mongoDB connection on error
// mongoose.connection.on('error', (error) => {
//     console.log('MongoDB connection error ', error)
// })

// // disconnecting from mongoDB
// mongoose.connection.on('disconnected', () => {
//     console.log('MongoDB disconnected')
// })


module.exports = mongoose;

