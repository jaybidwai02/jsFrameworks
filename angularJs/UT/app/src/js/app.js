var app = angular.module('MyApp',[]);

app.controller('AppController',['$scope',function($scope){
	$scope.count = 10;
	$scope.obj={
		val:20
	}

	$scope.inc = function(){
		$scope.count++;
		$scope.obj.val++;
		console.log($scope.count);
		console.log($scope.obj.val);
		return true;
	}

	/*$scope.chk = function(){
		return function(){
			var a;
			var b;
			return 10+20
		}
	}*/
	
}]);

