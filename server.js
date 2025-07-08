//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/app.js
// This file is the main entry point for an Express application.
// It sets up the server, middleware, and routes for the application.
require('dotenv').config();


const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const errors = require('./middleware/errors');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./data/database.js');
const routes = require('./routes/index.js');


app.get('/', (req, res) => {
  res.send("Every knee shall bow, every tongue confess that Jesus Christ is Lord!");
});


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(logger);
app.use(errors.logRequestUrl);

// Mount routes
app.use('/', routes);
app.use('/contacts', require('./routes/contactsRoute.js')); // Add this

//Error handlers
app.use(errors.handleNotFound);
app.use(errors.handleErrors);
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } 
  else {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

    app.listen(process.env.PORT || 3000, () => {
      console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
    });
  }
});
