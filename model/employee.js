const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  designated: {
    type: String,
    required: true,
    trim: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
