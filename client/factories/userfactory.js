myApp.factory('userfactory', function($http){
	var factory = {};
	var users = [];
	var polls = [];
	vote1 =0;
	vote2 =0;
	vote3 =0;
	vote4 =0;

	factory.adduser = function(info, callback){
		console.log(info)
		$http.post('/user', info).then(function(data){
			console.log(data);
			users.push(data.data)
			callback(users);
		})
	}
	factory.addvote1 = function(info, callback){
		console.log(info)
		vote1 += 1;
		callback(vote1);
	}

	factory.getuser = function(callback){
		$http.get('/user').then(function(data){
			users = data.data;
			callback(data.data);
		});
	}

	factory.createpoll = function(info, callback){
		console.log(info)
		$http.post('/poll', info).then(function(data){
			if (data.data.error) {
				console.log("there was an error");
				callback(data.data);
			}
			
			else{
			console.log(data);
			polls.push(data.data)
			callback(polls);
		}
		})
	}

	factory.addvote2 = function(info, callback){
		console.log(info)
		vote2 += 1;
		callback(vote2);
	}
	factory.addvote3 = function(info, callback){
		console.log(info)
		vote3 += 1;
		callback(vote3);
	}
	factory.addvote4 = function(info, callback){
		console.log(info)
		vote4 += 1;
		callback(vote4);
	}


	factory.getpoll = function(callback){
		$http.get('/poll').then(function(data){
			polls = data.data;
			callback(data.data);
		});
	}

	factory.onepoll = function(pollId, callback){
		$http.get('/poll/' + pollId).then(function(data){
			console.log(data.data);
			callback(data.data);
		})
	}


	return factory;
})