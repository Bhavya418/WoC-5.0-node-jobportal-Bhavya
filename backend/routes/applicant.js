const express = require("express");
const studentData = require("../models/StudentData");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// Route 1 : Fetch all the data of the user  GET :"api/studentData/fetchData"
router.get("/fetchData", fetchuser, async (req, res) => {
  try {
    const data = await studentData.find({ user: req.user.id });
    res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Route 2 : Add a data of the user POST : "api/studentData/addData"
router.post(
  "/addData",
  fetchuser,
  [
    body("email", "Enter a valid email").isEmail(),
    body("StudentID", "StudentID should be atleast 9").isLength({
      min: 9,
    }),
    body("contactDetails", "contact no should be atleast 10").isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    try {
      const { name, StudentID, address, cpi, contactDetails, email } = req.body;
      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newData = new studentData({
        name,
        StudentID,
        address,
        cpi,
        contactDetails,
        email,
        user: req.user.id,
      });
      const saveData= await newData.save();
      res.json(saveData);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 3 : Update the user data PUT : "api/studentData/updateData" : Login required
router.put(
    "/updateData",
    fetchuser,
    [
      body("email", "Enter a valid email").isEmail(),
      body("StudentID", "StudentID should be atleast 9").isLength({
        min: 9,
      }),
      body("contactDetails", "contact no should be atleast 10").isLength({
        min: 10,
      }),
    ],
    async (req, res) => {
      try {
       
        const { name, StudentID, address, cpi, contactDetails, email } = req.body;
        const newData={};
        if(name){
            newData.name=name;
        }
        if(StudentID){
            newData.StudentID=StudentID;
        }

        if(address){
            newData.address=address;
        }

        if(cpi){
            newData.cpi=cpi;
        }

        if(contactDetails){
            newData.contactDetails=contactDetails;
        }
        if(email){
            newData.email=email;
        }
        let userID='63b87dedd6bb8002a001eb04'
        let id='63beae61a5bb35cc27c01219'
        let data = await studentData.findById(id);
        if(!data){
            return res.status(404).send("Not found");
        }
        if (data.user.toString() !== userID) {
            return res.status(401).send("Not allowed");
          }
          data = await studentData.findByIdAndUpdate(
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
