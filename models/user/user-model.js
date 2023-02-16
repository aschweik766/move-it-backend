const mongoose = require('../../databases/connection.js')

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    firstName: String,
    lastName: String,
    profileAvatar: String,
    id: String,
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
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const Users = mongoose.model('Users', userSchema);

module.exports = Users