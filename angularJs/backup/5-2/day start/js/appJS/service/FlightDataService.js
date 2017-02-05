(function(){

	app.service('FlightDataService',['$http', '$q', '$timeout', 'JsonDataService', function($http, $q, $timeout, JsonDataService){
		var _this = this;

		_this.data = JsonDataService.data;

		_this.GET = function(){
			var makePromise = $q.defer();

			$timeout(function(){
				makePromise.resolve(_this.data.cities);
			},1000);

			return makePromise.promise;
		};

		_this.POST = function(query){
			var makePromise = $q.defer();

			/*$http.get('/jsFrameworks/angularJs/flight-search/data.json')
				  .success(function(response){
			      	makePromise.resolve(response);
			      })
			      .error(function(err){
			      	makePromise.reject(err);
			      });*/
			$timeout(function(){
				var serachResult = _this.data.flights.filter(function(flight){

					if (flight.to_city_id == flight.from_city_id) {
					    return false;
					} else if ((flight.to_city_id == query.destination && flight.from_city_id == query.originCity)) {
					    return true;
					} else if ((query.tripType == 2 ) && ((flight.to_city_id == query.destination && flight.from_city_id == query.originCity) || (flight.to_city_id == query.originCity && flight.from_city_id == query.destination))) {
					    return true;
					} else {
					    return false;
					}

				});
				
				makePromise.resolve(serachResult);
			},1000);

			return makePromise.promise;
		};

	}]);

})();