class LogOutUserModel {
    static validate(token){
        console.log('logOutUserModel => validate => token:', token)
        let errors = {}

        if(!token){
            console.log('logOutUserModel => validate => !token')
            errors.token = 'Token is required'
        }
        if(token && token.length < 1){
            console.log('logOutUserModel => validate => token.length < 1')
            errors.token = 'Token is required'
        }
        if(token == 'undefined' || token == 'null' || token == 'NaN' || token == '' || token == ' ' || token == undefined || token == null || token == NaN ){
            console.log('logOutUserModel => validate => token == undefined || token == null || token == NaN')
            errors.token = 'Token is required'
        }
        if (Object.keys(errors).length === 0) errors = null;
        return errors;

    }
}

module.exports = { LogOutUserModel }