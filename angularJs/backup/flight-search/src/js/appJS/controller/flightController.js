(function(){	

	app.controller('flightController',['FlightDataService',function(FlightDataService){

		var _this = this;
		_this.isSearchExecuted = false;
		_this.flightModels = {}

		_this.passengers = [1,2,3,4,5,6,7,8,9,10];
		_this.isRoundTrip = true;

		

		_this.cities = [];
		// _this.searchResult = [];
		_this.minPrice = 0;
		_this.maxPrice = 0;

		//Flight action service
		_this.FlightDataService = FlightDataService;
		_this.searchResult = _this.FlightDataService.data.flights;

		//slider options
		_this.slider_options = {
            floor: _this.minPrice,
            ceil: _this.maxPrice,
            step: 500,
            precision: 1,
            onStart: function() {},
            onChange: function() {},
            onEnd: function() {
                console.log('Apply filters');
                _this.refineSearch();
            }
        };

		_this.fetchCities = function(){
			_this.FlightDataService.GET().then(function(cities){
				_this.cities = cities;
			})
		}

		function setPriceFliter(flightArr, isOneWay){
			if(typeof flightArr !== "undefined" && flightArr.length){
				var allFlightFare = flightArr.map(function(flight){
						return isOneway ? flight.totalPrice : (flight.totalPrice + flight.returnTrip.totalPrice);
					})

				_this.minPrice = Math.min.apply(Math, allFlightFare);
				_this.maxPrice = Math.max.apply(Math, allFlightFare);

				_this.slider_options.floor = _this.minPrice;
				_this.slider_options.ceil = _this.maxPrice;
			}else{
				_this.slider_options.floor = 0;
				_this.slider_options.ceil = 0;
			}
		}

		_this.getFlightData = function(){
			_this.isSearchExecuted = true;
			_this.trip = _this.isRoundTrip;
			_this.origin = _this.flightModels.departingCity;
			_this.desti = _this.flightModels.arrivalCity;

			_this.srcDesti = _this.trip ? (_this.origin + '  >  ' + _this.desti + '  >  ' + _this.origin) : (_this.origin + '  >  ' + _this.desti);

			var serchQuery = {
				originCity:_this.flightModels.departingCity,
				destinationCity:_this.flightModels.arrivalCity,
				isRoundTrip:_this.isRoundTrip
			}



			_this.FlightDataService.POST(serchQuery).then(function(res){

					if (typeof res.fromDestinationToOrigin == "undefined"){

						_this.searchResult = _this.filteredFlights = res.fromOriginToDestination;
						//console.log(_this.serachResult);
						setPriceFliter(res.fromDestinationToOrigin,true);
						

					}else if(typeof res.fromDestinationToOrigin != "undefined"){
						var temp = [];
						var count = 0;
						for (var i in res.fromOriginToDestination){
							
							for(var j in res.fromDestinationToOrigin){
								
								temp[count] = angular.copy(res.fromOriginToDestination[i]);
								temp[count]['returnTrip'] = angular.copy(res.fromDestinationToOrigin[j]);
								count++;
							}
						}
						setPriceFliter(temp,false);
						/*var allFlightFare = temp.map(function(flight){
							
							return (flight.totalPrice + flight.returnTrip.totalPrice);
						})

						_this.minPrice = Math.min.apply(Math, allFlightFare);
						_this.maxPrice = Math.max.apply(Math, allFlightFare);

						_this.slider_options.floor = _this.minPrice;
						_this.slider_options.ceil = _this.maxPrice;*/


						_this.searchResult = _this.filteredFlights = temp;
					}

				 },
				 function(err){
					console.log(err);
				 });
		};

		_this.refineSearch = function(){
			_this.searchResult = _this.filteredFlights.filter(function(flight){
				//var totalFare = serchQuery.isRoundTrip ? (flight.fromOriginPrice + flight.fromDestinationPrice) : flight.fromOriginPrice;
				var totalFare = flight.returnTrip ? (flight.totalPrice + flight.returnTrip.totalPrice) : flight.totalPrice;
				if(totalFare >= _this.minPrice && totalFare <= _this.maxPrice){
					return true;
				}else{
					return false;
				}
			})
		}

		_this.fetchCities();

	}]);

})();