const connection = require('../config/connection');
const { User, Thought } = require('../models');

// require data here after creating data.js

connection.on('error', (err) => err);

connection.once('open', async () =>
{
    console.log('connected');
    
    // delete user if a user already exists
    let userCheck = await connection.db.listCollections({
        name: 'users'}).toArray();
        if(userCheck.length) {
            await connection.dropCollection('users');
        }

        // delete a thought if a thought already exists
        let thoughtCheck = await connection.db.listCollections({
            name: 'thoughts'}).toArray();
            if (thoughtCheck.length) {
                await connection.dropCollection('thoughts');
            }

    const thoughts = [];
        

})