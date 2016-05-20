var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider

			.when('/', 
			{
				controller: 'usercontroller',
				templateUrl: "partials/mongoose/login.html"
			})

			.when('/dashboard', 
			{
				controller: 'usercontroller',
				templateUrl: "partials/mongoose/dashboard.html"
			})

			.when('/poll/:id',{
				controller: 'usercontroller',
				templateUrl: "partials/mongoose/survey.html"
			})
			
			.when('/create',{
				controller: 'usercontroller',
				templateUrl: "partials/mongoose/create.html"
			})
			
			.otherwise({
				redirectTo: "/"
			})
	})
}());