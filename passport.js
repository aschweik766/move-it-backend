const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

// const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;

const GOOGLE_CLIENT_ID = '753718326428-5ivqkvr7mg0knmr73ml5vh286sj7hmaj.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});