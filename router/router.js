var express = require('express');
var router = express.Router();
var controller = require('../controller/controller.js');
router.get('/', controller.index);

router.get('/seach',controller.search);

router.get('/create',controller.create);

router.get('/:id',controller.getId);

router.post('/newCreate',controller.postOfMe);

module.exports = router;