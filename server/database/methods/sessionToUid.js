const sessionsToUid = require('../models/SessionToUid');

const getAllSessionIds = (uid) =>{
    const sessionIds = sessionsToUid.find({uid : uid});
    return sessionIds ? sessionIds : null;
}


const findSessionId = async (sessionToken) => {
    sessionToken = sessionToken.replace(/["]+/g, '');
    console.log("findSessionId => sessionToken: ", sessionToken);
    const session = await sessionsToUid.find({ "sessionToken": sessionToken }).exec();
    console.log("findSessionId => session: ", session);
    return session ? session : null;
}



module.exports = { getAllSessionIds, findSessionId };
