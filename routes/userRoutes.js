const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/user', usersController.createWallet);
router.get('/user/:id', usersController.getWallet);
router.put('/user/:id', usersController.updateWallet);
router.delete('/user/:id', usersController.deleteWallet);

module.exports = router;