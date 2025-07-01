
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
