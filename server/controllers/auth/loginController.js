const { isUserEmailPresent, signInUser } = require("../../database/database");


const loginUser = async (user, res) => {
  // check if isUserEmailPresent(email)
  if (await isUserEmailPresent(user.email)) {
    let isUserSignedIn = await signInUser(user);
    if (isUserSignedIn) {
      // returns true, return cookie
      sendCookie(res, isUserSignedIn.cookie);
    } else {
      res.status(403).send({ error: "Could not be logged in" });
    }
  }

};


const sendCookie = (res, cookie) => {
  res.cookie("userId", cookie.uid, {
            maxAge: 259200000,
            httpOnly: true,
            secure: true,
          })
  res.status(200).send({ message : "User logged in successfully"})      
};


module.exports = {
  loginUser,
};
