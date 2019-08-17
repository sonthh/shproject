const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOneById);
router.post('/', categoryController.insertOne);
router.delete('/:id', categoryController.deleteOneById);


// router.get('/:id([0-9]{6})', categoryController.findOne);

module.exports = router;
