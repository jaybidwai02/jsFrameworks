
var app = angular.module('dz',[]);

app.run(function($rootScope){
	$rootScope.per = 100;
});

app.controller('appCtr',function($scope, $timeout){
	$scope.amt = 100;

	var start = function(amt){
		var percentage = amt;
		var progressMeter = angular.element(document.getElementById('bar'));
		var radius = progressMeter.attr('r')
		var c = Math.PI*(radius*2);
		var pct = ((100-percentage)/100)*c;
		progressMeter.css('stroke-dashoffset', pct+'px');

		startAnimation(0, amt, progressMeter)
	}

	/*function callback (goal) {
		if (count < goal) {
			count = count + 1;
			result.innerHTML = count + "<span class='percentage-icon'>%</span>";
		//	checkColor(count);
		}else{
			count = count - 1;
			result.innerHTML = count + "<span class='percentage-icon'>%</span>";
		}
	}*/
	function startAnimation (start,goal, ele) {
		// initailState = goal;

		var diff = goal - start;

		var transitionDuration = ( diff >= 0 ) ? ( ((goal - start) / 100) + "s" ) : ( ((start - goal) / 100) + "s" );
		ele.css('transition-duration', transitionDuration);
		if(diff >= 0){
			for (var i = start; i < goal; i++) {
			  	$timeout(function(){
				  $scope.amt--;
				},i * 10);
			}
		}/*else{
			for (var i = start; i > goal; i--) {
			  	setTimeout(function(){
				  $scope.amt++;
				},i * 10);
			}
		}*/
	};

	start(50);

});
/*(function(){

	angular.module('dz.component.artWorkModule',[])

})();*/

(function(){

	var config = {
		transclude:false,
		templateUrl: './view/view.html'
	};

	function ArtWorkController($scope, $http){

		var ctrl = this;
		$scope.activeSlide = 0;
		$scope.response = [];
		$scope.data = {
			res:"",
			slides:[]
		};

		this.$onInit = function(){
			console.log($scope.$ctrl.artId)
			$http({
				method:'GET',
				// url:window.location.origin + '/getartwork/'+ $scope.$ctrl.artId,
				url:'art.json'
			}).then(artLoaded)
		}

		
		/*console.log(ctrl).$ctrl.para
		console.log($ctrl)*/

		function artLoaded(res){
			console.log(res)


			// var response = res
			$scope.response = res.data;
			$scope.data.res = res.data[$scope.activeSlide];
			//res.data.slides =  res.data[0].cover.image;
			$scope.data.slides = res.data.filter(function(val, index){
				return (index == 0) ? true : false;
			});
			//$scope.urlArr = res.data.slides;
			// console.log($scope.data.slides)
		}

		

		$scope.nextSlide = function(){
			if($scope.activeSlide < $scope.response.length -1 ){
				$scope.activeSlide++
				$scope.data.slides.push($scope.response[$scope.activeSlide])
				$scope.data.res = $scope.response[$scope.activeSlide]
			}else{
				return
			}
		}

		$scope.prevSlide = function(){
			console.log($scope.activeSlide)
			if($scope.activeSlide > 0){
				$scope.activeSlide--
				$scope.data.res = $scope.response[$scope.activeSlide]
			}else{
				return
			}
		}

	}

	ArtWorkController.$inject = ['$scope','$http']

	app.component('artWorkComponent',{
		bindings: {
            artId: "@"
        },
		templateUrl: config.templateUrl,
		controller: ArtWorkController
	})

})();


(function(){

	app.directive('loadNextImg',[function(){
		return{
			scope: {
				dataSrc:"@"
			},
			restrict: 'A',
			replace: false,
			link: function(scope, ele, attr){
				console.log(attr)
				console.log(scope.dataSrc)
				ele.attr('src', scope.dataSrc)
			}
		}
	}])

})();

(function(){



	app.directive('avabilityStatus',['$http',function($http){

		function avabilityStatusTriggerLink(scope, ele, attr){
			$http({
				method:'GET',
				// url:window.location.origin + '/getartwork/'+ $scope.$ctrl.artId,
				url:'art.json'
			}).then(artLoaded)

			function artLoaded(res){
				scope.loaded = true;
				scope.data = res.data;
			}
		}

		return{
			restrict: 'A',
			transclude: true,
			link: avabilityStatusTriggerLink,
			template: '<div ng-if="loaded" aa="{{scope.data.xhrStatus}}"><a href="#" ng-click="showArtworkDetails( $event )" ng-transclude></a></div>',
		}
	}])

})();

(function(){



	app.directive('aa',['$http',function($http){

		function avabilityStatusTriggerLink(scope, ele, attr){
			/*$http({
				method:'GET',
				// url:window.location.origin + '/getartwork/'+ $scope.$ctrl.artId,
				url:'art.json'
			}).then(artLoaded)

			function artLoaded(res){
				scope.loaded = true;
				scope.data = res.data;
			}*/
		}

		return{
			restrict: 'A',
			transclude: true,
			link: avabilityStatusTriggerLink,
			template: '<p ng-transclude></p>',
		}
	}])

})();



