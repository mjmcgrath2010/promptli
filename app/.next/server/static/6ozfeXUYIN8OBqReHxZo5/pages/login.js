module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1jO":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),

/***/ "+90V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleMessage = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("cDf5"));

__webpack_require__("JfyS");

__webpack_require__("gKgN");

__webpack_require__("LJIG");

__webpack_require__("jKmj");

__webpack_require__("3pcs");

__webpack_require__("RNas");

__webpack_require__("DKff");

__webpack_require__("60iq");

/* eslint-disable no-console */
var messageTypes = {
  error: 'error',
  info: 'info',
  warn: 'warn'
};
Object.freeze(messageTypes);

var logMessage = function logMessage(messageType, message) {
  if (Object.values(messageTypes).includes(messageType)) {
    console[messageType](message);
  } else {
    console.info(message);
  }
};

var consoleMessage = function consoleMessage(messageType, message) {
  var _this$config = this.config,
      errorStackTraceLimit = _this$config.errorStackTraceLimit,
      strictMode = _this$config.strictMode;
  var prevStackLimit = Error.stackTraceLimit;
  var util;

  if (!strictMode) {
    return;
  }

  if (false) {} else {
    return;
  }
  /*
    Temporarily set the stacktrace to 0 or errorStackTraceLimit,
    in order to only display a message
  */


  Error.stackTraceLimit = errorStackTraceLimit;
  /*
    Make room for new message
  */

  console.log();
  /*
    Make sure the message is a string
  */

  if (typeof message !== 'string') {
    var metaError = new Error();
    metaError.name = 'Meta';
    metaError.message = "Param message needs to be of type: string. Instead, '".concat((0, _typeof2["default"])(message), "' was provided.\n\n------------------------------------------------\n\n\u200B\n        The provided ").concat((0, _typeof2["default"])(message), ":\n\n\u200B\n          ").concat(util.inspect(message, true, 8, true), "\n\u200B\n------------------------------------------------\n\n    ");
    console.error(metaError);
    return;
  }
  /*
    Log the message to console
  */


  logMessage(messageType, message);
  /*
    Reset stack limit
  */

  Error.stackTraceLimit = prevStackLimit;
};

exports.consoleMessage = consoleMessage;

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+ZiV":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("yLev").default;

const {
  localeSubpaths
} = __webpack_require__("KNus").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    de: 'de'
  },
  all: {
    en: 'en',
    de: 'de'
  }
};
module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0LgW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSSR = withSSR;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _useSSR = __webpack_require__("b8Gf");

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = (0, _objectWithoutProperties2["default"])(_ref, ["initialI18nStore", "initialLanguage"]);
      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
      return _react["default"].createElement(WrappedComponent, _objectSpread({}, rest));
    }

    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}

/***/ }),

/***/ "0TPh":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2ls");


/***/ }),

/***/ "1SyV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subpathIsRequired = void 0;

var subpathIsRequired = function subpathIsRequired(config, language) {
  return typeof config.localeSubpaths[language] === 'string';
};

exports.subpathIsRequired = subpathIsRequired;

/***/ }),

/***/ "1eKl":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.define-property");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3pcs":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),

/***/ "45CA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(__webpack_require__("cDf5"));
var _objectSpread = _interopDefault(__webpack_require__("MVZn"));
var _classCallCheck = _interopDefault(__webpack_require__("lwsE"));
var _createClass = _interopDefault(__webpack_require__("W8MJ"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__("a1gu"));
var _getPrototypeOf = _interopDefault(__webpack_require__("Nsbk"));
var _assertThisInitialized = _interopDefault(__webpack_require__("PJYZ"));
var _inherits = _interopDefault(__webpack_require__("7W2i"));
var _toConsumableArray = _interopDefault(__webpack_require__("RIqP"));
var _slicedToArray = _interopDefault(__webpack_require__("J4zp"));

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger =
/*#__PURE__*/
function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

// http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */

  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  } // Fallback to default values


  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/* eslint-disable */

var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}

var ResourceStore =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck(this, ResourceStore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceStore).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  _createClass(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      /* eslint no-restricted-syntax: 0 */
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

      if (this.options.compatibilityAPI === 'v1') return _objectSpread({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var Translator =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Translator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Translator).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        /* eslint prefer-rest-params: 0 */
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {}; // non valid keys handling

      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)]; // separators

      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator; // get namespace(s)

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      } // resolve from store


      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays; // object

      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        } // if we got a separator we loop over children - else we just return object as is
        // as having it set to false means no hierarchy so no lookup for nested values


        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

          /* eslint no-restricted-syntax: 0 */

          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, _objectSpread({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        // array special treatment
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        // string, empty or null
        var usedDefault = false;
        var usedKey = false; // fallback value

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        } // save missing


        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        } // extend


        res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key); // parseMissingKeyHandler

        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      } // return


      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        // i18next.parsing
        if (options.interpolation) this.interpolator.init(_objectSpread({}, options, {
          interpolation: _objectSpread({}, this.options.interpolation, options.interpolation)
        })); // interpolate

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options); // nesting

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      } // post process


      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey; // plain key

      var exactUsedKey; // key with context / plural

      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys]; // forEach possible key

      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for namespace \"").concat(usedNS, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace was not yet loaded"), 'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count); // fallback for plural if context not found

              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context)); // get key for plural if needed

              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only


            var possibleKey;
            /* eslint no-cond-assign: 0 */

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil =
/*#__PURE__*/
function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      // http://www.iana.org/assignments/language-tags/language-tags.xhtml
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || []; // asume we have an object defining fallbacks

      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this.isWhitelisted(c)) {
          codes.push(c);
        } else {
          _this.logger.warn("rejecting non-whitelisted language code: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

/* eslint-disable */

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver =
/*#__PURE__*/
function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  _createClass(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        // if (rule.numbers.length === 1) return ''; // only singular
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        }; // COMPATIBILITY JSON
        // v1


        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (
        /* v2 */
        this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (
        /* v3 - gettext index */
        this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator =
/*#__PURE__*/
function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }
  /* eslint no-param-reassign: 0 */


  _createClass(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      // the regexp
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          return getPathWithDefaults(data, defaultData, key);
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0; // unescape if has unescapePrefix/Suffix

      /* eslint no-cond-assign: 0 */

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        str = str.replace(match[0], regexSafe(value));
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0; // regular escape on demand

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var _temp = missingInterpolationHandler(str, match, options);

            value = typeof _temp === 'string' ? _temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread({}, options);

      clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

      delete clonedOptions.defaultValue; // assert we do not get a endless loop on interpolating defaultValue again and again
      // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

      function handleHasOptions(key, inheritedOptions) {
        if (key.indexOf(',') < 0) return key;
        var p = key.split(',');
        key = p.shift();
        var optionsString = p.join(',');
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.error("failed parsing options string in nesting for key ".concat(key), e);
        } // assert we do not get a endless loop on interpolating defaultValue again and again


        delete clonedOptions.defaultValue;
        return key;
      } // regular escape on demand


      while (match = this.nestingRegexp.exec(str)) {
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions); // is only the nesting key (key1 = '$(key2)') return the value without stringify

        if (value && match[0] === str && typeof value !== 'string') return value; // no string to include or empty

        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        } // Nested keys should not be escaped by default #854
        // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);


        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Connector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      // find what needs to be loaded
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2; // loaded
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1; // pending

            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var _name$split = name.split('|'),
          _name$split2 = _slicedToArray(_name$split, 2),
          lng = _name$split2[0],
          ns = _name$split2[1];

      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      } // set loaded


      this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

      var loaded = {}; // callback if ready

      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          // only do once per loaded -> this.emit('loaded', q.loaded);
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          /* eslint no-param-reassign: 0 */

          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      }); // emit consolidated loaded event

      this.emit('loaded', loaded); // remove done load requests

      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {}); // noting to load

      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data
        /* = retryFlag */
        && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

        return null; // pendings will trigger callback
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _name$split3 = name.split('|'),
          _name$split4 = _slicedToArray(_name$split3, 2),
          lng = _name$split4[0],
          ns = _name$split4[1];

      this.read(lng, ns, 'read', null, null, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" for namespace \"").concat(namespace, "\" as the namespace was not yet loaded"), 'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null
        /* unused callback */
        , _objectSpread({}, options, {
          isUpdate: isUpdate
        }));
      } // write to store to avoid resending


      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    // string or array of namespaces
    whitelist: false,
    // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all',
    // | currentOnly | languageOnly
    preload: false,
    // array with preload languages
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    // allow bundling certain languages that are not remotely fetched
    saveMissing: false,
    // enable to send missing values
    updateMissing: false,
    // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback',
    // 'current' || 'all'
    saveMissingPlurals: true,
    // will save all forms not only singular key
    missingKeyHandler: false,
    // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false,
    // function(str, match)
    postProcess: false,
    // string or array of postProcessor names
    postProcessPassResolved: false,
    // pass resolved object into 'options.i18nResolved' for postprocessor
    returnNull: true,
    // allows null value as valid translation
    returnEmptyString: true,
    // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false,
    // or string to join array
    returnedObjectHandler: false,
    // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false,
    // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop

    }
  };
}
/* eslint no-param-reassign: 0 */

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, I18n);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = _objectSpread({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      } // init services


      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options); // pipe events from backendConnector

        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options); // pipe events from translator

        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      } // append api


      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback(); // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          // at least load fallbacks in this case
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(l) {
        if (l) {
          if (!_this4.language) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1]; // we're in cimode so this shall pass

      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      }; // loaded -> SUCCESS


      if (this.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

      if (!this.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      }); // Exit early if all given languages are already preloaded

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options; // sync options

      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

module.exports = i18next;


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5ZW6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translation = Translation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _useTranslation3 = __webpack_require__("Sdxe");

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = (0, _objectWithoutProperties2["default"])(props, ["ns", "children"]);

  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
      _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "60iq":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.freeze");

