//this file is located at: /home/haithcock/Desktop/cse341/cse341-node/routes/mainRoutes.js
// This file defines the main routes for an Express application.
// It includes routes for home, profile, login, logout, and a submit endpoint.


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the first page');
});


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
