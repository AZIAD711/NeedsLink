import jwt from "jsonwebtoken";
// GENERATE TOKEN 
export const generateToken = ({
    payload,
    secretKey,
    options = {
        expiresIn: "1h",
        notBefore: "0",
        audience: "user",
        issuer: "NeedsLink",
    }
}) => {
    return jwt.sign(payload, secretKey, options)
}
// VERIFY TOKEN 
export const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey)
}