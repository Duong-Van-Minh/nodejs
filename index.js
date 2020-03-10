var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var student = [
			{id: 1, name: 'duong van minh'},
			{id: 2, name: 'hoang anh'},
			{id: 3, name: 'hoang em'}
		]
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function(req,res){
	res.render('index',{
		name : 'student'
	});
});
app.get('/stundent', function(req,res){
	res.render('stundent/index',{
		students: student
	});
});
app.get('/stundent/seach',function(req,res){
	var q = req.query.q;
	 var mathFilter = student.filter(function(user){
	 	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('stundent/index',{
		students : mathFilter
	})
	//console.log(req.query);
});
app.get('/stundent/create',function(req,res){
	res.render('stundent/create.pug')
});
app.post('/stundent/newCreate',function(req,res){
	console.log(req.body);
	var newStundent =req.body;
	student.push(newStundent);
	res.redirect('/stundent');
})
app.listen(port, function (){
	console.log('Server listening on port' + port);
})