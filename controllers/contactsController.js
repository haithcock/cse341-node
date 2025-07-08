//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/controllers/contactsController.js
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const Contact = require('../models/contactsModel');

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getSingle = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json('Contact not found');
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
    getAll,
    getSingle
};