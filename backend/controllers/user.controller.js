import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.model.js";
import { sendToken } from "../utils/sendToken.js";

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
        }).select("+password");

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
        const userWithoutPassword = userCreated.toObject();
        delete userWithoutPassword.password;
        if(userCreated) {
            return res.status(201).json({
                success:true,
                user:userWithoutPassword,
            })
        }
        else {
            return next(new ErrorHandler("Data not saved, Try Again", 500));   
        }

    } catch (error) {
        return next(new ErrorHandler(error, 500));       
    }
});

export const login = catchAsyncError(async(req,res, next) => {
    try {
        const {username, password} = req.body;

        if(!username || !password) {
            return next(new ErrorHandler("username or password required", 400));
        }

        const userExist = await User.findOne({username}).select("+password");

        if(!userExist) {
            return next(new ErrorHandler("Invalid username or password", 400));
        }

        const isPasswordMatched = await userExist.comparePassword(password);

        if(!isPasswordMatched) {
            return next(new ErrorHandler("Invalid username or password", 400));
        }

        sendToken(userExist, 200, "Login Successfully", res);
    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
});

export const logout = catchAsyncError(async(req, res, next) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly:true
    })
    .json({
        success:true,
        message:"Logged out Successfully"
    })
})