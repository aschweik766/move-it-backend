
const mongoose = require('/Users/aschweikhard/Desktop/general-assembly/project4/move-it-backend/Database/connection')

const ExerciseSchema = new mongoose.Schema(
    {
        name: String,
        joint: [String],
        muscleGroup: [String],
        equipment: [String],
        position: String,
        url: String,
        image: String,
    }, 
    { timestamps: true}
)

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise