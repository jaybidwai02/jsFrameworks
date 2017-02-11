
	var $rootScope,
		$scope,
		controller;

	beforeEach(function() {
		module('MyApp');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')("AppController", {$scope:$scope});
		});
		//$scope.inc();
		var a = $scope.chk();
		a();
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

});
















