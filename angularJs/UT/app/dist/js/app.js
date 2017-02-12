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