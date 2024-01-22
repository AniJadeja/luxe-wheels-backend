require("dotenv").config();

const pingEndPoint = process.env.PING_END_POINT;
const versionEP = process.env.VERSION_END_POINT;
const authEP = process.env.AUTH_END_POINT;
const signupEP = process.env.SIGNUP_END_POINT;
const loginEP = process.env.LOGIN_END_POINT;

const signUpEndPoint = versionEP + authEP + signupEP;
const loginEndPoint = versionEP + authEP + loginEP;

module.exports = {
    pingEndPoint,
    signUpEndPoint,
    loginEndPoint
};