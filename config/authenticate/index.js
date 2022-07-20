const passport = require("passport");
const User = require("../../models/user/user-model");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email }).exec((err, user) => {
    done(err, user);
  });
});

const GoogleLogin = require("./googleOauth2/SignIn");
const GoogleRegister = require("./googleOauth2/SignUp");

passport.use("google-signin", GoogleLogin);
passport.use("google-signup", GoogleRegister);

module.exports = passport;
