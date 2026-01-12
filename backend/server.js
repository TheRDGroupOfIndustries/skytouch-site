import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import cors from "cors";
import enquiryRoutes from "./routes/enquiry.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // JSON request parse karne ke liye

// Routes
app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
