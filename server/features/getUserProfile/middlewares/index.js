const verifyUserInput = (req,res,next) => {
console.log("getUserProfileMiddleware => verifying");
    const { userId } = req.body;
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
            "Please provide a userId"
        });
    }
}

module.exports = {verifyUserInput};