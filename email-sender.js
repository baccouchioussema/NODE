const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'baccouchioussema626@gmail.com',
    pass: 'oussema20022'
  }
});

const mailOptions = {
  from: 'baccouchioussema626@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
