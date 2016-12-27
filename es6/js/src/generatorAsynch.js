import $ from 'jquery';


genWraper (function* generator(){
	var UITeam = yield $.getJSON('./data/ui.json');
	console.log(UITeam); 

	var DevTeam = yield $.getJSON('./data/dev.json');
	console.log(DevTeam); 

	var QATeam = yield $.getJSON('./data/qa.json');
	console.log(QATeam); 
});

function genWraper(generator){
	var iterator = generator();

	function handle(yielded){
		if(!yielded.done){
			yielded.value.then(function(data){
				return handle(iterator.next(data));
			})
		}
	}

	return handle(iterator.next());
}