"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmailHandler = void 0;
var _nodeServerEngine = require("node-server-engine");
var _db = require("../../db");
const sendEmailHandler = async (req, res) => {
  const {
    body: {
      to,
      cc,
      subject,
      html,
      text,
      bcc,
      attachments,
      replyTo,
      priority
    },
    user
  } = req;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result = {};
  try {
    const emailOptions = {
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
    result = await (0, _nodeServerEngine.sendEmail)(emailOptions);
    if (result?.error || result?.status === 'failed') {
      throw new Error();
    }
    res.status(200).json(result);
  } catch {
    console.error('Email Sending Error:', result?.error);
    res.status(422).json(result);
  } finally {
    try {
      await _db.SendEmailLog.create({
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
    } catch (logError) {
      console.error('Error Logging Email:', logError);
    }
  }
};
exports.sendEmailHandler = sendEmailHandler;
//# sourceMappingURL=sendEmail.handler.js.map