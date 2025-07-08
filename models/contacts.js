//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/models/contacts.js

const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('contacts', contactsSchema);
