var express = require('express');
var router = express.Router();
var controller = require('../controller/controller.product.js');

router.get('/product', controller.product);

module.exports = router;