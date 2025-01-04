import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        minLength: [6, "Password must have at least 6 characters"],
        maxLength: [32, "Password must have at most 32 characters"],
        select:false
    },
    isAgreeTermsAndConditions: {
        type: Boolean,
        default: false,
        validate: {
            validator: function (value) {
                return value === true; // Ensure the user agrees to T&C
            },
            message: "You must agree to the Terms and Conditions",
        },
    },
    mobileNo: {
        type: String,
        validate: {
            validator: function (value) {
                return /^[0-9]{10,15}$/.test(value); // Example for validating 10-15 digits
            },
            message: "Please enter a valid mobile number",
        },
    },
    accountVerified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String, // Changed to String to handle long codes
    },
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    this.password = bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);    
}

userSchema.methods.generateToken = function() {
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY, {
        expiresIn:process.env.JWT_TOKEN_EXPIRY_TIME
    });
}

export const User = mongoose.model("User", userSchema);