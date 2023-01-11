const express = require("express");
const companyData = require("../models/CompanyData");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// Route 1 : Fetch all the data of the user  GET :"api/companyData/fetchData"
router.get("/fetchData", fetchuser, async (req, res) => {
  try {
    const data = await companyData.find({ user: req.user.id });
    res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Route 2 : Add a data of the user POST : "api/companyData/addData"
router.post(
  "/addData",
  fetchuser,
  [
    body("email", "Enter a valid email").isEmail(),
    body("description", "Description should be atleast 50 characters").isLength(
      { min: 30 }
    ),
  ],
  async (req, res) => {
    try {
      const {
        companyName,
        email,
        age,
        cpiCriteria,
        officialWebsite,
        position,
        package,
        description,
        
      } = req.body;
      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newData = new companyData({
        companyName,
        email,
        age,
        cpiCriteria,
        officialWebsite,
        position,
        package,
        description,
        user: req.user.id,
      });
      const saveData = await newData.save();
      res.json(saveData);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 3 : Update the user data PUT : "api/companyData/updateData" : Login required
router.put(
  "/updateData",
  fetchuser,
  [
    body("email", "Enter a valid email").isEmail(),
    body("description", "Description should be atleast 50 characters").isLength(
      { min: 30 }
    ),

  ],
  async (req, res) => {
    try {
      const {   companyName,
        email,
        age,
        cpiCriteria,
        officialWebsite,
        position,
        package,
        description,} = req.body;
      const newData = {};
      if (companyName) {
        newData.companyName = companyName;
      }
      if (email) {
        newData.email = email;
      }

      if (age) {
        newData.age = age;
      }

      if (cpiCriteria) {
        newData.cpiCriteria = cpiCriteria;
      }

      if (officialWebsite) {
        newData.officialWebsite = officialWebsite;
      }
      if (position) {
        newData.position = position;
      }
      if (package) {
        newData.package = package;
      }
      if (description) {
        newData.description = description;
      }
      let userID = "63b87dedd6bb8002a001eb04";
      let id = "63beae61a5bb35cc27c01219";
      let data = await companyData.findById(id);
      if (!data) {
        return res.status(404).send("Not found");
      }
      if (data.user.toString() !== userID) {
        return res.status(401).send("Not allowed");
      }
      data = await companyData.findByIdAndUpdate(
        id,
        { $set: newData },
        { new: true }
      );
      res.json({ data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
