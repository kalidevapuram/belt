myApp.controller('usercontroller', function($scope, $routeParams, $location, userfactory){
	
	$scope.users = [];

	$scope.polls =[];
	$scope.vote1 = 0;
	$scope.vote2 = 0;
	$scope.vote3 = 0;
	$scope.vote4 = 0;

	$scope.onepoll  = function (pollId){
		console.log(pollId)
		$location.path('/poll/' + pollId);
	}

	userfactory.onepoll($routeParams.id, function(data){
		$scope.poll = data;
	})


	userfactory.getuser(function(data){
		console.log(data);
		$scope.users = data;
	})

	$scope.adduser = function(new_user){

		console.log(new_user);
		userfactory.adduser(new_user, function(data){
			$scope.users = data;
			console.log($scope.users)
            $location.path('/dashboard');
		})
	}
	$scope.addvote1 = function(option1){

		console.log(option1);
		userfactory.addvote1(option1, function(data){
			$scope.vote1 = data;
			console.log($scope.vote1)
            
		})
	}
	$scope.addvote2 = function(option2){

		console.log(option2);
		userfactory.addvote2(option2, function(data){
			$scope.vote2 = data;
			console.log($scope.vote2)
            
		})
	}
	$scope.addvote3 = function(option3){

		console.log(option3);
		userfactory.addvote3(option3, function(data){
			$scope.vote3 = data;
			console.log($scope.vote3)
            
		})
	}
	$scope.addvote4 = function(option4){

		console.log(option4);
		userfactory.addvote4(option4, function(data){
			$scope.vote4 = data;
			console.log($scope.vote4)
            
		})
	}


	

	$scope.logout = function(userid){
		$location.path('/' );
	}

	$scope.createpoll = function(new_poll){

		console.log(new_poll);
		userfactory.createpoll(new_poll, function(data){
			if(data.error) {
				console.log("got error while creating poll");
				$scope.error = data.error;
			}
			else{
			$scope.polls = data;
			console.log($scope.polls)
            $location.path('/dashboard');
        }
		})
	}

	userfactory.getpoll(function(data){
		console.log(data);
		$scope.polls = data;
	})



	


})