/***/ }),

/***/ "66ur":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.index-of");

/***/ }),

/***/ "7RI2":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.is-array");

/***/ }),

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "8+l0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lngPathCorrector = void 0;

__webpack_require__("AN3u");

__webpack_require__("gKgN");

__webpack_require__("LJIG");

__webpack_require__("jKmj");

__webpack_require__("3pcs");

__webpack_require__("oTNv");

__webpack_require__("+1jO");

__webpack_require__("RNas");

__webpack_require__("DKff");

var _objectSpread2 = _interopRequireDefault(__webpack_require__("MVZn"));

var _typeof2 = _interopRequireDefault(__webpack_require__("cDf5"));

var _url = __webpack_require__("bzos");

var _index = __webpack_require__("PEN0");

var parseAs = function parseAs(originalAs, href) {
  var asType = (0, _typeof2["default"])(originalAs);
  var as;

  if (asType === 'undefined') {
    as = (0, _url.format)(href, {
      unicode: true
    });
  } else if (asType === 'string') {
    as = originalAs;
  } else {
    throw new Error("'as' type must be 'string', but it is ".concat(asType));
  }

  return as;
};

var parseHref = function parseHref(originalHref) {
  var hrefType = (0, _typeof2["default"])(originalHref);
  var href;

  if (hrefType === 'string') {
    href = (0, _url.parse)(originalHref, true
    /* parseQueryString */
    );
  } else if (hrefType === 'object') {
    href = (0, _objectSpread2["default"])({}, originalHref);
    href.query = originalHref.query ? (0, _objectSpread2["default"])({}, originalHref.query) : {};
  } else {
    throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
  }

  return href;
};

var lngPathCorrector = function lngPathCorrector(config, currentRoute, currentLanguage) {
  var allLanguages = config.allLanguages,
      localeSubpaths = config.localeSubpaths;
  var originalAs = currentRoute.as,
      originalHref = currentRoute.href;

  if (!allLanguages.includes(currentLanguage)) {
    throw new Error('Invalid configuration: Current language is not included in all languages array');
  }

  var href = parseHref(originalHref);
  var as = parseAs(originalAs, href);
  /*
    url.format prefers the 'url.search' string over
    the 'url.query' object, so remove the search
    string to ensure the query object is used.
  */

  delete href.search;
  /*
    Strip any/all subpaths from the `as` value
  */

  Object.values(localeSubpaths).forEach(function (subpath) {
    if ((0, _index.subpathIsPresent)(as, subpath)) {
      as = (0, _index.removeSubpath)(as, subpath);
    }
  });

  if ((0, _index.subpathIsRequired)(config, currentLanguage)) {
    var basePath = "".concat(href.protocol, "//").concat(href.host);
    var currentAs = as.replace(basePath, '');
    var subpath = (0, _index.subpathFromLng)(config, currentLanguage);
    as = "/".concat(subpath).concat(currentAs).replace(/\/$/, '');
    href.query.lng = currentLanguage;
    href.query.subpath = subpath;
  }

  return {
    as: as,
    href: href
  };
};

exports.lngPathCorrector = lngPathCorrector;

/***/ }),

/***/ "8IDA":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9J6S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

__webpack_require__("BnvJ");

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _link = _interopRequireDefault(__webpack_require__("YFqc"));

var _reactI18next = __webpack_require__("pH5e");

var _utils = __webpack_require__("PEN0");

/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">

  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.

  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var removeWithTranslationProps = function removeWithTranslationProps(props) {
  var strippedProps = Object.assign({}, props);
  delete strippedProps.defaultNS;
  delete strippedProps.i18n;
  delete strippedProps.i18nOptions;
  delete strippedProps.lng;
  delete strippedProps.reportNS;
  delete strippedProps.t;
  delete strippedProps.tReady;
  delete strippedProps.forwardedRef;
  return strippedProps;
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Link, _React$Component);

  function Link() {
    (0, _classCallCheck2["default"])(this, Link);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));
  }

  (0, _createClass2["default"])(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          children = _this$props.children,
          href = _this$props.href,
          i18n = _this$props.i18n,
          nextI18NextInternals = _this$props.nextI18NextInternals,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["as", "children", "href", "i18n", "nextI18NextInternals"]);
      var config = nextI18NextInternals.config;
      var language = i18n.language;

      if ((0, _utils.subpathIsRequired)(config, language)) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: href
        }, language),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
          href: correctedHref,
          as: correctedAs
        }, removeWithTranslationProps(props)), children);
      }

      return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
        href: href,
        as: as
      }, removeWithTranslationProps(props)), children);
    }
  }]);
  return Link;
}(_react["default"].Component);
/*
  Usage of `withTranslation` here is just to
  force `Link` to rerender on language change
*/


(0, _defineProperty2["default"])(Link, "propTypes", {
  as: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  nextI18NextInternals: _propTypes["default"].shape({
    config: _propTypes["default"].shape({
      defaultLanguage: _propTypes["default"].string.isRequired,
      localeSubpaths: _propTypes["default"].object.isRequired
    }).isRequired
  }).isRequired
});
(0, _defineProperty2["default"])(Link, "defaultProps", {
  as: undefined
});

var _default = (0, _reactI18next.withTranslation)()(Link);

exports["default"] = _default;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AN3u":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),

/***/ "BQui":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _reactI18next = __webpack_require__("pH5e");

var NextStaticProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NextStaticProvider, _React$Component);

  function NextStaticProvider() {
    (0, _classCallCheck2["default"])(this, NextStaticProvider);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NextStaticProvider).apply(this, arguments));
  }

  (0, _createClass2["default"])(NextStaticProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tReady = _this$props.tReady;
      return tReady ? children : null;
    }
  }]);
  return NextStaticProvider;
}(_react["default"].Component);

(0, _defineProperty2["default"])(NextStaticProvider, "propTypes", {
  children: _propTypes["default"].node.isRequired,
  tReady: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(NextStaticProvider, "defaultProps", {
  tReady: true
});

var _default = (0, _reactI18next.withTranslation)()(NextStaticProvider);

exports["default"] = _default;

/***/ }),

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "BnvJ":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign");

/***/ }),

/***/ "DKff":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E9fk":
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "EbDI":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HOiv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = void 0;

var _utils = __webpack_require__("PEN0");

var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_EXTENSION = 'json';
var defaultConfig = {
  defaultLanguage: DEFAULT_LANGUAGE,
  otherLanguages: OTHER_LANGUAGES,
  load: 'currentOnly',
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  localeExtension: LOCALE_EXTENSION,
  localeSubpaths: {},
  use: [],
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format) {
      return _format === 'uppercase' ? value.toUpperCase() : value;
    }
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  ignoreRoutes: ['/_next/', '/static/'],
  customDetectors: [],
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie']
  },
  react: {
    wait: true,
    useSuspense: false
  },
  strictMode: true,
  errorStackTraceLimit: 0,

  get initImmediate() {
    return !(0, _utils.isServer)();
  }

};
exports.defaultConfig = defaultConfig;

/***/ }),

/***/ "HikA":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-json");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "Ijbi":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "Io27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubpath = void 0;

__webpack_require__("AN3u");

var addSubpath = function addSubpath(url, subpath) {
  return url.replace('/', "/".concat(subpath, "/")).replace(/(https?:\/\/)|(\/)+/g, "$1$2").replace(/\/$/, '');
};

exports.addSubpath = addSubpath;

/***/ }),

/***/ "IoTv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__("oTNv");

var _detectNode = _interopRequireDefault(__webpack_require__("ZVxc"));

var _i18next = _interopRequireDefault(__webpack_require__("45CA"));

var _i18nextXhrBackend = _interopRequireDefault(__webpack_require__("E9fk"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(__webpack_require__("fhoN"));

var _default = function _default(config) {
  if (!_i18next["default"].isInitialized) {
    if (_detectNode["default"]) {
      var i18nextNodeBackend = eval("require('i18next-node-fs-backend')");
      var i18nextMiddleware = eval("require('i18next-express-middleware')");

      _i18next["default"].use(i18nextNodeBackend);

      if (config.serverLanguageDetection) {
        var serverDetectors = new i18nextMiddleware.LanguageDetector();
        config.customDetectors.forEach(function (detector) {
          return serverDetectors.addDetector(detector);
        });

        _i18next["default"].use(serverDetectors);
      }
    } else {
      _i18next["default"].use(_i18nextXhrBackend["default"]);

      if (config.browserLanguageDetection) {
        var browserDetectors = new _i18nextBrowserLanguagedetector["default"]();
        config.customDetectors.forEach(function (detector) {
          return browserDetectors.addDetector(detector);
        });

        _i18next["default"].use(browserDetectors);
      }
    }

    config.use.forEach(function (x) {
      return _i18next["default"].use(x);
    });

    _i18next["default"].init(config);
  }

  return _i18next["default"];
};

exports["default"] = _default;

/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "JXmH":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

/***/ }),

/***/ "JfyS":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KYPk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInternals = void 0;

__webpack_require__("JfyS");

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var withInternals = function withInternals(WrappedComponent, config) {
  var WithInternals =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(WithInternals, _React$Component);

    function WithInternals() {
      (0, _classCallCheck2["default"])(this, WithInternals);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithInternals).apply(this, arguments));
    }

    (0, _createClass2["default"])(WithInternals, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, this.props, {
          nextI18NextInternals: config
        }));
      }
    }]);
    return WithInternals;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(WithInternals, "displayName", "withnextI18NextInternals(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")"));
  return WithInternals;
};

exports.withInternals = withInternals;

/***/ }),

