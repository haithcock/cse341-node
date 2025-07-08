//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/routes/users.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const contacts = require('../models/contacts');


const contactsController = require('../controllers/contacts');





router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

module.exports = router;