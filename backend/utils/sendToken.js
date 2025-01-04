export const sendToken = (user, statusCode, message, res) => {
    const token = user.generateToken();

    // Remove the password field from the user object
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    return res.status(statusCode).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true,
    }).json({
        success:true,
        message,
        token,
        user:userWithoutPassword,
    })
}