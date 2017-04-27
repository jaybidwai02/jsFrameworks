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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseClass = function () {
		function BaseClass(name, age) {
			_classCallCheck(this, BaseClass);
	
			this.name = name;
			this.age = age;
		}
	
		_createClass(BaseClass, [{
			key: "show",
			value: function show() {
				console.log("Student name is " + this.name + " and student age is " + this.age);
			}
		}]);
	
		return BaseClass;
	}();
	
	var obj = new BaseClass("Jay", 25);
	obj.show();
	
	/*class BaseClass{
		constructor(name, age){
			this.name = name;
			this.age = age;
		}
		show(){
			console.log(`My name is ${this.name} I am is ${this.age} years old`);
		}
	}

	class DerivedClass extends BaseClass{
		constructor(name, age, city){
			super(name, age);
			this.city = city;
		}
		show(){
			console.log(`Student name is ${this.name} I am is ${this.age} years old and I live in ${this.city}`);
		}
	}

	let obj = new DerivedClass("Jay", 25, "Noida");
	obj.show();*/

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDljZGRlNDcwMzAyZWM3NzFhZjM/NjhkYSoiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL2NsYXNzLmpzIl0sIm5hbWVzIjpbIkJhc2VDbGFzcyIsIm5hbWUiLCJhZ2UiLCJjb25zb2xlIiwibG9nIiwib2JqIiwic2hvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7S0N0Q01BLFM7QUFDTCxxQkFBWUMsSUFBWixFQUFrQkMsR0FBbEIsRUFBc0I7QUFBQTs7QUFDckIsUUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0E7Ozs7MEJBQ0s7QUFDTEMsWUFBUUMsR0FBUixzQkFBK0IsS0FBS0gsSUFBcEMsNEJBQStELEtBQUtDLEdBQXBFO0FBQ0E7Ozs7OztBQUdGLEtBQUlHLE1BQU0sSUFBSUwsU0FBSixDQUFjLEtBQWQsRUFBcUIsRUFBckIsQ0FBVjtBQUNBSyxLQUFJQyxJQUFKOztBQUVBIiwiZmlsZSI6ImNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDljZGRlNDcwMzAyZWM3NzFhZjMiLCJjbGFzcyBCYXNlQ2xhc3N7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgYWdlKXtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmFnZSA9IGFnZTtcclxuXHR9XHJcblx0c2hvdygpe1xyXG5cdFx0Y29uc29sZS5sb2coYFN0dWRlbnQgbmFtZSBpcyAke3RoaXMubmFtZX0gYW5kIHN0dWRlbnQgYWdlIGlzICR7dGhpcy5hZ2V9YCk7XHJcblx0fVxyXG59XHJcblxyXG5sZXQgb2JqID0gbmV3IEJhc2VDbGFzcyhcIkpheVwiLCAyNSk7XHJcbm9iai5zaG93KCk7XHJcblxyXG4vKmNsYXNzIEJhc2VDbGFzc3tcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBhZ2Upe1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuYWdlID0gYWdlO1xyXG5cdH1cclxuXHRzaG93KCl7XHJcblx0XHRjb25zb2xlLmxvZyhgTXkgbmFtZSBpcyAke3RoaXMubmFtZX0gSSBhbSBpcyAke3RoaXMuYWdlfSB5ZWFycyBvbGRgKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIERlcml2ZWRDbGFzcyBleHRlbmRzIEJhc2VDbGFzc3tcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBhZ2UsIGNpdHkpe1xyXG5cdFx0c3VwZXIobmFtZSwgYWdlKTtcclxuXHRcdHRoaXMuY2l0eSA9IGNpdHk7XHJcblx0fVxyXG5cdHNob3coKXtcclxuXHRcdGNvbnNvbGUubG9nKGBTdHVkZW50IG5hbWUgaXMgJHt0aGlzLm5hbWV9IEkgYW0gaXMgJHt0aGlzLmFnZX0geWVhcnMgb2xkIGFuZCBJIGxpdmUgaW4gJHt0aGlzLmNpdHl9YCk7XHJcblx0fVxyXG59XHJcblxyXG5sZXQgb2JqID0gbmV3IERlcml2ZWRDbGFzcyhcIkpheVwiLCAyNSwgXCJOb2lkYVwiKTtcclxub2JqLnNob3coKTsqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NyYy9jbGFzcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=