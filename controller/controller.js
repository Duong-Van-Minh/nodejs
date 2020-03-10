var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req,res){
	res.render('stundent/index',{
		students: db.get('student').value()
	});
};
module.exports.search =function(req,res){
	var q = req.query.q;
	var read = db.get('student');
	 var mathFilter = read.filter(function(user){
	 	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('stundent/index',{
		students : mathFilter
	})
	console.log( typeof read);
};
module.exports.create =function(req,res){
	res.render('stundent/create.pug')
};
module.exports.getId =function(req,res){
	var id = req.params.id;
	console.log(typeof id);
	var stude = db.get('student').find({id: id}).value();
	//console.log(stude);
	res.render('stundent/view',{
		student: stude
	})
};
module.exports.postOfMe = function(req,res){
	console.log(req.body);
	req.body.id = shortid.generate();
	var newStundent =req.body;
	db.get('student').push(newStundent).write();
	res.redirect('/student');

};