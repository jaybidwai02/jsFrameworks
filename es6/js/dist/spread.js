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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
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
	
	var obj1 = {
		name: 'jay'
	};
	
	var obj2 = _extends({}, obj1);
	console.log(obj2);
	
	console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
	//console.log(addNumbers(...numbers));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTFiZWRiN2NiYjgxY2M2NTc1YjI/ZGZmMioqKioqKioqIiwid2VicGFjazovLy8uL2pzL3NyYy9zcHJlYWQuanMiXSwibmFtZXMiOlsiVUkiLCJERVYiLCJGdWxsU3RhY2siLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiRnVsbFN0YWNrMSIsImFkZE51bWJlcnMiLCJhIiwiYiIsImMiLCJudW1iZXJzIiwib2JqMSIsIm5hbWUiLCJvYmoyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSUEsS0FBSyxDQUFDLE1BQUQsRUFBUSxLQUFSLEVBQWMsSUFBZCxFQUFtQixXQUFuQixFQUErQixLQUEvQixFQUFxQyxPQUFyQyxDQUFUO0FBQ0EsS0FBSUMsTUFBTSxDQUFDLE1BQUQsRUFBUSxLQUFSLEVBQWMsS0FBZCxFQUFvQixNQUFwQixFQUEyQixlQUEzQixDQUFWOztBQUVBLEtBQUlDLFlBQVlGLEdBQUdHLE1BQUgsQ0FBVUYsR0FBVixDQUFoQjtBQUNBRyxTQUFRQyxHQUFSLENBQVlILFNBQVo7O0FBRUEsS0FBSUksdUJBQWlCTixFQUFqQixFQUF3QkMsR0FBeEIsQ0FBSjtBQUNBRyxTQUFRQyxHQUFSLENBQVlDLFVBQVo7O0FBR0EsVUFBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE0QjtBQUMzQixTQUFPRixJQUFJQyxDQUFKLEdBQVFDLENBQWY7QUFDQTtBQUNELEtBQUlDLFVBQVUsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEVBQVAsQ0FBZDs7QUFFQSxLQUFJQyxPQUFPO0FBQ1ZDLFFBQUs7QUFESyxFQUFYOztBQUlBLEtBQUlDLG9CQUFXRixJQUFYLENBQUo7QUFDQVIsU0FBUUMsR0FBUixDQUFZUyxJQUFaOztBQUVBVixTQUFRQyxHQUFSLENBQVlFLFdBQVdJLFFBQVEsQ0FBUixDQUFYLEVBQXVCQSxRQUFRLENBQVIsQ0FBdkIsRUFBbUNBLFFBQVEsQ0FBUixDQUFuQyxDQUFaO0FBQ0EsdUMiLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTFiZWRiN2NiYjgxY2M2NTc1YjIiLCJsZXQgVUkgPSBbXCJIVE1MXCIsXCJDU1NcIixcIkpTXCIsXCJBbmd1bGFySnNcIixcIkVTNlwiLFwiUmVhY3RcIl07XHJcbmxldCBERVYgPSBbXCJKYXZhXCIsXCJQSFBcIixcIlNRTFwiLFwiLk5ldFwiLFwiUnVieSBvbiBSYWlsc1wiXTtcclxuXHJcbmxldCBGdWxsU3RhY2sgPSBVSS5jb25jYXQoREVWKTtcclxuY29uc29sZS5sb2coRnVsbFN0YWNrKTtcclxuXHJcbmxldCBGdWxsU3RhY2sxID0gWy4uLlVJLCAuLi5ERVZdO1xyXG5jb25zb2xlLmxvZyhGdWxsU3RhY2sxKTtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGROdW1iZXJzKGEsIGIsIGMpe1xyXG5cdHJldHVybiBhICsgYiArIGM7XHJcbn1cclxubGV0IG51bWJlcnMgPSBbMTAsMjAsMzBdO1xyXG5cclxubGV0IG9iajEgPSB7XHJcblx0bmFtZTonamF5J1xyXG59XHJcblxyXG5sZXQgb2JqMiA9IHsuLi5vYmoxfTtcclxuY29uc29sZS5sb2cob2JqMik7XHJcblxyXG5jb25zb2xlLmxvZyhhZGROdW1iZXJzKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pKVxyXG4vL2NvbnNvbGUubG9nKGFkZE51bWJlcnMoLi4ubnVtYmVycykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zcmMvc3ByZWFkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==