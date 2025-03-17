"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendEmailLog = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _sequelizeTypescript = require("sequelize-typescript");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function () { return !!t; })(); }
let SendEmailLog = exports.SendEmailLog = (_dec = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.ENUM('sent', 'delivered', 'queued', 'failed'),
  allowNull: false
}), _dec2 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: false
}), _dec3 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: false
}), _dec5 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.TEXT,
  allowNull: false
}), _dec6 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec7 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec8 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec9 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec10 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER,
  allowNull: true
}), _dec11 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING,
  allowNull: true
}), _dec12 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  defaultValue: _sequelizeTypescript.DataType.NOW
}), (0, _sequelizeTypescript.Table)(_class = (_class2 = /*#__PURE__*/function (_Model) {
  function SendEmailLog(...args) {
    var _this;
    (0, _classCallCheck2.default)(this, SendEmailLog);
    _this = _callSuper(this, SendEmailLog, [...args]);
    (0, _initializerDefineProperty2.default)(_this, "status", _descriptor, _this);
    // Email status
    (0, _initializerDefineProperty2.default)(_this, "toMails", _descriptor2, _this);
    // Recipient email(s)
    (0, _initializerDefineProperty2.default)(_this, "ccMails", _descriptor3, _this);
    // CC email(s)
    (0, _initializerDefineProperty2.default)(_this, "subject", _descriptor4, _this);
    // Email subject
    (0, _initializerDefineProperty2.default)(_this, "body", _descriptor5, _this);
    // Email body content
    (0, _initializerDefineProperty2.default)(_this, "userEmail", _descriptor6, _this);
    // User's email
    (0, _initializerDefineProperty2.default)(_this, "userName", _descriptor7, _this);
    // User's name
    (0, _initializerDefineProperty2.default)(_this, "host", _descriptor8, _this);
    // Host from where the request was made
    (0, _initializerDefineProperty2.default)(_this, "appName", _descriptor9, _this);
    // Application name
    (0, _initializerDefineProperty2.default)(_this, "userId", _descriptor10, _this);
    // User ID
    (0, _initializerDefineProperty2.default)(_this, "error", _descriptor11, _this);
    // Email Error
    (0, _initializerDefineProperty2.default)(_this, "createdOn", _descriptor12, _this);
    return _this;
  } // Timestamp of log entry
  (0, _inherits2.default)(SendEmailLog, _Model);
  return (0, _createClass2.default)(SendEmailLog);
}(_sequelizeTypescript.Model), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "status", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "toMails", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ccMails", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "subject", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "userEmail", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "userName", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "host", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "appName", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "userId", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "error", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "createdOn", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);
//# sourceMappingURL=sendEmailLog.js.map