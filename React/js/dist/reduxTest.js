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
/******/ 	__webpack_require__.p = "/js/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(486);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(204);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(218);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(220);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(221);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(222);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(219);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(205);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(215);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	
	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(206),
	    getPrototype = __webpack_require__(212),
	    isObjectLike = __webpack_require__(214);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(207),
	    getRawTag = __webpack_require__(210),
	    objectToString = __webpack_require__(211);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(208);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(209);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },

/***/ 209:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(207);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },

/***/ 211:
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(213);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },

/***/ 213:
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },

/***/ 214:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(217);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(216)(module)))

/***/ },

/***/ 216:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 217:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(204);
	
	var _isPlainObject = __webpack_require__(205);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(219);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 219:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 220:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(222);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },

/***/ 222:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _redux = __webpack_require__(203);
	
	var _reduxLogger = __webpack_require__(487);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxThunk = __webpack_require__(488);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*const reducer = (state, action)=>{
		switch(action.type){
			case 'INC': {
				state = state + 1;
				break;
			}
			case 'DEC': {
				state = state - 1;
			}
		}
	 return state;
	}*/
	
	var userReducer = function userReducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];
	
		switch (action.type) {
			case 'FETCHING':
				{
					console.log('fetching....................');
					break;
				}
	
			case 'FETCHED':
				{
					state = _extends({}, state, action.payload);
					break;
				}
	
			case 'CHANGE_NAME':
				{
					state = _extends({}, state, { name: action.payload });
					break;
				}
	
			case 'CHANGE_AGE':
				{
					state = _extends({}, state, { age: action.payload });
					break;
				}
		}
	
		return state;
	};
	
	var tweetReducer = function tweetReducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var action = arguments[1];
	
		return state;
	};
	
	/*const logger = (store) => (next) => (action)=>{
		console.log('fired');
	
	
		next(action);
	}
	*/
	var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default);
	
	var reducer = (0, _redux.combineReducers)({
		user: userReducer,
		tweet: tweetReducer
	});
	
	var store = (0, _redux.createStore)(reducer, middleware);
	
	store.subscribe(function () {
		console.log('store change', store.getState());
	});
	
	store.dispatch({ type: 'CHANGE_NAME', payload: 'JAY' });
	store.dispatch({ type: 'CHANGE_AGE', payload: 25 });
	
	store.dispatch(function (dispatch) {
		dispatch({ type: 'FETCHING' });
	
		setTimeout(function () {
			dispatch({ type: 'FETCHED', payload: { name: 'Anup', age: 30 } });
		}, 1000);
	});

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 488:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjcxMTZiZjhkNjAyODc4YWIzMTI/YjA1NioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanM/ODJlNCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvaW5kZXguanM/NWYxOSoqIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzP2ZlNGMqKiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzPzQzNDIqKiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcz8wZDA3KioiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcz9kZmU1KioiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Jvb3QuanM/YzBiZCoqIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzP2U4NDkqKiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzPzliOGUqKiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanM/ZTkwMSoqIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanM/MTA3NSoqIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzPzEyZDUqKiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanM/MzZiZSoqIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzPzYzMWYqKiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzP2MzYzIqKiIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcz81MDVkKioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvY29tYmluZVJlZHVjZXJzLmpzPzEwODYqKiIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi91dGlscy93YXJuaW5nLmpzPzA3YzMqKiIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9iaW5kQWN0aW9uQ3JlYXRvcnMuanM/OTFkOSoqIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2FwcGx5TWlkZGxld2FyZS5qcz9lZTE1KioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvY29tcG9zZS5qcz9hOGM3KioiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL3Rlc3QvcmVkdXgvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1sb2dnZXIvZGlzdC9yZWR1eC1sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC10aHVuay9saWIvaW5kZXguanMiXSwibmFtZXMiOlsidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsIm5hbWUiLCJhZ2UiLCJ0d2VldFJlZHVjZXIiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJsb2dnZXIiLCJyZWR1Y2VyIiwidXNlciIsInR3ZWV0Iiwic3RvcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7O0FDN0NBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxjQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWMseUJBQXlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsT0FBTztBQUN4QjtBQUNBLG9CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLHlCQUF5Qjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFOzs7Ozs7O0FDcFFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDUkE7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxTQUFTO0FBQ3BCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixVQUFTOzs7QUFHVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSw2Qjs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSxHOzs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHNDQUFzQzs7QUFFakY7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW1DLGFBQWE7QUFDaEQ7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsd0JBQXdCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDOUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRTs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBLGNBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ2xEQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFlBQVk7QUFDdkIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSx5RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQSx5QkFBd0I7QUFDeEI7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN6REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFlBQVk7QUFDdkIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFrRSxhQUFhO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRTs7Ozs7Ozs7Ozs7QUNuQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFNQSxjQUFjLFNBQWRBLFdBQWMsR0FBcUI7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQWQsRUFBYztBQUFBLE1BQVZDLE1BQVU7O0FBQ3hDLFVBQU9BLE9BQU9DLElBQWQ7QUFDQyxRQUFLLFVBQUw7QUFBZ0I7QUFDZkMsYUFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0E7QUFDQTs7QUFFRCxRQUFLLFNBQUw7QUFBZTtBQUNkSiwwQkFBWUEsS0FBWixFQUFzQkMsT0FBT0ksT0FBN0I7QUFDQTtBQUNBOztBQUVELFFBQUssYUFBTDtBQUFtQjtBQUNsQkwsMEJBQVlBLEtBQVosSUFBbUJNLE1BQUtMLE9BQU9JLE9BQS9CO0FBQ0E7QUFDQTs7QUFFRCxRQUFLLFlBQUw7QUFBbUI7QUFDbEJMLDBCQUFZQSxLQUFaLElBQW1CTyxLQUFJTixPQUFPSSxPQUE5QjtBQUNBO0FBQ0E7QUFuQkY7O0FBc0JBLFNBQU9MLEtBQVA7QUFDQSxFQXhCRDs7QUEwQkEsS0FBTVEsZUFBZSxTQUFmQSxZQUFlLEdBQXFCO0FBQUEsTUFBcEJSLEtBQW9CLHVFQUFkLEVBQWM7QUFBQSxNQUFWQyxNQUFVOztBQUN6QyxTQUFPRCxLQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7OztBQU9BLEtBQU1TLGFBQWEsNEJBQWdCQyxvQkFBaEIsRUFBdUJDLHFCQUF2QixDQUFuQjs7QUFFQSxLQUFNQyxVQUFVLDRCQUFnQjtBQUMvQkMsUUFBTWQsV0FEeUI7QUFFL0JlLFNBQU9OO0FBRndCLEVBQWhCLENBQWhCOztBQUtBLEtBQU1PLFFBQVEsd0JBQVlILE9BQVosRUFBcUJILFVBQXJCLENBQWQ7O0FBR0FNLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBSTtBQUNuQmIsVUFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJXLE1BQU1FLFFBQU4sRUFBNUI7QUFDQSxFQUZEOztBQUlBRixPQUFNRyxRQUFOLENBQWUsRUFBQ2hCLE1BQUssYUFBTixFQUFvQkcsU0FBUSxLQUE1QixFQUFmO0FBQ0FVLE9BQU1HLFFBQU4sQ0FBZSxFQUFDaEIsTUFBSyxZQUFOLEVBQW1CRyxTQUFRLEVBQTNCLEVBQWY7O0FBRUFVLE9BQU1HLFFBQU4sQ0FBZSxVQUFDQSxRQUFELEVBQVk7QUFDMUJBLFdBQVMsRUFBQ2hCLE1BQUssVUFBTixFQUFUOztBQUVBaUIsYUFBVyxZQUFJO0FBQ2RELFlBQVMsRUFBQ2hCLE1BQUssU0FBTixFQUFpQkcsU0FBUSxFQUFDQyxNQUFLLE1BQU4sRUFBYUMsS0FBSSxFQUFqQixFQUF6QixFQUFUO0FBQ0EsR0FGRCxFQUVHLElBRkg7QUFHQSxFQU5ELEU7Ozs7Ozs7QUN4RUEsOERBQWUsOEdBQTZKLEVBQUUsa0JBQWtCLGFBQWEsZ0JBQWdCLGtEQUFrRCxhQUFhLG1EQUFtRCxFQUFFLGdCQUFnQixtQ0FBbUMsc0JBQXNCLGtEQUFrRCxzQkFBc0IsRUFBRSxrQkFBa0IsNERBQTRELHNCQUFzQixvQ0FBb0Msc0JBQXNCLEVBQUUsZ0JBQWdCLDREQUE0RCxzQkFBc0IsRUFBRSxnQkFBZ0IsNERBQTRELHNCQUFzQixFQUFFLGtCQUFrQiw4REFBOEQsc0JBQXNCLHFDQUFxQyxzQkFBc0IsRUFBRSxrQkFBa0Isa0NBQWtDLHFEQUFxRCxjQUFjLDZDQUE2Qyx1TkFBdU4sMEJBQTBCLGdCQUFnQixpQkFBaUIsMEJBQTBCLE1BQU0sdUNBQXVDLHdEQUF3RCx3Q0FBd0MsZ0JBQWdCLDJCQUEyQixxQkFBcUIsVUFBVSxrRUFBa0UsZ1BBQWdQLHVCQUF1Qiw0QkFBNEIsb0NBQW9DLCtDQUErQyxpRUFBaUUsaUJBQWlCLGdDQUFnQyxLQUFLLFdBQVcsWUFBWSxvQkFBb0IsTUFBTSxTQUFTLFFBQVEsV0FBVyx3RUFBd0UsS0FBSyxXQUFXLG9DQUFvQyxLQUFLLHNDQUFzQyx3QkFBd0IsbUJBQW1CLGdFQUFnRSx3QkFBd0IseUJBQXlCLEVBQUUsb0JBQW9CLGdFQUFnRSxvQkFBb0IsaUNBQWlDLGFBQWEsc0JBQXNCLGtCQUFrQiwwQkFBMEIsK0JBQStCLFFBQVEsSUFBSSxtQkFBbUIsZUFBZSx1Q0FBdUMsTUFBTSw0QkFBNEIsTUFBTSxvQ0FBb0Msb0JBQW9CLCtCQUErQixNQUFNLGlCQUFpQixNQUFNLDJCQUEyQixTQUFTLGtCQUFrQixvQkFBb0IsNENBQTRDLE1BQU0saUZBQWlGLGlCQUFpQixlQUFlLGdEQUFnRCxNQUFNLDRCQUE0QixNQUFNLHFDQUFxQyxrQkFBa0IsMEJBQTBCLCtCQUErQixRQUFRLElBQUksbUJBQW1CLGVBQWUsdUNBQXVDLE1BQU0sMkJBQTJCLE1BQU0sMkJBQTJCLE1BQU0sNkJBQTZCLG9CQUFvQiwrQkFBK0IsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsTUFBTSxpQkFBaUIsU0FBUyxrQkFBa0Isb0JBQW9CLFlBQVksMEJBQTBCLElBQUksc0RBQXNELGlCQUFpQixlQUFlLHVDQUF1QyxNQUFNLDJCQUEyQixNQUFNLDJCQUEyQixNQUFNLDhCQUE4QixrQkFBa0IsU0FBUyxrQkFBa0Isd0JBQXdCLFVBQVUsY0FBYyw2QkFBNkIsb0JBQW9CLGNBQWMseURBQXlELFVBQVUsb0NBQW9DLDhCQUE4Qiw0QkFBNEIsd0NBQXdDLGtCQUFrQixvQkFBb0IsYUFBYSxJQUFJLDJDQUEyQyxTQUFTLGNBQWMsd0JBQXdCLG9CQUFvQixtREFBbUQseUJBQXlCLElBQUksYUFBYSxTQUFTLDBCQUEwQixvQkFBb0IsK0NBQStDLG1FQUFtRSwyQkFBMkIsa0JBQWtCLGNBQWMsK0JBQStCLHVCQUF1QixpQkFBaUIsNEdBQTRHLGdCQUFnQiwrSkFBK0osd0JBQXdCLG1HQUFtRyxpQ0FBaUMsK0NBQStDLFNBQVMsZ0RBQWdELHFCQUFxQixzQkFBc0IsR0FBRywyQ0FBMkMsc0JBQXNCLG1DQUFtQyxzQkFBc0IsR0FBRyxlQUFlLElBQUksMElBQTBJLFNBQVMsU0FBUyxtR0FBbUcscUJBQXFCLGlDQUFpQyxvQkFBb0IsMEJBQTBCLDBCQUEwQixrQkFBa0IsOEJBQThCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLG9CQUFvQiwrQkFBK0IsbUJBQW1CLEVBQUUsMEJBQTBCLDBCQUEwQixxQkFBcUIsaUNBQWlDLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGNBQWMsSUFBSSxhQUFhLFNBQVMsd0JBQXdCLEVBQUUsYUFBYSwrREFBK0QsbUJBQW1CLHlHQUF5RywyQ0FBMkMsbUJBQW1CLG1CQUFtQixlQUFlLHFMQUFxTCxTQUFTLCtQQUErUCxvQkFBb0IsRUFBRSxzRkFBc0YsbUJBQW1CLG1CQUFtQixlQUFlLFNBQVMsbUJBQW1CLGlCQUFpQixtQkFBbUIsbUJBQW1CLDZDQUE2QyxTQUFTLGlGQUFpRixhQUFhLFNBQVMsT0FBTyxTQUFTLGFBQWEsWUFBWSw0Q0FBNEMsaURBQWlELHVCQUF1QixJQUFJLE9BQU8sb0NBQW9DLFlBQVksd0JBQXdCLDhCQUE4QixpQkFBaUIsc0NBQXNDLGVBQWUsc0dBQXNHLHNMQUFzTCxnQkFBZ0IsYUFBYSxvR0FBb0csZUFBZSxxQkFBcUIsOEJBQThCLFdBQVcsY0FBYyxTQUFTLHFCQUFxQixNQUFNLG1IQUFtSCxtQ0FBbUMsK0RBQStELHlEQUF5RCxNQUFNLHNCQUFzQixpQkFBaUIsc0JBQXNCLFlBQVksc0JBQXNCLGNBQWMsc0JBQXNCLGVBQWUsc0JBQXNCLGFBQWEsaUJBQWlCLDRCQUE0QixlQUFlLGFBQWEsaUJBQWlCLGlDQUFpQyxJQUFJLFlBQVksZ0JBQWdCLEVBQUUsT0FBTyxHQUFHLGdDQUFnQyxJQUFJLDhCQUE4QixJQUFJLGdDQUFnQyxJQUFJLCtCQUErQixJQUFJLGdJQUFnSSxTQUFTLCtCQUErQixTQUFTLDhCQUE4QixTQUFTLFNBQVMsaUJBQWlCLGdCQUFnQixzQkFBc0IsZ0JBQWdCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixrQkFBa0IsaUJBQWlCLGlEQUFpRCxjQUFjLCtEQUErRCwyQkFBMkIsc0RBQXNELHNCQUFzQiw2UkFBNlIsZUFBZSwwQkFBMEIsMkZBQTJGLFNBQVMsRUFBRTs7Ozs7Ozs7O0FDQTl3VTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEIiLCJmaWxlIjoicmVkdXhUZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjcxMTZiZjhkNjAyODc4YWIzMTIiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2UgPSBleHBvcnRzLmFwcGx5TWlkZGxld2FyZSA9IGV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzID0gZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBleHBvcnRzLmNyZWF0ZVN0b3JlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZVN0b3JlID0gcmVxdWlyZSgnLi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX2NyZWF0ZVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVN0b3JlKTtcblxudmFyIF9jb21iaW5lUmVkdWNlcnMgPSByZXF1aXJlKCcuL2NvbWJpbmVSZWR1Y2VycycpO1xuXG52YXIgX2NvbWJpbmVSZWR1Y2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21iaW5lUmVkdWNlcnMpO1xuXG52YXIgX2JpbmRBY3Rpb25DcmVhdG9ycyA9IHJlcXVpcmUoJy4vYmluZEFjdGlvbkNyZWF0b3JzJyk7XG5cbnZhciBfYmluZEFjdGlvbkNyZWF0b3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBY3Rpb25DcmVhdG9ycyk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlID0gcmVxdWlyZSgnLi9hcHBseU1pZGRsZXdhcmUnKTtcblxudmFyIF9hcHBseU1pZGRsZXdhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwbHlNaWRkbGV3YXJlKTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IF9jcmVhdGVTdG9yZTJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuY29tYmluZVJlZHVjZXJzID0gX2NvbWJpbmVSZWR1Y2VyczJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzID0gX2JpbmRBY3Rpb25DcmVhdG9yczJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gX2FwcGx5TWlkZGxld2FyZTJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuY29tcG9zZSA9IF9jb21wb3NlMlsnZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTQiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICAqXG4gICAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAgICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAgKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICAgKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gICAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAgICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgICpcbiAgICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAgICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAgKi9cbn07ZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbX3N5bWJvbE9ic2VydmFibGUyWydkZWZhdWx0J11dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW19zeW1ib2xPYnNlcnZhYmxlMlsnZGVmYXVsdCddXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTQiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDE0IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTQiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDE0IiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDE0IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTQiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDE0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbC5qcycpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbWJpbmVSZWR1Y2VycztcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiAnICsgJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvblxcJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCAnICsgJ3lvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCdObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCInICsga2V5ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB2b2lkIDA7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvciA9IHZvaWQgMDtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvbGliL2NvbWJpbmVSZWR1Y2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHdhcm5pbmc7XG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvdXRpbHMvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGJpbmRBY3Rpb25DcmVhdG9ycztcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvYmluZEFjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDE0IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBhcHBseU1pZGRsZXdhcmU7XG5cbnZhciBfY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xuXG52YXIgX2NvbXBvc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBfY29tcG9zZTJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvbGliL2FwcGx5TWlkZGxld2FyZS5qc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb21wb3NlO1xuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvY29tcG9zZS5qc1xuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxNCIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG4vKmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbik9PntcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSAnSU5DJzoge1xyXG5cdFx0XHRzdGF0ZSA9IHN0YXRlICsgMTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlICdERUMnOiB7XHJcblx0XHRcdHN0YXRlID0gc3RhdGUgLSAxO1xyXG5cdFx0fVxyXG5cdH1cclxuIHJldHVybiBzdGF0ZTtcclxufSovXHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZT17fSwgYWN0aW9uKSA9PntcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSAnRkVUQ0hJTkcnOntcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZldGNoaW5nLi4uLi4uLi4uLi4uLi4uLi4uLi4nKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSAnRkVUQ0hFRCc6e1xyXG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgJ0NIQU5HRV9OQU1FJzp7XHJcblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCBuYW1lOmFjdGlvbi5wYXlsb2FkfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlICdDSEFOR0VfQUdFJzoge1xyXG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgYWdlOmFjdGlvbi5wYXlsb2FkfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuY29uc3QgdHdlZXRSZWR1Y2VyID0gKHN0YXRlPVtdLCBhY3Rpb24pID0+e1xyXG5cdHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuLypjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKT0+e1xyXG5cdGNvbnNvbGUubG9nKCdmaXJlZCcpO1xyXG5cclxuXHJcblx0bmV4dChhY3Rpb24pO1xyXG59XHJcbiovXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcik7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlcixcclxuXHR0d2VldDogdHdlZXRSZWR1Y2VyXHJcbn0pO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKTtcclxuXHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoKCk9PntcclxuXHRjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlJywgc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5cclxuc3RvcmUuZGlzcGF0Y2goe3R5cGU6J0NIQU5HRV9OQU1FJyxwYXlsb2FkOidKQVknfSk7XHJcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOidDSEFOR0VfQUdFJyxwYXlsb2FkOjI1fSk7XHJcblxyXG5zdG9yZS5kaXNwYXRjaCgoZGlzcGF0Y2gpPT57XHJcblx0ZGlzcGF0Y2goe3R5cGU6J0ZFVENISU5HJ30pO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRkaXNwYXRjaCh7dHlwZTonRkVUQ0hFRCcsIHBheWxvYWQ6e25hbWU6J0FudXAnLGFnZTozMH19KTtcclxuXHR9LCAxMDAwKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc3JjL3Rlc3QvcmVkdXgvcmVkdXguanMiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT90KGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSx0KTp0KGUucmVkdXhMb2dnZXI9ZS5yZWR1eExvZ2dlcnx8e30pfSh0aGlzLGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQoZSx0KXtlLnN1cGVyXz10LGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pfWZ1bmN0aW9uIHIoZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImtpbmRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSksdCYmdC5sZW5ndGgmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGF0aFwiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBuKGUsdCxyKXtuLnN1cGVyXy5jYWxsKHRoaXMsXCJFXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyaHNcIix7dmFsdWU6cixlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gbyhlLHQpe28uc3VwZXJfLmNhbGwodGhpcyxcIk5cIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBpKGUsdCl7aS5zdXBlcl8uY2FsbCh0aGlzLFwiRFwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGEoZSx0LHIpe2Euc3VwZXJfLmNhbGwodGhpcyxcIkFcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImluZGV4XCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXRlbVwiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBmKGUsdCxyKXt2YXIgbj1lLnNsaWNlKChyfHx0KSsxfHxlLmxlbmd0aCk7cmV0dXJuIGUubGVuZ3RoPXQ8MD9lLmxlbmd0aCt0OnQsZS5wdXNoLmFwcGx5KGUsbiksZX1mdW5jdGlvbiB1KGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKTtyZXR1cm5cIm9iamVjdFwiIT09dD90OmU9PT1NYXRoP1wibWF0aFwiOm51bGw9PT1lP1wibnVsbFwiOkFycmF5LmlzQXJyYXkoZSk/XCJhcnJheVwiOlwiW29iamVjdCBEYXRlXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpP1wiZGF0ZVwiOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUudG9TdHJpbmcmJi9eXFwvLipcXC8vLnRlc3QoZS50b1N0cmluZygpKT9cInJlZ2V4cFwiOlwib2JqZWN0XCJ9ZnVuY3Rpb24gbChlLHQscixjLHMsZCxwKXtzPXN8fFtdLHA9cHx8W107dmFyIGc9cy5zbGljZSgwKTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZCl7aWYoYyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmYyhnLGQpKXJldHVybjtpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBjP1widW5kZWZpbmVkXCI6TihjKSkpe2lmKGMucHJlZmlsdGVyJiZjLnByZWZpbHRlcihnLGQpKXJldHVybjtpZihjLm5vcm1hbGl6ZSl7dmFyIGg9Yy5ub3JtYWxpemUoZyxkLGUsdCk7aCYmKGU9aFswXSx0PWhbMV0pfX19Zy5wdXNoKGQpfVwicmVnZXhwXCI9PT11KGUpJiZcInJlZ2V4cFwiPT09dSh0KSYmKGU9ZS50b1N0cmluZygpLHQ9dC50b1N0cmluZygpKTt2YXIgeT1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSksdj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOk4odCksYj1cInVuZGVmaW5lZFwiIT09eXx8cCYmcFtwLmxlbmd0aC0xXS5saHMmJnBbcC5sZW5ndGgtMV0ubGhzLmhhc093blByb3BlcnR5KGQpLG09XCJ1bmRlZmluZWRcIiE9PXZ8fHAmJnBbcC5sZW5ndGgtMV0ucmhzJiZwW3AubGVuZ3RoLTFdLnJocy5oYXNPd25Qcm9wZXJ0eShkKTtpZighYiYmbSlyKG5ldyBvKGcsdCkpO2Vsc2UgaWYoIW0mJmIpcihuZXcgaShnLGUpKTtlbHNlIGlmKHUoZSkhPT11KHQpKXIobmV3IG4oZyxlLHQpKTtlbHNlIGlmKFwiZGF0ZVwiPT09dShlKSYmZS10IT09MClyKG5ldyBuKGcsZSx0KSk7ZWxzZSBpZihcIm9iamVjdFwiPT09eSYmbnVsbCE9PWUmJm51bGwhPT10KWlmKHAuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Lmxocz09PWV9KS5sZW5ndGgpZSE9PXQmJnIobmV3IG4oZyxlLHQpKTtlbHNle2lmKHAucHVzaCh7bGhzOmUscmhzOnR9KSxBcnJheS5pc0FycmF5KGUpKXt2YXIgdztlLmxlbmd0aDtmb3Iodz0wO3c8ZS5sZW5ndGg7dysrKXc+PXQubGVuZ3RoP3IobmV3IGEoZyx3LG5ldyBpKHZvaWQgMCxlW3ddKSkpOmwoZVt3XSx0W3ddLHIsYyxnLHcscCk7Zm9yKDt3PHQubGVuZ3RoOylyKG5ldyBhKGcsdyxuZXcgbyh2b2lkIDAsdFt3KytdKSkpfWVsc2V7dmFyIHg9T2JqZWN0LmtleXMoZSksUz1PYmplY3Qua2V5cyh0KTt4LmZvckVhY2goZnVuY3Rpb24obixvKXt2YXIgaT1TLmluZGV4T2Yobik7aT49MD8obChlW25dLHRbbl0scixjLGcsbixwKSxTPWYoUyxpKSk6bChlW25dLHZvaWQgMCxyLGMsZyxuLHApfSksUy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2wodm9pZCAwLHRbZV0scixjLGcsZSxwKX0pfXAubGVuZ3RoPXAubGVuZ3RoLTF9ZWxzZSBlIT09dCYmKFwibnVtYmVyXCI9PT15JiZpc05hTihlKSYmaXNOYU4odCl8fHIobmV3IG4oZyxlLHQpKSl9ZnVuY3Rpb24gYyhlLHQscixuKXtyZXR1cm4gbj1ufHxbXSxsKGUsdCxmdW5jdGlvbihlKXtlJiZuLnB1c2goZSl9LHIpLG4ubGVuZ3RoP246dm9pZCAwfWZ1bmN0aW9uIHMoZSx0LHIpe2lmKHIucGF0aCYmci5wYXRoLmxlbmd0aCl7dmFyIG4sbz1lW3RdLGk9ci5wYXRoLmxlbmd0aC0xO2ZvcihuPTA7bjxpO24rKylvPW9bci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhvW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpkZWxldGUgb1tyLnBhdGhbbl1dO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6b1tyLnBhdGhbbl1dPXIucmhzfX1lbHNlIHN3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKGVbdF0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjplPWYoZSx0KTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOmVbdF09ci5yaHN9cmV0dXJuIGV9ZnVuY3Rpb24gZChlLHQscil7aWYoZSYmdCYmciYmci5raW5kKXtmb3IodmFyIG49ZSxvPS0xLGk9ci5wYXRoP3IucGF0aC5sZW5ndGgtMTowOysrbzxpOylcInVuZGVmaW5lZFwiPT10eXBlb2YgbltyLnBhdGhbb11dJiYobltyLnBhdGhbb11dPVwibnVtYmVyXCI9PXR5cGVvZiByLnBhdGhbb10/W106e30pLG49bltyLnBhdGhbb11dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKHIucGF0aD9uW3IucGF0aFtvXV06bixyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmRlbGV0ZSBuW3IucGF0aFtvXV07YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjpuW3IucGF0aFtvXV09ci5yaHN9fX1mdW5jdGlvbiBwKGUsdCxyKXtpZihyLnBhdGgmJnIucGF0aC5sZW5ndGgpe3ZhciBuLG89ZVt0XSxpPXIucGF0aC5sZW5ndGgtMTtmb3Iobj0wO248aTtuKyspbz1vW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAob1tyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6b1tyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjpvW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmRlbGV0ZSBvW3IucGF0aFtuXV19fWVsc2Ugc3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAoZVt0XSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmVbdF09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOmVbdF09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmU9ZihlLHQpfXJldHVybiBlfWZ1bmN0aW9uIGcoZSx0LHIpe2lmKGUmJnQmJnImJnIua2luZCl7dmFyIG4sbyxpPWU7Zm9yKG89ci5wYXRoLmxlbmd0aC0xLG49MDtuPG87bisrKVwidW5kZWZpbmVkXCI9PXR5cGVvZiBpW3IucGF0aFtuXV0mJihpW3IucGF0aFtuXV09e30pLGk9aVtyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKGlbci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmlbci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJFXCI6aVtyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjpkZWxldGUgaVtyLnBhdGhbbl1dfX19ZnVuY3Rpb24gaChlLHQscil7aWYoZSYmdCl7dmFyIG49ZnVuY3Rpb24obil7ciYmIXIoZSx0LG4pfHxkKGUsdCxuKX07bChlLHQsbil9fWZ1bmN0aW9uIHkoZSl7cmV0dXJuXCJjb2xvcjogXCIrRltlXS5jb2xvcitcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIn1mdW5jdGlvbiB2KGUpe3ZhciB0PWUua2luZCxyPWUucGF0aCxuPWUubGhzLG89ZS5yaHMsaT1lLmluZGV4LGE9ZS5pdGVtO3N3aXRjaCh0KXtjYXNlXCJFXCI6cmV0dXJuW3Iuam9pbihcIi5cIiksbixcIuKGklwiLG9dO2Nhc2VcIk5cIjpyZXR1cm5bci5qb2luKFwiLlwiKSxvXTtjYXNlXCJEXCI6cmV0dXJuW3Iuam9pbihcIi5cIildO2Nhc2VcIkFcIjpyZXR1cm5bci5qb2luKFwiLlwiKStcIltcIitpK1wiXVwiLGFdO2RlZmF1bHQ6cmV0dXJuW119fWZ1bmN0aW9uIGIoZSx0LHIsbil7dmFyIG89YyhlLHQpO3RyeXtuP3IuZ3JvdXBDb2xsYXBzZWQoXCJkaWZmXCIpOnIuZ3JvdXAoXCJkaWZmXCIpfWNhdGNoKGUpe3IubG9nKFwiZGlmZlwiKX1vP28uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lLmtpbmQsbj12KGUpO3IubG9nLmFwcGx5KHIsW1wiJWMgXCIrRlt0XS50ZXh0LHkodCldLmNvbmNhdChQKG4pKSl9KTpyLmxvZyhcIuKAlOKAlCBubyBkaWZmIOKAlOKAlFwiKTt0cnl7ci5ncm91cEVuZCgpfWNhdGNoKGUpe3IubG9nKFwi4oCU4oCUIGRpZmYgZW5kIOKAlOKAlCBcIil9fWZ1bmN0aW9uIG0oZSx0LHIsbil7c3dpdGNoKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKSl7Y2FzZVwib2JqZWN0XCI6cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZVtuXT9lW25dLmFwcGx5KGUsUChyKSk6ZVtuXTtjYXNlXCJmdW5jdGlvblwiOnJldHVybiBlKHQpO2RlZmF1bHQ6cmV0dXJuIGV9fWZ1bmN0aW9uIHcoZSl7dmFyIHQ9ZS50aW1lc3RhbXAscj1lLmR1cmF0aW9uO3JldHVybiBmdW5jdGlvbihlLG4sbyl7dmFyIGk9W1wiYWN0aW9uXCJdO3JldHVybiBpLnB1c2goXCIlY1wiK1N0cmluZyhlLnR5cGUpKSx0JiZpLnB1c2goXCIlY0AgXCIrbiksciYmaS5wdXNoKFwiJWMoaW4gXCIrby50b0ZpeGVkKDIpK1wiIG1zKVwiKSxpLmpvaW4oXCIgXCIpfX1mdW5jdGlvbiB4KGUsdCl7dmFyIHI9dC5sb2dnZXIsbj10LmFjdGlvblRyYW5zZm9ybWVyLG89dC50aXRsZUZvcm1hdHRlcixpPXZvaWQgMD09PW8/dyh0KTpvLGE9dC5jb2xsYXBzZWQsZj10LmNvbG9ycyx1PXQubGV2ZWwsbD10LmRpZmYsYz1cInVuZGVmaW5lZFwiPT10eXBlb2YgdC50aXRsZUZvcm1hdHRlcjtlLmZvckVhY2goZnVuY3Rpb24obyxzKXt2YXIgZD1vLnN0YXJ0ZWQscD1vLnN0YXJ0ZWRUaW1lLGc9by5hY3Rpb24saD1vLnByZXZTdGF0ZSx5PW8uZXJyb3Isdj1vLnRvb2ssdz1vLm5leHRTdGF0ZSx4PWVbcysxXTt4JiYodz14LnByZXZTdGF0ZSx2PXguc3RhcnRlZC1kKTt2YXIgUz1uKGcpLGs9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hKGZ1bmN0aW9uKCl7cmV0dXJuIHd9LGcsbyk6YSxqPUQocCksRT1mLnRpdGxlP1wiY29sb3I6IFwiK2YudGl0bGUoUykrXCI7XCI6XCJcIixBPVtcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIl07QS5wdXNoKEUpLHQudGltZXN0YW1wJiZBLnB1c2goXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCIpLHQuZHVyYXRpb24mJkEucHVzaChcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIik7dmFyIE89aShTLGosdik7dHJ5e2s/Zi50aXRsZSYmYz9yLmdyb3VwQ29sbGFwc2VkLmFwcGx5KHIsW1wiJWMgXCIrT10uY29uY2F0KEEpKTpyLmdyb3VwQ29sbGFwc2VkKE8pOmYudGl0bGUmJmM/ci5ncm91cC5hcHBseShyLFtcIiVjIFwiK09dLmNvbmNhdChBKSk6ci5ncm91cChPKX1jYXRjaChlKXtyLmxvZyhPKX12YXIgTj1tKHUsUyxbaF0sXCJwcmV2U3RhdGVcIiksUD1tKHUsUyxbU10sXCJhY3Rpb25cIiksQz1tKHUsUyxbeSxoXSxcImVycm9yXCIpLEY9bSh1LFMsW3ddLFwibmV4dFN0YXRlXCIpO2lmKE4paWYoZi5wcmV2U3RhdGUpe3ZhciBMPVwiY29sb3I6IFwiK2YucHJldlN0YXRlKGgpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbTl0oXCIlYyBwcmV2IHN0YXRlXCIsTCxoKX1lbHNlIHJbTl0oXCJwcmV2IHN0YXRlXCIsaCk7aWYoUClpZihmLmFjdGlvbil7dmFyIFQ9XCJjb2xvcjogXCIrZi5hY3Rpb24oUykrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltQXShcIiVjIGFjdGlvbiAgICBcIixULFMpfWVsc2UgcltQXShcImFjdGlvbiAgICBcIixTKTtpZih5JiZDKWlmKGYuZXJyb3Ipe3ZhciBNPVwiY29sb3I6IFwiK2YuZXJyb3IoeSxoKStcIjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7cltDXShcIiVjIGVycm9yICAgICBcIixNLHkpfWVsc2UgcltDXShcImVycm9yICAgICBcIix5KTtpZihGKWlmKGYubmV4dFN0YXRlKXt2YXIgXz1cImNvbG9yOiBcIitmLm5leHRTdGF0ZSh3KStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW0ZdKFwiJWMgbmV4dCBzdGF0ZVwiLF8sdyl9ZWxzZSByW0ZdKFwibmV4dCBzdGF0ZVwiLHcpO2wmJmIoaCx3LHIsayk7dHJ5e3IuZ3JvdXBFbmQoKX1jYXRjaChlKXtyLmxvZyhcIuKAlOKAlCBsb2cgZW5kIOKAlOKAlFwiKX19KX1mdW5jdGlvbiBTKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9T2JqZWN0LmFzc2lnbih7fSxMLGUpLHI9dC5sb2dnZXIsbj10LnN0YXRlVHJhbnNmb3JtZXIsbz10LmVycm9yVHJhbnNmb3JtZXIsaT10LnByZWRpY2F0ZSxhPXQubG9nRXJyb3JzLGY9dC5kaWZmUHJlZGljYXRlO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiByKXJldHVybiBmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9fX07aWYoZS5nZXRTdGF0ZSYmZS5kaXNwYXRjaClyZXR1cm4gY29uc29sZS5lcnJvcihcIltyZWR1eC1sb2dnZXJdIHJlZHV4LWxvZ2dlciBub3QgaW5zdGFsbGVkLiBNYWtlIHN1cmUgdG8gcGFzcyBsb2dnZXIgaW5zdGFuY2UgYXMgbWlkZGxld2FyZTpcXG4vLyBMb2dnZXIgd2l0aCBkZWZhdWx0IG9wdGlvbnNcXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInXFxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcXG4gIHJlZHVjZXIsXFxuICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxcbilcXG4vLyBPciB5b3UgY2FuIGNyZWF0ZSB5b3VyIG93biBsb2dnZXIgd2l0aCBjdXN0b20gb3B0aW9ucyBodHRwOi8vYml0Lmx5L3JlZHV4LWxvZ2dlci1vcHRpb25zXFxuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXFxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcXG4gIC8vIC4uLm9wdGlvbnNcXG59KTtcXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxcbiAgcmVkdWNlcixcXG4gIGFwcGx5TWlkZGxld2FyZShsb2dnZXIpXFxuKVxcblwiKSxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9fX07dmFyIHU9W107cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByPWUuZ2V0U3RhdGU7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihsKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYhaShyLGwpKXJldHVybiBlKGwpO3ZhciBjPXt9O3UucHVzaChjKSxjLnN0YXJ0ZWQ9Ty5ub3coKSxjLnN0YXJ0ZWRUaW1lPW5ldyBEYXRlLGMucHJldlN0YXRlPW4ocigpKSxjLmFjdGlvbj1sO3ZhciBzPXZvaWQgMDtpZihhKXRyeXtzPWUobCl9Y2F0Y2goZSl7Yy5lcnJvcj1vKGUpfWVsc2Ugcz1lKGwpO2MudG9vaz1PLm5vdygpLWMuc3RhcnRlZCxjLm5leHRTdGF0ZT1uKHIoKSk7dmFyIGQ9dC5kaWZmJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmP2YocixsKTp0LmRpZmY7aWYoeCh1LE9iamVjdC5hc3NpZ24oe30sdCx7ZGlmZjpkfSkpLHUubGVuZ3RoPTAsYy5lcnJvcil0aHJvdyBjLmVycm9yO3JldHVybiBzfX19fXZhciBrLGosRT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgQXJyYXkodCsxKS5qb2luKGUpfSxBPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEUoXCIwXCIsdC1lLnRvU3RyaW5nKCkubGVuZ3RoKStlfSxEPWZ1bmN0aW9uKGUpe3JldHVybiBBKGUuZ2V0SG91cnMoKSwyKStcIjpcIitBKGUuZ2V0TWludXRlcygpLDIpK1wiOlwiK0EoZS5nZXRTZWNvbmRzKCksMikrXCIuXCIrQShlLmdldE1pbGxpc2Vjb25kcygpLDMpfSxPPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwZXJmb3JtYW5jZSYmbnVsbCE9PXBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2U6RGF0ZSxOPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFA9ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciB0PTAscj1BcnJheShlLmxlbmd0aCk7dDxlLmxlbmd0aDt0Kyspclt0XT1lW3RdO3JldHVybiByfXJldHVybiBBcnJheS5mcm9tKGUpfSxDPVtdO2s9XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZ2xvYmFsP1widW5kZWZpbmVkXCI6TihnbG9iYWwpKSYmZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxqPWsuRGVlcERpZmYsaiYmQy5wdXNoKGZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGomJmsuRGVlcERpZmY9PT1jJiYoay5EZWVwRGlmZj1qLGo9dm9pZCAwKX0pLHQobixyKSx0KG8sciksdChpLHIpLHQoYSxyKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjLHtkaWZmOnt2YWx1ZTpjLGVudW1lcmFibGU6ITB9LG9ic2VydmFibGVEaWZmOnt2YWx1ZTpsLGVudW1lcmFibGU6ITB9LGFwcGx5RGlmZjp7dmFsdWU6aCxlbnVtZXJhYmxlOiEwfSxhcHBseUNoYW5nZTp7dmFsdWU6ZCxlbnVtZXJhYmxlOiEwfSxyZXZlcnRDaGFuZ2U6e3ZhbHVlOmcsZW51bWVyYWJsZTohMH0saXNDb25mbGljdDp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygan0sZW51bWVyYWJsZTohMH0sbm9Db25mbGljdDp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gQyYmKEMuZm9yRWFjaChmdW5jdGlvbihlKXtlKCl9KSxDPW51bGwpLGN9LGVudW1lcmFibGU6ITB9fSk7dmFyIEY9e0U6e2NvbG9yOlwiIzIxOTZGM1wiLHRleHQ6XCJDSEFOR0VEOlwifSxOOntjb2xvcjpcIiM0Q0FGNTBcIix0ZXh0OlwiQURERUQ6XCJ9LEQ6e2NvbG9yOlwiI0Y0NDMzNlwiLHRleHQ6XCJERUxFVEVEOlwifSxBOntjb2xvcjpcIiMyMTk2RjNcIix0ZXh0OlwiQVJSQVk6XCJ9fSxMPXtsZXZlbDpcImxvZ1wiLGxvZ2dlcjpjb25zb2xlLGxvZ0Vycm9yczohMCxjb2xsYXBzZWQ6dm9pZCAwLHByZWRpY2F0ZTp2b2lkIDAsZHVyYXRpb246ITEsdGltZXN0YW1wOiEwLHN0YXRlVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGFjdGlvblRyYW5zZm9ybWVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxlcnJvclRyYW5zZm9ybWVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxjb2xvcnM6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJpbmhlcml0XCJ9LHByZXZTdGF0ZTpmdW5jdGlvbigpe3JldHVyblwiIzlFOUU5RVwifSxhY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5cIiMwM0E5RjRcIn0sbmV4dFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuXCIjNENBRjUwXCJ9LGVycm9yOmZ1bmN0aW9uKCl7cmV0dXJuXCIjRjIwNDA0XCJ9fSxkaWZmOiExLGRpZmZQcmVkaWNhdGU6dm9pZCAwLHRyYW5zZm9ybWVyOnZvaWQgMH0sVD1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWUuZGlzcGF0Y2gscj1lLmdldFN0YXRlO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHI/UygpKHtkaXNwYXRjaDp0LGdldFN0YXRlOnJ9KTp2b2lkIGNvbnNvbGUuZXJyb3IoXCJcXG5bcmVkdXgtbG9nZ2VyIHYzXSBCUkVBS0lORyBDSEFOR0VcXG5bcmVkdXgtbG9nZ2VyIHYzXSBTaW5jZSAzLjAuMCByZWR1eC1sb2dnZXIgZXhwb3J0cyBieSBkZWZhdWx0IGxvZ2dlciB3aXRoIGRlZmF1bHQgc2V0dGluZ3MuXFxuW3JlZHV4LWxvZ2dlciB2M10gQ2hhbmdlXFxuW3JlZHV4LWxvZ2dlciB2M10gaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXFxuW3JlZHV4LWxvZ2dlciB2M10gdG9cXG5bcmVkdXgtbG9nZ2VyIHYzXSBpbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInXFxuXCIpfTtlLmRlZmF1bHRzPUwsZS5jcmVhdGVMb2dnZXI9UyxlLmxvZ2dlcj1ULGUuZGVmYXVsdD1ULE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB0aHVuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==