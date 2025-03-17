import {
    EndpointAuthType,
    EndpointRequestType,
    EndpointHandler,
    sendEmail,
    EmailOptions
  } from 'node-server-engine';
  import { Response } from 'express';
  import { SendEmailLog } from 'db';
  
  export const sendEmailHandler: EndpointHandler<EndpointAuthType> = async (
    req: EndpointRequestType[EndpointAuthType],
    res: Response
  ): Promise<void> => {
    const {
      body: { to, cc, subject, html, text, bcc, attachments, replyTo, priority },
      user
    } = req;
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = {};
  
    try {
      const emailOptions: EmailOptions = {
        to,
        cc,
        subject,
        html,
        text,
        bcc,
        attachments,
        replyTo,
        priority
      };
  
      result = await sendEmail(emailOptions);
  
      if (result?.error || result?.status === 'failed') {
        throw new Error();
      }
      res.status(200).json(result);
    } catch {
      console.error('Email Sending Error:', result?.error);
      res.status(422).json(result);
    } finally {
      try {
        await SendEmailLog.create({
          status: result?.status,
          toMails: (typeof to === 'string' ? to : to?.join(', ')) || null,
          ccMails: (typeof cc === 'string' ? cc : cc?.join(', ')) || null,
          subject,
          body: html || text,
          userId: user?.userId ?? user?.id,
          userName: user?.userName ?? user?.name,
          userEmail: user?.userEmail ?? user?.email,
          host: user?.host,
          appName: user?.appName,
          error: result?.error
        });
      } catch (logError: unknown) {
        console.error('Error Logging Email:', logError);
      }
    }
  };