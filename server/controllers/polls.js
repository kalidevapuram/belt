var mongoose = require('mongoose');
var poll = mongoose.model('Poll');

module.exports = (function() {
	return {
		
		addpoll: function(req, res){
			var newpoll = new poll(req.body);
			console.log(req.body);
			newpoll.save(function(err, poll){

				if(err){
					console.log('error in creating poll')
					console.log(err);
       			res.json({error: "no empty entries,all options should be filled. questions must be 8 characters and atleast 3 characters for options"});
							
					}else{
					 		res.json(newpoll);
					 	}
			})
		},

		getpoll: function(req, res){
			poll.find({}, function(err, polls){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(polls);
				}
			})
		},

		getonepoll: function(req, res){
			poll.findOne({_id: req.params.id}, function(err, onepoll){
				if(err){
					console.log(err);
					console.log('looks like there was an error in getonepoll Controller');
				} else {
					res.json(onepoll);
				}
			})
		},
		addvote1: function(req,res){
			// poll.update({vote1 : req.params.vote1+1}, function(err, vote1){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log("first vote")
			// 		console.log(vote1);
			// 		res.json(vote1);
			// 	}
			// })
		} 
		
	}
})();