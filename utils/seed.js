const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');
const { users, thoughts, reactions, friends } = require('./data');

mongoose.connect('mongodb://localhost:27017/networkDB', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', (err) => err);

connection.once ('open', async() => {

  try {

    for ( var i in users) {
        User.create(users[i]);
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }

})
