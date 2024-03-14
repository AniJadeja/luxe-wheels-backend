const sessionsToUid = require('../models/SessionToUid');

const getAllSessionIds = (uid) =>{
    const sessionIds = sessionsToUid.find({uid : uid});
    return sessionIds ? sessionIds : null;
}


const findSessionId = (sessionToken) => {
    const session = sessionsToUid.findOne({sessionToken : sessionToken});
    return session ? session : null;
}


module.exports = { getAllSessionIds, findSessionId };