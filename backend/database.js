const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURL = "mongodb://localhost:27017/jobApp"
const connectToMongo = async()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connected to mongoDB successfully")
    })
}
module.exports= connectToMongo;
