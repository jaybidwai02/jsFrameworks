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


app.directive('showMsg', ['callFun',function (callFun) {
	return {
		restrict: 'A',
		scope:{
			msg:'@',
			passedFun:'&'
		},
		template:'<p>Hi {{msg}}</p>',
		link: function (scope, iElement, iAttrs) {
			iElement.bind('click',function(){
				scope.$apply(function(){
					
				console.log('call');
				scope.passedFun()
				callFun.callMe()
				})
			});
		}
	};
}]);

app.service('callFun',function(){
	this.callMe = function(){
		console.log('called me');
	}
});
app.directive('custDir',function(){
	return {
		restrict:'A',
		scope: {
			myText:'@',
		},
		// template:'<p class="pTag">Anup</p>'
		templateUrl:'app/src/js/directives/tpl.html'
	}
});