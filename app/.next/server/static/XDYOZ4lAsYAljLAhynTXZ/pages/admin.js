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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iooJ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "EUB3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddBox");

/***/ }),

/***/ "Ek77":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IVYn":
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "SC+D":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewColumn");

/***/ }),

/***/ "T4i5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FirstPage");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VMnw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "Y1pe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteOutline");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YkC2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "assl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LastPage");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cvHV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hrAA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iooJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./lib/withAuth.js
var withAuth = __webpack_require__("v8KW");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/admin/index.js

var __jsx = external_react_default.a.createElement;





class admin_AdminLayout extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "redirect", () => router_default.a.push('/dashboard'));
  }

  render() {
    const {
      children,
      isAdmin
    } = this.props;

    if (!isAdmin) {
      this.redirect();
      return __jsx(external_react_["Fragment"], null);
    } else {
      return __jsx(core_["Container"], null, children);
    }
  }

}

const mapStateToProps = state => ({
  isAdmin: state.dashboard.profile.admin
});

/* harmony default export */ var admin = (Object(external_react_redux_["connect"])(mapStateToProps, null)(admin_AdminLayout));
// EXTERNAL MODULE: ./components/common/DataTable.js
var DataTable = __webpack_require__("lPdZ");

// CONCATENATED MODULE: ./pages/admin/index.js

var admin_jsx = external_react_default.a.createElement;







class admin_Admin extends external_react_["Component"] {
  render() {
    return admin_jsx("div", {
      className: "jsx-2085888330"
    }, admin_jsx(head_default.a, null, admin_jsx("title", {
      className: "jsx-2085888330"
    }, "Admin")), admin_jsx(admin, null, admin_jsx(DataTable["a" /* default */], {
      resource: "user",
      columnsHeaders: ['name', 'email', 'admin']
    })), admin_jsx(style_default.a, {
      id: "2085888330"
    }, []));
  }

}

const admin_mapStateToProps = state => ({
  admin: state.admin
});

/* harmony default export */ var pages_admin = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(admin_mapStateToProps, null)(Object(withAuth["a" /* default */])(admin_Admin)));

/***/ }),

/***/ "jQ8v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

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

/***/ "knAv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SaveAlt");

/***/ }),

/***/ "lPdZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IVYn");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("EUB3");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ek77");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9qvJ");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jQ8v");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cvHV");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hrAA");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Y1pe");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YkC2");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("uq+W");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("T4i5");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("assl");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("VMnw");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("knAv");
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("iSPQ");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("SC+D");
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("yzAy");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



















const tableIcons = {
  Add: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Check: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Clear: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Delete: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Edit: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Export: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_16___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Filter: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  LastPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  NextPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  Search: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_15___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  }))),
  ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_18___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
    ref: ref
  })))
};

class DataTable extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "setTableData", ({
      columns = [],
      headers = []
    }) => {
      this.setState({
        columns,
        headers
      });
    });

    this.state = {
      columns: [],
      headers: []
    };
  }

  componentDidMount() {
    _utils_api__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].getTableData(this.props.resource, this.props.columnsHeaders).then(data => {
      return this.setTableData(data);
    });
  }

  render() {
    const {
      title
    } = this.props;
    const {
      headers,
      columns
    } = this.state;
    return __jsx("div", {
      style: {
        maxWidth: '100%',
        marginTop: '2em'
      }
    }, columns.length ? __jsx(material_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icons: tableIcons,
      columns: headers,
      data: columns,
      title: title
    }) : __jsx("h2", null, "No Resources found"));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DataTable, "defaultProps", {
  title: '',
  columnsHeaders: undefined,
  resource: ''
});

/* harmony default export */ __webpack_exports__["a"] = (DataTable);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "uq+W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "v8KW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const withAuth = Page => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');

      if (token) {
        return {
          token: token,
          isLoggedIn: true
        };
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      }
    }

    render() {
      return __jsx(Page, this.props);
    }

  };
};

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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