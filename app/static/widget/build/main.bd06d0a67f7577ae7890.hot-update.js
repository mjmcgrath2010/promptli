webpackHotUpdatePromptliWidget("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/datepickerdate/lib/index.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/datepickerdate/lib/index.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".dpd .calendar{position:absolute;top:100%;left:0;background-color:#fff;border-radius:4px;padding:.5rem 1rem 1rem;z-index:1;box-shadow:0 2px 6px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.07);animation:fade-in .2s cubic-bezier(0,0,.4,1.5)}@keyframes fade-in{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.dpd .monthPicker{display:flex;align-items:center;margin-bottom:.5rem}.dpd .nextMonth,.dpd .prevMonth{display:flex;align-items:center;width:100%}.dpd .prevMonth{justify-content:flex-start}.dpd .nextMonth{justify-content:flex-end}.dpd .monthArrow{font-size:2rem;line-height:0}.dpd .monthYearLabel{white-space:nowrap;font-weight:600}.dpd .dayLabels{display:flex;color:#848f99;margin-bottom:.5rem;font-size:.8rem}.dpd .dayLabel{flex-basis:14.2857%;min-width:14.2857%;text-align:center;font-size:.65rem;font-weight:600;letter-spacing:.04rem}.dpd .dateLabels{display:flex;flex-wrap:wrap;border-left:1px solid #f1f1f1;border-top:1px solid #f1f1f1}.dpd .dateLabel{flex-basis:14.2857%;min-width:14.2857%;border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display:flex;align-items:center;justify-content:center;padding:.5rem;font-size:1rem;cursor:pointer}.dpd .dateLabel:not(.currentDay):hover{background-color:#f1f1f1}.dpd .today{position:relative}.dpd .today:after{content:\\\"\\\";position:absolute;right:0;bottom:0;border-bottom:.75em solid #20b2aa;border-left:.75em solid transparent;border-top:.75em solid transparent;background-color:transparent}.dpd .notInMonth{color:#9e9e9e}.dpd .currentDay{background-color:#000;color:#fff}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://PromptliWidget/./node_modules/datepickerdate/lib/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://PromptliWidget/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/datepickerdate/lib/index.css":
/*!***************************************************!*\
  !*** ./node_modules/datepickerdate/lib/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/datepickerdate/lib/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/datepickerdate/lib/index.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/datepickerdate/lib/index.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://PromptliWidget/./node_modules/datepickerdate/lib/index.css?");

/***/ }),

/***/ "./node_modules/datepickerdate/lib/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/datepickerdate/lib/index.esm.js ***!
  \******************************************************/
