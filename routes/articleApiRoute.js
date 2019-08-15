var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController');

router.get('/', articleController.findAll);
router.get('/:id', articleController.findOne);

router.post('/', articleController.insertOne);

module.exports = router;