var express = require('express');
var router = express.Router();
var articleApiRoute = require('./articleApiRoute');

router.use('/article', articleApiRoute);

module.exports = router;
