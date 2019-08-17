const express = require('express');

const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.findAll);
router.get('/:id', articleController.findOne);

router.post('/', articleController.insertOne);

module.exports = router;
