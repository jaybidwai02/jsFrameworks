describe('Directive Test', function() {
	var $rootScope,
		$scope,
		controller,
		ele

	beforeEach(function() {
		//module('MyApp');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')("AppController", {$scope:$scope});

			compile = $injector.get('$compile');
			service = $injector.get('callFun');
			$rootScope.funCall = function(){

			}
			//$rootScope.funCall = $scope.inc;

			//create and compile directive 
			ele = angular.element('<p show-msg msg="This Is message" passed-fun="funCall()"></p>');
			compile(ele)($rootScope);
			$rootScope.$digest();
			console.log(ele[0].outerHTML);

		});

		spyOn(service,'callMe');
		spyOn($scope,'inc');
	});

	
		
		it('It should bind the string in html element', function() {
			expect(ele.text()).toContain('This Is message');
		});


		it('INC should have be called', function() {
			ele[0].click();
			expect(service.callMe).toHaveBeenCalled();
		}); 

		it('INC should have be called2', function() {
			ele[0].click();
			expect(service.callMe).toHaveBeenCalled();
		}); 

	});

