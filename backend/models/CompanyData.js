const mongoose = require("mongoose");
const { Schema } = mongoose;
const comapanySchema = new Schema({
  
  name: {
    type: String,
    required: true,
    
  },
   StudentID: {
    type: String,
    required: true,
    unique: true,
    
  },
  address: {
    type: String,
    required: true
  },
  cpi: {
    type: Date,
    default: Date.now
  },
  contactDetails: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true
  },
  
});

const companyData=mongoose.model('company',comapanySchema)

module.exports =companyData