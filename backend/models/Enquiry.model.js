import mongoose from "mongoose";

// Frontend ke select options ke hisaab se allowed courses
const allowedCourses = [
  "Advanced Google Ads Mastery",
  "Meta Ads Scaling Workshop",
  "SEO Growth Bootcamp",
  "YouTube Ads Masterclass",
  "Email Marketing Automation"
];

// Schema define karo
const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Email must be valid"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    course: {
      type: String,
      required: [true, "Course selection is required"],
      enum: {
        values: allowedCourses,
        message: "Selected course is not valid",
      },
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
  },
  { timestamps: true }
);

// Model create karo
const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry.model.js;
