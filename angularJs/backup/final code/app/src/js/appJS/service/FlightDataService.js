(function(){

	app.service('FlightDataService',['$q', 'JsonDataService', function($q, JsonDataService){
		var _this = this;

		_this.data = JsonDataService.data;
		
		//Return flight from origin to destination
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

		/*
		*
		Return flight from destination to origin - it will only get execute if user fires and Return Trip query
		*
		*/
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

		/*
		*
		Recives the user query from controller and fliter the flight data based on query and return the result to controller 
		*
		*/
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