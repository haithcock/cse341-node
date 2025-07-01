const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) => {
  res.send('Hello World, This is profile router');
});

router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});

router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});

router.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send(`You sent: ${JSON.stringify(data)}`);
});


module.exports = router;