/***/ "LJIG":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MVZn":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("lSNA");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "MbLX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Nav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      isLoggedIn
    } = this.props;
    return __jsx("nav", {
      className: "jsx-783480884"
    }, __jsx("ul", {
      className: "jsx-783480884"
    }, __jsx("li", {
      className: "jsx-783480884"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "jsx-783480884"
    }, "Home"))), __jsx("li", {
      className: "jsx-783480884"
    }, isLoggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/dashboard"
    }, __jsx("a", {
      className: "jsx-783480884"
    }, "Dashboard")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/login"
    }, __jsx("a", {
      className: "jsx-783480884"
    }, "Sign in")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "783480884"
    }, ["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;}", "nav.jsx-783480884{z-index:1000;background:transparent;text-align:center;color:rgba(43,23,147,1);position:fixed;top:0;width:100%;}", "ul.jsx-783480884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "nav.jsx-783480884>ul.jsx-783480884{padding:4px 16px;}", "li.jsx-783480884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;color:rgba(43,23,147,1);}", "a.jsx-783480884{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;cursor:pointer;color:rgba(43,23,147,1);}"]));
  }

}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Nav));

/***/ }),

/***/ "N2dI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = withTranslation;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _useTranslation3 = __webpack_require__("Sdxe");

var _utils = __webpack_require__("QhKH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef,
          rest = (0, _objectWithoutProperties2["default"])(_ref, ["forwardedRef"]);

      var _useTranslation = (0, _useTranslation3.useTranslation)(ns, rest),
          _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = _objectSpread({}, rest, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return _react["default"].createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;

    var forwardRef = function forwardRef(props, ref) {
      return _react["default"].createElement(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };

    return options.withRef ? _react["default"].forwardRef(forwardRef) : I18nextWithTranslation;
  };
}

/***/ }),

/***/ "NTP8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesToString = nodesToString;
exports.Trans = Trans;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _typeof2 = _interopRequireDefault(__webpack_require__("cDf5"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__("YD+2"));

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return _react["default"].isValidElement(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function nodesToString(startingString, children, index, i18nOptions) {
  if (!children) return '';
  var stringNode = startingString;
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  childrenArray.forEach(function (child, i) {
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      stringNode = "".concat(stringNode).concat(child);
    } else if (hasChildren(child)) {
      var elementTag = keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 1 && typeof hasChildren(child) === 'string' ? child.type : elementKey;

      if (child.props && child.props.i18nIsDynamicList) {
        // we got a dynamic list like "<ul>{['a', 'b'].map(item => ( <li key={item}>{item}</li> ))}</ul>""
        // the result should be "<0></0>" and not "<0><0>a</0><1>b</1></0>"
        stringNode = "".concat(stringNode, "<").concat(elementTag, "></").concat(elementTag, ">");
      } else {
        // regular case mapping the inner children
        stringNode = "".concat(stringNode, "<").concat(elementTag, ">").concat(nodesToString('', getChildren(child), i + 1, i18nOptions), "</").concat(elementTag, ">");
      }
    } else if (_react["default"].isValidElement(child)) {
      if (keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 0) {
        stringNode = "".concat(stringNode, "<").concat(child.type, "/>");
      } else {
        stringNode = "".concat(stringNode, "<").concat(elementKey, "></").concat(elementKey, ">");
      }
    } else if ((0, _typeof2["default"])(child) === 'object') {
      var clone = _objectSpread({}, child);

      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        stringNode = "".concat(stringNode, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        stringNode = "".concat(stringNode, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts) {
  if (targetString === '') return []; // check if contains tags we need to replace from html string to react nodes

  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString); // no need to replace tags in the targetstring

  if (!children && !emptyChildrenButNeedsHandling) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2["default"])(child) === 'object' && !_react["default"].isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  var interpolatedString = i18n.services.interpolator.interpolate(targetString, _objectSpread({}, data, {}, combinedTOpts), i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify["default"].parse("<0>".concat(interpolatedString, "</0>"));

  function mapAST(reactNode, astNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content;

      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react["default"].isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var childs = getChildren(child);
          var mappedChildren = mapAST(childs, node.children);
          var inner = hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), inner));
        } else if (emptyChildrenButNeedsHandling && (0, _typeof2["default"])(child) === 'object' && child.dummy && !isElement) {
          // we have a empty Trans node (the dummy element) with a targetstring that contains html tags needing
          // conversion to react nodes
          // so we just need to map the inner stuff
          var _inner = mapAST(reactNodes
          /* wrong but we need something */
          , node.children);

          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(_react["default"].createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner2 = mapAST(reactNodes
              /* wrong but we need something */
              , node.children);

              mem.push(_react["default"].createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner2));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner3 = mapAST(reactNodes
            /* wrong but we need something */
            , node.children);

            mem.push("<".concat(node.name, ">").concat(_inner3, "</").concat(node.name, ">"));
          }
        } else if ((0, _typeof2["default"])(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          // If component does not have children, but translation - has
          // with this in component could be components={[<span class='make-beautiful'/>]} and in translation - 'some text <0>some highlighted message</0>'
          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), translationContent));
        } else {
          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      tOptions = _ref.tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      additionalProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"]);
  var ReactI18nContext = (0, _react.useContext)(_context.I18nContext);

  var _ref2 = (0, _context.getHasUsedI18nextProvider)() ? ReactI18nContext || {} : {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  var reactI18nextOptions = _objectSpread({}, (0, _context.getDefaults)(), {}, i18n.options && i18n.options.react);

  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent; // prepare having a namespace

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString('', children, 0, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? {} : {
    interpolation: {
      prefix: '#$?',
      suffix: '?$#'
    }
  };

  var combinedTOpts = _objectSpread({}, tOptions, {
    count: count
  }, values, {}, interpolationOverride, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  if (!useAsParent) return renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts);
  return _react["default"].createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts));
}

/***/ }),

/***/ "Nbvl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subpathIsPresent = void 0;

__webpack_require__("sOEq");

var _url = __webpack_require__("bzos");

var subpathIsPresent = function subpathIsPresent(url, subpath) {
  if (typeof url !== 'string' || typeof subpath !== 'string') {
    return false;
  }

  var _parseUrl = (0, _url.parse)(url),
      pathname = _parseUrl.pathname;

  return pathname.length === subpath.length + 1 && pathname === "/".concat(subpath) || pathname.startsWith("/".concat(subpath, "/"));
};

exports.subpathIsPresent = subpathIsPresent;

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "O2ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dpnd");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MbLX");
/* harmony import */ var _components_common_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YgBE");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+ZiV");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_i18n__WEBPACK_IMPORTED_MODULE_10__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










class Login extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static getInitialProps() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token');
    return {
      loggedIn: !!token,
      namespacesRequired: ['login']
    };
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "forgotPassword", e => {
      e && e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/forgot-password');
    });

    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getFormFields = this.getFormFields.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  onChange({
    target: {
      value,
      name
    }
  }) {
    this.setState({
      [name]: value
    });
  }

  getFormFields() {
    return [{
      name: 'email',
      label: 'Email',
      value: this.state.email,
      type: 'email'
    }, {
      name: 'password',
      label: 'Password',
      value: this.state.password,
      type: 'password'
    }];
  }

  createAccount() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/create-account');
  }

  async onSubmit(e) {
    e && e.preventDefault();
    this.props.loginRequest(this.state);
  }

  render() {
    const {
      t
    } = this.props;
    return __jsx("div", {
      className: "jsx-2085888330"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
      className: "jsx-2085888330"
    }, "Login")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx("img", {
      style: {
        margin: '8em auto 4em',
        width: '225px',
        display: 'block',
        position: 'relative'
      },
      alt: "logo",
      src: "../static/logos/promptli-color.png",
      className: "jsx-2085888330"
    }), __jsx(_components_common_Form__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      onSubmit: this.onSubmit,
      submitBtnText: "Login",
      fields: this.getFormFields(),
      onChange: this.onChange,
      title: t('title')
    }), __jsx("div", {
      className: "jsx-2085888330"
    }, __jsx("p", {
      style: {
        textAlign: 'center',
        width: '100%'
      },
      className: "jsx-2085888330"
    }, this.props.t('noAccount'), ' ', __jsx("a", {
      style: {
        cursor: 'pointer',
        color: '#2a45ff'
      },
      role: "button",
      onClick: this.createAccount,
      className: "jsx-2085888330"
    }, t('createAccount')), ' '), __jsx("p", {
      style: {
        textAlign: 'center',
        width: '100%'
      },
      className: "jsx-2085888330"
    }, "Forgot Password?", ' ', __jsx("a", {
      style: {
        cursor: 'pointer',
        color: '#2a45ff'
      },
      role: "button",
      onClick: this.forgotPassword,
      className: "jsx-2085888330"
    }, "Click here to reset."), ' ')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330"
    }, []));
  }

}

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: payload => {
      dispatch(_actions_index__WEBPACK_IMPORTED_MODULE_6__[/* loginActions */ "b"].makeLoginRequest(payload));
    },
    checkAuth: () => dispatch(_actions_index__WEBPACK_IMPORTED_MODULE_6__[/* loginActions */ "b"].checkAuthRequest())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_lib_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])('login')(Login)));

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "PEN0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addSubpath", {
  enumerable: true,
  get: function get() {
    return _addSubpath.addSubpath;
  }
});
Object.defineProperty(exports, "consoleMessage", {
  enumerable: true,
  get: function get() {
    return _consoleMessage.consoleMessage;
  }
});
Object.defineProperty(exports, "isServer", {
  enumerable: true,
  get: function get() {
    return _isServer.isServer;
  }
});
Object.defineProperty(exports, "lngFromReq", {
  enumerable: true,
  get: function get() {
    return _lngFromReq.lngFromReq;
  }
});
Object.defineProperty(exports, "lngPathCorrector", {
  enumerable: true,
  get: function get() {
    return _lngPathCorrector.lngPathCorrector;
  }
});
Object.defineProperty(exports, "lngsToLoad", {
  enumerable: true,
  get: function get() {
    return _lngsToLoad.lngsToLoad;
  }
});
Object.defineProperty(exports, "redirectWithoutCache", {
  enumerable: true,
  get: function get() {
    return _redirectWithoutCache.redirectWithoutCache;
  }
});
Object.defineProperty(exports, "removeSubpath", {
  enumerable: true,
  get: function get() {
    return _removeSubpath.removeSubpath;
  }
});
Object.defineProperty(exports, "subpathFromLng", {
  enumerable: true,
  get: function get() {
    return _subpathFromLng.subpathFromLng;
  }
});
Object.defineProperty(exports, "subpathIsPresent", {
  enumerable: true,
  get: function get() {
    return _subpathIsPresent.subpathIsPresent;
  }
});
Object.defineProperty(exports, "subpathIsRequired", {
  enumerable: true,
  get: function get() {
    return _subpathIsRequired.subpathIsRequired;
  }
});

