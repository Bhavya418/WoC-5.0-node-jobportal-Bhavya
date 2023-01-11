var jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET
const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if(!token){
    res.status(401).send({error:"Please authenticate using a valid token"})
  }
  try{
    const userData=jwt.verify(token,JWT_SECRET);
    req.user=userData.user;
    next();
  }
  catch(error){
    res.status(401).send({error:"Please authenticate with a valid token"})
  }
};
module.exports = fetchuser;