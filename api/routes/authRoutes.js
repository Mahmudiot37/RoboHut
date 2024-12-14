import express from 'express';
import { registerController, loginController, testController, forgotPasswordController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

// Routing
router.post('/register', registerController);

// Login
router.post("/login", loginController);

// test route
router.get('/test', requireSignIn, isAdmin, testController);

// forgot password || post
router.post('/forgotPassword', forgotPasswordController);

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) =>{
    res.status(200).send({ok: true});
});
export default router;