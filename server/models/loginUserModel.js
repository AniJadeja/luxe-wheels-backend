class LoginUserModel {
  constructor(data) {
    this.email = data.email;
    this.password = data.password;
  }

  static validate(data) {
    const errors = {};
    
    
    if (
      data.email === "" ||
      data.email === undefined ||
      data.email === null ||
      data.email === "undefined" ||
      data.email === "null" ||
      data.email === " "
    ) {
      errors.email = "Email cannot be blank.";
    } else if (data.email.length < 5) {
      errors.email = "Email must be at least 5 characters long.";
    } else if (data.email.length > 50) {
      errors.email = "Email must be less than 50 characters long.";
    } else if (
      !data.email.match(
        /^[a-zA-Z][a-zA-Z0-9._]*[a-zA-Z0-9]@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/
      )
    ) {
      errors.email = "Email must be valid.";
    }

    if (
      data.password === "" ||
      data.password === undefined ||
      data.password === null ||
      data.password === "undefined" ||
      data.password === "null" ||
      data.password === " "
    ) {
      errors.password = "Password cannot be blank.";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    } else if (data.password.length > 20) {
      errors.password = "Password must be less than 20 characters long.";
    }

    if (Object.keys(errors).length === 0) {
      return null;
    }

    return errors;
  }
}

module.exports = LoginUserModel;