const crypto = require('crypto');
const tokenLength = 128;
const generateToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = crypto.randomInt(characters.length);
        token += characters.charAt(randomIndex);
    }

    return token;
}


module.exports = {
    generateToken
}