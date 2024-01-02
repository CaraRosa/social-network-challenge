const { connect, connection } = require('mongoose');

const connectionString = process.env.MONDGODB_URI || 'mongodb://127.0.0.1:27017/networkDB';

connect(connectionString);

module.exports = connection;