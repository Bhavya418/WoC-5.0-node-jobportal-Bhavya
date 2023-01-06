const express = require('express');
const connectToMongo = require("./database");
connectToMongo();
const app = express();
const port = 5000;
app.use(express.json());
 app.use("/api/auth", require("./routes/auth"));
// app.use("/api/studentData", require("./routes/studentData"));
// app.use("/api/companyData", require("./routes/companyData"));


app.listen(port, () => {
  console.log(`Job app listening on port ${port}- "http://localhost:5000"`)
})