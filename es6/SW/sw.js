let swAppCache = 'test-cache12';
//

///

self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open(swAppCache).then(function(cache){
			return cache.addAll([
				"/jsFrameworks/es6/css/sw.css",				
				"/jsFrameworks/es6/SW/index.html",				
				'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
				'http://res.cloudinary.com/demo/image/fetch/http://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_C%C3%A9sars_2014.jpg',
				'http://res.cloudinary.com/demo/image/upload/remote_media/commons/2/29/Marcelo_Facini.jpg'
			])
		}).catch(function(err){
			console.log(err);
		})
	)
});

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request)
		}).catch(function(err){
			console.log(err);
		})
	)
});

self.addEventListener('activate',function(event){
	event.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(
				cacheNames.filter(function(cache){
					return cache != swAppCache;
				}).map(function(cache){
					return caches.delete(cache);
				})
			)
		})
	)
});

self.addEventListener('message', function(event){
	console.log('in sw message event handler');
	if(event.data.action == 'updateSW'){
		self.skipWaiting();
	}
})

