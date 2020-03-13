var db = require('../db');
var shortid = require('shortid');

module.exports.product = function(req,res){
	console.log(req.query.page);
	var page = parseInt(req.query.page) || 1;
	var perPage = 8;
	var start = (page - 1) * perPage;
	var end = page * perPage;
	res.render('product/product.pug',{
		product: db.get('product').value().slice(start, end)
	});
};