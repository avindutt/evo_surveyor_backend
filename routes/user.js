const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user_controller');

router.post('/register', userController.register);

router.post('/create-session', passport.authenticate('local', {failureRedirect: '/user/register'}), userController.createSession);

module.exports = router;