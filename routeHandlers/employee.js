const Employee = require("../model/employee");

// Add New Employee
exports.addEmployee = async (req, res, next) => {
  const { name, email, designated } = req.body;

  try {
    if (!name || !email || !designated) {
      return res.json({
        success: false,
        msg: "please fill all the required fields",
      });
    }

    const emp = await Employee.findOne({ email });

    if (emp) {
      return res.json({
        success: false,
        msg: "Employee already exists",
      });
    }

    const employee = await Employee.create({
      name,
      email,
      designated,
    });

    if (!employee) {
      throw new Error("Please fill all the required fields");
    }
    return res.json({
      sucess: true,
      data: employee,
    });
  } catch (err) {
    res.json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

// Delete Employee By ID
exports.deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndDelete(id);

    res.json({
      success: true,
      data: employee,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

// Update Employee By ID
exports.updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      data: employee,
    });
  } catch (err) {
    console.log(err);
    res.json({
      sucess: false,
      msg: "Something went wrong",
    });
  }
};

// Get All the Employees
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find({});

    res.json({
      success: true,
      data: employees,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

// Get Single Employee By ID
exports.getEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);

    if (!employee) {
      return res.json({
        success: false,
        msg: "Employee Not found",
      });
    }

    res.json({
      success: true,
      data: employee,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      msg: "Something went wrong",
    });
  }
};
