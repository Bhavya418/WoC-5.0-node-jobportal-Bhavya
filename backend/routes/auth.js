const express= require("express");
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router=express.Router();
router.get('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.json(req.body);
})
module.exports=router