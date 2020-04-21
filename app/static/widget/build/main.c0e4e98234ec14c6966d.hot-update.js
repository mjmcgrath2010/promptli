webpackHotUpdatePromptliWidget("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ \"./node_modules/preact/hooks/dist/hooks.module.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Button */ \"./src/components/Button.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar App = function App(props) {\n  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    dialogOpen: false\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setState(_objectSpread({}, state, {}, props));\n  }, []);\n\n  var openDialog = function openDialog() {\n    return setState({\n      dialogOpen: true\n    });\n  };\n\n  var closeDialog = function closeDialog() {\n    return setState({\n      dialogOpen: false\n    });\n  };\n\n  var title = state.title,\n      btnText = state.btnText,\n      dialogOpen = state.dialogOpen;\n  return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: openDialog,\n    text: btnText || 'Click here!'\n  }), dialogOpen && Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_components_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: title,\n    onClose: closeDialog\n  }));\n};\n\nvar init = function init(config, selector) {\n  return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(App, config), document.getElementById(selector));\n};\nvar wrapper = document.getElementById('promptli-widget-preview-container');\nwrapper ? init({\n  title: 'hello world!'\n}, 'promptli-widget-preview-container') : false;\n\n//# sourceURL=webpack://PromptliWidget/./src/index.js?");

/***/ })

})