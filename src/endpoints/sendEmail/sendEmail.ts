import { 
    Endpoint, 
    EndpointMethod, 
    EndpointAuthType 
} from "node-server-engine";
import { sendEmailValidator } from './sendEmail.validator';
import { sendEmailHandler } from './sendEmail.handler';

export const sendEmail = new Endpoint({
  path: '/email/send',
  method: EndpointMethod.POST,
  authType: EndpointAuthType.NONE,
  handler: sendEmailHandler,
  validator: sendEmailValidator,
  middleware: []
});