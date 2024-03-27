class UserDataModel{
    constructor(data)
    {
        this.fname = data.fname,
        this.lname = data.lname,
        this.email = data.email
    }
}

module.exports = {UserDataModel}