var _addSubpath = __webpack_require__("Io27");

var _consoleMessage = __webpack_require__("+90V");

var _isServer = __webpack_require__("SXFH");

var _lngFromReq = __webpack_require__("pi0J");

var _lngPathCorrector = __webpack_require__("8+l0");

var _lngsToLoad = __webpack_require__("XE+h");

var _redirectWithoutCache = __webpack_require__("d3BP");

var _removeSubpath = __webpack_require__("dQ6+");

var _subpathFromLng = __webpack_require__("ndRY");

var _subpathIsPresent = __webpack_require__("Nbvl");

var _subpathIsRequired = __webpack_require__("1SyV");

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "QhKH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.loadNamespaces = loadNamespaces;
exports.hasLoadedNamespace = hasLoadedNamespace;
exports.getDisplayName = getDisplayName;

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
} // not needed right now
//
// export function deprecated(...args) {
//   if (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
//     if (typeof args[0] === 'string') args[0] = `deprecation warning -> ${args[0]}`;
//     warnOnce(...args);
//   }
// }


function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    // delay ready if not yet initialized i18n instance
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        // due to emitter removing issue in i18next we need to delay remove
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1]; // we're in cimode so this shall pass

  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  }; // bound to trigger on event languageChanging
  // so set ready to false while we are changing the language
  // and namespace pending (depends on having a backend)


  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false; // loaded -> SUCCESS

  if (i18n.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

  if (!i18n.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "RNas":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),

/***/ "S1oo":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.bind");

/***/ }),

/***/ "SRmk":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),

/***/ "SXFH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = void 0;

var _detectNode = _interopRequireDefault(__webpack_require__("ZVxc"));

var isServer = function isServer() {
  return _detectNode["default"] && typeof window === 'undefined';
};

exports.isServer = isServer;

/***/ }),

/***/ "Sdxe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = __webpack_require__("cDcd");

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // assert we have the needed i18nInstance
  var i18nFromProps = props.i18n;
  var ReactI18nContext = (0, _react.useContext)(_context.I18nContext);

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? ReactI18nContext || {} : {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  var i18nOptions = _objectSpread({}, (0, _context.getDefaults)(), {}, i18n.options.react, {}, props);

  var useSuspense = i18nOptions.useSuspense; // prepare having a namespace

  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation']; // report namespaces as used

  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces); // are we ready? yes if all namespaces in first language are loaded already (either with data or empty object on failed load)

  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0, _utils.hasLoadedNamespace)(n, i18n, i18nOptions);
  }); // binding t function to namespace (acts also as rerender trigger)

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = (0, _react.useState)(getT()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1]; // seems we can't have functions as value -> wrap it in obj


  (0, _react.useEffect)(function () {
    var isMounted = true;
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore; // if not ready and not using suspense load the namespaces
    // in side effect and do not call resetT if unmounted

    if (!ready && !useSuspense) {
      (0, _utils.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted) setT(getT());
    } // bind events to trigger change, like languageChanged


    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset); // unbinding on unmount

    return function () {
      isMounted = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]); // re-run effect whenever list of namespaces changes

  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready; // return hook stuff if ready

  if (ready) return ret; // not yet loaded namespaces -> load them -> and return if useSuspense option set false

  if (!ready && !useSuspense) return ret; // not yet loaded namespaces -> load them -> and trigger suspense

  throw new Promise(function (resolve) {
    (0, _utils.loadNamespaces)(i18n, namespaces, function () {
      setT(getT());
      resolve();
    });
  });
}

/***/ }),

/***/ "SksO":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "SpiY":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.filter");

/***/ }),

/***/ "TGPV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./components/common/CommonButton.js


var __jsx = external_react_default.a.createElement;



const useStyles = Object(styles_["makeStyles"])(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const CommonButton = props => {
  const {
    variant,
    color,
    onClick,
    text
  } = props,
        rest = _objectWithoutProperties(props, ["variant", "color", "onClick", "text"]);

  const classes = useStyles();
  return __jsx(Button_default.a, Object(esm_extends["a" /* default */])({
    variant: variant || 'outlined',
    color: color || 'primary',
    className: classes.button,
    onClick: onClick
  }, rest), text);
};

/* harmony default export */ var common_CommonButton = __webpack_exports__["a"] = (CommonButton);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VI+R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRouter = void 0;

__webpack_require__("1eKl");

__webpack_require__("oTNv");

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _utils = __webpack_require__("PEN0");

/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var propertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'events'];
var coreMethods = ['reload', 'back', 'beforePopState', 'ready', 'prefetch'];
var wrappedMethods = ['push', 'replace'];

var wrapRouter = function wrapRouter(nextI18NextInternals) {
  var Router = {};
  propertyFields.forEach(function (field) {
    Object.defineProperty(Router, field, {
      get: function get() {
        return _router["default"][field];
      }
    });
  });
  coreMethods.forEach(function (method) {
    Router[method] = function () {
      return _router["default"][method].apply(_router["default"], arguments);
    };
  });
  wrappedMethods.forEach(function (method) {
    Router[method] = function (path, as, options) {
      var config = nextI18NextInternals.config,
          i18n = nextI18NextInternals.i18n;

      if ((0, _utils.subpathIsRequired)(config, i18n.languages[0])) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: path
        }, i18n.languages[0]),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _router["default"][method](correctedHref, correctedAs, options);
      }

      return _router["default"][method](path, as, options);
    };
  });
  return Router;
};

exports.wrapRouter = wrapRouter;

/***/ }),

/***/ "Vyig":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.map");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "WS1J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link["default"];
  }
});
Object.defineProperty(exports, "NextStaticProvider", {
  enumerable: true,
  get: function get() {
    return _NextStaticProvider["default"];
  }
});

var _Link = _interopRequireDefault(__webpack_require__("9J6S"));

var _NextStaticProvider = _interopRequireDefault(__webpack_require__("BQui"));

/***/ }),

/***/ "Wh1Y":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XE+h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lngsToLoad = void 0;

__webpack_require__("oTNv");

__webpack_require__("Wh1Y");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

__webpack_require__("RNas");

__webpack_require__("DKff");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

__webpack_require__("7RI2");

var lngsToLoad = function lngsToLoad(initialLng, fallbackLng, otherLanguages) {
  var languages = [];

  if (initialLng) {
    languages.push(initialLng);
  }

  if (fallbackLng) {
    if (typeof fallbackLng === 'string' && fallbackLng !== initialLng) {
      languages.push(fallbackLng);
    }

    if (Array.isArray(fallbackLng)) {
      languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng));
    } else if (initialLng) {
      if (typeof fallbackLng[initialLng] === 'string') {
        languages.push(fallbackLng[initialLng]);
      } else if (Array.isArray(fallbackLng[initialLng])) {
        languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng[initialLng]));
      }
    }

    if (fallbackLng["default"]) {
      languages.push(fallbackLng["default"]);
    }
  }

  if (initialLng && initialLng.includes('-') && Array.isArray(otherLanguages)) {
    var _initialLng$split = initialLng.split('-'),
        _initialLng$split2 = (0, _slicedToArray2["default"])(_initialLng$split, 1),
        languageFromLocale = _initialLng$split2[0];

    otherLanguages.forEach(function (otherLanguage) {
      if (otherLanguage === languageFromLocale) {
        languages.push(otherLanguage);
      }
    });
  }

  return languages;
};

exports.lngsToLoad = lngsToLoad;

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YD+2":
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YgBE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: ./components/common/FormTextInput.js
var __jsx = external_react_default.a.createElement;



