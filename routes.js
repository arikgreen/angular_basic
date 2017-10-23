angular.module('AngularExample').config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'example.html',
			controller: 'exampleController'
		}, null)
		.when('/list', {
			templateUrl: 'list.html',
			controller: 'exampleController'
		}, null);
}]);
