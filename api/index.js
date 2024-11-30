import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./data/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

connectDB();

// Middleware
app.use(morgan("dev"));
app.use(express.json()); // Parse JSON payloads

// Routes
app.use("/api/v1/auth", authRoutes);

app.get("/products", (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
