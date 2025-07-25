//this file is located at routes/users.js
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.post('/', userController.createUser);



module.exports = router;