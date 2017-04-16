// var app = angular.module('MyApp',[]);

app.controller('AppController',['$scope','AppService',function($scope, AppService){
	$scope.count = 10;
	$scope.obj={
		val:20
	}
	//AppService.setData(2000);
	$scope.val = {};

	$scope.setVal = function(){
		$scope.val.data = AppService.getData();
	}

	$scope.inc = function(){
		$scope.count++;
		$scope.obj.val++;
		console.log($scope.count);
		console.log($scope.obj.val);
		return true;
	}

	$scope.setInfo = function(data){
		return AppService.setData(data)
	}

	/*$scope.chk = function(){
		return function(){
			var a;
			var b;
			return 10+20
		}
	}*/
	
}]);

app.service('AppService',[function(){
	var _this = this;

	_this.data = 1000;

	this.getData = function(){
		return _this.data;
	}

	_this.setData = function(data){
		_this.data = data;
		return data;
	}
}])

