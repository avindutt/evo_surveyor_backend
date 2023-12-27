const express = require('express');

const router = express.Router();

const userController = require('../controller/user_controller');

router.post('/register', userController.register);

module.exports = router;