//this file is located at models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  favoriteColor: { type: String, required: true },
  birthday: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

