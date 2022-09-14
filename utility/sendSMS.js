const twilio = require('twilio')(
  process.env.AC_SID,
  process.env.AC_AUTH_TOKEN
);
const dotenv = require('dotenv').config();
const twilio_cell = process.env.AC_PHONE;
console.log(twilio_cell);
console.log(process.env.AC_SID);
console.log(process.env.AC_AUTH_TOKEN);
console.log(twilio_cell);
const sendSMSfuction = (to, sms) => {
  twilio.messages
    .create({
      from: twilio_cell,
      to: to,
      body: sms,
    })
    .then((res) => {
      console.log('sms send succssfully');
    })
    .catch((err) => {
      console.log(err.messages);
    });
};
module.exports = sendSMSfuction;
