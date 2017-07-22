(function(){
	app.service('DataService',['$http','$q',function($http, $q){
		var _this = this;


		_this.getData = function(){
			var defer = $q.defer();

			$http.get('http://pb-api.herokuapp.com/bars').then(function(res){
				defer.resolve(res);
			})

			return defer.promise;
		}
	}])
})();