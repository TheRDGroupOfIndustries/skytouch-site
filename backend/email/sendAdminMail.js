import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAdminEnquiryMail = async (enquiry) => {
  const { name, email, phone, course, message, createdAt } = enquiry;

  const mailOptions = {
    from: `"New Enquiry Alert" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `New Enquiry – ${name} (${course})`,
    text: `
New enquiry received.

Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${course}

Message:
${message || "No message provided"}

Submitted at: ${new Date(createdAt).toLocaleString()}
    `,
  };

  await transporter.sendMail(mailOptions);
};
