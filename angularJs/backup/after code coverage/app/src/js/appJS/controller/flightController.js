(function(){	

	app.controller('flightController',['FlightDataService',function(FlightDataService){
		
		var _this 				= this;
		_this.isSearchExecuted  = false;
		_this.flightModels 		= {}

		_this.passengers		= [1,2,3,4,5,6,7,8,9,10];
		_this.isRoundTrip 		= true;

		_this.minPrice 			= 0;
		_this.maxPrice 			= 0;

		//Flight action service
		_this.FlightDataService = FlightDataService;
		_this.searchResult 		= _this.filteredFlights = _this.FlightDataService.data.flights;

		//slider options
		_this.sliderOptions 	= {
            floor: _this.minPrice,
            ceil: _this.maxPrice,
            step: 100,
            precision: 1,
            onEnd: function() {
                refineSearch();
            }
        };		

		_this.sortByPrice = function(flightEntry){
			return flightEntry.returnTrip ? (flightEntry.totalPrice + flightEntry.returnTrip.totalPrice) : flightEntry.totalPrice
		}

		function setPriceFliter(flightArr, isOneWay){

			if(typeof flightArr !== "undefined" && flightArr.length){

				var allFlightFare = flightArr.map(function(flight){
						return isOneWay ? flight.totalPrice : (flight.totalPrice + flight.returnTrip.totalPrice);
					})

				_this.minPrice = Math.min.apply(Math, allFlightFare);
				_this.maxPrice = Math.max.apply(Math, allFlightFare);

				_this.sliderOptions.floor = _this.minPrice;
				_this.sliderOptions.ceil = _this.maxPrice;
			}else{
				_this.sliderOptions.floor = 0;
				_this.sliderOptions.ceil = 0;
			}

		};

		setPriceFliter(_this.searchResult, true);

		_this.getFlightData = function(){

			_this.isSearchExecuted 	= true;
			_this.trip 				= _this.isRoundTrip;

			var origin 				= _this.flightModels.departingCity,
				 desti 				= _this.flightModels.arrivalCity;

			_this.srcDesti = _this.trip ? (origin + '  >  ' + desti + '  >  ' + origin) : (origin + '  >  ' + desti);

			var serchQuery = {
				originCity:_this.flightModels.departingCity,
				destinationCity:_this.flightModels.arrivalCity,
				isRoundTrip:_this.isRoundTrip
			}

			_this.FlightDataService.POST(serchQuery).then(function(res){

					if (typeof res.fromDestinationToOrigin == "undefined"){

						_this.searchResult = _this.filteredFlights = res.fromOriginToDestination;

						setPriceFliter(res.fromDestinationToOrigin,true);					

					}else if(typeof res.fromDestinationToOrigin != "undefined"){

						var temp 	= [];
						var count 	= 0;
						for (var i in res.fromOriginToDestination){
							
							for(var j in res.fromDestinationToOrigin){
								
								temp[count] = angular.copy(res.fromOriginToDestination[i]);
								temp[count]['returnTrip'] = angular.copy(res.fromDestinationToOrigin[j]);
								count++;
							}
						}
						setPriceFliter(temp,false);

						_this.searchResult = _this.filteredFlights = temp;
					}

				 },
				 function(err){
					console.log(err);
				 });
		};

		function refineSearch(){
			_this.searchResult = _this.filteredFlights.filter(function(flight){

				var totalFare = flight.returnTrip ? (flight.totalPrice + flight.returnTrip.totalPrice) : flight.totalPrice;

				if(totalFare >= _this.minPrice && totalFare <= _this.maxPrice){
					return true;
				}else{
					return false;
				}

			})
		};


	}]);

})();