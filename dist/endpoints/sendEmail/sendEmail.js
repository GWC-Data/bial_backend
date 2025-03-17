"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = void 0;
var _nodeServerEngine = require("node-server-engine");
var _sendEmail = require("./sendEmail.validator");
var _sendEmail2 = require("./sendEmail.handler");
const sendEmail = exports.sendEmail = new _nodeServerEngine.Endpoint({
  path: '/email/send',
  method: _nodeServerEngine.EndpointMethod.POST,
  authType: _nodeServerEngine.EndpointAuthType.NONE,
  handler: _sendEmail2.sendEmailHandler,
  validator: _sendEmail.sendEmailValidator,
  middleware: []
});
//# sourceMappingURL=sendEmail.js.map