const useStyles = Object(styles_["makeStyles"])(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const FormTextInput = ({
  onChange,
  value,
  name,
  label,
  type,
  multiline,
  disabled
}) => {
  const classes = useStyles();
  return __jsx(TextField_default.a, {
    id: label,
    label: label,
    className: classes.textField,
    value: value,
    onChange: onChange,
    name: name,
    margin: "normal",
    variant: "outlined",
    type: type,
    multiline: multiline,
    disabled: disabled,
    rows: multiline ? '4' : '1',
    fullWidth: true
  });
};

FormTextInput.defaultProps = {
  type: 'input',
  multiline: false,
  disabled: false
};
/* harmony default export */ var common_FormTextInput = (FormTextInput);
// EXTERNAL MODULE: ./components/common/CommonButton.js + 2 modules
var CommonButton = __webpack_require__("TGPV");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./components/common/Headline.js
var Headline_jsx = external_react_default.a.createElement;



const Headline_useStyles = Object(styles_["makeStyles"])({
  root: {
    width: '100%'
  }
});

const Headline = props => {
  const classes = Headline_useStyles();
  const {
    text,
    variant,
    align,
    gutterBottom,
    paragraph,
    display
  } = props;
  const displayType = ['caption', 'overline'].includes(variant) && 'block' || display;
  return Headline_jsx("div", {
    className: classes.root
  }, Headline_jsx(Typography_default.a, {
    variant: variant,
    display: displayType,
    align: align || 'left',
    gutterBottom: gutterBottom,
    paragraph: paragraph
  }, text));
};

Headline.defaultProps = {
  variant: 'h2',
  align: 'left',
  display: 'initial',
  gutterBottom: true,
  paragraph: false,
  color: 'inherit'
};
/* harmony default export */ var common_Headline = (Headline);
// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// CONCATENATED MODULE: ./components/common/SelectWrapper.js
var SelectWrapper_jsx = external_react_default.a.createElement;









const SelectWrapper_useStyles = Object(styles_["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const SelectWrapper = props => {
  const classes = SelectWrapper_useStyles();
  const {
    value,
    onChange,
    values,
    label
  } = props;
  return SelectWrapper_jsx(external_react_["Fragment"], null, SelectWrapper_jsx(FormControl_default.a, {
    className: classes.formControl
  }, SelectWrapper_jsx(InputLabel_default.a, {
    id: "mutiple-checkbox-label"
  }, label), SelectWrapper_jsx(Select_default.a, {
    labelId: "mutiple-checkbox-label",
    id: "mutiple-checkbox",
    multiple: true,
    value: value,
    onChange: onChange,
    input: SelectWrapper_jsx(Input_default.a, null),
    fullWidth: true,
    renderValue: selected => selected.join(', '),
    MenuProps: MenuProps
  }, values.map(val => SelectWrapper_jsx(MenuItem_default.a, {
    key: val,
    value: val
  }, SelectWrapper_jsx(Checkbox_default.a, {
    checked: value.indexOf(val) > -1
  }), SelectWrapper_jsx(ListItemText_default.a, {
    primary: val
  }))))));
};

/* harmony default export */ var common_SelectWrapper = (SelectWrapper);
// CONCATENATED MODULE: ./components/common/Form.js
var Form_jsx = external_react_default.a.createElement;






const FormContainer = external_styled_components_default.a.form.withConfig({
  displayName: "Form__FormContainer",
  componentId: "sc-15w58kd-0"
})(["width:50%;max-width:600px;min-width:300px;margin:0 auto;text-align:center;"]);
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "Form__Header",
  componentId: "sc-15w58kd-1"
})(["width:50%;max-width:600px;min-width:300px;margin:0 auto;"]);
const InputContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Form__InputContainer",
  componentId: "sc-15w58kd-2"
})(["display:block;width:80%;margin:0 auto;position:relative;"]);
const ButtonContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Form__ButtonContainer",
  componentId: "sc-15w58kd-3"
})(["width:35%;margin:0 1.5em;text-align:center;position:relative;display:inline-block;"]);

class Form_Form extends external_react_["Component"] {
  renderInputField(field) {
    return Form_jsx(InputContainer, {
      key: field.name
    }, Form_jsx(common_FormTextInput, {
      key: field.name,
      value: field.value,
      label: field.label,
      name: field.name,
      type: field.type,
      multiline: field.multiline,
      onChange: this.props.onChange
    }));
  }

  renderSelect(field) {
    return Form_jsx(InputContainer, {
      key: field.name
    }, Form_jsx(common_SelectWrapper, {
      values: field.values,
      value: field.value,
      onChange: field.onChange,
      label: field.label
    }));
  }

  renderInputs() {
    return this.props.fields.map(field => {
      switch (field.type) {
        case 'select':
          return this.renderSelect(field);

        case 'input':
        default:
          return this.renderInputField(field);
      }
    });
  }

  render() {
    const {
      title,
      onSubmit,
      onSecondaryAction,
      submitBtnText,
      secondaryBtnText
    } = this.props;
    return Form_jsx(external_react_["Fragment"], null, Form_jsx(Header, null, title && Form_jsx(common_Headline, {
      text: title,
      variant: "h4",
      align: "center"
    })), Form_jsx(FormContainer, {
      method: "POST",
      onSubmit: e => {
        if (e) {
          e.preventDefault();
        }

        return onSubmit;
      }
    }, this.renderInputs(), secondaryBtnText && Form_jsx(ButtonContainer, null, Form_jsx(CommonButton["a" /* default */], {
      text: secondaryBtnText,
      onClick: onSecondaryAction,
      color: "secondary",
      fullWidth: true
    })), Form_jsx(ButtonContainer, null, Form_jsx(CommonButton["a" /* default */], {
      text: submitBtnText,
      onClick: onSubmit,
      type: "submit",
      fullWidth: true
    }))));
  }

}

/* harmony default export */ var common_Form = __webpack_exports__["a"] = (Form_Form);

/***/ }),

/***/ "Yp/V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _context = __webpack_require__("xlah");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  (0, _context.usedI18nextProvider)(true);
  return _react["default"].createElement(_context.I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZK4Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appWithTranslation", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation.appWithTranslation;
  }
});
Object.defineProperty(exports, "withInternals", {
  enumerable: true,
  get: function get() {
    return _withInternals.withInternals;
  }
});

var _appWithTranslation = __webpack_require__("ijzy");

var _withInternals = __webpack_require__("KYPk");

/***/ }),

/***/ "ZVxc":
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "b8Gf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSSR = useSSR;

var _react = __webpack_require__("cDcd");

var _context = __webpack_require__("xlah");

function useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;
  var ReactI18nContext = (0, _react.useContext)(_context.I18nContext);

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? ReactI18nContext || {} : {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)(); // opt out if is a cloned instance, eg. created by i18next-express-middleware on request
  // -> do not set initial stuff on server side

  if (i18n.options && i18n.options.isClone) return; // nextjs / SSR: getting data from next.js or other ssr stack

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore; // add namespaces to the config - so a languageChange call loads all namespaces needed

    i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
      Object.keys(lngResources).forEach(function (ns) {
        if (mem.indexOf(ns) < -1) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d3BP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectWithoutCache = void 0;

var redirectWithoutCache = function redirectWithoutCache(res, redirectLocation) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.redirect(302, redirectLocation);
};

exports.redirectWithoutCache = redirectWithoutCache;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dQ6+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSubpath = void 0;

__webpack_require__("AN3u");

var removeSubpath = function removeSubpath(url, subpath) {
  return url.replace(subpath, '').replace(/(https?:\/\/)|(\/)+/g, "$1$2");
};

exports.removeSubpath = removeSubpath;

/***/ }),

/***/ "dpnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./constants/index.js + 3 modules
var constants = __webpack_require__("v0uu");

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__("yzAy");

// CONCATENATED MODULE: ./actions/dashboard/index.js


const dashboardActions = {
  initDashboardRequest() {
    return dispatch => {
      this.initDashboard();
      return api["a" /* default */].initDashboard().then(({
        data
      }) => {
        return dispatch(this.handleSuccess(constants["b" /* dashboardActionTypes */].INIT_DASHBOARD_SUCCESS, data));
      }).catch(e => dispatch(this.handleError(constants["b" /* dashboardActionTypes */].INIT_DASHBOARD_FAILURE, e)));
    };
  },

  initDashboard() {
    return {
      type: constants["b" /* dashboardActionTypes */].INIT_DASHBOARD_REQUEST
    };
  },

  handleSuccess(type, payload) {
    return {
      type,
      payload
    };
  },

  handleError(type, payload) {
    return {
      type,
      payload
    };
  },

  connectGoogleAccountReq() {
    return {
      type: constants["b" /* dashboardActionTypes */].CONNECT_GOOGLE_ACCOUNT_REQUEST
    };
  },

  connectGoogleAccount(payload) {
    return dispatch => {
      dispatch(this.connectGoogleAccountReq());
      api["a" /* default */].connectGoogleAccount(payload).then(({
        data
      }) => {
        window.location = data;
      }).catch(e => this.handleError(constants["b" /* dashboardActionTypes */].CONNECT_GOOGLE_ACCOUNT_FAILURE));
    };
  },

  createServiceRequest(payload) {
    return dispatch => {
      dispatch(this.createService());
      return api["a" /* default */].createService(payload).then(({
        data
      }) => this.createServiceSucces(data));
    };
  },

  createService() {
    return {
      type: constants["b" /* dashboardActionTypes */].CREATE_SERVICE_REQUEST
    };
  },

  createServiceSucces(payload) {
    return {
      type: constants["b" /* dashboardActionTypes */].CREATE_SERVICE_SUCCESS,
      payload
    };
  },

  createPackage() {
    return {
      type: constants["b" /* dashboardActionTypes */].CREATE_PACKAGE_REQUEST
    };
  },

  createPackageRequest(payload) {
    return dispatch => {
      dispatch(this.createPackage());
      return api["a" /* default */].createPackage(payload).then(({
        data
      }) => {
        return dispatch(this.createPackageSuccess(data));
      }).catch(e => this.createPackageError(e));
    };
  },

  createPackageSuccess(payload) {
    return {
      type: constants["b" /* dashboardActionTypes */].CREATE_PACKAGE_SUCCESS,
      payload
    };
  },

  createPackageError(error) {
    return {
      type: constants["b" /* dashboardActionTypes */].CREATE_PACKAGE_FAILURE,
      error
    };
  }

};
/* harmony default export */ var dashboard = (dashboardActions);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./actions/login.js





