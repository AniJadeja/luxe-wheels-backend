const { deleteSession } = require('../../database');

const logOutUser = (req, res) =>
{
    res.status(200).json({
        message: 'Logged out successfully',
    });
}

module.exports = { logOutUser };