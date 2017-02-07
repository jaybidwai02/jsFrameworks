(function(){

	app.service('FlightDataService',['$http', '$q', '$timeout', 'JsonDataService', function($http, $q, $timeout, JsonDataService){
		var _this = this;

		_this.data = JsonDataService.data;

		_this.GET = function(){
			var makePromise = $q.defer();

			makePromise.resolve(_this.data.cities);

			return makePromise.promise;
		};

		_this.fromOriginToDestination = function(flightArray, query){

			return flightArray.filter(function(flight){

				var departingCity 		= flight.originCity.toLowerCase(),
					arrivalCity 		= flight.destinationCity.toLowerCase(),

					searchOrigin 		= query.originCity.toLowerCase(),
					serachDestination	= query.destinationCity.toLowerCase();

				if (departingCity == arrivalCity) {
				    return false;
				} else if ( (departingCity == searchOrigin  && arrivalCity == serachDestination)) {
				    return true;
				} else {
				    return false;
				}

			});
		};

		_this.fromDestinationToOrigin = function(flightArray, query){
			return flightArray.filter(function(flight){

				var departingCity 		= flight.originCity.toLowerCase(),
					arrivalCity 		= flight.destinationCity.toLowerCase(),

					searchOrigin 		= query.originCity.toLowerCase(),
					serachDestination	= query.destinationCity.toLowerCase();

				if (departingCity == arrivalCity) {
				    return false;
				} else if ( ( (departingCity == serachDestination && arrivalCity == searchOrigin) ) ) {
					    return true;
				} else {
				    return false;
				}

			});
		}

		_this.POST = function(query){
			var makePromise = $q.defer();

				var serachResult = [];

				serachResult.fromOriginToDestination = _this.fromOriginToDestination(_this.data.flights, query);

				if(query.isRoundTrip){
					serachResult.fromDestinationToOrigin = _this.fromDestinationToOrigin(_this.data.flights, query);
				}
				
				makePromise.resolve(serachResult);

			return makePromise.promise;
		};

	}]);

})();