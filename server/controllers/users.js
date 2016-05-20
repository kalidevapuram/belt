var mongoose = require('mongoose');
var user = mongoose.model('User');

module.exports = (function() {
	return {
		
		adduser: function(req, res){
			var newuser = new user(req.body);
			console.log(req.body);
			newuser.save(function(err, user){

				if(err){
					console.log('error in creating user')
					console.log(user);
       			// res.json({message: "Name should contain alpha-numeric characters only", error: "name cannot be blank and it has to be morethan 5 characters and should contain alpha-numeric characters only"})
							
					}else{
					 		res.json(newuser);
					 	}
			})
		},
		getuser: function(req, res){
			user.find({}, function(err, users){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(users);
				}
			})
		},
		
	}
})();