(function(){	

	app.controller('flightController',['FlightDataService',function(FlightDataService){

		var _this = this;
		_this.passengers = [1,2,3,4,5,6,7,8,9,10];

		_this.cities = [];
		_this.filteredFlights = [];
		_this.minPrice = 0;
		_this.maxPrice = 0;

		//Flight action service
		_this.FlightDataService = FlightDataService;

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

		_this.getFlightData = function(){

			var serchQuery = {
				originCity:_this.departingCity.id,
				destination:_this.arrivalCity.id
			}



			_this.FlightDataService.POST(serchQuery).then(function(res){
					_this.searchResult = _this.filteredFlights = res;

					if (_this.searchResult.length){
						var allFlightFare = res.map(function(flight){
							return flight.price;
						})

						_this.minPrice = Math.min.apply(Math, allFlightFare);
						_this.maxPrice = Math.max.apply(Math, allFlightFare);

						_this.slider_options.floor = _this.minPrice;
						_this.slider_options.ceil = _this.maxPrice;
					}

				 },
				 function(err){
					console.log(err);
				 });
		};

		_this.refineSearch = function(){
			_this.searchResult = _this.filteredFlights.filter(function(flight){
				if(flight.price >= _this.minPrice && flight.price <= _this.maxPrice){
					return true;
				}else{
					return false;
				}
			})
		}

		_this.fetchCities();

	}]);

})();