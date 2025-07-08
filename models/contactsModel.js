//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/models/contacts.js

const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  favoriteColor: { type: String, required: true },
  birthday: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactsSchema);
