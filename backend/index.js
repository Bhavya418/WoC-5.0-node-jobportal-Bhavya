const express = require('express');
const connectToMongo = require("./database");
var cors = require('cors')
connectToMongo();
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
 app.use("/api/auth", require("./routes/auth"));
app.use("/api/studentData", require("./routes/applicant"))
app.use("/api/companyData", require("./routes/company"));


app.listen(port, () => {
  console.log(`Job app listening on port ${port}- "http://localhost:5000"`)
})