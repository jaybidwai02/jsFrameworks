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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDljZGRlNDcwMzAyZWM3NzFhZjMiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL2xldC5qcyJdLCJuYW1lcyI6WyJqc1ZhciIsIm1lc3NhZ2UiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJlczZMZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsVUFBU0EsS0FBVCxHQUFnQjtBQUNmLE1BQUlDLFVBQVUsb0JBQWQ7O0FBRUEsTUFBRyxJQUFILEVBQVE7QUFDUCxPQUFJQSxVQUFVLHdCQUFkO0FBQ0EsT0FBSUMsUUFBUSxFQUFaO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTJCSCxPQUEzQjtBQUNBOztBQUVERSxVQUFRQyxHQUFSLENBQVksZUFBWixFQUE0QkgsT0FBNUI7QUFDQUUsVUFBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJGLEtBQTNCO0FBQ0E7QUFDREY7O0FBRUFHLFNBQVFDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxVQUFTQyxNQUFULEdBQWlCO0FBQ2hCLE1BQUlKLFVBQVUsd0JBQWQ7O0FBRUEsTUFBRyxJQUFILEVBQVE7QUFDUCxPQUFJQSxXQUFVLHdCQUFkLENBRE8sQ0FDaUM7QUFDeEMsT0FBSUMsUUFBUSxFQUFaLENBRk8sQ0FFUztBQUNoQkMsV0FBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJILFFBQTNCO0FBQ0E7O0FBRURFLFVBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTRCSCxPQUE1QjtBQUNBO0FBQ0E7QUFDREksVSIsImZpbGUiOiJsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOWNkZGU0NzAzMDJlYzc3MWFmMyIsImZ1bmN0aW9uIGpzVmFyKCl7XHJcblx0dmFyIG1lc3NhZ2UgPSBcIkkgYW0gZnJvbSBGdW5jdGlvblwiO1xyXG5cclxuXHRpZih0cnVlKXtcclxuXHRcdHZhciBtZXNzYWdlID0gXCJJIGFtIGZyb20gSUYgc3RhdGVtZW50XCI7XHJcblx0XHR2YXIgY291bnQgPSAxMDtcclxuXHRcdGNvbnNvbGUubG9nKFwiSW5zaWRlIGlmIC0gXCIsbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zb2xlLmxvZygnb3V0c2lkZSBpZiAtICcsbWVzc2FnZSk7XHJcblx0Y29uc29sZS5sb2coJ0NvdW50IGlzICAtICcsY291bnQpO1xyXG59XHJcbmpzVmFyKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG5cclxuZnVuY3Rpb24gZXM2TGV0KCl7XHJcblx0bGV0IG1lc3NhZ2UgPSBcIkkgYW0gZnJvbSBlczYgZnVuY3Rpb25cIjtcclxuXHJcblx0aWYodHJ1ZSl7XHJcblx0XHRsZXQgbWVzc2FnZSA9IFwiSSBhbSBmcm9tIElmIHN0YXRlbWVudFwiOyAvLyBDcmVhdGVzIGJsb2NrIGxldmVsIHNjb3BlXHJcblx0XHRsZXQgY291bnQgPSAxMDsgLy8gQ3JlYXRlcyBibG9jayBsZXZlbCBzY29wZVxyXG5cdFx0Y29uc29sZS5sb2coXCJJbnNpZGUgaWYgLSBcIixtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnNvbGUubG9nKCdvdXRzaWRlIGlmIC0gJyxtZXNzYWdlKTtcclxuXHQvL2NvbnNvbGUubG9nKCdDb3VudCBpcyAgLSAnLGNvdW50KTtcclxufVxyXG5lczZMZXQoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NyYy9sZXQuanMiXSwic291cmNlUm9vdCI6IiJ9