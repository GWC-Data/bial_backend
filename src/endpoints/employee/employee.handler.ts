import {
    EndpointAuthType,
    EndpointHandler,
    EndpointRequestType
} from 'node-server-engine';
import {
    EMPLOYEE_DETAILS_CREATION_ERROR,
    EMPLOYEE_DETAILS_GET_ERROR,
    EMPLOYEE_DETAILS_NOT_FOUND,
    EMPLOYEE_DETAILS_UPDATE_ERROR,
    EMPLOYEE_DETAILS_DELETE_ERROR
} from './employee.const';
import { Employee } from 'db';
import { Response } from 'express';

function isValidBase64(base64String: string): boolean {
    // Regular expression to check if the string is a valid base64 image string (with a data URI scheme)
    const base64Regex = /^data:image\/(png);base64,/;
    return base64Regex.test(base64String);
}

export const getAllEmployeeDetailsHandler: EndpointHandler<EndpointAuthType> = async (
    req: EndpointRequestType[EndpointAuthType],
    res: Response
): Promise<void> => {
    try {

        const employeeDetails = await Employee.findAll();

        if (employeeDetails.length === 0) {
            res.status(404).json({ message: EMPLOYEE_DETAILS_NOT_FOUND });
            return;
        }

        res.status(200).json({ employeeDetails });
    } catch (error) {
        res.status(500).json({ message: EMPLOYEE_DETAILS_GET_ERROR, error });
    }
};


export const getEmployeeDetailsByIdHandler: EndpointHandler<EndpointAuthType> = async (
    req: EndpointRequestType[EndpointAuthType],
    res: Response
): Promise<void> => {

    const { id } = req.params;

    try {

        const employeeDetails = await Employee.findByPk(id);

        if (!employeeDetails) {
            res.status(400).json({ message: EMPLOYEE_DETAILS_NOT_FOUND });
            return;
        }

        res.status(200).json({ employeeDetails });
    } catch (error) {
        res.status(500).json({ message: EMPLOYEE_DETAILS_GET_ERROR, error });
    }
};


// Create a new Employee details
export const createEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE> = async (
    req: EndpointRequestType[EndpointAuthType.NONE],
    res: Response
): Promise<void> => {

    const { employee_Name, exam_Id, exam_Name } = req.body;

    try {

        // Create the employee details
        const newEmployeeDetail = await Employee.create({
            employee_Name,
            exam_Id,
            exam_Name,
            date: new Date()
        });

        res.status(201).json({ message: 'Employee Details created successfully', newEmployeeDetail });
    } catch (error) {
        res.status(500).json({ message: EMPLOYEE_DETAILS_CREATION_ERROR, error });
    }
};

//Update employee details
export const updateEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE> = async (
    req: EndpointRequestType[EndpointAuthType.NONE],
    res: Response
): Promise<void> => {

    const { id } = req.params;
    const { score, result, certificate } = req.body;

    // Validate base64 image format
    if (!isValidBase64(certificate)) {
        res.status(400).json({ message: 'Invalid base64 image format.' });
        return;
    }

    try {

        const updateEmployeeDetails = await Employee.findByPk(id);

        if (!updateEmployeeDetails) {
            res.status(404).json({ message: EMPLOYEE_DETAILS_NOT_FOUND });
            return;
        }

        const { employee_Name, exam_Id, exam_Name, date } = updateEmployeeDetails;

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
        res.status(500).json({ message: EMPLOYEE_DETAILS_UPDATE_ERROR, error });
    }
};


// Delete a Employee details
export const deleteEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE> = async (
    req: EndpointRequestType[EndpointAuthType.NONE],
    res: Response
): Promise<void> => {

    const { id } = req.params;

    try {
        const deleteEmployeeDetails = await Employee.findByPk(id);

        if (!deleteEmployeeDetails) {
            res.status(404).json({ message: EMPLOYEE_DETAILS_NOT_FOUND });
            return;
        }

        await deleteEmployeeDetails.destroy();

        res.status(200).json({ message: 'Employee Details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: EMPLOYEE_DETAILS_DELETE_ERROR, error });
    }
};