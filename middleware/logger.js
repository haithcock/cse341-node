//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/middleware/logger.js
// This file contains a custom logger middleware for an Express application.
// It logs the current date and time for each incoming request.

function logger(req, res, next) {
  const now = new Date().toLocaleString();
  console.log('Time:', now);
  next();
}

module.exports = logger;
