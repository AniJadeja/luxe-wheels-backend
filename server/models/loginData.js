const { browsers } = require('../config/browser');

class LoginDataModel {
  constructor(data) {
    this.browserName = data.browserName;
    this.browserVersion = data.browserVersion;
    this.osName = data.osName;
    this.screenRes = data.screenRes;
  }

  static validate(data) {
    const errors = {};
    
    if(!browsers.includes(data.browserName.toLowerCase())) {
      errors.browserName = "Invalid Browser Name";
    }

    if(!data.browserVersion) {
      errors.browserVersion = "Invalid Browser Version";
    }
    if(!data.osName) {
      errors.osName = "Invalid OS Name";
    }
    if(!data.screenRes) {
      errors.screenRes = "Invalid Screen Resolution";
    }
    return Object.keys(errors).length ? errors : null;
  }
}



module.exports = { LoginDataModel };
