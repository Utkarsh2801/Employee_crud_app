require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("public"));

app.use(cors());

const { mongoConnect } = require("./config/config");
mongoConnect();

const employeeRoutes = require("./routes/employee");

app.use("/employee", employeeRoutes);

app.use(express.static("./client/employee_app/build"));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "employee_app", "build", "index.html")
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server Connected at ${process.env.PORT}`);
});
