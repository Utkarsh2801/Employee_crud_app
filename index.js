require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const { mongoConnect } = require("./config/config");
mongoConnect();

const employeeRoutes = require("./routes/employee");

app.use("/employee", employeeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Connected at ${process.env.PORT}`);
});
