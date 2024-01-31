const { verifyUserEmail, signInUser } = require("../databaseControllerNew");


const loginUser = async (user, res) => {
  console.log("loginControllerNew => loginUser : called")
  // check if isUserEmailPresent(email)
  const userData = user.user;  

  if (await verifyUserEmail(userData.email)) {
    let isUserSignedIn = await signInUser(userData);
    if (isUserSignedIn) {
      // returns true, return cookie
      res.status(200).send({ message: "User logged in successfully" });
      //sendCookie(res, isUserSignedIn.cookie);
    } else {
      res.status(403).send({ error: "Could not be logged in" });
    }
  }
  else {
    res.status(403).send({ error: "User not found" });
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
