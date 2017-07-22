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