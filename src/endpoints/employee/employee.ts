import { 
    Endpoint, 
    EndpointMethod, 
    EndpointAuthType 
} from "node-server-engine";
import { 
   CreateEmployeeValidator,
   GetEmployeeValidator ,
   UpdateEmployeeDetailsValidator,
   DeleteEmployeeDetailsValidator
} from "./employee.validator";
import {
   getAllEmployeeDetailsHandler,
   createEmployeeDetailsHandler,
   getEmployeeDetailsByIdHandler,
   updateEmployeeDetailsHandler,
   deleteEmployeeDetailsHandler
} from './employee.handler';


export const createEmployeeEndpoint = new Endpoint({
    path: '/employee',
    method: EndpointMethod.POST,
    handler: createEmployeeDetailsHandler,
    authType: EndpointAuthType.NONE,
    validator: CreateEmployeeValidator
});

export const getAllEmployeeDetailsEndpoints = new Endpoint({
    path: '/employee',
    method: EndpointMethod.GET,
    handler: getAllEmployeeDetailsHandler,
    authType: EndpointAuthType.NONE,
    validator: {}
});

export const getEmployeeDetailsByIdEndpoint = new Endpoint({
    path: '/employee/:id',
    method: EndpointMethod.GET,
    handler: getEmployeeDetailsByIdHandler,
    authType: EndpointAuthType.NONE,
    validator: GetEmployeeValidator
});

export const updateEmployeeDetailsEndpoint = new Endpoint({
    path: '/employee/:id',
    method: EndpointMethod.PUT,
    handler: updateEmployeeDetailsHandler,
    authType: EndpointAuthType.NONE,
    validator: UpdateEmployeeDetailsValidator
});


export const deleteEmployeeDetailsEndpoint = new Endpoint({
    path: '/employee/:id',
    method: EndpointMethod.DELETE,
    handler: deleteEmployeeDetailsHandler,
    authType: EndpointAuthType.NONE,
    validator: DeleteEmployeeDetailsValidator
});