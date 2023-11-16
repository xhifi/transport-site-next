const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: true },
});

export async function SendMail({ email, subject, text, html }) {
  console.log(`sending email`);
  return await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: process.env.EMAIL,
        to: process.env.EMAIL_TO,
        subject,
        text,
        html,
      },
      (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info);
      }
    );
  });
}
