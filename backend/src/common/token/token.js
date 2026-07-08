import jwt from "jsonwebtoken";
// GENERATE TOKEN 
export const generateToken = ({
    payload , 
    secretKey,
    options ={
        expiresIn : "1h",
        notBefore : "0",
        audience : "user",
        issuer : "needslink",
    }
})=>{
 return jwt.sign(payload , secretKey , options)   
}