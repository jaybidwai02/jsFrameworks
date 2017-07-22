
var app = angular.module('ProgressBar',[]);


(function() {
	app.controller('progressController',['DataService', 'ProgressBarService','$timeout',function(DataService, ProgressBarService,  $timeout){
		var _this = this

		_this.data = {};
		_this.data.barNumber = 0;
		_this.data.progressPercent = [];

		_this.change = ProgressBarService.change.bind(this);

		DataService.getData().then(function(res){
			_this.data.config = res.data;

			$timeout(function(){
				for(var i = 0; i < res.data.bars.length; i++){
					_this.data.barNumber = i;
					_this.change(res.data.bars[i]);
				}
				_this.data.barNumber = 0;
			},0);

		});
	}])
})();
(function(){
	app.service('DataService',['$http','$q',function($http, $q){
		var _this = this;


		_this.getData = function(){
			var defer = $q.defer();

			$http.get('http://pb-api.herokuapp.com/bars').then(function(res){
				defer.resolve(res);
			})

			return defer.promise;
		}
	}])
})();
(function(){
	app.service('ProgressBarService',[function(){
		var _this = this;

		_this.change = function(amount){
			var _this = this;
			var bar = document.getElementById('progress-' + _this.data.barNumber);
			var barPercent = _this.data.progressPercent;
			var changeWidthBy = amount;
			barPercent[_this.data.barNumber] = barPercent[_this.data.barNumber] ? ( barPercent[_this.data.barNumber] + changeWidthBy ) : changeWidthBy;

			barPercent[_this.data.barNumber] = barPercent[_this.data.barNumber] < 0 ? 0 : barPercent[_this.data.barNumber];
			bar.style.width = ( barPercent[_this.data.barNumber] > _this.data.config.limit ) ? ( _this.data.config.limit +'%') : ( barPercent[_this.data.barNumber] + '%' );
		}

	}])
})();