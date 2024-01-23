const mongoose = require('mongoose');

const dbConn = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConn;