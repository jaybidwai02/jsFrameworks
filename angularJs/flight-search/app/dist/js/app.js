
var app = angular.module('FlightSearch',['rzModule']);


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

        _this.setTrip = function(trip){
        	_this.isRoundTrip = trip;
        	var returnDate = angular.element(document.getElementById('returnDate'));
        	if(_this.isRoundTrip){
        		returnDate.attr('required','required');
        	}else{
        		returnDate.removeAttr('required');
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

				_this.minPrice = (_this.minPrice == _this.maxPrice) ? 0 : _this.minPrice;

				_this.sliderOptions.floor = _this.minPrice;
				_this.sliderOptions.ceil = _this.maxPrice;
				console.log(_this.sliderOptions);
			}else{
				_this.sliderOptions.floor = 0;
				_this.sliderOptions.ceil = 0;
			}

		};

		setPriceFliter(_this.searchResult, true);

		_this.getFlightData = function(){

			_this.isSearchExecuted 	= true;
			_this.trip 				= _this.isRoundTrip;
			_this.departDate 		= _this.flightModels.departingDate,
			_this.returnDate 		= _this.flightModels.returningDate,
			_this.passengersInTrip	= _this.flightModels.passengers;

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

						setPriceFliter(res.fromOriginToDestination,true);					

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
(function(){

	app.service('JsonDataService',function(){
		var _this = this;

		_this.data = {
   
            "flights": [
                {
                    id:'1',
                    FlightNumber:'A-201',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:3500
                },
                {
                    id:'2',
                    FlightNumber:'A-202',
                    Departure:'02:00 AM',
                    Arrival:'04:00 AM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:7500
                },
                {
                    id:'3',
                    FlightNumber:'A-203',
                    Departure:'08:00 AM',
                    Arrival:'10:00 PM',
                    originCity:'Delhi',
                    originAbrivation:'DEL',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:5000
                },
                {
                    id:'4',
                    FlightNumber:'A-204',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:3500
                },
                {
                    id:'5',
                    FlightNumber:'A-205',
                    Departure:'11:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:2500
                },
                {
                    id:'6',
                    FlightNumber:'A-206',
                    Departure:'11:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Mumbai',
                    destiAbrivation:'MUM',
                    totalPrice:2000
                },
                {
                    id:'7',
                    FlightNumber:'A-207',
                    Departure:'09:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:4500
                },
                {
                    id:'8',
                    FlightNumber:'A-208',
                    Departure:'08:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Nagpur',
                    destiAbrivation:'NAG',
                    totalPrice:6500
                },
                {
                    id:'9',
                    FlightNumber:'A-209',
                    Departure:'09:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Delhi',
                    originAbrivation:'DEL',
                    destinationCity:'Mumbai',
                    destiAbrivation:'MUM',
                    totalPrice:5500
                }
            ]

        };

	});

})();