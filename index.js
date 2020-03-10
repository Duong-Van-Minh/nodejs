var express = require('express');
var bodyParser = require('body-parser');
var shortid = require('shortid');
var db = require('./db');
var Router = require('./router/router.js');
var app = express();

var port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function(req,res){
	res.render('stundent/index',{
		students: db.get('student').value()
	});
});
app.use('/student', Router);
app.listen(port, function (){
	console.log('Server listening on port' + port);
})