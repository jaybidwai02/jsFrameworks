
	spyOnService = function(service, methodName, result){
		return spyOn(service, methodName).and.returnValue({then:function(fn){
			fn(result);
		}});
	};

	var $rootScope,
		$scope,
		flightServiceSpy,
		controller;

	beforeEach(function(){

		module('FlightSearch');

		inject(function($injector){
			$rootScope 			= $injector.get('$rootScope');
			$scope 				= $rootScope.$new();

			flightServiceSpy 	= spyOnService( $injector.get('FlightDataService'), 'POST', {fromOriginToDestination:[ { result:'This is Result from Service' }] } );

			controller 	= $injector.get('$controller')("flightController", {$scope:$scope});
		});

	});	

	describe("initialization",function(){

		var dataArr,minPrice,maxPrice,isOneWay = true;

		beforeEach(function(){
			dataArr = controller.searchResult.map(function(flight){
					return isOneWay ? flight.totalPrice : (flight.totalPrice + flight.returnTrip.totalPrice);
			});

			minPrice = Math.min.apply(Math, dataArr);
			maxPrice = Math.max.apply(Math, dataArr);
		});

		it('Should set the min price',function(){
			expect(controller.minPrice).toEqual(minPrice);
		});

		it('Should set the min price',function(){
			expect(controller.maxPrice).toEqual(maxPrice);
		});

		it('isSearch flag should be false',function(){
			expect(controller.isSearchExecuted).toEqual(false);
		});

		it('isRoundTrip flag should be true',function(){
			expect(controller.isRoundTrip).toEqual(true);
		});

	});

	describe('Actions Handlers',function(){
		
		describe('Flight Service',function(){

			beforeEach(function(){
				controller.flightModels.departingCity = "Pune";
				controller.flightModels.arrivalCity = "Delhi";
				controller.getFlightData();
			})

			it('Should call The FlightDataService.POST method',function(){
				expect(flightServiceSpy).toHaveBeenCalled();
			});

			it('Should set the searchResult to the result of FlightDataService.POST service call',function(){
				expect(controller.filteredFlights).toEqual( [{ result:'This is Result from Service' }] )
			});
			
		});

		describe('Custome Filter For Oderby',function(){

			var oneWayFlightJson,twoWayFlightJson,flightFareOneway,flightFareTwoWay;

			beforeEach(function(){
				oneWayFlightJson = {
                    id:'1',
                    FlightNumber:'A-201',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:3500
                };
                twoWayFlightJson = {
                    id:'1',
                    FlightNumber:'A-201',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:3500,
                    returnTrip:{
	                    id:'3',
	                    FlightNumber:'A-203',
	                    Departure:'08:00 AM',
	                    Arrival:'10:00 PM',
	                    originCity:'Delhi',
	                    originAbrivation:'DEL',
	                    destinationCity:'Pune',
	                    destiAbrivation:'PNQ',
	                    totalPrice:5000
	                }
                };
				flightFareOneway = controller.sortByPrice(oneWayFlightJson);
				flightFareTwoWay = controller.sortByPrice(twoWayFlightJson);

			});

			it('Should return the price of One Way trip',function(){
				expect(flightFareOneway).toEqual(oneWayFlightJson.totalPrice);
			});

			it('Should return the price Of return trip',function(){
				expect(flightFareTwoWay).toEqual(twoWayFlightJson.totalPrice + twoWayFlightJson.returnTrip.totalPrice);
			})

		});

		describe('Trip Type',function(){

			it('Should Set isRoundTrip to true/false as per passed arguments',function(){
				controller.setTrip(true);
				expect(controller.isRoundTrip).toBeTruthy();
			});

		})

	});