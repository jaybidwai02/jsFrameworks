var app = angular.module('app', []);

app.run(function($rootScope){
	$rootScope.name = 'Jay'
})

app.directive('dd',function(){
	return{
		restrict:'E',
		templateUrl:'src/view/view.html'
	}
});