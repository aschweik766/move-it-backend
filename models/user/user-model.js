const { mongo } = require('mongoose')
const mongoose = require('../../Database/connection')

const UsersSchema = new mongoose.Schema(
    {
        email: String,
        googleId: String,
        first_name: String,
        last_name: String,
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