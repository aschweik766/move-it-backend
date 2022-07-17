
const mongoose = require('../../config/Database/connection')
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

ExerciseSchema.index({ name: 'text', "joint": 'text'});
const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise