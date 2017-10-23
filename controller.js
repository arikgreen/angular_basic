angular.module('AngularExample').controller('listController', function ($scope){
	$scope.message = 'Hello world!';
	$scope.list = [
		{firstName: 'John', lastName: 'Doe'},
		{firstName: 'Mark', lastName: 'Smith'},
		{firstName: 'James', lastName: 'Mole' }
	];
});
angular.module('AngularExample').controller('exampleController', function ($scope){
	$scope.message = 'My first project in AngularJS!';
});
