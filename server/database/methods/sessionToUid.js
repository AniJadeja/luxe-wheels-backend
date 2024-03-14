const sessionsToUid = require('../models/SessionToUid');

const getAllSessionIds = (uid) =>{
    const sessionIds = sessionsToUid.find({uid : uid});
    return sessionIds ? sessionIds : null;
}


const findSessionId = async (sessionToken) => {
    const session = await sessionsToUid.find({ sessionToken: sessionToken }).exec();
    return session ? session : null;
}


module.exports = { getAllSessionIds, findSessionId };