//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/controllers/users.js

const mongodb = require('../data/database');
const { create } = require('../models/contactsModel');
const ObjectId = require('mongodb').ObjectId;
const User = require('../models/userModel');
const usersController = require('../controllers/users');

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