const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    avatar: {
        type: String,
        required: [true, 'avatar cannot be empty']
    },
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;