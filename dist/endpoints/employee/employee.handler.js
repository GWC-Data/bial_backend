"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEmployeeDetailsHandler = exports.getEmployeeDetailsByIdHandler = exports.getAllEmployeeDetailsHandler = exports.deleteEmployeeDetailsHandler = exports.createEmployeeDetailsHandler = void 0;
var _employee = require("./employee.const");
var _db = require("../../db");
function isValidBase64(base64String) {
  // Regular expression to check if the string is a valid base64 image string (with a data URI scheme)
  const base64Regex = /^data:image\/(png);base64,/;
  return base64Regex.test(base64String);
}
const getAllEmployeeDetailsHandler = async (req, res) => {
  try {
    const employeeDetails = await _db.Employee.findAll();
    if (employeeDetails.length === 0) {
      res.status(404).json({
        message: _employee.EMPLOYEE_DETAILS_NOT_FOUND
      });
      return;
    }
    res.status(200).json({
      employeeDetails
    });
  } catch (error) {
    res.status(500).json({
      message: _employee.EMPLOYEE_DETAILS_GET_ERROR,
      error
    });
  }
};
exports.getAllEmployeeDetailsHandler = getAllEmployeeDetailsHandler;
const getEmployeeDetailsByIdHandler = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const employeeDetails = await _db.Employee.findByPk(id);
    if (!employeeDetails) {
      res.status(400).json({
        message: _employee.EMPLOYEE_DETAILS_NOT_FOUND
      });
      return;
    }
    res.status(200).json({
      employeeDetails
    });
  } catch (error) {
    res.status(500).json({
      message: _employee.EMPLOYEE_DETAILS_GET_ERROR,
      error
    });
  }
};

// Create a new Employee details
exports.getEmployeeDetailsByIdHandler = getEmployeeDetailsByIdHandler;
const createEmployeeDetailsHandler = async (req, res) => {
  const {
    employee_Name,
    exam_Id,
    exam_Name
  } = req.body;
  try {
    // Create the employee details
    const newEmployeeDetail = await _db.Employee.create({
      employee_Name,
      exam_Id,
      exam_Name,
      date: new Date()
    });
    res.status(201).json({
      message: 'Employee Details created successfully',
      newEmployeeDetail
    });
  } catch (error) {
    res.status(500).json({
      message: _employee.EMPLOYEE_DETAILS_CREATION_ERROR,
      error
    });
  }
};

//Update employee details
exports.createEmployeeDetailsHandler = createEmployeeDetailsHandler;
const updateEmployeeDetailsHandler = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    score,
    result,
    certificate
  } = req.body;

  // Validate base64 image format
  if (!isValidBase64(certificate)) {
    res.status(400).json({
      message: 'Invalid base64 image format.'
    });
    return;
  }
  try {
    const updateEmployeeDetails = await _db.Employee.findByPk(id);
    if (!updateEmployeeDetails) {
      res.status(404).json({
        message: _employee.EMPLOYEE_DETAILS_NOT_FOUND
      });
      return;
    }
    const {
      employee_Name,
      exam_Id,
      exam_Name,
      date
    } = updateEmployeeDetails;
    updateEmployeeDetails.set({
      score: score,
      result: result,
      certificate: certificate
    });
    await updateEmployeeDetails.save();
    res.status(200).json({
      message: 'Employee Details updated successfully',
      employee_Name,
      exam_Id,
      exam_Name,
      date,
      updateEmployeeDetails
    });
  } catch (error) {
    res.status(500).json({
      message: _employee.EMPLOYEE_DETAILS_UPDATE_ERROR,
      error
    });
  }
};

// Delete a Employee details
exports.updateEmployeeDetailsHandler = updateEmployeeDetailsHandler;
const deleteEmployeeDetailsHandler = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const deleteEmployeeDetails = await _db.Employee.findByPk(id);
    if (!deleteEmployeeDetails) {
      res.status(404).json({
        message: _employee.EMPLOYEE_DETAILS_NOT_FOUND
      });
      return;
    }
    await deleteEmployeeDetails.destroy();
    res.status(200).json({
      message: 'Employee Details deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: _employee.EMPLOYEE_DETAILS_DELETE_ERROR,
      error
    });
  }
};
exports.deleteEmployeeDetailsHandler = deleteEmployeeDetailsHandler;
//# sourceMappingURL=employee.handler.js.map