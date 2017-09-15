describe('ProgressBar test', function() {

	var $rootScope,$scope,DataService,ProgressBarService,$q,$http,$timeout,$httpBackend,defered;

	var endpoints = {"buttons":[5,43,-28,-7],"bars":[65,23],"limit":200};

	beforeEach(function(){
		module('ProgressBar');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			DataService = $injector.get('DataService');
			ProgressBarService = $injector.get('ProgressBarService');
			$q = $injector.get('$q');
			$http = $injector.get('$http');
			$timeout = $injector.get('$timeout');
			$httpBackend = $injector.get('$httpBackend');

			progressController = $injector.get('$controller')('progressController', {$scope: $scope,DataService:DataService})
		})

		$httpBackend
		    .when('GET', 'http://pb-api.herokuapp.com/bars')
		    .respond(200, endpoints);

		 $httpBackend.flush();

		defered = $q.defer();

		// spyOn(DataService,'getData').and.returnValue(defered.promise);
		spyOn(DataService,'getData').and.callThrough();
		spyOn(ProgressBarService,'change');
		spyOn($http,'get').and.returnValue(defered.promise);
	})

	describe('progressController test', function() {

		describe('Initialization Phase test', function() {
			it('should have defined data', function() {
				expect(progressController.data).toBeDefined();
			});

			it('should have defined barNumber', function() {
				expect(progressController.data.barNumber).toBeDefined();
			});

			it('should have defined progressPercent', function() {
				expect(progressController.data.progressPercent).toBeDefined();
			});
		});

		describe('Service function call', function() {
			
			describe('DataService getData call', function() {
				beforeEach(function() {
					DataService.getData();
				});

				it('should have called getData for DataService', function() {
					expect(DataService.getData).toHaveBeenCalled();
				});

				it('should have made $http get request', function() {
					expect($http.get).toHaveBeenCalled();
				});

				it('should have set response to config', function() {
					$scope.$apply();
					expect(progressController.data.config).toBeDefined();
				});

				it('should have set endpoints', function() {
					expect(progressController.data.config).toEqual(endpoints);
				});

				it('endpoints must have buttons, bars and limit', function() {
					expect(progressController.data.config.buttons).toBeDefined();
					expect(progressController.data.config.bars).toBeDefined();
					expect(progressController.data.config.limit).toBeDefined();
				});
			});

			describe('ProgressBarService function call', function() {
				beforeEach(function() {
					DataService.getData();

					for(var i = 0; i < progressController.data.config.bars.length; i++){
						var bar = "<div id='progress-'"+ i +"></div>";
						$('body').append(bar);
					}
				});

				afterEach(function() {
					$('body').empty();
				});

				it('should have added bars', function() {
					var barNumbers = $('body').find('div');

					expect(barNumbers.length).toEqual(endpoints.bars.length);
				});

			});

			
		});
	});


});