const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const errors = require('./middleware/errors');

app.use(express.json());
 
app.use(logger); // Custom logger middleware
app.use(errors.logRequestUrl); // Logs every request
app.use('/', mainRoutes); // Main routes
app.use(errors.handleNotFound); // 404 fallback
app.use(errors.handleErrors);   // Error handler
/*
testing
*/
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});