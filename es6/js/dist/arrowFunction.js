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
	
	function incrementCount(count) {
		return count + 10;
	}
	console.log("count is - ", incrementCount(10));
	
	var incrementCount1 = function incrementCount1(count) {
		return count + 10;
	};
	
	console.log("count is - ", incrementCount1(20));
	
	var incrementCount2 = function incrementCount2(count) {
		return count + 10;
	};
	console.log("count is - ", incrementCount2(30));
	
	//works with only one argument and one return statement
	var incrementCount3 = function incrementCount3(count) {
		return count + 10;
	};
	
	console.log("count is - ", incrementCount3(40));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDVhYmNlODg3ZmVkZmE5Y2ZiM2IiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL2Fycm93RnVuY3Rpb24uanMiXSwibmFtZXMiOlsiaW5jcmVtZW50Q291bnQiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZW1lbnRDb3VudDEiLCJpbmNyZW1lbnRDb3VudDIiLCJpbmNyZW1lbnRDb3VudDMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsVUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsU0FBT0EsUUFBUSxFQUFmO0FBQ0E7QUFDREMsU0FBUUMsR0FBUixDQUFZLGFBQVosRUFBMEJILGVBQWUsRUFBZixDQUExQjs7QUFFQSxLQUFJSSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBVztBQUNoQyxTQUFPQSxRQUFRLEVBQWY7QUFDQSxFQUZEOztBQUlBQyxTQUFRQyxHQUFSLENBQVksYUFBWixFQUEwQkMsZ0JBQWdCLEVBQWhCLENBQTFCOztBQUVBLEtBQUlDLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUM5QixTQUFPSixRQUFRLEVBQWY7QUFDQSxFQUZEO0FBR0FDLFNBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCRSxnQkFBZ0IsRUFBaEIsQ0FBMUI7O0FBRUE7QUFDQSxLQUFJQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBU0wsUUFBUSxFQUFqQjtBQUFBLEVBQXRCOztBQUVBQyxTQUFRQyxHQUFSLENBQVksYUFBWixFQUEwQkcsZ0JBQWdCLEVBQWhCLENBQTFCLEUiLCJmaWxlIjoiYXJyb3dGdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1YWJjZTg4N2ZlZGZhOWNmYjNiIiwiZnVuY3Rpb24gaW5jcmVtZW50Q291bnQoY291bnQpe1xyXG5cdHJldHVybiBjb3VudCArIDEwO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiY291bnQgaXMgLSBcIixpbmNyZW1lbnRDb3VudCgxMCkpO1xyXG5cclxubGV0IGluY3JlbWVudENvdW50MSA9IChjb3VudCkgPT4ge1xyXG5cdHJldHVybiBjb3VudCArIDEwO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcImNvdW50IGlzIC0gXCIsaW5jcmVtZW50Q291bnQxKDIwKSk7XHJcblxyXG5sZXQgaW5jcmVtZW50Q291bnQyID0gY291bnQgPT4ge1xyXG5cdHJldHVybiBjb3VudCArIDEwO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiY291bnQgaXMgLSBcIixpbmNyZW1lbnRDb3VudDIoMzApKTtcclxuXHJcbi8vd29ya3Mgd2l0aCBvbmx5IG9uZSBhcmd1bWVudCBhbmQgb25lIHJldHVybiBzdGF0ZW1lbnRcclxubGV0IGluY3JlbWVudENvdW50MyA9IGNvdW50ID0+IGNvdW50ICsgMTA7XHJcblxyXG5jb25zb2xlLmxvZyhcImNvdW50IGlzIC0gXCIsaW5jcmVtZW50Q291bnQzKDQwKSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zcmMvYXJyb3dGdW5jdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=