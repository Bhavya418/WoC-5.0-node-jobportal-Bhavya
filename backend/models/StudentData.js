const mongoose = require("mongoose");
const { Schema } = mongoose;
const studentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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

const studentData=mongoose.model('student',studentSchema)

module.exports =studentData