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
	
	var UI = ["HTML", "CSS", "JS", "AngularJs", "ES6", "React"];
	var DEV = ["Java", "PHP", "SQL", ".Net", "Ruby on Rails"];
	
	var FullStack = UI.concat(DEV);
	console.log(FullStack);
	
	var FullStack1 = [].concat(UI, DEV);
	console.log(FullStack1);
	
	function addNumbers(a, b, c) {
		return a + b + c;
	}
	var numbers = [10, 20, 30];
	
	console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
	//console.log(addNumbers(...numbers));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzc5YWNjNzE1NzgwNjVlODQxNDkiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL3NwcmVhZC5qcyJdLCJuYW1lcyI6WyJVSSIsIkRFViIsIkZ1bGxTdGFjayIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsU3RhY2sxIiwiYWRkTnVtYmVycyIsImEiLCJiIiwiYyIsIm51bWJlcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsS0FBSUEsS0FBSyxDQUFDLE1BQUQsRUFBUSxLQUFSLEVBQWMsSUFBZCxFQUFtQixXQUFuQixFQUErQixLQUEvQixFQUFxQyxPQUFyQyxDQUFUO0FBQ0EsS0FBSUMsTUFBTSxDQUFDLE1BQUQsRUFBUSxLQUFSLEVBQWMsS0FBZCxFQUFvQixNQUFwQixFQUEyQixlQUEzQixDQUFWOztBQUVBLEtBQUlDLFlBQVlGLEdBQUdHLE1BQUgsQ0FBVUYsR0FBVixDQUFoQjtBQUNBRyxTQUFRQyxHQUFSLENBQVlILFNBQVo7O0FBRUEsS0FBSUksdUJBQWlCTixFQUFqQixFQUF3QkMsR0FBeEIsQ0FBSjtBQUNBRyxTQUFRQyxHQUFSLENBQVlDLFVBQVo7O0FBR0EsVUFBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE0QjtBQUMzQixTQUFPRixJQUFJQyxDQUFKLEdBQVFDLENBQWY7QUFDQTtBQUNELEtBQUlDLFVBQVUsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEVBQVAsQ0FBZDs7QUFFQVAsU0FBUUMsR0FBUixDQUFZRSxXQUFXSSxRQUFRLENBQVIsQ0FBWCxFQUF1QkEsUUFBUSxDQUFSLENBQXZCLEVBQW1DQSxRQUFRLENBQVIsQ0FBbkMsQ0FBWjtBQUNBLHVDIiwiZmlsZSI6InNwcmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM3OWFjYzcxNTc4MDY1ZTg0MTQ5IiwibGV0IFVJID0gW1wiSFRNTFwiLFwiQ1NTXCIsXCJKU1wiLFwiQW5ndWxhckpzXCIsXCJFUzZcIixcIlJlYWN0XCJdO1xyXG5sZXQgREVWID0gW1wiSmF2YVwiLFwiUEhQXCIsXCJTUUxcIixcIi5OZXRcIixcIlJ1Ynkgb24gUmFpbHNcIl07XHJcblxyXG5sZXQgRnVsbFN0YWNrID0gVUkuY29uY2F0KERFVik7XHJcbmNvbnNvbGUubG9nKEZ1bGxTdGFjayk7XHJcblxyXG5sZXQgRnVsbFN0YWNrMSA9IFsuLi5VSSwgLi4uREVWXTtcclxuY29uc29sZS5sb2coRnVsbFN0YWNrMSk7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTnVtYmVycyhhLCBiLCBjKXtcclxuXHRyZXR1cm4gYSArIGIgKyBjO1xyXG59XHJcbmxldCBudW1iZXJzID0gWzEwLDIwLDMwXTtcclxuXHJcbmNvbnNvbGUubG9nKGFkZE51bWJlcnMobnVtYmVyc1swXSwgbnVtYmVyc1sxXSwgbnVtYmVyc1syXSkpXHJcbi8vY29uc29sZS5sb2coYWRkTnVtYmVycyguLi5udW1iZXJzKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NyYy9zcHJlYWQuanMiXSwic291cmNlUm9vdCI6IiJ9