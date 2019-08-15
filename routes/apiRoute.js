var express = require('express');
var router = express.Router();
var categoryApiRoute = require('./categoryApiRoute');
var articleApiRoute = require('./articleApiRoute');

//way: app->apiRoute->articleApiRoute->articleController
router.use('/article', articleApiRoute);

router.use('/category', categoryApiRoute);

module.exports = router;
