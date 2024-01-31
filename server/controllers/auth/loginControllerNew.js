const { verifyUserEmail, signInUser } = require("../databaseControllerNew");


const loginUser = async (user, res) => {
  console.log("loginControllerNew => loginUser : called")
  // check if isUserEmailPresent(email)
  const userData = user.user;
  const systemData = user.data;  

  if (await verifyUserEmail(userData.email)) {
    let isUserSignedIn = await signInUser(userData, systemData);
    if (isUserSignedIn) {
      // returns true, return cookie
      res.status(200).send({ message: "User logged in successfully" });
      //sendCookie(res, isUserSignedIn.cookie);
    } else {
      console.log("loginControllerNew => loginUser : false returned from signInUser()")
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
