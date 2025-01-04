import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.model.js";

export const register = catchAsyncError( async(req, res, next) => {
    try {
        const {username, email, password, isAgreeTermsAndConditions } = req.body;

        if(!username || !email || !password) {
            return next(new ErrorHandler("All fields are required", 400));
        }

        const existingUser = await User.findOne({
            $or:[
                { username },
                { email  }
            ]
        });

        
        if(existingUser) {
            return next(new ErrorHandler(`username or email Already Exist`, 400));
        }

        const userData = {
            username,
            email,
            password,
            isAgreeTermsAndConditions
        }
   
        const user = await User.create(userData);
        let userCreated = await user.save(); 
        userCreated = user.toObject();
        delete userCreated.password;
        if(userCreated) {
            res.status(201).json({
                success:true,
                user:userCreated,
            })
        }

    } catch (error) {
        return next(new ErrorHandler(error, 500));       
    }
})