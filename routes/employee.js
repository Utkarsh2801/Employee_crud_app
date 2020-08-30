const express = require("express");

const {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployee,
  getEmployees,
} = require("../routeHandlers/employee");

const router = express.Router();

router.post("/add", addEmployee);

router.delete("/delete/:id", deleteEmployee);

router.put("/update/:id", updateEmployee);

router.get("/get/:id", getEmployee);

router.get("/getall", getEmployees);

module.exports = router;
