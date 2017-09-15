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
angular.module('app').run(['$templateCache',function($templateCache){  'use strict';

  $templateCache.put('src/view/view.html',
    "<p>iiiiiiiiii</p>"
  );
}]);