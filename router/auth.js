var express = require('express');

var router = express.Router();

var controller = require('../controller/auth.controller.js');

var validation = require('../validation/validation.js');

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;//chi den thu muc