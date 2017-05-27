app.directive('custDir',function(){
	return {
		restrict:'A',
		scope: {
			myText:'@',
		},
		template:'<p class="pTag">Anup</p>'
		// templateUrl:'app/src/js/directives/tpl.html'
	}
});