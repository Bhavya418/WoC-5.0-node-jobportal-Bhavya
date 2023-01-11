const mongoose = require("mongoose");
const { Schema } = mongoose;
const comapanySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  companyName: {
    type: String,
    required: true,
    
  },
   email: {
    type: String,
    required: true,
    unique: true,
    
  },
  age: {
    type: String,
    required: true
  },
  cpiCriteria: {
    type: String,
    required: true
  },
  officialWebsite: {
    type: String,
    required: true
  },  
  position: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  
});

const companyData=mongoose.model('company',comapanySchema)

module.exports =companyData;

