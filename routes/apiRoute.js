const express = require('express');

const router = express.Router();
const categoryApiRoute = require('./categoryApiRoute');
const articleApiRoute = require('./articleApiRoute');

// way: app->apiRoute->articleApiRoute->articleController
router.use('/article', articleApiRoute);

router.use('/category', categoryApiRoute);

module.exports = router;
