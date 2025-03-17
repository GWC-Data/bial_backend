"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmailValidator = void 0;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const parseEmails = value => {
  if (typeof value === 'string') {
    // Split by comma and trim spaces to handle comma-separated email addresses
    return value.split(',').map(email => email.trim());
  }
  return value;
};
const sendEmailValidator = exports.sendEmailValidator = {
  to: {
    in: 'body',
    exists: {
      errorMessage: 'Recipient email (to) is required'
    },
    custom: {
      options: value => {
        const emails = parseEmails(value);
        if (!emails.every(email => emailRegex.test(email))) {
          throw new Error('Invalid email address in "to"');
        }
        return true;
      }
    }
  },
  subject: {
    in: 'body',
    exists: {
      errorMessage: 'Subject is required'
    }
  },
  html: {
    in: 'body',
    exists: {
      errorMessage: 'HTML body content is required'
    }
  },
  cc: {
    in: 'body',
    optional: true,
    custom: {
      options: value => {
        if (value) {
          const emails = parseEmails(value);
          if (!emails.every(email => emailRegex.test(email))) {
            throw new Error('Invalid email address in CC');
          }
        }
        return true;
      }
    }
  },
  bcc: {
    in: 'body',
    optional: true,
    custom: {
      options: value => {
        if (value) {
          const emails = parseEmails(value);
          if (!emails.every(email => emailRegex.test(email))) {
            throw new Error('Invalid email address in BCC');
          }
        }
        return true;
      }
    }
  },
  text: {
    in: 'body',
    optional: true,
    isString: {
      errorMessage: 'Text body content should be a string'
    }
  },
  attachments: {
    in: 'body',
    optional: true,
    isArray: {
      errorMessage: 'Attachments should be an array'
    },
    custom: {
      options: value => {
        if (value &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !value.every(attachment => {
          return attachment.filename && (attachment.content || attachment.path);
        })) {
          throw new Error('Each attachment should have a filename and content/path');
        }
        return true;
      }
    }
  },
  replyTo: {
    in: 'body',
    optional: true,
    isEmail: {
      errorMessage: 'Reply-To should be a valid email address'
    }
  },
  priority: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['high', 'normal', 'low']],
      errorMessage: 'Priority should be one of high, normal, or low'
    }
  }
};
//# sourceMappingURL=sendEmail.validator.js.map