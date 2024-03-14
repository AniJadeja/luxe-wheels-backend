const verifyUserInput = (req,res,next) => {
console.log("getUserProfileMiddleware => verifying");
    const { userId } = req.cookies;
    if (userId)
    {
        console.log("getUserProfileMiddleware => verified");
        next();
    }
    else
    {
        console.log("getUserProfileMiddleware => not verified");
        res.status(400).json({
            message:
            "Cookie not found"
        });
    }
}

module.exports = {verifyUserInput};