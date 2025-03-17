import { QueryInterface, DataTypes, literal } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  // Create the SendEmailLogs table
  await queryInterface.createTable('SendEmailLogs', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('sent', 'delivered', 'queued', 'failed'),
      allowNull: false
    },
    toMails: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ccMails: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    host: {
      type: DataTypes.STRING,
      allowNull: true
    },
    appName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    error: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal('CURRENT_TIMESTAMP')
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.dropTable('SendEmailLogs');
}