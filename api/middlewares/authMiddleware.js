import JWT from "jsonwebtoken";

// Protectted routes token base
export const requireSignIn = async(req, res, next) =>{
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT
        );
        next();
    } catch (error) {
        console.log(error);
    }
};