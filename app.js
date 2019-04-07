var express = require('express');
var app = express();
var hbs = require('express3-handlebars');
app.engine('hbs',hbs());
app.set('view engine','hbs');
app.get('/',function(req,res) {
	res.render('index', {
		title:'Learning Handlebars',
		course:'Advance Java'
	});
})
app.listen(9001,function() {
	console.log('server started at 9001');
})