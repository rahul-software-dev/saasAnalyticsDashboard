// server/services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

exports.sendInvitation = async (to, inviteLink) => {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: 'You are invited!',
    html: `<p>You have been invited to join our SaaS platform.<br/>
           Click <a href="${inviteLink}">here</a> to accept the invitation.</p>`
  });
};

exports.sendPasswordReset = async (to, resetLink) => {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: 'Password Reset Request',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
  });
};
