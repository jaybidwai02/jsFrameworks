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