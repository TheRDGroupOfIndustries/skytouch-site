import express from "express";
import Enquiry from "../models/Enquiry.model.js";
import { sendAdminEnquiryMail } from "../email/sendAdminMail.js";

const router = express.Router();

// POST /api/enquiry → form submit
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Basic server-side validation
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Create new enquiry
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      course,
      message,
    });

    // Save to DB
    await newEnquiry.save();

    // 🔥 ADMIN MAIL TRIGGER (non-blocking)
    sendAdminEnquiryMail(newEnquiry).catch(err =>
      console.error("Admin mail failed:", err.message)
    );

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Error saving enquiry:", error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
