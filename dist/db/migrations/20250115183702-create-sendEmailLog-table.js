"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.down = down;
exports.up = up;
var _sequelize = require("sequelize");
async function up(queryInterface) {
  // Create the SendEmailLogs table
  await queryInterface.createTable('SendEmailLogs', {
    id: {
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: _sequelize.DataTypes.ENUM('sent', 'delivered', 'queued', 'failed'),
      allowNull: false
    },
    toMails: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    ccMails: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    subject: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    body: {
      type: _sequelize.DataTypes.TEXT,
      allowNull: true
    },
    userEmail: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    userName: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    host: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    appName: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: _sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    error: {
      type: _sequelize.DataTypes.STRING,
      allowNull: true
    },
    createdOn: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP')
    },
    createdAt: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  });
}
async function down(queryInterface) {
  await queryInterface.dropTable('SendEmailLogs');
}
//# sourceMappingURL=20250115183702-create-sendEmailLog-table.js.map