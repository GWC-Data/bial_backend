import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Employee extends Model {

  @Column({ type: DataType.STRING, allowNull: false })
  employee_Name!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  exam_Id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  exam_Name!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date!: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  score!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  result!: string;

  @Column({ type: DataType.TEXT('long'), allowNull: true })
  certificate!: string;

}

