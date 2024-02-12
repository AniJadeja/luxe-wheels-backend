const { deleteSession } = require('../../database');

const logOutUser = async (req, res) =>
{   
    console.log("logoutController=> logOutUser => req.body: ", JSON.stringify(req))
    const { sessionToken } = req;
    const result = await deleteSession(sessionToken)
    switch (result) {
        case 404 :
            res.status(404).send({ message: 'Session not found' });
            break;
        case 500 :
            res.status(500).send({ message: 'Internal server error' });
            break;
        default:
            res.status(200).send({ message: 'Logout Success' });
            break;
    }
}

module.exports = { logOutUser };