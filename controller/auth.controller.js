var db = require('../db');


module.exports.login = function(req,res){
	res.render('auth/login');
};

module.exports.postLogin = function(req,res){
	var email =req.body.email;
	var password =req.body.password;
	var user = db.get('student').find({ email: email}).value();

	if(!user){
		res.render('auth/login',{
			errors: [
				'user does not exist'
			],
			value: req.body
		});
		return;
	}

	if(user.password !== password){
		res.render('auth/login',{
			errors: [
				'wrong password'
			],
			value: req.body
		})
		return;
	}
	res.cookie('userID',user.id,{
		signed: true
	});
	res.redirect('/student');
}