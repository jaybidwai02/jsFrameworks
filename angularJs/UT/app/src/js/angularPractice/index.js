var app = angular.module('MyApp',[]);
app.controller('FilterController',['$scope',function($scope){
	var scope = $scope;
	scope.chk = 'j';


	scope.viewModal = {
		name:'Jay Bidwai',
		age:27.88888,
		dob:new Date()
	};
	scope.chk1 = scope.viewModal;



	scope.arr = [{
		name:'Jay',
		age:28,
		dob:'18-10-1991',
		ext:'x'
	},{
		name:'Jayu',
		age:29,
		dob:'18-10-2000',
		ext:'z'
	}];

	scope.sortResult = function(prev, next){
		var prev = new Date(prev.value);
		var next = new Date(next.value);

		return prev.getTime() > next.getTime() ? -1 : 1;
	}


}]);