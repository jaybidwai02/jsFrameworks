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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDljZGRlNDcwMzAyZWM3NzFhZjM/NjhkYSIsIndlYnBhY2s6Ly8vLi9qcy9zcmMvYXJyb3dGdW5jdGlvbi5qcyJdLCJuYW1lcyI6WyJpbmNyZW1lbnRDb3VudCIsImNvdW50IiwiY29uc29sZSIsImxvZyIsImluY3JlbWVudENvdW50MSIsImluY3JlbWVudENvdW50MiIsImluY3JlbWVudENvdW50MyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxVQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxRQUFRLEVBQWY7QUFDQTtBQUNEQyxTQUFRQyxHQUFSLENBQVksYUFBWixFQUEwQkgsZUFBZSxFQUFmLENBQTFCOztBQUVBLEtBQUlJLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0gsS0FBRCxFQUFXO0FBQ2hDLFNBQU9BLFFBQVEsRUFBZjtBQUNBLEVBRkQ7O0FBSUFDLFNBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCQyxnQkFBZ0IsRUFBaEIsQ0FBMUI7O0FBRUEsS0FBSUMsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQzlCLFNBQU9KLFFBQVEsRUFBZjtBQUNBLEVBRkQ7QUFHQUMsU0FBUUMsR0FBUixDQUFZLGFBQVosRUFBMEJFLGdCQUFnQixFQUFoQixDQUExQjs7QUFFQTtBQUNBLEtBQUlDLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFTTCxRQUFRLEVBQWpCO0FBQUEsRUFBdEI7O0FBRUFDLFNBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCRyxnQkFBZ0IsRUFBaEIsQ0FBMUIsRSIsImZpbGUiOiJhcnJvd0Z1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDljZGRlNDcwMzAyZWM3NzFhZjMiLCJmdW5jdGlvbiBpbmNyZW1lbnRDb3VudChjb3VudCl7XHJcblx0cmV0dXJuIGNvdW50ICsgMTA7XHJcbn1cclxuY29uc29sZS5sb2coXCJjb3VudCBpcyAtIFwiLGluY3JlbWVudENvdW50KDEwKSk7XHJcblxyXG5sZXQgaW5jcmVtZW50Q291bnQxID0gKGNvdW50KSA9PiB7XHJcblx0cmV0dXJuIGNvdW50ICsgMTA7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwiY291bnQgaXMgLSBcIixpbmNyZW1lbnRDb3VudDEoMjApKTtcclxuXHJcbmxldCBpbmNyZW1lbnRDb3VudDIgPSBjb3VudCA9PiB7XHJcblx0cmV0dXJuIGNvdW50ICsgMTA7XHJcbn1cclxuY29uc29sZS5sb2coXCJjb3VudCBpcyAtIFwiLGluY3JlbWVudENvdW50MigzMCkpO1xyXG5cclxuLy93b3JrcyB3aXRoIG9ubHkgb25lIGFyZ3VtZW50IGFuZCBvbmUgcmV0dXJuIHN0YXRlbWVudFxyXG5sZXQgaW5jcmVtZW50Q291bnQzID0gY291bnQgPT4gY291bnQgKyAxMDtcclxuXHJcbmNvbnNvbGUubG9nKFwiY291bnQgaXMgLSBcIixpbmNyZW1lbnRDb3VudDMoNDApKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NyYy9hcnJvd0Z1bmN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==