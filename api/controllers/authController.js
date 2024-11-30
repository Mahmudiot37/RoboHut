import userModel from "../models/userModel.js"; // Ensure correct path and extension
import { hashPassword } from "../utils/hashPass.js"; // Ensure correct path and extension

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validation
        if (!name) return res.send({ error: "Name is required" });
        if (!email) return res.send({ error: "Email is required" });
        if (!password) return res.send({ error: "Password is required" });
        if (!phone) return res.send({ error: "Phone is required" });
        if (!address) return res.send({ error: "Address is required" });

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered, please login",
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error("Registration Error:", error); // Enhanced logging for debugging
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error: error.message || "Unexpected error occurred", // Add the error message
        });
    }
    
    };
