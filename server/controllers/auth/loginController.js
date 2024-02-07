const { signInUser } = require("../databaseController");


const loginUser = async (req, res) => {
  // check if isUserEmailPresent(email)
  const userData = req.user;
  const systemData = req.data;
  if (await  (userData.email)) {
    let isUserSignedIn = await signInUser(userData, systemData);
    if (isUserSignedIn) {
      // returns true, return cookie
      sendCookie(res, isUserSignedIn);
    } else {
      res.status(403).send({ error: "Could not be logged in" });
    }
  }
  else {
    res.status(403).send({ error: "User not found" });
  }
};


const sendCookie = (res, userData) => {
  const cookie = userData.cookie;
  const sessionToken = userData.sessionToken;
  res.cookie("userId", cookie.uid, {
            maxAge: 259200000,
            httpOnly: true,
            secure: true,
          })
  res.status(200).send({ message : "User logged in successfully", sessionToken: sessionToken})      
};


module.exports = {
  loginUser,
};
