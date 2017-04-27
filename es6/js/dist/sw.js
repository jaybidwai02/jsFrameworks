/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var swAppCache = 'test-cache12';
	//
	
	///
	
	self.addEventListener('install', function (event) {
		event.waitUntil(caches.open(swAppCache).then(function (cache) {
			return cache.addAll(["/jsFrameworks/es6/css/sw.css", "/jsFrameworks/es6/SW/index.html", 'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff', 'http://res.cloudinary.com/demo/image/fetch/http://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_C%C3%A9sars_2014.jpg', 'http://res.cloudinary.com/demo/image/upload/remote_media/commons/2/29/Marcelo_Facini.jpg']);
		}).catch(function (err) {
			console.log(err);
		}));
	});
	
	self.addEventListener('fetch', function (event) {
		event.respondWith(caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		}).catch(function (err) {
			console.log(err);
		}));
	});
	
	self.addEventListener('activate', function (event) {
		event.waitUntil(caches.keys().then(function (cacheNames) {
			return Promise.all(cacheNames.filter(function (cache) {
				return cache != swAppCache;
			}).map(function (cache) {
				return caches.delete(cache);
			}));
		}));
	});
	
	self.addEventListener('message', function (event) {
		console.log('in sw message event handler');
		if (event.data.action == 'updateSW') {
			self.skipWaiting();
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWFlZTlkMTE4YjU2Y2ZiMWFlY2MiLCJ3ZWJwYWNrOi8vLy4vU1cvc3cuanMiXSwibmFtZXMiOlsic3dBcHBDYWNoZSIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3YWl0VW50aWwiLCJjYWNoZXMiLCJvcGVuIiwidGhlbiIsImNhY2hlIiwiYWRkQWxsIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uZFdpdGgiLCJtYXRjaCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIiwia2V5cyIsImNhY2hlTmFtZXMiLCJQcm9taXNlIiwiYWxsIiwiZmlsdGVyIiwibWFwIiwiZGVsZXRlIiwiZGF0YSIsImFjdGlvbiIsInNraXBXYWl0aW5nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLEtBQUlBLGFBQWEsY0FBakI7QUFDQTs7QUFFQTs7QUFFQUMsTUFBS0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBZ0MsVUFBU0MsS0FBVCxFQUFlO0FBQzlDQSxRQUFNQyxTQUFOLENBQ0NDLE9BQU9DLElBQVAsQ0FBWU4sVUFBWixFQUF3Qk8sSUFBeEIsQ0FBNkIsVUFBU0MsS0FBVCxFQUFlO0FBQzNDLFVBQU9BLE1BQU1DLE1BQU4sQ0FBYSxDQUNuQiw4QkFEbUIsRUFFbkIsaUNBRm1CLEVBR25CLG9FQUhtQixFQUluQix1SUFKbUIsRUFLbkIsMEZBTG1CLENBQWIsQ0FBUDtBQU9BLEdBUkQsRUFRR0MsS0FSSCxDQVFTLFVBQVNDLEdBQVQsRUFBYTtBQUNyQkMsV0FBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsR0FWRCxDQUREO0FBYUEsRUFkRDs7QUFnQkFWLE1BQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQThCLFVBQVNDLEtBQVQsRUFBZTtBQUM1Q0EsUUFBTVcsV0FBTixDQUNDVCxPQUFPVSxLQUFQLENBQWFaLE1BQU1hLE9BQW5CLEVBQTRCVCxJQUE1QixDQUFpQyxVQUFTVSxRQUFULEVBQWtCO0FBQ2xELFVBQU9BLFlBQVlDLE1BQU1mLE1BQU1hLE9BQVosQ0FBbkI7QUFDQSxHQUZELEVBRUdOLEtBRkgsQ0FFUyxVQUFTQyxHQUFULEVBQWE7QUFDckJDLFdBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLEdBSkQsQ0FERDtBQU9BLEVBUkQ7O0FBVUFWLE1BQUtDLGdCQUFMLENBQXNCLFVBQXRCLEVBQWlDLFVBQVNDLEtBQVQsRUFBZTtBQUMvQ0EsUUFBTUMsU0FBTixDQUNDQyxPQUFPYyxJQUFQLEdBQWNaLElBQWQsQ0FBbUIsVUFBU2EsVUFBVCxFQUFvQjtBQUN0QyxVQUFPQyxRQUFRQyxHQUFSLENBQ05GLFdBQVdHLE1BQVgsQ0FBa0IsVUFBU2YsS0FBVCxFQUFlO0FBQ2hDLFdBQU9BLFNBQVNSLFVBQWhCO0FBQ0EsSUFGRCxFQUVHd0IsR0FGSCxDQUVPLFVBQVNoQixLQUFULEVBQWU7QUFDckIsV0FBT0gsT0FBT29CLE1BQVAsQ0FBY2pCLEtBQWQsQ0FBUDtBQUNBLElBSkQsQ0FETSxDQUFQO0FBT0EsR0FSRCxDQUREO0FBV0EsRUFaRDs7QUFjQVAsTUFBS0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBU0MsS0FBVCxFQUFlO0FBQy9DUyxVQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQSxNQUFHVixNQUFNdUIsSUFBTixDQUFXQyxNQUFYLElBQXFCLFVBQXhCLEVBQW1DO0FBQ2xDMUIsUUFBSzJCLFdBQUw7QUFDQTtBQUNELEVBTEQsRSIsImZpbGUiOiJzdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFhZWU5ZDExOGI1NmNmYjFhZWNjIiwibGV0IHN3QXBwQ2FjaGUgPSAndGVzdC1jYWNoZTEyJztcclxuLy9cclxuXHJcbi8vL1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJyxmdW5jdGlvbihldmVudCl7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0Y2FjaGVzLm9wZW4oc3dBcHBDYWNoZSkudGhlbihmdW5jdGlvbihjYWNoZSl7XHJcblx0XHRcdHJldHVybiBjYWNoZS5hZGRBbGwoW1xyXG5cdFx0XHRcdFwiL2pzRnJhbWV3b3Jrcy9lczYvY3NzL3N3LmNzc1wiLFx0XHRcdFx0XHJcblx0XHRcdFx0XCIvanNGcmFtZXdvcmtzL2VzNi9TVy9pbmRleC5odG1sXCIsXHRcdFx0XHRcclxuXHRcdFx0XHQnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTUvMlVYN1dMVGZXM1c4VGNsVFV2bEZ5US53b2ZmJyxcclxuXHRcdFx0XHQnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL2ZldGNoL2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzBjL1NjYXJsZXR0X0pvaGFuc3Nvbl9DJUMzJUE5c2Fyc18yMDE0LmpwZycsXHJcblx0XHRcdFx0J2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvcmVtb3RlX21lZGlhL2NvbW1vbnMvMi8yOS9NYXJjZWxvX0ZhY2luaS5qcGcnXHJcblx0XHRcdF0pXHJcblx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0fSlcclxuXHQpXHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsZnVuY3Rpb24oZXZlbnQpe1xyXG5cdGV2ZW50LnJlc3BvbmRXaXRoKFxyXG5cdFx0Y2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZXZlbnQucmVxdWVzdClcclxuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHR9KVxyXG5cdClcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJyxmdW5jdGlvbihldmVudCl7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0Y2FjaGVzLmtleXMoKS50aGVuKGZ1bmN0aW9uKGNhY2hlTmFtZXMpe1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXHJcblx0XHRcdFx0Y2FjaGVOYW1lcy5maWx0ZXIoZnVuY3Rpb24oY2FjaGUpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlICE9IHN3QXBwQ2FjaGU7XHJcblx0XHRcdFx0fSkubWFwKGZ1bmN0aW9uKGNhY2hlKXtcclxuXHRcdFx0XHRcdHJldHVybiBjYWNoZXMuZGVsZXRlKGNhY2hlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHR9KVxyXG5cdClcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcblx0Y29uc29sZS5sb2coJ2luIHN3IG1lc3NhZ2UgZXZlbnQgaGFuZGxlcicpO1xyXG5cdGlmKGV2ZW50LmRhdGEuYWN0aW9uID09ICd1cGRhdGVTVycpe1xyXG5cdFx0c2VsZi5za2lwV2FpdGluZygpO1xyXG5cdH1cclxufSlcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1NXL3N3LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==