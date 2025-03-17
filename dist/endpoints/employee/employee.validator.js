"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateEmployeeDetailsValidator = exports.GetEmployeeValidator = exports.DeleteEmployeeDetailsValidator = exports.CreateEmployeeValidator = void 0;
const CreateEmployeeValidator = exports.CreateEmployeeValidator = {
  employee_Name: {
    in: 'body',
    exists: {
      errorMessage: 'Employee Name is required'
    },
    isString: {
      errorMessage: 'Employee Name must be a string'
    }
  },
  exam_Id: {
    in: 'body',
    exists: {
      errorMessage: 'Exam ID is required'
    },
    isInt: {
      errorMessage: 'Exam ID must be an integer'
    }
  },
  exam_Name: {
    in: 'body',
    exists: {
      errorMessage: 'Exam Name is required'
    },
    isString: {
      errorMessage: 'Exam Name must be a string'
    }
  }
};
const GetEmployeeValidator = exports.GetEmployeeValidator = {
  id: {
    in: 'params',
    exists: {
      errorMessage: 'Employee ID is required'
    },
    isInt: {
      errorMessage: 'Employee ID must be an integer'
    }
  }
};
const UpdateEmployeeDetailsValidator = exports.UpdateEmployeeDetailsValidator = {
  id: {
    in: 'params',
    exists: {
      errorMessage: 'Employee ID is required'
    },
    isInt: {
      errorMessage: 'Employee ID must be an integer'
    }
  },
  score: {
    in: 'body',
    exists: {
      errorMessage: 'Score is required'
    },
    isInt: {
      errorMessage: 'Score must be an integer'
    }
  },
  result: {
    in: 'body',
    exists: {
      errorMessage: 'Result is required'
    },
    isString: {
      errorMessage: 'Result must be a string'
    }
  },
  certificate: {
    in: 'body',
    exists: {
      errorMessage: 'Certificate is required'
    },
    isString: {
      errorMessage: 'Certificate must be a string'
    }
  }
};
const DeleteEmployeeDetailsValidator = exports.DeleteEmployeeDetailsValidator = {
  id: {
    in: 'params',
    exists: {
      errorMessage: 'Employee ID is required'
    },
    isInt: {
      errorMessage: 'Employee ID must be an integer'
    }
  }
};
//# sourceMappingURL=employee.validator.js.map