const { isUserEmailPresent, signInUser } = require("../../database/database");

const loginUser = async (user, res) => {
  // check if isUserEmailPresent(email)
  const isUserExist = await isUserEmailPresent(user.email);
  const isUserSignedIn = await signInUser(user);

  isUserExist
    ? // if true, return { error: 'Email already exists' }
      isUserSignedIn
      ? // returns true, return cookie
        sendCookie(res, isUserSignedIn.cookie)
      : res.status(403).send({ error: "Could not be logged in" })
    : res.status(401).send({ error: "User does not exist" });
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
