var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController');

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne);
//router.get('/:id([0-9]{6})', categoryController.findOne);

module.exports = router;