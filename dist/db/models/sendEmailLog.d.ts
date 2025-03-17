import { EmailStatus } from 'node-server-engine';
import { Model } from 'sequelize-typescript';
export declare class SendEmailLog extends Model {
    status: EmailStatus;
    toMails: string;
    ccMails?: string;
    subject: string;
    body: string;
    userEmail?: string;
    userName?: string;
    host?: string;
    appName?: string;
    userId?: number;
    error?: string;
    createdOn: Date;
}
