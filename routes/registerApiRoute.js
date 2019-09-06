const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  const newUser = new User(req.body);
  if (newUser.password) {
    newUser.password = bcrypt.hashSync(newUser.password, 10);
  }
  return userController.register(newUser)
    .then((data) => res.status(200).json({ code: 200, data }))
    .catch((err) => {
      const errMessage = err.message.replace('Users validation failed: ', '');
      const strErr = errMessage.split(',');
      res.status(200).json({ code: 200, message: strErr });
    });
});
module.exports = router;
