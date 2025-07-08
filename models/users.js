//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/models/users.js

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Users', usersSchema);
