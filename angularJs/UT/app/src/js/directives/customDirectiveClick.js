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