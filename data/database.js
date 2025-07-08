//This file is located at: /home/haithcock/Desktop/cse341/cse341-node/data/database.js
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

let database;

const initDb = (callback) => {
  if (database) {
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then(client => {
      database = client.db();
      callback(null, database);
    })
    .catch(err => callback(err));
};

const getDatabase = () => {
  if (!database) throw Error('Database not initialized');
  return database;
};

module.exports = { initDb, getDatabase };