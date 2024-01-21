class UserModel {
  constructor(data) {
    this.fname = data.fname;
    this.lname = data.lname;
    this.email = data.email;
    this.password = data.password;
  }
  // Static method to validate user data
  static validate(data) {
    let errors = {};
    
    if (data.fname === '' || data.fname === undefined || data.fname === null || data.fname === 'undefined' || data.fname === 'null' || data.fname === ' ' ) { 
      errors.fname = 'First name cannot be blank.';
    } else if (data.fname.length < 3) {
      errors.fname = 'First name must be at least 3 characters long.';
    } else if (data.fname.length > 20) {
      errors.fname = 'First name must be less than 20 characters long.';
    } else if (data.fname.match(/[^a-zA-Z]/)) {
      errors.fname = 'First name must contain only letters.';
    }

    if (data.lname === '' || data.lname === undefined || data.lname === null || data.lname === 'undefined' || data.lname === 'null' || data.lname === ' ' ) {
      errors.lname = 'Last name cannot be blank.';
    } else if (data.lname.length < 3) {
      errors.lname = 'Last name must be at least 3 characters long.';
    } else if (data.lname.length > 20) {
      errors.lname = 'Last name must be less than 20 characters long.';
    } else if (data.lname.match(/[^a-zA-Z]/)) {
      errors.lname = 'Last name must contain only letters.';
    }

    if (data.email === '' || data.email === undefined || data.email === null || data.email === 'undefined' || data.email === 'null' || data.email === ' ' ) {
      errors.email = 'Email cannot be blank.';
    } else if (data.email.length < 5) {
      errors.email = 'Email must be at least 5 characters long.';
    } else if (data.email.length > 50) {
      errors.email = 'Email must be less than 50 characters long.';
    } else if (!data.email.match(/^[a-zA-Z][a-zA-Z0-9._]*[a-zA-Z0-9]@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/)) {
      errors.email = 'Email must be valid.';
    }

    if (data.password === '' || data.password === undefined || data.password === null || data.password === 'undefined' || data.password === 'null' || data.password === ' ' ) {
      errors.password = 'Password cannot be blank.';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    } else if (data.password.length > 20) {
      errors.password = 'Password must be less than 20 characters long.';
    } else if (!isStrongPassword(data.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    return errors;
  }

  
}
function isStrongPassword(password) {
  return /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /[0-9]/.test(password) &&
         /[^A-Za-z0-9]/.test(password) ;
}

module.exports = { UserModel };

