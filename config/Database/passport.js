require('../../models/index');
require('dotenv').config()

const Profile = require('../../models/profile')
const User = require('../../models/user/user-model') 

const passport = require('passport')
const Strategy = require('passport-google-oauth20')
const GoogleStrategy = Strategy.Strategy

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
      },
      function (accessToken, refreshToken, profile, done) {
        // a user has logged in with OAuth...
        User.findOne({ googleId: profile.id })
        .then(user => {
          if (user) {
            return done(null, user)
          } else {
            const newProfile = new Profile({
              name: profile.displayName,
              avatar: profile.photos[0].value,
            })
            const newUser = new User({
              email: profile.emails[0].value,
              googleId: profile.id,
              profile: newProfile._id,
            })
            newProfile.save()
            .then(()=> {
              newUser.save()
              .then(() => {
                return done(null, newUser) 
              })
              .catch(err => {
                if (err) {
                  // Something went wrong while making a user - delete the profile
                  // we just created to prevent orphan profiles.
                  Profile.findByIdAndDelete(newProfile._id)
                  return done(err)
                } 
              })
            })
            .catch(err => {
              if (err) return done(err)
            })
          }
        })
        .catch(err => {
          if (err) return done(err)
        })
      }
    )
  )

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id)
    .populate('profile', 'name avatar')
    .then(user => {
      done(null, user)
    })
    .catch(err => {
      done(err, null)
    })
  })