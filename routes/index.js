const router = require('express').Router();
const mainRoutes = require('./mainRoutes');
const errors = require('../middleware/errors');

router.get('/', (req, res) => { res.send('Hello World!'); });
router.use('/users', require('./contactsRoute'));

module.exports = router;