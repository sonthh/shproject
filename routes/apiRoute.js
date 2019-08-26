const express = require('express');

const router = express.Router();
const categoryApiRoute = require('./categoryApiRoute');
const articleApiRoute = require('./articleApiRoute');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerApiRoute');
// way: app->apiRoute->articleApiRoute->articleController
router.use('/article', articleApiRoute);
router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/category', categoryApiRoute);

module.exports = router;
