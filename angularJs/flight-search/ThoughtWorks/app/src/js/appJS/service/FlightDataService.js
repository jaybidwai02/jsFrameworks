(function(){

	app.service('FlightDataService',['$q', 'JsonDataService', function($q, JsonDataService){
		var _this = this;

		_this.data = JsonDataService.data;
		

		function fromOriginToDestination(flightArray, query){

			return flightArray.filter(function(flight){

				var departingCity 		= flight.originCity.toLowerCase().replace(/ /g,''),
					arrivalCity 		= flight.destinationCity.toLowerCase().replace(/ /g,''),

					searchOrigin 		= query.originCity.toLowerCase().replace(/ /g,''),
					serachDestination	= query.destinationCity.toLowerCase().replace(/ /g,'');

				if (departingCity == arrivalCity) {
				    return false;
				} else if ( (departingCity == searchOrigin  && arrivalCity == serachDestination)) {
				    return true;
				} else {
				    return false;
				}

			});
		};

		function fromDestinationToOrigin(flightArray, query){
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

				var serachResult = {};

				serachResult.fromOriginToDestination = fromOriginToDestination(_this.data.flights, query);

				if(query.isRoundTrip){
					serachResult.fromDestinationToOrigin = fromDestinationToOrigin(_this.data.flights, query);
				}
				
				makePromise.resolve(serachResult);

			return makePromise.promise;
			
		};

	}]);

})();