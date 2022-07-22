// const express = require("express");
// const signup = express.Router();

// const passport = require("../../../../config/authenticate/")

// signup.post("/signup", (req, res) => {
//   passport.authenticate("google-signup", function (error, user, info) {
//     if (error) {
//       return res.status(500).json({
//         message: error || "Something went wrong.",
//         error: error.message || "Server error",
//       });
//     }
//     req.logIn(user, function (error, data) {
//       if (error) {
//         return res.status(500).json({
//           message: error || "Something went wrong.",
//           error: error.message || "Server error",
//         });
//       }
//       return res.json(user);
//     });
//   })(req, res);
// });

// module.exports = signup;
