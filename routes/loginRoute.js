const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();
router.route('/')
  .post((req, res) => {
    const userLogin = {
      username: req.body.username,
      password: req.body.password,
    };
    return userController.login(userLogin.username, userLogin.password)
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(400).json({ code: 400, message: err.message }));
  });
module.exports = router;