const loginActions = {
  loginRequest: () => {
    return {
      type: constants["c" /* loginActionTypes */].LOGIN_REQUEST
    };
  },

  makeLoginRequest(payload) {
    return async dispatch => {
      dispatch(this.loginRequest());
      return api["a" /* default */].authenticate(payload).then(response => {
        const {
          data
        } = response;
        router_default.a.push('/dashboard');
        external_js_cookie_default.a.set('token', data.token, {
          expires: 7
        });
        dispatch(this.loginSuccess(data));
        dispatch(dashboard.initDashboard());
      }).catch(e => dispatch(this.handleError(constants["c" /* loginActionTypes */].LOGIN_FAILURE, 'Invalid username or password')));
    };
  },

  loginSuccess(payload) {
    return {
      type: constants["c" /* loginActionTypes */].LOGIN_SUCCESS,
      payload
    };
  },

  logoutRequest() {
    return {
      type: constants["c" /* loginActionTypes */].LOGOUT_REQUEST
    };
  },

  makeLogoutRequest() {
    return dispatch => {
      dispatch(this.logoutRequest());
      return api["a" /* default */].logout().then(() => {
        external_js_cookie_default.a.remove('token');
        router_default.a.push('/login');
        return dispatch(this.handleSuccess(constants["c" /* loginActionTypes */].LOGOUT_SUCCESS));
      }).catch(e => dispatch(this.handleError(constants["c" /* loginActionTypes */].LOGIN_FAILURE)));
    };
  },

  checkAuth() {
    return {
      type: constants["c" /* loginActionTypes */].CHECK_AUTH
    };
  },

  checkAuthRequest() {
    return dispatch => {
      dispatch(this.checkAuth());
      return api["a" /* default */].checkAuth().then(({
        data
      }) => {
        external_js_cookie_default.a.set('token', data.token);
        dispatch(this.handleSuccess(constants["c" /* loginActionTypes */].AUTH_SUCCESS, data));
        return router_default.a.push('/dashboard');
      }).catch(e => {
        return dispatch(this.handleError(constants["c" /* loginActionTypes */].AUTH_FAILURE));
      });
    };
  },

  createUser() {
    return {
      type: constants["c" /* loginActionTypes */].CREATE_USER_REQUEST
    };
  },

  createUserRequest(payload) {
    return async dispatch => {
      dispatch(this.createUser());
      api["a" /* default */].createUser(payload).then(({
        data
      }) => {
        external_js_cookie_default.a.set('token', data.token);
        dispatch(this.handleSuccess(constants["c" /* loginActionTypes */].CREATE_USER_SUCCESS));
        dispatch(this.checkAuthRequest());
        return dispatch(this.loginSuccess({
          auth: data
        }));
      }).catch(e => dispatch(this.handleError(constants["c" /* loginActionTypes */].CREATE_USER_FAILURE)));
    };
  },

  handleError(type, payload) {
    return {
      type,
      payload
    };
  },

  handleSuccess(type, payload) {
    return {
      type,
      payload
    };
  },

  resetPassword() {
    return {
      type: constants["c" /* loginActionTypes */].RESET_PASSWORD_REQUEST
    };
  },

  resetPasswordRequest(payload) {
    this.resetPassword();
    return dispatch => {
      api["a" /* default */].resetPassword(payload).then(({
        data
      }) => {
        external_js_cookie_default.a.set('token', data.token);
        dispatch(this.checkAuthRequest());
        return dispatch(this.resetPasswordSuccess(data));
      }).catch(e => this.resetPasswordFailure(e));
    };
  },

  resetPasswordSuccess(payload) {
    return {
      type: constants["c" /* loginActionTypes */].RESET_PASSWORD_SUCCESS,
      payload
    };
  },

  resetPasswordFailure(payload) {
    return {
      type: constants["c" /* loginActionTypes */].RESET_PASSWORD_SUCCESS,
      payload
    };
  },

  forgotPassword() {
    return {
      type: constants["c" /* loginActionTypes */].FORGOT_PASSWORD_REQUEST
    };
  },

  forgotPasswordRequest(payload) {
    return dispatch => {
      this.forgotPassword();
      return api["a" /* default */].forgotPassword(payload).then(({
        data
      }) => {
        return dispatch(this.forgotPasswordSuccess(data));
      }).catch(e => this.forgotPasswordFailure(e));
    };
  },

  forgotPasswordSuccess(payload) {
    return {
      type: constants["c" /* loginActionTypes */].FORGOT_PASSWORD_SUCCESS,
      payload
    };
  },

  forgotPasswordFailure(payload) {
    return {
      type: constants["c" /* loginActionTypes */].FORGOT_PASSWORD_FAILURE,
      payload
    };
  }

};
/* harmony default export */ var login = (loginActions);
// CONCATENATED MODULE: ./actions/admin/index.js

const adminActions = {
  initAdmin() {
    return {
      type: constants["a" /* adminActionTypes */].INIT_ADMIN
    };
  }

};
/* harmony default export */ var admin = (adminActions);
// CONCATENATED MODULE: ./actions/index.js
/* concated harmony reexport dashboardActions */__webpack_require__.d(__webpack_exports__, "a", function() { return dashboard; });
/* concated harmony reexport loginActions */__webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* unused concated harmony import adminActions */
// ACTIONS





/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "edCo":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "fhoN":
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "gKgN":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "ijzy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appWithTranslation = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("MVZn"));

__webpack_require__("HikA");

__webpack_require__("oTNv");

__webpack_require__("RNas");

__webpack_require__("DKff");

__webpack_require__("JfyS");

__webpack_require__("7RI2");

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _regenerator = _interopRequireDefault(__webpack_require__("o0o1"));

__webpack_require__("8IDA");

__webpack_require__("edCo");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("yXPU"));

__webpack_require__("S1oo");

__webpack_require__("AN3u");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

__webpack_require__("SpiY");

__webpack_require__("Vyig");

__webpack_require__("sstt");

__webpack_require__("gKgN");

__webpack_require__("LJIG");

__webpack_require__("jKmj");

__webpack_require__("JXmH");

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("4Q3z");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("0TPh"));

var _reactI18next = __webpack_require__("pH5e");

var _utils = __webpack_require__("PEN0");

var _components = __webpack_require__("WS1J");

var appWithTranslation = function appWithTranslation(WrappedComponent) {
  var WrappedComponentWithSSR = (0, _reactI18next.withSSR)()(WrappedComponent);
  var config = this.config,
      consoleMessage = this.consoleMessage,
      i18n = this.i18n;

  var clientLoadNamespaces = function clientLoadNamespaces(lng, namespaces) {
    return Promise.all(namespaces.filter(function (ns) {
      return !i18n.hasResourceBundle(lng, ns);
    }).map(function (ns) {
      return i18n.reloadResources(lng, ns);
    }));
  };

  var AppWithTranslation =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(AppWithTranslation, _React$Component);

    function AppWithTranslation(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, AppWithTranslation);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AppWithTranslation).call(this, props));

      if (!(0, _utils.isServer)()) {
        var changeLanguageCallback = function changeLanguageCallback(prevLng, newLng) {
          var router = props.router;
          var pathname = router.pathname,
              asPath = router.asPath,
              query = router.query;
          var routeInfo = {
            pathname: pathname,
            query: query
          };

          if (i18n.initializedLanguageOnce && typeof newLng === 'string' && prevLng !== newLng) {
            var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
              as: asPath,
              href: routeInfo
            }, newLng),
                as = _lngPathCorrector.as,
                href = _lngPathCorrector.href;

            router.replace(href, as);
          }
        };

        var changeLanguage = i18n.changeLanguage.bind(i18n);

        i18n.changeLanguage =
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(newLng) {
            var callback,
                prevLng,
                usedNamespaces,
                _args = arguments;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    callback = _args.length > 1 && _args[1] !== undefined ? _args[1] : function () {
                      return null;
                    };
                    prevLng = i18n.language;

                    if (!(typeof newLng === 'string' && i18n.initializedLanguageOnce === true)) {
                      _context.next = 6;
                      break;
                    }

                    usedNamespaces = Object.entries(i18n.reportNamespaces.usedNamespaces).filter(function (x) {
                      return x[1] === true;
                    }).map(function (x) {
                      return x[0];
                    });
                    _context.next = 6;
                    return clientLoadNamespaces(newLng, usedNamespaces);

                  case 6:
                    return _context.abrupt("return", changeLanguage(newLng, function () {
                      changeLanguageCallback(prevLng, newLng);
                      callback();
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

      return _this;
    }

    (0, _createClass2["default"])(AppWithTranslation, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            initialLanguage = _this$props.initialLanguage,
            initialI18nStore = _this$props.initialI18nStore,
            i18nServerInstance = _this$props.i18nServerInstance;
        return _react["default"].createElement(_reactI18next.I18nextProvider, {
          i18n: i18nServerInstance || i18n
        }, _react["default"].createElement(_components.NextStaticProvider, null, _react["default"].createElement(WrappedComponentWithSSR, (0, _extends2["default"])({
          initialLanguage: initialLanguage,
          initialI18nStore: initialI18nStore
        }, this.props))));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee2(ctx) {
          var wrappedComponentProps, req, initialI18nStore, initialLanguage, i18nServerInstance, namespacesRequired, fallbackLng, languagesToLoad;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  wrappedComponentProps = {
                    pageProps: {}
                  };

                  if (!WrappedComponent.getInitialProps) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return WrappedComponent.getInitialProps(ctx);

                case 4:
                  wrappedComponentProps = _context2.sent;

                case 5:
                  if (typeof wrappedComponentProps.pageProps === 'undefined') {
                    consoleMessage('error', 'If you have a getInitialProps method in your custom _app.js file, you must explicitly return pageProps. For more information, see: https://github.com/zeit/next.js#custom-app');
                  }
                  /*
                    Initiate vars to return
                  */


                  req = ctx.ctx.req;
                  initialI18nStore = {};
                  initialLanguage = null;
                  i18nServerInstance = null;
                  /*
                    Step 1: Determine initial language
                  */

                  if (!(req && req.i18n)) {
                    _context2.next = 16;
                    break;
                  }

                  initialLanguage = (0, _utils.lngFromReq)(req);
                  /*
                    Perform a lang change in case we're not on the right lang
                  */

                  _context2.next = 14;
                  return req.i18n.changeLanguage(initialLanguage);

                case 14:
                  _context2.next = 17;
                  break;

                case 16:
                  if (Array.isArray(i18n.languages) && i18n.languages.length > 0) {
                    initialLanguage = i18n.language;
                  }

                case 17:
                  /*
                    Step 2: Determine namespace dependencies
                  */
                  namespacesRequired = config.ns;

                  if (Array.isArray(wrappedComponentProps.pageProps.namespacesRequired)) {
                    namespacesRequired = wrappedComponentProps.pageProps.namespacesRequired;
                  } else {
                    consoleMessage('warn', "You have not declared a namespacesRequired array on your page-level component: ".concat(ctx.Component.displayName || ctx.Component.name || 'Component', ". This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app. For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies"));
                  }
                  /*
                    We must always send down the defaultNS, otherwise
                    the client will trigger a request for it and issue
                    the "Did not expect server HTML to contain a <h1> in <div>"
                    error
                  */


                  if (typeof config.defaultNS === 'string' && !namespacesRequired.includes(config.defaultNS)) {
                    namespacesRequired.push(config.defaultNS);
                  }
                  /*
                    Step 3: Perform data fetching, depending on environment
                  */


                  if (!(req && req.i18n)) {
                    _context2.next = 26;
                    break;
                  }

                  /*
                    Detect the languages to load based upon the fallbackLng configuration
                  */
                  fallbackLng = config.fallbackLng;
                  languagesToLoad = (0, _utils.lngsToLoad)(initialLanguage, fallbackLng, config.otherLanguages);
                  /*
                    Initialise the store with the languagesToLoad and
                    necessary namespaces needed to render this specific tree
                  */

                  languagesToLoad.forEach(function (lng) {
                    initialI18nStore[lng] = {};
                    namespacesRequired.forEach(function (ns) {
                      initialI18nStore[lng][ns] = (req.i18n.services.resourceStore.data[lng] || {})[ns] || {};
                    });
                  });
                  _context2.next = 30;
                  break;

                case 26:
                  if (!(Array.isArray(i18n.languages) && i18n.languages.length > 0)) {
                    _context2.next = 30;
                    break;
                  }

                  _context2.next = 29;
                  return clientLoadNamespaces(i18n.languages[0], namespacesRequired);

                case 29:
                  initialI18nStore = i18n.store.data;

                case 30:
                  /*
                    Step 4: Overwrite i18n.toJSON method to be able to serialize the instance
                  */
                  if (req && req.i18n) {
                    req.i18n.toJSON = function () {
                      return null;
                    };

                    i18nServerInstance = req.i18n;
                  }
                  /*
                    `pageProps` will get serialized automatically by NextJs
                  */


                  return _context2.abrupt("return", (0, _objectSpread2["default"])({
                    initialI18nStore: initialI18nStore,
                    initialLanguage: initialLanguage,
                    i18nServerInstance: i18nServerInstance
                  }, wrappedComponentProps));

                case 32:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getInitialProps(_x2) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);
    return AppWithTranslation;
  }(_react["default"].Component);

  return (0, _hoistNonReactStatics["default"])((0, _router.withRouter)(AppWithTranslation), WrappedComponent, {
    getInitialProps: true
  });
};

exports.appWithTranslation = appWithTranslation;

/***/ }),

