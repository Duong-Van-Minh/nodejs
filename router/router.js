var express = require('express');
var router = express.Router();
var controller = require('../controller/controller.js');

var validation = require('../validation/validation.js');

var multer  = require('multer');

var upload = multer({ dest: './public/uploads/' });

router.get('/', controller.index);

router.get('/seach',controller.search);	

router.get('/create',controller.create);

router.get('/:id',controller.getId);

router.post('/newCreate',
	upload.single('file'),
	validation.postOfMe,
	controller.postOfMe
);

module.exports = router;