//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/app.js
// This file is the main entry point for an Express application.
// It sets up the server, middleware, and routes for the application.


const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const errors = require('./middleware/errors');

app.use(express.json());
 
app.get('/', (req, res) => {
  res.send("Every knee shall bow, every tongue confess that Jesus Christ is Lord!");
});

app.use(logger); // Custom logger middleware
app.use(errors.logRequestUrl); // Logs every request
app.use('/', mainRoutes); // Main routes
app.use(errors.handleNotFound); // 404 fallback
app.use(errors.handleErrors);   // Error handler

//const port = 3000;
// 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});