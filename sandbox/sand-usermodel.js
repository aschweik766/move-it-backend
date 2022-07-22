// const { mongo } = require('mongoose')
// const mongoose = require('../../config/Database/connection')

// const UsersSchema = new mongoose.Schema(
//     {
//         email: String,
//         googleId: String,
//         userProfile: {
//             type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
//         name: {
//             type: String,
//             required: [true, 'name cannot be empty']
//         },
//         favoritedEx: {
//              exercise_id: String,
//              name: String,
//              joint: [String],
//              equipment: [String],
//              muscleGroup: [String],
//              position: String,
//              image: String,
//              url: String,
//         },
//     }, 
//     { timestamps: true}
// )

// const Users = mongoose.model('User', UsersSchema);

// module.exports = Users