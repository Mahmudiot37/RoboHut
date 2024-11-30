import express from 'express';
import { registerController, loginController } from "../controllers/authController.js"
// router object
const router = express.Router();

// Routing
router.post('/register', registerController);

// Login
router.post("/login", loginController);

export default router;