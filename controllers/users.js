//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/controllers/users.js

const mongodb = require('../data/database');
const { create } = require('../models/contactsModel');
const ObjectId = require('mongodb').ObjectId;
const User = require('../models/userModel');
const usersController = require('../controllers/users');



/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Returns array of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */




const getAll = async (req, res) => {
    try {
        const collection = mongodb.getDatabase().collection('users');
        const result = await collection.find();
        const users = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get single user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const collection = mongodb.getDatabase().collection('users');
        const user = await collection.findOne({ _id: userId });
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * 
 * @swagger
 * /users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *      content:
 *        application/json:
 *         schema:
 *         type: object
 *         properties:
 *         
 */

const createUser = async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });
        
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update an existing user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       204:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

const updootUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const collection = mongodb.getDatabase().collection('users');
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        
        const response = await collection.replaceOne({ _id: userId }, user);
            
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 507f1f77bcf86cd799439011
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

const deleteUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const collection = mongodb.getDatabase().collection('users');
        const response = await collection.deleteOne({ _id: userId });
            
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updootUser,
    deleteUser
};