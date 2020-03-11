module.exports.postOfMe = function(req,res,next){
	var errors = [];
	if (!req.body.name) {
		errors.push('name is required.')
	}
	if (!req.body.phone){
		errors.push('phone is required')
	}
	if (!req.body.class){
		errors.push('class is required')
	}
	if (errors.length > 0){
		res.render('stundent/create',{
			errors: errors,
			value: req.boydy
		});
		return;
	}
	next();
}
// goi la middleware