const express = require('express')
const passport = require('passport')
const router = express.Router()


router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});


router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

// Google OAuth login route
router.get('/google', 
    passport.authenticate('google', ['profile', 'email'] )
  )

  // Google OAuth callback route
router.get('/google/oauth2callback', 
    passport.authenticate('google', {
      successRedirect: process.env.CLIENT_URL,
      failureRedirect: '/logi/failed',
    })
  )

// OAuth logout route
router.get('/logout', function (req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err)}
      res.redirect(process.env.CLIENT_URL)
    })
  })

module.exports = router;