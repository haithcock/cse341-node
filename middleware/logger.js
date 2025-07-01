function logger(req, res, next) {
  const now = new Date().toLocaleString();
  console.log('Time:', now);
  next();
}

module.exports = logger;
