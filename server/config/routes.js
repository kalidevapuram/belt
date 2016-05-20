var pollcontroller = require('./../controllers/polls.js')
var usercontroller = require('./../controllers/users.js')



module.exports = function(app){

	app.post('/user', function(req, res){
		usercontroller.adduser(req, res);
	});
	app.get('/user', function(req, res){
		usercontroller.getuser(req, res);
	});

	app.post('/poll', function(req, res){
		pollcontroller.addpoll(req, res);
	});

	app.get('/poll', function(req, res){
		pollcontroller.getpoll(req, res);
	});

	app.get('/poll/:id', function(req, res){
		pollcontroller.getonepoll(req, res);
	});
	
	
}