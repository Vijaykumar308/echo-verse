import jwt from "jsonwebtoken";

// check that user is authenticated or not;
export const getUserId = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ status:false, message: 'Invalid or expired token' });
      }
      
      req.userId = decoded.id;

      next();
    });
};