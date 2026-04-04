require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asvix2025@gmail.com',
    pass: 'yfjk dkzb ktdo gfpq',
  },
});

console.log('User:', 'asvix2025@gmail.com', 'Pass:', 'yfjk dkzb ktdo gfpq');

const mailOptions = {
  from: `Asvix Contact Form <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
  subject: `[Asvix] Test Subject`,
  text: 'Test body',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
