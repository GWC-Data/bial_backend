import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  // Create the 'Employee' table
  await queryInterface.createTable('Employees', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exam_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exam_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certificate: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  await queryInterface.sequelize.query(
    `ALTER TABLE Employees
    MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL;
`)
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  // Drop the 'Employee' table
  await queryInterface.dropTable('Employees');
}