
	var $rootScope,
		$scope,
		controller,
		AppService;

	beforeEach(function() {
		module('MyApp','templates');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')("AppController", {$scope:$scope});
			AppService = $injector.get('AppService');
		});
		//$scope.inc();
		/*var a = $scope.chk();
		a();*/

		spyOn(AppService, 'getData');
		spyOn(AppService, 'setData').and.returnValue('200');
	});

	

describe('AppController', function() {


	describe('Initialzation', function() {
		it('It should be 10', function() {
			expect($scope.count).toEqual(10);
		});
	});

	describe('Action Handler', function() {
		
		describe('Increment Count', function() {

			it('should behave...', function() {				
				expect($scope.count).toEqual(10);
				$scope.inc();
				expect($scope.count).toEqual(11);
			});

			it('should behave...', function() {
				expect($scope.inc()).toBe(true);
			});
			
		});

	});

	describe('Testing service call', function() {
		it('Should have fetched data from service', function() {
			AppService.getData.and.callThrough();
			$scope.setVal();
			expect($scope.val.data).toEqual(1000);
		});

		it('setData of AppService should have been called', function() {
			//$scope.setInfo(3000);
			AppService.setData.and.callThrough();
			var val = $scope.setInfo();

			expect(AppService.setData).toHaveBeenCalled();
			/*console.log(val);
			expect(val).toEqual(3000);*/
			// expect(AppService.data).toEqual(1000);
		});

		it('setData called with 100', function() {
			$scope.setInfo(100)
			expect(AppService.setData).toHaveBeenCalledWith(100);
		});
	});

});
















