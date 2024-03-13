const verifyUserInput = (req,res,next) => {
console.log("getUserProfileMiddleware => verifying");
    const { sessionToken } = req.body;
    if (sessionToken)
    {
        console.log("getUserProfileMiddleware => verified");
        next();
    }
    else
    {
        console.log("getUserProfileMiddleware => not verified");
        res.status(400).json({
            message:
            "Please provide a sessionToken"
        });
    }
}

module.exports = {verifyUserInput};