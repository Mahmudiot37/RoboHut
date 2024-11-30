import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./data/db.js"; // Ensure the file extension is explicitly provided
import authRoutes from "./routes/authRoutes.js"; // Ensure the file extension is explicitly provided

dotenv.config(); // Load environment variables

const app = express();

connectDB(); // Connect to the database

app.use(morgan("dev")); // Use Morgan for logging

// Routes
app.use("/api/v1/auth", authRoutes);

// Test route
app.get("/products", (req, res) => {
    res.send("Hello world");
});

// Set up the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
