
const express = require('express');
const TweetsController = require('../controllers/tweetsController');

const router = express.Router();
const tweetsController = new TweetsController();

router.get('/', tweetsController.get);

router.get('/:id', tweetsController.getById);

router.post('/', tweetsController.post);

router.delete('/:id', tweetsController.remove);

module.exports = router;
