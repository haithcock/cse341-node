//This file is located at: /home/haithcock/Desktop/cse341/cse341-node/data/database.js

const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongoDb').MongoClient;

let database;
const intDb = (callback) => {
    if (database) {
        console.log("Database already initialized!");
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDatabase =() => {
    if (!database) {
        throw new Error("Database not initialized. Call initDb first.");
    }
    return database;    
};

module.exports = {
    initDb,
    getDatabase
};