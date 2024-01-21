class UserModel {
  constructor(data) {
    this.fname = data.fname;
    this.lname = data.lname;
    this.email = data.email;
    this.password = data.password;
  }
}

module.exports = { UserModel };