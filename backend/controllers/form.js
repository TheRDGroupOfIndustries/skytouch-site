import Enquiry from "../models/Enquiry.js";
import { sendAdminEnquiryMail } from "../utils/sendAdminMail.js";

export const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Extra safety (mongoose ke alawa)
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    // 1️⃣ Save enquiry to DB
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      message,
    });

    // 2️⃣ Send admin mail AFTER successful save
    sendAdminEnquiryMail(enquiry).catch((err) => {
      console.error("Admin mail failed:", err.message);
    });

    // 3️⃣ Response to frontend
    res.status(201).json({
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error(error);

    // Mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
};
