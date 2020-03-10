var express = require('express');
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ student: [] })
  .write();
var app = express();
var port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function(req,res){
	res.render('index',{
		name : student
	});
});
app.get('/stundent', function(req,res){
	res.render('stundent/index',{
		students: db.get('student').value()
	});
});
app.get('/stundent/seach',function(req,res){
	var q = req.query.q;
	var read = db.get('student').value();
	//  var mathFilter = filter(function(user){
	//  	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	// });

	// res.render('stundent/index',{
	// 	students : mathFilter
	// })
	console.log(read);
});
app.get('/stundent/create',function(req,res){
	res.render('stundent/create.pug')
});
app.post('/stundent/newCreate',function(req,res){
	console.log(req.body);
	var newStundent =req.body;
	db.get('student').push(newStundent).write();
	res.redirect('/stundent');

})
app.listen(port, function (){
	console.log('Server listening on port' + port);
})