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
	
	function Add(val) {
		this.val = val;
		this.add = function (arr) {
			var self = this;
			return arr.map(function (x) {
				return self.val + x;
			});
		};
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDVhYmNlODg3ZmVkZmE5Y2ZiM2I/MDkyZSoqIiwid2VicGFjazovLy8uL2pzL3NyYy9sZXQuanMiXSwibmFtZXMiOlsianNWYXIiLCJtZXNzYWdlIiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwiZXM2TGV0IiwiQWRkIiwidmFsIiwiYWRkIiwiYXJyIiwic2VsZiIsIm1hcCIsIngiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsVUFBU0EsS0FBVCxHQUFnQjtBQUNmLE1BQUlDLFVBQVUsb0JBQWQ7O0FBRUEsTUFBRyxJQUFILEVBQVE7QUFDUCxPQUFJQSxVQUFVLHdCQUFkO0FBQ0EsT0FBSUMsUUFBUSxFQUFaO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTJCSCxPQUEzQjtBQUNBOztBQUVERSxVQUFRQyxHQUFSLENBQVksZUFBWixFQUE0QkgsT0FBNUI7QUFDQUUsVUFBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJGLEtBQTNCO0FBQ0E7QUFDREY7O0FBRUFHLFNBQVFDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxVQUFTQyxNQUFULEdBQWlCO0FBQ2hCLE1BQUlKLFVBQVUsd0JBQWQ7O0FBRUEsTUFBRyxJQUFILEVBQVE7QUFDUCxPQUFJQSxXQUFVLHdCQUFkLENBRE8sQ0FDaUM7QUFDeEMsT0FBSUMsUUFBUSxFQUFaLENBRk8sQ0FFUztBQUNoQkMsV0FBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJILFFBQTNCO0FBQ0E7O0FBRURFLFVBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTRCSCxPQUE1QjtBQUNBO0FBQ0E7QUFDREk7O0FBR0EsVUFBU0MsR0FBVCxDQUFhQyxHQUFiLEVBQWtCO0FBQ2hCLE9BQUtBLEdBQUwsR0FBVUEsR0FBVjtBQUNELE9BQUtDLEdBQUwsR0FBUyxVQUFTQyxHQUFULEVBQWE7QUFDckIsT0FBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBT0QsSUFBSUUsR0FBSixDQUFRLFVBQVVDLENBQVYsRUFBYTtBQUMzQixXQUFPRixLQUFLSCxHQUFMLEdBQVdLLENBQWxCO0FBQ0EsSUFGTSxDQUFQO0FBR0EsR0FMRDtBQU1BLEUiLCJmaWxlIjoibGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDVhYmNlODg3ZmVkZmE5Y2ZiM2IiLCJmdW5jdGlvbiBqc1Zhcigpe1xyXG5cdHZhciBtZXNzYWdlID0gXCJJIGFtIGZyb20gRnVuY3Rpb25cIjtcclxuXHJcblx0aWYodHJ1ZSl7XHJcblx0XHR2YXIgbWVzc2FnZSA9IFwiSSBhbSBmcm9tIElGIHN0YXRlbWVudFwiO1xyXG5cdFx0dmFyIGNvdW50ID0gMTA7XHJcblx0XHRjb25zb2xlLmxvZyhcIkluc2lkZSBpZiAtIFwiLG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc29sZS5sb2coJ291dHNpZGUgaWYgLSAnLG1lc3NhZ2UpO1xyXG5cdGNvbnNvbGUubG9nKCdDb3VudCBpcyAgLSAnLGNvdW50KTtcclxufVxyXG5qc1ZhcigpO1xyXG5cclxuY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuXHJcbmZ1bmN0aW9uIGVzNkxldCgpe1xyXG5cdGxldCBtZXNzYWdlID0gXCJJIGFtIGZyb20gZXM2IGZ1bmN0aW9uXCI7XHJcblxyXG5cdGlmKHRydWUpe1xyXG5cdFx0bGV0IG1lc3NhZ2UgPSBcIkkgYW0gZnJvbSBJZiBzdGF0ZW1lbnRcIjsgLy8gQ3JlYXRlcyBibG9jayBsZXZlbCBzY29wZVxyXG5cdFx0bGV0IGNvdW50ID0gMTA7IC8vIENyZWF0ZXMgYmxvY2sgbGV2ZWwgc2NvcGVcclxuXHRcdGNvbnNvbGUubG9nKFwiSW5zaWRlIGlmIC0gXCIsbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zb2xlLmxvZygnb3V0c2lkZSBpZiAtICcsbWVzc2FnZSk7XHJcblx0Ly9jb25zb2xlLmxvZygnQ291bnQgaXMgIC0gJyxjb3VudCk7XHJcbn1cclxuZXM2TGV0KCk7XHJcblxyXG5cclxuZnVuY3Rpb24gQWRkKHZhbCkge1xyXG5cdCB0aGlzLnZhbD0gdmFsOyBcclxuXHR0aGlzLmFkZD1mdW5jdGlvbihhcnIpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzXHJcblx0XHRyZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoeCkgeyBcclxuXHRcdFx0cmV0dXJuIHNlbGYudmFsICsgeCA7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zcmMvbGV0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==