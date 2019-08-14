const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/Users');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  const UserBody = req.body;
  const newUser = new User(UserBody);
  return newUser.save()
    .then((data) => res.status(200).json({ code: 200, data }))
    .catch((err) => res.status(400).json({ code: 400, err }));
});

router.get('/get-all', (req, res) => userController.getAllItem()
  .then((data) => res.status(400).json({ data }))
  .catch((err) => res.status(400).json({ error: err })));

module.exports = router;
