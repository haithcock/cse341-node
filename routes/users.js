//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/routes/users.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/users');


const usersController = require('../controllers/users');





router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

module.exports = router;