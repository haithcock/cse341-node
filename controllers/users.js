//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/controllers/users.js

const mongodb = require('../data/database');
const { create } = require('../models/contactsModel');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').findOne({ _id: userId });
    result.toArray().then((user) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(user);
    });
};
const createUser = async (req, res) => {
    const user = {
        name: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || 'An error occurred while creating the user');
    };
};


const updootUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
        name: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne(user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || 'An error occurred while making updoots to the user');

    }
};

const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').remove({ _id: userId }, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the user');
    }
};


module.exports = {
    getAll,
    getSingle,
    createUser,
    updootUser,
    deleteUser
};