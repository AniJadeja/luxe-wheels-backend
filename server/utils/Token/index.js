const crypto = require('crypto');

function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(characters.length);
        token += characters.charAt(randomIndex);
    }

    return token;
}

const tokenLength = 128;
//const token = generateToken(tokenLength);
//console.log(token);


const numberOfUniqueCharacters = 62;
const numberofTokens = BigInt(numberOfUniqueCharacters ^ tokenLength);
const deleteRate = BigInt(9 * (10^9));

const timeTodDeleteInSeconds = BigInt(numberofTokens / deleteRate);
const timeToDeleteInYears = BigInt(timeTodDeleteInSeconds / (60 * 60 * 24 * 365));

console.log(timeToDeleteInYears);
