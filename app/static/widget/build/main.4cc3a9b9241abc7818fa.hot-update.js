webpackHotUpdatePromptliWidget("main",{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/app/node_modules/webpack/buildin/module.js'\");\n\n//# sourceURL=webpack://PromptliWidget/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/components/DateSelector.js":
/*!****************************************!*\
  !*** ./src/components/DateSelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datepickerdate/lib/index.css */ \"./node_modules/datepickerdate/lib/index.css\");\n/* harmony import */ var datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var datepickerdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datepickerdate */ \"./node_modules/datepickerdate/lib/index.esm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n //https://www.npmjs.com/package/datepickerdate\n// js file with bundler(webpack)\n\n\n\n\nvar DateSelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n\nvar DateSelector = function DateSelector(props) {\n  var title = props.title;\n\n  var onDateChanged = function onDateChanged(val) {\n    return console.log(val);\n  };\n\n  return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(DateSelectorContainer, null, title, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(datepickerdate__WEBPACK_IMPORTED_MODULE_4__[\"Datepicker\"], {\n    name: \"yourFormControlName\",\n    value: moment__WEBPACK_IMPORTED_MODULE_5___default()().format('MM/DD/YYYY'),\n    placeholder: \"Your custom placeholder\",\n    onDateChanged: onDateChanged\n  }));\n};\n\nDateSelector.defaultProps = {};\nDateSelector.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateSelector);\n\n//# sourceURL=webpack://PromptliWidget/./src/components/DateSelector.js?");

/***/ })

})