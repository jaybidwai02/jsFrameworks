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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FiMzE0MTkwMzgwM2QyOWY2MjM/ZmEzNSIsIndlYnBhY2s6Ly8vLi9qcy9zcmMvY2xhc3MuanMiXSwibmFtZXMiOlsiQmFzZUNsYXNzIiwibmFtZSIsImFnZSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJzaG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztLQ3RDTUEsUztBQUNMLHFCQUFZQyxJQUFaLEVBQWtCQyxHQUFsQixFQUFzQjtBQUFBOztBQUNyQixRQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxRQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQTs7OzswQkFDSztBQUNMQyxZQUFRQyxHQUFSLHNCQUErQixLQUFLSCxJQUFwQyw0QkFBK0QsS0FBS0MsR0FBcEU7QUFDQTs7Ozs7O0FBR0YsS0FBSUcsTUFBTSxJQUFJTCxTQUFKLENBQWMsS0FBZCxFQUFxQixFQUFyQixDQUFWO0FBQ0FLLEtBQUlDLElBQUo7O0FBRUEiLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YWIzMTQxOTAzODAzZDI5ZjYyMyIsImNsYXNzIEJhc2VDbGFzc3tcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBhZ2Upe1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuYWdlID0gYWdlO1xyXG5cdH1cclxuXHRzaG93KCl7XHJcblx0XHRjb25zb2xlLmxvZyhgU3R1ZGVudCBuYW1lIGlzICR7dGhpcy5uYW1lfSBhbmQgc3R1ZGVudCBhZ2UgaXMgJHt0aGlzLmFnZX1gKTtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBvYmogPSBuZXcgQmFzZUNsYXNzKFwiSmF5XCIsIDI1KTtcclxub2JqLnNob3coKTtcclxuXHJcbi8qY2xhc3MgQmFzZUNsYXNze1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGFnZSl7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5hZ2UgPSBhZ2U7XHJcblx0fVxyXG5cdHNob3coKXtcclxuXHRcdGNvbnNvbGUubG9nKGBNeSBuYW1lIGlzICR7dGhpcy5uYW1lfSBJIGFtIGlzICR7dGhpcy5hZ2V9IHllYXJzIG9sZGApO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgRGVyaXZlZENsYXNzIGV4dGVuZHMgQmFzZUNsYXNze1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGFnZSwgY2l0eSl7XHJcblx0XHRzdXBlcihuYW1lLCBhZ2UpO1xyXG5cdFx0dGhpcy5jaXR5ID0gY2l0eTtcclxuXHR9XHJcblx0c2hvdygpe1xyXG5cdFx0Y29uc29sZS5sb2coYFN0dWRlbnQgbmFtZSBpcyAke3RoaXMubmFtZX0gSSBhbSBpcyAke3RoaXMuYWdlfSB5ZWFycyBvbGQgYW5kIEkgbGl2ZSBpbiAke3RoaXMuY2l0eX1gKTtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBvYmogPSBuZXcgRGVyaXZlZENsYXNzKFwiSmF5XCIsIDI1LCBcIk5vaWRhXCIpO1xyXG5vYmouc2hvdygpOyovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc3JjL2NsYXNzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==