/***/ "jKmj":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.to-string");

/***/ }),

/***/ "jVQS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig = void 0;

__webpack_require__("oTNv");

__webpack_require__("AN3u");

__webpack_require__("Vyig");

var _objectSpread2 = _interopRequireDefault(__webpack_require__("MVZn"));

__webpack_require__("66ur");

__webpack_require__("SpiY");

var _defaultConfig = __webpack_require__("HOiv");

var _isServer = __webpack_require__("SXFH");

var deepMergeObjects = ['backend', 'detection'];

var dedupe = function dedupe(names) {
  return names.filter(function (v, i) {
    return names.indexOf(v) === i;
  });
};

var createConfig = function createConfig(userConfig) {
  if (typeof userConfig.localeSubpaths === 'string') {
    throw new Error('The localeSubpaths option has been changed to an object. Please refer to documentation.');
  } // Initial merge of default and user-provided config


  var combinedConfig = (0, _objectSpread2["default"])({}, _defaultConfig.defaultConfig, userConfig); // Sensible defaults to prevent user duplication

  combinedConfig.allLanguages = dedupe(combinedConfig.otherLanguages.concat([combinedConfig.defaultLanguage]));
  combinedConfig.whitelist = combinedConfig.allLanguages;
  var allLanguages = combinedConfig.allLanguages,
      defaultLanguage = combinedConfig.defaultLanguage,
      localeExtension = combinedConfig.localeExtension,
      localePath = combinedConfig.localePath,
      localeStructure = combinedConfig.localeStructure;

  if ((0, _isServer.isServer)()) {
    var fs = eval("require('fs')");

    var path = __webpack_require__("oyvS"); // Validate defaultNS
    // https://github.com/isaachinman/next-i18next/issues/358


    if (false) { var defaultNSExists, defaultNSPath; } // Set server side backend


    combinedConfig.backend = {
      loadPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension)),
      addPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)) // Set server side preload (languages and namespaces)

    };
    combinedConfig.preload = allLanguages;

    if (!combinedConfig.ns) {
      var getAllNamespaces = function getAllNamespaces(p) {
        return fs.readdirSync(p).map(function (file) {
          return file.replace(".".concat(localeExtension), '');
        });
      };

      combinedConfig.ns = getAllNamespaces(path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage)));
    }
  } else {
    // Set client side backend
    combinedConfig.backend = {
      loadPath: "/".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension),
      addPath: "/".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)
    };
    combinedConfig.ns = [combinedConfig.defaultNS];
  } // Set fallback language to defaultLanguage in production


  if (!userConfig.fallbackLng) {
    combinedConfig.fallbackLng =  true ? combinedConfig.defaultLanguage : undefined;
  } // Deep merge with overwrite - goes last


  deepMergeObjects.forEach(function (obj) {
    if (userConfig[obj]) {
      combinedConfig[obj] = (0, _objectSpread2["default"])({}, _defaultConfig.defaultConfig[obj], userConfig[obj]);
    }
  });
  return combinedConfig;
};

exports.createConfig = createConfig;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "ndRY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subpathFromLng = void 0;

var subpathFromLng = function subpathFromLng(config, language) {
  if (typeof language !== 'string') {
    return null;
  }

  var subpath = config.localeSubpaths[language];

  if (typeof subpath !== 'string') {
    return null;
  }

  return subpath;
};

exports.subpathFromLng = subpathFromLng;

/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "oTNv":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.for-each");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pH5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.withTranslation;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _Translation.Translation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withSSR", {
  enumerable: true,
  get: function get() {
    return _withSSR.withSSR;
  }
});
Object.defineProperty(exports, "useSSR", {
  enumerable: true,
  get: function get() {
    return _useSSR.useSSR;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "initReactI18next", {
  enumerable: true,
  get: function get() {
    return _context.initReactI18next;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "composeInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.composeInitialProps;
  }
});
Object.defineProperty(exports, "getInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.getInitialProps;
  }
});

var _Trans = __webpack_require__("NTP8");

var _useTranslation = __webpack_require__("Sdxe");

var _withTranslation = __webpack_require__("N2dI");

var _Translation = __webpack_require__("5ZW6");

var _I18nextProvider = __webpack_require__("Yp/V");

var _withSSR = __webpack_require__("0LgW");

var _useSSR = __webpack_require__("b8Gf");

var _context = __webpack_require__("xlah");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "pi0J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lngFromReq = void 0;

__webpack_require__("RNas");

__webpack_require__("DKff");

__webpack_require__("SRmk");

var lngFromReq = function lngFromReq(req) {
  if (!req.i18n) {
    return null;
  }

  var _req$i18n$options = req.i18n.options,
      allLanguages = _req$i18n$options.allLanguages,
      defaultLanguage = _req$i18n$options.defaultLanguage,
      fallbackLng = _req$i18n$options.fallbackLng;
  var fallback = fallbackLng || defaultLanguage;

  if (!req.i18n.languages) {
    return typeof fallback === 'string' ? fallback : null;
  }

  var language = req.i18n.languages.find(function (l) {
    return allLanguages.includes(l);
  }) || fallback;

  if (typeof language === 'string') {
    return language;
  }

  return null;
};

exports.lngFromReq = lngFromReq;

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sOEq":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.starts-with");

/***/ }),

