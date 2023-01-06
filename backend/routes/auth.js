require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
const JWT_SECRET = process.env.JWT_SECRET;
//Route 1: Create a user POST: "api/auth/createUser" still not bycrypted
router.post(
  "/createUser",
  [
    body("password", "Password length must be of 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    // If there are errors, return a bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //Creating a new user from the data
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, User with this email already exists" });
      }
      //To add a string a start and end of the password(salt) and prevent it from attackers
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      user = await User.create({
        email: req.body.email,
        password: hash,
        typeUser: req.body.typeUser,
      });
      const userID = {
        user: {
          id: user.id,
        },
      };
      //Will use the JSON Web token using the id
      const authToken = jwt.sign(userID, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internel Server Error");
    }
  }
);
//Route 2: Authenticate a user POST: "api/auth/login"
router.post(
  "/login",
  [
    body("password", "Password must not be blank").exists(),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    // If there are errors, return a bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Destructuring the req.body to get password and email
    const { email, password } = req.body;
    try {
      //Authenticating the user
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct email" });
      }
      const passWordCompare = await bcrypt.compareSync(password, user.password);
      if (!passWordCompare) {
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }
      const userID = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(userID,JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internel Server Error");
    }
  }
  
);
//Route 3: Fetch the user POST: "api/auth/getUser"
//Making the middleware fetchUser which checks the incoming token before sending it to route
router.post(
    "/getUser",
    fetchuser,
    async (req, res) => {
    
      try {
        const userId= req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internel Server Error");
      }
    }
    
  );

module.exports = router;
