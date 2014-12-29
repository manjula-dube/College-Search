var collegeApp = angular.module('collegeApp',['ngRoute', 'ngDialog','collegeControllers']);

collegeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/list', {
		templateUrl: './templates/collegeList.html',
		controller: 'CollegeController'
	}).otherwise({
		redirectTo: '/list'
	});
}]);