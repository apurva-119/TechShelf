import nodemailer from "nodemailer";

export const sendMail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"TechShelf 📚" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: "Welcome to TechShelf 🎉",
    html: `
      <h2>Welcome to TechShelf!</h2>
      <p>You are now subscribed to book updates.</p>
      <p>You'll receive:</p>
      <ul>
        <li>New B.Tech books</li>
        <li>Semester-wise resources</li>
        <li>Placement prep materials</li>
      </ul>
      <p>Happy learning 🚀</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
