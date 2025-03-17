import { EmailStatus } from 'node-server-engine';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class SendEmailLog extends Model {
  @Column({
    type: DataType.ENUM('sent', 'delivered', 'queued', 'failed'),
    allowNull: false
  })
  status!: EmailStatus; // Email status

  @Column({ type: DataType.STRING, allowNull: false })
  toMails!: string; // Recipient email(s)

  @Column({ type: DataType.STRING, allowNull: true })
  ccMails?: string; // CC email(s)

  @Column({ type: DataType.STRING, allowNull: false })
  subject!: string; // Email subject

  @Column({ type: DataType.TEXT, allowNull: false })
  body!: string; // Email body content

  @Column({ type: DataType.STRING, allowNull: true })
  userEmail?: string; // User's email

  @Column({ type: DataType.STRING, allowNull: true })
  userName?: string; // User's name

  @Column({ type: DataType.STRING, allowNull: true })
  host?: string; // Host from where the request was made

  @Column({ type: DataType.STRING, allowNull: true })
  appName?: string; // Application name

  @Column({ type: DataType.INTEGER, allowNull: true })
  userId?: number; // User ID

  @Column({ type: DataType.STRING, allowNull: true })
  error?: string; // Email Error

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  createdOn!: Date; // Timestamp of log entry
}