/*! exports provided: Datepicker, WEEK_DAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Datepicker\", function() { return S; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEEK_DAYS\", function() { return y; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\nfunction r(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function\");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return t}function d(t,e){return!e||\"object\"!=typeof e&&\"function\"!=typeof e?f(t):e}function h(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||\"[object Arguments]\"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}()}var p=(new Date).getFullYear(),g=(new Date).getMonth()+1,y=h(Array(7).keys()).map((function(t){return new Date(2017,9,t+1).toLocaleString(void 0,{weekday:\"short\"})})),v=h(Array(12).keys()).map((function(t){return new Date(2017,t,1).toLocaleString(void 0,{month:\"long\"})})),w=function(t,e){return\"\".concat(t).padStart(e,\"0\")},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=[4,6,9,11],r=e%4==0;return 2===t?r?29:28:n.includes(t)?30:31},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return new Date(\"\".concat(e,\"-\").concat(w(t,2),\"-01\")).getDay()+1},D=function(t){var e=\"[object Date]\"===Object.prototype.toString.call(t),n=t&&!Number.isNaN(t.valueOf());return e&&n},O=function(t,e){if(!D(t)||!D(e))throw new Error(\"Value was not a Date object\");var n=e.getDate(),r=e.getMonth()+1,o=e.getFullYear(),a=t.getDate(),i=t.getMonth()+1,c=t.getFullYear();return n===a&&r===i&&o===c},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;if(!D(t))throw new Error(\"Invalid date format. Please follow 'ISO 8601' format; 2013-08-30\");return[t.getFullYear(),w(t.getMonth()+1,2),w(t.getDate(),2)].join(\"-\")},j=function(t,e){return{month:t>1?t-1:12,year:t>1?e:e-1}},C=function(t,e){return{month:t<12?t+1:1,year:t<12?e:e+1}},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=b(t,e),r=m(t,e),o=r-1,a=o+n,i=35-a,c=42-a,u=i<0?c:i,l=j(t,e),s=l.month,f=l.year,d=C(t,e),y=d.month,v=d.year,D=b(s,f),O=h(new Array(o)).map((function(t,e){var n=e+1+(D-o);return[f,w(s,2),w(n,2)]})),k=h(new Array(n)).map((function(n,r){return[e,w(t,2),w(r+1,2)]})),M=h(new Array(u)).map((function(t,e){return[v,w(y,2),w(e+1,2)]}));return[].concat(h(O),h(k),h(M))},P=function(o){function s(n){var o;return r(this,s),i(f(o=d(this,l(s).call(this,n))),\"checkClickOutside\",(function(t){\"keydown\"!==t.type||\"Escape\"!==t.key?o.calendarRef.current&&(o.calendarRef.current.contains(t.target)||o.props.toggleCalendar()):o.props.toggleCalendar()})),i(f(o),\"resolveStateFromDate\",(function(t){var e=D(t)?t:new Date;return{current:e,month:e.getMonth()+1,year:e.getFullYear()}})),i(f(o),\"getCalendarDates\",(function(){var t=o.state,e=t.current,n=t.month,r=t.year,a=n||e.getMonth()+1,i=r||e.getFullYear();return M(a,i)})),i(f(o),\"renderMonthAndYear\",(function(){var e=o.state,n=e.month,r=e.year,a=v[n-1];return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{class:\"monthPicker\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\",{type:\"button\",class:\"prevMonth\",onClick:o.handlePrevious,title:\"Previous Month\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"svg\",{xmlns:\"http://www.w3.org/2000/svg\",width:\"25\",height:\"25\",class:\"monthArrow\",fill:\"none\",stroke:\"currentColor\",\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",viewBox:\"0 0 24 24\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"path\",{d:\"M19 12H5M12 19l-7-7 7-7\"}))),Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{class:\"monthYearLabel\"},a,\" \",r),Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\",{type:\"button\",class:\"nextMonth\",onClick:o.handleNext,title:\"Next Month\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"svg\",{xmlns:\"http://www.w3.org/2000/svg\",width:\"25\",height:\"25\",fill:\"none\",stroke:\"currentColor\",\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",class:\"monthArrow\",viewBox:\"0 0 24 24\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"path\",{d:\"M5 12h14M12 5l7 7-7 7\"}))))})),i(f(o),\"renderDayLabels\",(function(){return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{class:\"dayLabels\"},y.map((function(e){return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{key:e,class:\"dayLabel\"},e.toUpperCase())})))})),i(f(o),\"renderCalendarDate\",(function(){return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{role:\"presentation\",class:\"dateLabels\",onMouseDown:o.gotoDate},M(o.state.month,o.state.year).map((function(e,n){var r=o.state,a=r.current,i=r.month,c=r.year,u=r.today,l=e.join(\"-\"),s=new Date(l),f=O(s,u),d=O(s,a),h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!D(t)||!D(e))return!1;var n=e.getMonth()+1,r=e.getFullYear(),o=t.getMonth()+1,a=t.getFullYear();return n===o&&r===a}(s,new Date(\"\".concat(c,\"-\").concat(i,\"-01\")));return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\",{type:\"button\",key:\"\".concat(c,\"-\").concat(i,\"-\").concat(n),\"data-date\":l,class:[!h&&\"notInMonth\",d&&\"currentDay\",f&&\"today\",\"dateLabel\"].filter(Boolean).join(\" \")},s.getDate())})))})),i(f(o),\"gotoDate\",(function(t){var e=t.target.dataset.date,n=o.props.onDateChanged;o.setState(o.resolveStateFromDate(new Date(e))),\"function\"==typeof n&&n(e)})),i(f(o),\"gotoPreviousMonth\",(function(){return o.setState((function(t){return j(t.month,t.year)}))})),i(f(o),\"gotoNextMonth\",(function(){return o.setState((function(t){return C(t.month,t.year)}))})),i(f(o),\"gotoPreviousYear\",(function(){return o.setState((function(t){return{year:t.year-1}}))})),i(f(o),\"gotoNextYear\",(function(){return o.setState((function(t){return{year:t.year+1}}))})),i(f(o),\"handlePrevious\",(function(t){return t.shiftKey?o.gotoPreviousYear():o.gotoPreviousMonth()})),i(f(o),\"handleNext\",(function(t){return t.shiftKey?o.gotoNextYear():o.gotoNextMonth()})),o.state=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},o.resolveStateFromDate(n.date),{today:new Date}),o.calendarRef=Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])(),o}return u(s,preact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]),a(s,[{key:\"componentDidMount\",value:function(){document.addEventListener(\"keydown\",this.checkClickOutside,!0),document.addEventListener(\"click\",this.checkClickOutside,!0)}},{key:\"componentWillUnmount\",value:function(){document.removeEventListener(\"keydown\",this.checkClickOutside,!0),document.removeEventListener(\"click\",this.checkClickOutside,!0)}},{key:\"render\",value:function(){return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{class:\"calendar\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{ref:this.calendarRef},this.renderMonthAndYear(),this.renderDayLabels(),this.renderCalendarDate()))}}]),s}(),S=function(e){function o(){var t,e;r(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return i(f(e=d(this,(t=l(o)).call.apply(t,[this].concat(a)))),\"state\",{date:null,calendarOpen:!1}),i(f(e),\"toggleCalendar\",(function(){e.setState((function(t){return{calendarOpen:!t.calendarOpen}}))})),i(f(e),\"handleDateChange\",(function(t){var n=e.props,r=n.onDateChanged,o=n.name;e.setState({date:t}),e.toggleCalendar(),\"function\"==typeof r&&r(o,t)})),e}return u(o,preact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]),a(o,[{key:\"componentDidMount\",value:function(){var t=this.props.value;t&&this.setState({date:k(new Date(t))})}},{key:\"render\",value:function(e,n){var r=e.placeholder,o=e.formatter,a=void 0===o?function(t){return t}:o,i=n.date,c=n.calendarOpen;return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\",{class:\"dpd\",style:\"position:relative\"},Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\",{type:\"text\",value:a(i),readOnly:\"readonly\",placeholder:r,onClick:this.toggleCalendar}),c&&Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(P,{date:i&&new Date(i),onDateChanged:this.handleDateChange,toggleCalendar:this.toggleCalendar}))}}]),o}();\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://PromptliWidget/./node_modules/datepickerdate/lib/index.esm.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://PromptliWidget/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/DateSelector.js":
/*!****************************************!*\
  !*** ./src/components/DateSelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datepickerdate/lib/index.css */ \"./node_modules/datepickerdate/lib/index.css\");\n/* harmony import */ var datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datepickerdate_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var datepickerdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datepickerdate */ \"./node_modules/datepickerdate/lib/index.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n //https://www.npmjs.com/package/datepickerdate\n// js file with bundler(webpack)\n\n\n\nvar DateSelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n\nvar DateSelector = function DateSelector(props) {\n  var title = props.title;\n\n  var onDateChanged = function onDateChanged(val) {\n    return console.log(val);\n  };\n\n  return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(DateSelectorContainer, null, title, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(datepickerdate__WEBPACK_IMPORTED_MODULE_4__[\"Datepicker\"], {\n    name: \"yourFormControlName\",\n    value: \"2019-08-28\",\n    placeholder: \"Your custom placeholder\",\n    onDateChanged: onDateChanged\n  }));\n};\n\nDateSelector.defaultProps = {};\nDateSelector.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateSelector);\n\n//# sourceURL=webpack://PromptliWidget/./src/components/DateSelector.js?");

/***/ })

})