/***/ "sstt":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "v0uu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./constants/dashboard/index.js
const dashboardActionTypes = {
  INIT_DASHBOARD_REQUEST: 'DASHBOARD/INIT_DASHBOARD_REQUEST',
  INIT_DASHBOARD_SUCCESS: 'DASHBOARD/INIT_DASHBOARD_SUCCESS',
  INIT_DASHBOARD_FAILURE: 'DASHBOARD/INIT_DASHBOARD_FAILURE',
  DASHBOARD_READY: 'DASHBOARD/DASHBOARD_READY',
  CONNECT_GOOGLE_ACCOUNT: 'DASHBOARD/CONNECT_GOOGLE_ACCOUNT',
  CONNECT_GOOGLE_ACCOUNT_REQUEST: 'DASHBOARD/CONNECT_GOOGLE_ACCOUNT_REQUEST',
  CONNECT_GOOGLE_ACCOUNT_FAILURE: 'DASHBOARD/CONNECT_GOOGLE_ACCOUNT_FAILURE',
  CONNECT_GOOGLE_ACCOUNT_SUCCESS: 'DASHBOARD/CONNECT_GOOGLE_ACCOUNT_SUCCESS',
  CREATE_PACKAGE_REQUEST: 'DASHBOARD/CREATE_PACKAGE_REQUEST',
  CREATE_PACKAGE_SUCCESS: 'DASHBOARD/CREATE_PACKAGE_SUCCESS',
  CREATE_PACKAGE_FAILURE: 'DASHBOARD/CREATE_PACKAGE_FAILURE',
  CREATE_SERVICE_REQUEST: 'DASHBOARD/CREATE_SERVICE_REQUEST',
  CREATE_SERVICE_SUCCESS: 'DASHBOARD/CREATE_SERVICE_SUCCESS',
  CREATE_SERVICE_FAILURE: 'DASHBOARD/CREATE_SERVICE_FAILURE'
};
// CONCATENATED MODULE: ./constants/login.js
const loginActionTypes = {
  LOGIN_REQUEST: 'LOGIN/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN/LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGIN/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGIN/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGIN/LOGOUT_FAILURE',
  CHECK_AUTH: 'LOGIN/CHECK_AUTH',
  AUTH_SUCCESS: 'LOGIN/AUTH_SUCCESS',
  AUTH_FAILURE: 'LOGIN/AUTH_FAILURE',
  CREATE_USER_REQUEST: 'LOGIN/CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'LOGIN/CREATE_USER_SUCCESS',
  CREATE_USER_FAILURE: 'LOGIN/CREATE_USER_FAILURE',
  FORGOT_PASSWORD_REQUEST: 'LOGIN/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'LOGIN/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE: 'LOGIN/FORGOT_PASSWORD_FAILURE',
  RESET_PASSWORD_REQUEST: 'LOGIN/RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'LOGIN/RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'LOGIN/RESET_PASSWORD_FAILURE'
};
// CONCATENATED MODULE: ./constants/admin/index.js
const adminActionTypes = {
  INIT_ADMIN: 'ADMIN/INIT_ADMIN',
  ADMIN_READY: 'ADMIN/ADMIN_READY'
};
// CONCATENATED MODULE: ./constants/index.js
/* unused harmony export actionTypes */
/* concated harmony reexport dashboardActionTypes */__webpack_require__.d(__webpack_exports__, "b", function() { return dashboardActionTypes; });
/* concated harmony reexport loginActionTypes */__webpack_require__.d(__webpack_exports__, "c", function() { return loginActionTypes; });
/* concated harmony reexport adminActionTypes */__webpack_require__.d(__webpack_exports__, "a", function() { return adminActionTypes; });



const actionTypes = {
  DEFAULT_ACTION: 'REDUX_INIT'
};


/***/ }),

/***/ "v9uU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wrapRouter", {
  enumerable: true,
  get: function get() {
    return _wrapRouter.wrapRouter;
  }
});

var _wrapRouter = __webpack_require__("VI+R");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xlah":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usedI18nextProvider = usedI18nextProvider;
exports.getHasUsedI18nextProvider = getHasUsedI18nextProvider;
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.composeInitialProps = composeInitialProps;
exports.getInitialProps = getInitialProps;
exports.initReactI18next = exports.ReportNamespaces = exports.I18nContext = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  // nsMode: 'fallback' // loop through all namespaces given to hook, HOC, render prop for key lookup
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  // hashTransKey: key => key // calculate a key for Trans component based on defaultValue
  useSuspense: true
};
var i18nInstance;
var hasUsedI18nextProvider;

var I18nContext = _react["default"].createContext();

exports.I18nContext = I18nContext;

function usedI18nextProvider(used) {
  hasUsedI18nextProvider = used;
}

function getHasUsedI18nextProvider() {
  return hasUsedI18nextProvider;
}

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread({}, defaultOptions, {}, options);
}

function getDefaults() {
  return defaultOptions;
}

var ReportNamespaces =
/*#__PURE__*/
function () {
  function ReportNamespaces() {
    (0, _classCallCheck2["default"])(this, ReportNamespaces);
    this.usedNamespaces = {};
  }

  (0, _createClass2["default"])(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();

exports.ReportNamespaces = ReportNamespaces;

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.initReactI18next = initReactI18next;

function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(_objectSpread({}, componentsInitialProps, {}, i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  }; // Avoid async for now - so we do not need to pull in regenerator
  // return async ctx => {
  //   const componentsInitialProps = ForComponent.getInitialProps
  //     ? await ForComponent.getInitialProps(ctx)
  //     : {};
  //   const i18nInitialProps = getInitialProps();
  //   return {
  //     ...componentsInitialProps,
  //     ...i18nInitialProps,
  //   };
  // };
}

function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLev":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

__webpack_require__("1eKl");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.withTranslation;
  }
});
exports["default"] = void 0;

__webpack_require__("S1oo");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _reactI18next = __webpack_require__("pH5e");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("0TPh"));

var _createConfig = __webpack_require__("jVQS");

var _createI18nextClient = _interopRequireDefault(__webpack_require__("IoTv"));

var _hocs = __webpack_require__("ZK4Y");

var _utils = __webpack_require__("PEN0");

var _components = __webpack_require__("WS1J");

var _router = __webpack_require__("v9uU");

var NextI18Next = function NextI18Next(userConfig) {
  (0, _classCallCheck2["default"])(this, NextI18Next);
  (0, _defineProperty2["default"])(this, "Trans", void 0);
  (0, _defineProperty2["default"])(this, "Link", void 0);
  (0, _defineProperty2["default"])(this, "Router", void 0);
  (0, _defineProperty2["default"])(this, "i18n", void 0);
  (0, _defineProperty2["default"])(this, "config", void 0);
  (0, _defineProperty2["default"])(this, "useTranslation", void 0);
  (0, _defineProperty2["default"])(this, "withTranslation", void 0);
  (0, _defineProperty2["default"])(this, "appWithTranslation", void 0);
  (0, _defineProperty2["default"])(this, "consoleMessage", void 0);
  (0, _defineProperty2["default"])(this, "withNamespaces", void 0);
  this.config = (0, _createConfig.createConfig)(userConfig);
  this.consoleMessage = _utils.consoleMessage.bind(this);
  /* Validation */

  if (this.config.otherLanguages.length <= 0) {
    throw new Error('To properly initialise a next-i18next instance you must provide one or more locale codes in config.otherLanguages.');
  }

  this.withNamespaces = function () {
    throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
  };

  this.i18n = (0, _createI18nextClient["default"])(this.config);
  this.appWithTranslation = _hocs.appWithTranslation.bind(this);

  this.withTranslation = function (namespace, options) {
    return function (Component) {
      return (0, _hoistNonReactStatics["default"])((0, _reactI18next.withTranslation)(namespace, options)(Component), Component);
    };
  };

  var nextI18NextInternals = {
    config: this.config,
    i18n: this.i18n
  };
  this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
  this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
  /* Directly export `react-i18next` methods */

  this.Trans = _reactI18next.Trans;
  this.useTranslation = _reactI18next.useTranslation;
};

exports["default"] = NextI18Next;

/***/ }),

/***/ "yXPU":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "yzAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const {
  API_BASE_URL
} = process.env;
const API = {
  token() {
    return js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
  },

  get(resource, config = {}) {
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
      method: 'get',
      url: `${API_BASE_URL}/${resource}`,
      headers: {
        Authorization: `JWT ${this.token()}`,
        'Content-Type': 'application/json'
      }
    }, config));
  },

  post(resource, payload, config = {}) {
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
      method: 'post',
      url: `${API_BASE_URL}/${resource}`,
      headers: {
        Authorization: `JWT ${this.token()}`,
        'Content-Type': 'application/json'
      },
      data: payload
    }, config));
  },

  update(resource, payload, id, config = {}) {
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
      method: 'put',
      url: `${API_BASE_URL}/${resource}/${id}`,
      headers: {
        Authorization: `JWT ${this.token()}`,
        'Content-Type': 'application/json'
      },
      data: payload
    }, config));
  },

  getTableData(resource, headersArray) {
    return this.get(resource).then(response => {
      const {
        data
      } = response;

      let headers = headersArray || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data[0]);

      headers = headers.map(header => ({
        field: header,
        title: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.startCase(header.toUpperCase()),
        type: this.getDataType(data[0][header])
      }));
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(resolve => resolve({
        columns: data,
        headers
      }));
    }).catch(e => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => reject('Something went wrong')));
  },

  authenticate({
    email,
    password
  }) {
    return this.post('auth', {
      email,
      password
    });
  },

  logout() {
    return this.get('auth/logout');
  },

  checkAuth() {
    return this.get('auth/check-auth');
  },

  connectGoogleAccount(payload) {
    return this.post('oauth/google/connect', payload);
  },

  forgotPassword(payload) {
    return this.post('auth/forgot-password', payload);
  },

  resetPassword(payload) {
    return this.post('auth/reset-password', payload);
  },

  createUser({
    email,
    password,
    name
  }) {
    return this.post('user', {
      email,
      password,
      name
    });
  },

  initDashboard() {
    return this.get('dashboard');
  },

  fetchProfile() {
    return this.get('dashboard/me');
  },

  updateUser(id, payload) {
    return this.update('user', payload, id);
  },

  updateAccount(id, payload) {
    return this.update('account', payload, id);
  },

  createPackage(payload) {
    return this.post('packages', payload);
  },

  fetchPackages() {
    return this.get('packages');
  },

  updatePackage(id, payload) {
    return this.update('packages', payload, id);
  },

  createService(payload) {
    return this.post('services', payload);
  },

  fetchServices() {
    return this.get('services');
  },

  updateService(id, payload) {
    return this.update('services', payload, id);
  },

  fetchReservations() {
    return this.get('reservations');
  },

  updateReservation(id, payload) {
    return this.update('reservations', payload, id);
  },

  // Utils
  getDataType(type) {
    switch (typeof type) {
      case 'string':
        return 'string';

      case 'number':
        return 'numeric';

      case 'boolean':
        return 'boolean';

      default:
        return 'string';
    }
  },

  handleError({
    error
  }) {},

  handleSuccess({
    success
  }) {}

};
/* harmony default export */ __webpack_exports__["a"] = (API);

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });