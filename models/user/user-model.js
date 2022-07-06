const { mongo } = require('mongoose')
const mongoose = require('/Users/aschweikhard/Desktop/general-assembly/project4/move-it-backend/Database/connection')

const UsersSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: String,
        email: String,
        password: String,
        role: [String],
        favoritedEx: {
             exercise_id: String,
             name: String,
             joint: [String],
             equipment: [String],
             muscleGroup: [String],
             position: String,
             image: String,
             url: String,
        },
    }, 
    { timestamps: true}
)

const Users = mongoose.model('User', UsersSchema);

module.exports = Users