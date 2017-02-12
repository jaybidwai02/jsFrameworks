describe('directive with template URL', function() {
	var compile, childEle, $rootScope;
	var body = $('body'),
		html = '<div cust-dir my-text="{{testVar}}"></div>';
		

	beforeEach(function() {
		//module();


		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			compile = $injector.get('$compile');
			$scope = $rootScope.$new();
			ele = angular.element(html);
			compile(ele)($rootScope);
		});

		

		body.append(ele);
		$rootScope.$digest();

		console.log(ele[0].outerHTML);

		childEle = $('.pTag');
		//console.log(childEle);
	});

	describe('Directive Render test', function() {
		
		it('It should reder in DOM', function() {
			//console.log(childEle);
			expect(childEle.length).toEqual(1);
		});

		it('it should bind text from scope', function() {
			$rootScope.testVar = "is it bind";
			$rootScope.$digest();

			expect(ele.find('h2').text()).toContain('is it bind');
		});

	});









});