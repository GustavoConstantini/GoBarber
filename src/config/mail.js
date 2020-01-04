export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Gustavo Constantini <noreply@constantinibarber.com>',
  },
};

/*
  * Amazon SES, Mailgun, Aparkpost, Madril(MailChimp), Mailtrap para desenvolvimento
*/
