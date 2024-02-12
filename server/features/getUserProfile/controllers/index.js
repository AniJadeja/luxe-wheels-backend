const getUserData = async (req, res) => {
    console.log("getUserProfileController => getting user data")
res.status(200).send({message:"user req received.."});
}

module.exports = {
getUserData
}