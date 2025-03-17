import { EndpointAuthType, EndpointHandler } from 'node-server-engine';
export declare const getAllEmployeeDetailsHandler: EndpointHandler<EndpointAuthType>;
export declare const getEmployeeDetailsByIdHandler: EndpointHandler<EndpointAuthType>;
export declare const createEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE>;
export declare const updateEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE>;
export declare const deleteEmployeeDetailsHandler: EndpointHandler<EndpointAuthType.NONE>;
