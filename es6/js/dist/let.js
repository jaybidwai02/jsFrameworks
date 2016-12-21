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

	"use strict";
	
	function jsVar() {
		var message = "I am from Function";
	
		if (true) {
			var message = "I am from IF statement";
			var count = 10;
			console.log("Inside if - ", message);
		}
	
		console.log('outside if - ', message);
		console.log('Count is  - ', count);
	}
	jsVar();
	
	console.log("---------------------");
	
	function es6Let() {
		var message = "I am from es6 function";
	
		if (true) {
			var _message = "I am from If statement"; // Creates block level scope
			var count = 10; // Creates block level scope
			console.log("Inside if - ", _message);
		}
	
		console.log('outside if - ', message);
		//console.log('Count is  - ',count);
	}
	es6Let();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzdlNjZlOGM0MDMwM2NjNDhhZjY/ZTQwNiIsIndlYnBhY2s6Ly8vLi9qcy9zcmMvbGV0LmpzIl0sIm5hbWVzIjpbImpzVmFyIiwibWVzc2FnZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsImVzNkxldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxVQUFTQSxLQUFULEdBQWdCO0FBQ2YsTUFBSUMsVUFBVSxvQkFBZDs7QUFFQSxNQUFHLElBQUgsRUFBUTtBQUNQLE9BQUlBLFVBQVUsd0JBQWQ7QUFDQSxPQUFJQyxRQUFRLEVBQVo7QUFDQUMsV0FBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJILE9BQTNCO0FBQ0E7O0FBRURFLFVBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTRCSCxPQUE1QjtBQUNBRSxVQUFRQyxHQUFSLENBQVksY0FBWixFQUEyQkYsS0FBM0I7QUFDQTtBQUNERjs7QUFFQUcsU0FBUUMsR0FBUixDQUFZLHVCQUFaOztBQUVBLFVBQVNDLE1BQVQsR0FBaUI7QUFDaEIsTUFBSUosVUFBVSx3QkFBZDs7QUFFQSxNQUFHLElBQUgsRUFBUTtBQUNQLE9BQUlBLFdBQVUsd0JBQWQsQ0FETyxDQUNpQztBQUN4QyxPQUFJQyxRQUFRLEVBQVosQ0FGTyxDQUVTO0FBQ2hCQyxXQUFRQyxHQUFSLENBQVksY0FBWixFQUEyQkgsUUFBM0I7QUFDQTs7QUFFREUsVUFBUUMsR0FBUixDQUFZLGVBQVosRUFBNEJILE9BQTVCO0FBQ0E7QUFDQTtBQUNESSxVIiwiZmlsZSI6ImxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc3ZTY2ZThjNDAzMDNjYzQ4YWY2IiwiZnVuY3Rpb24ganNWYXIoKXtcclxuXHR2YXIgbWVzc2FnZSA9IFwiSSBhbSBmcm9tIEZ1bmN0aW9uXCI7XHJcblxyXG5cdGlmKHRydWUpe1xyXG5cdFx0dmFyIG1lc3NhZ2UgPSBcIkkgYW0gZnJvbSBJRiBzdGF0ZW1lbnRcIjtcclxuXHRcdHZhciBjb3VudCA9IDEwO1xyXG5cdFx0Y29uc29sZS5sb2coXCJJbnNpZGUgaWYgLSBcIixtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnNvbGUubG9nKCdvdXRzaWRlIGlmIC0gJyxtZXNzYWdlKTtcclxuXHRjb25zb2xlLmxvZygnQ291bnQgaXMgIC0gJyxjb3VudCk7XHJcbn1cclxuanNWYXIoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcblxyXG5mdW5jdGlvbiBlczZMZXQoKXtcclxuXHRsZXQgbWVzc2FnZSA9IFwiSSBhbSBmcm9tIGVzNiBmdW5jdGlvblwiO1xyXG5cclxuXHRpZih0cnVlKXtcclxuXHRcdGxldCBtZXNzYWdlID0gXCJJIGFtIGZyb20gSWYgc3RhdGVtZW50XCI7IC8vIENyZWF0ZXMgYmxvY2sgbGV2ZWwgc2NvcGVcclxuXHRcdGxldCBjb3VudCA9IDEwOyAvLyBDcmVhdGVzIGJsb2NrIGxldmVsIHNjb3BlXHJcblx0XHRjb25zb2xlLmxvZyhcIkluc2lkZSBpZiAtIFwiLG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc29sZS5sb2coJ291dHNpZGUgaWYgLSAnLG1lc3NhZ2UpO1xyXG5cdC8vY29uc29sZS5sb2coJ0NvdW50IGlzICAtICcsY291bnQpO1xyXG59XHJcbmVzNkxldCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NyYy9sZXQuanMiXSwic291cmNlUm9vdCI6IiJ9