import userModel from "../models/userModel.js"; // Ensure correct path and extension
import { comparePassword, hashPassword } from "../utils/hashPass.js"; // Ensure correct path and extension
import JWT from "jsonwebtoken";

// Register Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validation
        if (!name) return res.status(400).json({ error: "Name is required" });
        if (!email) return res.status(400).json({ error: "Email is required" });
        if (!password) return res.status(400).json({ error: "Password is required" });
        if (!phone) return res.status(400).json({ error: "Phone is required" });
        if (!address) return res.status(400).json({ error: "Address is required" });

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                success: false,
                message: "Already registered, please login",
            });
        }

        // Hash password and save user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error("Registration Error:", error); // Enhanced logging for debugging
        return res.status(500).json({
            success: false,
            message: "Error in registration",
            error: error.message || "Unexpected error occurred", // Add the error message
        });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // Check user existence
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Email is not registered",
            });
        }

        // Compare password
        const isPasswordMatch = await comparePassword(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        // Generate token
        const token = JWT.sign({ _id: user._id }, process.env.JWT, {
            expiresIn: "1d",
        });

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    } catch (error) {
        console.error("Login Error:", error); // Enhanced logging for debugging
        return res.status(500).json({
            success: false,
            message: "Error in login",
            error: error.message || "Unexpected error occurred",
        });
    }
};
