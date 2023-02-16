const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const axios = require("axios")
const config = require("../config.js")

const User = require("../models/user/user-model.js")


const signinController = async(req, res) => {
    if(req.body.googleAccessToken){
        // gogole-auth
        const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const firstName = response.data.given_name;
                const lastName = response.data.family_name;
                const email = response.data.email;
                const avatar = response.data.picture;

                const existingUser = await User.findOne({email})

                if (!existingUser) 
                return res.status(404).json({message: "User does not exist!"})

                const token = jwt.sign({
                    email: existingUser.email,
                    id: existingUser._id
                }, config.JWT_SECRET_KEY, {expiresIn: "1h"})
        
                res
                    .status(200)
                    .json({result: existingUser, token})
                    
            })
            .catch(err => {
                res
                    .status(400)
                    .json({message: "Invalid access token!"})
            })
    }else{
        // normal-auth
        const {email, password} = req.body;
        if (email === "" || password === "") 
            return res.status(400).json({message: "Invalid field!"});
        try {
            const existingUser = await User.findOne({email})
    
            if (!existingUser) 
                return res.status(404).json({message: "User does not exist!"})
    
            const isPasswordOk = await bcrypt.compare(password, existingUser.password);
    
            if (!isPasswordOk) 
                return res.status(400).json({message: "Invalid credentials!"})
    
            const token = jwt.sign({
                email: existingUser.email,
                id: existingUser._id
            }, config.JWT_SECRET_KEY, {expiresIn: "1h"})
    
            res
                .status(200)
                .json({result: existingUser, token})
        } catch (err) {
            res
                .status(500)
                .json({message: "Something went wrong!"})
        }
    }
  
}

const signupController = async(req, res) => {
    if (req.body.googleAccessToken) {
        const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const firstName = response.data.given_name;
                const lastName = response.data.family_name;
                const email = response.data.email;
                const avatar = response.data.picture;

                const existingUser = await User.findOne({email})

                if (existingUser) 
                    return res.status(400).json({message: "User already exists!"})

                const result = await User.create({verified:"true",email, firstName, lastName, profileAvatar: avatar})

                const token = jwt.sign({
                    email: result.email,
                    id: result._id
                }, config.JWT_SECRET_KEY, {expiresIn: "1h"})

                res
                    .status(200)
                    .json({result, token})
            })
            .catch(err => {
                res
                    .status(400)
                    .json({message: "Invalid access token!"})
            })

    } else {
        // normal form signup
        const {email, password, confirmPassword, firstName, lastName} = req.body;

        try {
            if (email === "" || password === "" || firstName === "" || lastName === "" && password === confirmPassword && password.length >= 4) 
                return res.status(400).json({message: "Invalid field!"})

            const existingUser = await User.findOne({email})

            if (existingUser) 
                return res.status(400).json({message: "User already exists!"})

            const hashedPassword = await bcrypt.hash(password, 12)

            const result = await User.create({email, password: hashedPassword, firstName, lastName})

            const token = jwt.sign({
                email: result.email,
                id: result._id
            }, config.JWT_SECRET_KEY, {expiresIn: "1h"})

            res
                .status(200)
                .json({result, token})
        } catch (err) {
            res
                .status(500)
                .json({message: "Something went wrong!"})
        }

    }
}

module.exports = {
    signinController,
    signupController
}

router.post('/register', function(req, res) {
  
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  });