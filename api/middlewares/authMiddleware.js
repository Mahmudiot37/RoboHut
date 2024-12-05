import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protectted routes token base
export const requireSignIn = async(req, res, next) =>{
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

// admin access
export const isAdmin = async(req, res, next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role != 1){
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "error in admin middleware",
        })
    }
};