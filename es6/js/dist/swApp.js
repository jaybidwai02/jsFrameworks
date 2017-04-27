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
	
	var updateIsReady = function updateIsReady(worker) {
		var answer = confirm('Updated');
		if (answer) {
			worker.postMessage({ action: 'updateSW' });
		}
	};
	
	var trachInstall = function trachInstall(worker) {
		worker.addEventListener('statechange', function () {
			if (worker.state == 'installed') {
				updateIsReady(worker);
			}
		});
	};
	
	var registerSW = function registerSW() {
		if (!navigator.serviceWorker) return;
	
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			console.log('ServiceWorker registered successfully', reg);
	
			if (!navigator.serviceWorker.controller) {
				return;
			}
	
			if (reg.waiting) {
				updateIsReady(reg.waiting);
				return;
			}
	
			if (reg.installing) {
				trachInstall(reg.installing);
				return;
			}
	
			reg.addEventListener('updatefound', function () {
				trachInstall(reg.installing);
			});
		}).catch(function (err) {
			console.log(err);
		});
	
		navigator.serviceWorker.addEventListener('controllerchange', function () {
			window.location.reload();
		});
	};
	
	registerSW();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRmMjQxYTY5M2JhNGUyMDY5ZjYiLCJ3ZWJwYWNrOi8vLy4vU1cvc3ctYXBwLmpzIl0sIm5hbWVzIjpbInVwZGF0ZUlzUmVhZHkiLCJ3b3JrZXIiLCJhbnN3ZXIiLCJjb25maXJtIiwicG9zdE1lc3NhZ2UiLCJhY3Rpb24iLCJ0cmFjaEluc3RhbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJyZWdpc3RlclNXIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZyIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9sbGVyIiwid2FpdGluZyIsImluc3RhbGxpbmciLCJjYXRjaCIsImVyciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLEtBQUlBLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFXO0FBQzlCLE1BQUlDLFNBQVNDLFFBQVEsU0FBUixDQUFiO0FBQ0EsTUFBR0QsTUFBSCxFQUFVO0FBQ1RELFVBQU9HLFdBQVAsQ0FBbUIsRUFBQ0MsUUFBTyxVQUFSLEVBQW5CO0FBQ0E7QUFDRCxFQUxEOztBQU9BLEtBQUlDLGVBQWUsU0FBZkEsWUFBZSxDQUFDTCxNQUFELEVBQVc7QUFDN0JBLFNBQU9NLGdCQUFQLENBQXdCLGFBQXhCLEVBQXNDLFlBQVU7QUFDL0MsT0FBR04sT0FBT08sS0FBUCxJQUFnQixXQUFuQixFQUErQjtBQUM5QlIsa0JBQWNDLE1BQWQ7QUFDQTtBQUNELEdBSkQ7QUFLQSxFQU5EOztBQVFBLEtBQUlRLGFBQWEsU0FBYkEsVUFBYSxHQUFLO0FBQ3JCLE1BQUcsQ0FBQ0MsVUFBVUMsYUFBZCxFQUE2Qjs7QUFFN0JELFlBQVVDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLFNBQWpDLEVBQTRDQyxJQUE1QyxDQUFpRCxVQUFTQyxHQUFULEVBQWE7QUFDN0RDLFdBQVFDLEdBQVIsQ0FBWSx1Q0FBWixFQUFxREYsR0FBckQ7O0FBRUEsT0FBSSxDQUFDSixVQUFVQyxhQUFWLENBQXdCTSxVQUE3QixFQUF5QztBQUN2QztBQUNEOztBQUVELE9BQUdILElBQUlJLE9BQVAsRUFBZTtBQUNkbEIsa0JBQWNjLElBQUlJLE9BQWxCO0FBQ0E7QUFDQTs7QUFFRCxPQUFHSixJQUFJSyxVQUFQLEVBQWtCO0FBQ2pCYixpQkFBYVEsSUFBSUssVUFBakI7QUFDQTtBQUNBOztBQUVETCxPQUFJUCxnQkFBSixDQUFxQixhQUFyQixFQUFvQyxZQUFXO0FBQzdDRCxpQkFBYVEsSUFBSUssVUFBakI7QUFDRCxJQUZEO0FBT0EsR0F4QkQsRUF3QkdDLEtBeEJILENBd0JTLFVBQVNDLEdBQVQsRUFBYTtBQUNyQk4sV0FBUUMsR0FBUixDQUFZSyxHQUFaO0FBQ0EsR0ExQkQ7O0FBNEJBWCxZQUFVQyxhQUFWLENBQXdCSixnQkFBeEIsQ0FBeUMsa0JBQXpDLEVBQTRELFlBQVU7QUFDcEVlLFVBQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsR0FGRDtBQUdBLEVBbENEOztBQW9DQWYsYyIsImZpbGUiOiJzd0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk0ZjI0MWE2OTNiYTRlMjA2OWY2IiwibGV0IHVwZGF0ZUlzUmVhZHkgPSAod29ya2VyKSA9PntcclxuXHRsZXQgYW5zd2VyID0gY29uZmlybSgnVXBkYXRlZCcpO1xyXG5cdGlmKGFuc3dlcil7XHJcblx0XHR3b3JrZXIucG9zdE1lc3NhZ2Uoe2FjdGlvbjondXBkYXRlU1cnfSlcclxuXHR9XHJcbn1cclxuXHJcbmxldCB0cmFjaEluc3RhbGwgPSAod29ya2VyKSA9PntcclxuXHR3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGVjaGFuZ2UnLGZ1bmN0aW9uKCl7XHJcblx0XHRpZih3b3JrZXIuc3RhdGUgPT0gJ2luc3RhbGxlZCcpe1xyXG5cdFx0XHR1cGRhdGVJc1JlYWR5KHdvcmtlcik7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxubGV0IHJlZ2lzdGVyU1cgPSAoKT0+IHtcclxuXHRpZighbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIpIHJldHVybjtcclxuXHJcblx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4vc3cuanMnKS50aGVuKGZ1bmN0aW9uKHJlZyl7XHJcblx0XHRjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseScsIHJlZyk7XHJcblxyXG5cdFx0aWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XHJcblx0XHQgIHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZihyZWcud2FpdGluZyl7XHJcblx0XHRcdHVwZGF0ZUlzUmVhZHkocmVnLndhaXRpbmcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYocmVnLmluc3RhbGxpbmcpe1xyXG5cdFx0XHR0cmFjaEluc3RhbGwocmVnLmluc3RhbGxpbmcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0cmVnLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWZvdW5kJywgZnVuY3Rpb24oKSB7XHJcblx0XHQgIHRyYWNoSW5zdGFsbChyZWcuaW5zdGFsbGluZyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRcclxuXHJcblxyXG5cdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH0pXHJcblxyXG5cdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLGZ1bmN0aW9uKCl7XHJcblx0ICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fSlcclxufVxyXG5cclxucmVnaXN0ZXJTVygpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vU1cvc3ctYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==