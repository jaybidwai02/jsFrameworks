let updateIsReady = (worker) =>{
	let answer = confirm('Updated');
	if(answer){
		worker.postMessage({action:'updateSW'})
	}
}

let trachInstall = (worker) =>{
	worker.addEventListener('statechange',function(){
		if(worker.state == 'installed'){
			updateIsReady(worker);
		}
	})
}

let registerSW = ()=> {
	if(!navigator.serviceWorker) return;

	navigator.serviceWorker.register('./sw.js').then(function(reg){
		console.log('ServiceWorker registered successfully', reg);

		if (!navigator.serviceWorker.controller) {
		  return;
		}

		if(reg.waiting){
			updateIsReady(reg.waiting);
			return;
		}

		if(reg.installing){
			trachInstall(reg.installing);
			return;
		}

		reg.addEventListener('updatefound', function() {
		  trachInstall(reg.installing);
		});

		


	}).catch(function(err){
		console.log(err);
	})

	navigator.serviceWorker.addEventListener('controllerchange',function(){
	  window.location.reload();
	})
}

registerSW();

