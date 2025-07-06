//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/middleware/errors.js
// This file contains error handling middleware for an Express application.
// It includes functions to log request URLs, handle 404 errors, and handle general errors.
// The middleware functions are exported for use in the main application file.


function logRequestUrl(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}

function handleNotFound(req, res, next) {
  res.status(404).send('Sorry, can’t find that!');
}

function handleErrors(err, req, res, next) {
  console.error('Error:', err.stack || err.message || err);
  res.status(500).send('Something broke!');
}

module.exports = {
  logRequestUrl,
  handleNotFound,
  handleErrors
};
