const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendMMS = (to, subject, text) => {
  const transpoter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  transpoter.sendMail({
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  });
};

module.exports = sendMMS;
