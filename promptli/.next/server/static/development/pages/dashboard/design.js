module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/admin/index.js":
/*!********************************!*\
  !*** ./actions/admin/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.js");

const adminActions = {
  initAdmin() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["adminActionTypes"].INIT_ADMIN
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (adminActions);

/***/ }),

/***/ "./actions/dashboard/index.js":
/*!************************************!*\
  !*** ./actions/dashboard/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");


const dashboardActions = {
  initDashboardRequest() {
    return dispatch => {
      this.initDashboard();
      return _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].initDashboard().then(({
        data
      }) => {
        return dispatch(this.handleSuccess(_constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].INIT_DASHBOARD_SUCCESS, data));
      }).catch(e => dispatch(this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].INIT_DASHBOARD_FAILURE, e)));
    };
  },

  initDashboard() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].INIT_DASHBOARD_REQUEST
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
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CONNECT_GOOGLE_ACCOUNT_REQUEST
    };
  },

  connectGoogleAccount(payload) {
    return dispatch => {
      dispatch(this.connectGoogleAccountReq());
      _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].connectGoogleAccount(payload).then(({
        data
      }) => {
        window.location = data;
      }).catch(e => this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CONNECT_GOOGLE_ACCOUNT_FAILURE));
    };
  },

  createServiceRequest(payload) {
    return dispatch => {
      dispatch(this.createService());
      return _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].createService(payload).then(({
        data
      }) => this.createServiceSucces(data));
    };
  },

  createService() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CREATE_SERVICE_REQUEST
    };
  },

  createServiceSucces(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CREATE_SERVICE_SUCCESS,
      payload
    };
  },

  createPackage() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CREATE_PACKAGE_REQUEST
    };
  },

  createPackageRequest(payload) {
    return dispatch => {
      dispatch(this.createPackage());
      return _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].createPackage(payload).then(({
        data
      }) => {
        return dispatch(this.createPackageSuccess(data));
      }).catch(e => this.createPackageError(e));
    };
  },

  createPackageSuccess(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CREATE_PACKAGE_SUCCESS,
      payload
    };
  },

  createPackageError(error) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].CREATE_PACKAGE_FAILURE,
      error
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (dashboardActions);

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: dashboardActions, loginActions, adminActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/index */ "./actions/dashboard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dashboardActions", function() { return _dashboard_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./actions/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginActions", function() { return _login__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _admin_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/index */ "./actions/admin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adminActions", function() { return _admin_index__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// ACTIONS





/***/ }),

/***/ "./actions/login.js":
/*!**************************!*\
  !*** ./actions/login.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./actions/index.js");





const loginActions = {
  loginRequest: () => {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGIN_REQUEST
    };
  },

  makeLoginRequest(payload) {
    return async dispatch => {
      dispatch(this.loginRequest());
      return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].authenticate(payload).then(response => {
        const {
          data
        } = response;
        next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/dashboard');
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', data.token, {
          expires: 7
        });
        dispatch(this.loginSuccess(data));
        dispatch(_index__WEBPACK_IMPORTED_MODULE_4__["dashboardActions"].initDashboard());
      }).catch(e => dispatch(this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGIN_FAILURE, 'Invalid username or password')));
    };
  },

  loginSuccess(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGIN_SUCCESS,
      payload
    };
  },

  logoutRequest() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGOUT_REQUEST
    };
  },

  makeLogoutRequest() {
    return dispatch => {
      dispatch(this.logoutRequest());
      return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].logout().then(() => {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token');
        next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/login');
        return dispatch(this.handleSuccess(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGOUT_SUCCESS));
      }).catch(e => dispatch(this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].LOGIN_FAILURE)));
    };
  },

  checkAuth() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].CHECK_AUTH
    };
  },

  checkAuthRequest() {
    return dispatch => {
      dispatch(this.checkAuth());
      return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].checkAuth().then(({
        data
      }) => {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', data.token);
        dispatch(this.handleSuccess(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].AUTH_SUCCESS, data));
        return next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/dashboard');
      }).catch(e => {
        return dispatch(this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].AUTH_FAILURE));
      });
    };
  },

  createUser() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].CREATE_USER_REQUEST
    };
  },

  createUserRequest(payload) {
    return async dispatch => {
      dispatch(this.createUser());
      _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].createUser(payload).then(({
        data
      }) => {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', data.token);
        dispatch(this.handleSuccess(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].CREATE_USER_SUCCESS));
        dispatch(this.checkAuthRequest());
        return dispatch(this.loginSuccess({
          auth: data
        }));
      }).catch(e => dispatch(this.handleError(_constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].CREATE_USER_FAILURE)));
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
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].RESET_PASSWORD_REQUEST
    };
  },

  resetPasswordRequest(payload) {
    this.resetPassword();
    return dispatch => {
      _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].resetPassword(payload).then(({
        data
      }) => {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', data.token);
        dispatch(this.checkAuthRequest());
        return dispatch(this.resetPasswordSuccess(data));
      }).catch(e => this.resetPasswordFailure(e));
    };
  },

  resetPasswordSuccess(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].RESET_PASSWORD_SUCCESS,
      payload
    };
  },

  resetPasswordFailure(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].RESET_PASSWORD_SUCCESS,
      payload
    };
  },

  forgotPassword() {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].FORGOT_PASSWORD_REQUEST
    };
  },

  forgotPasswordRequest(payload) {
    return dispatch => {
      this.forgotPassword();
      return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].forgotPassword(payload).then(({
        data
      }) => {
        return dispatch(this.forgotPasswordSuccess(data));
      }).catch(e => this.forgotPasswordFailure(e));
    };
  },

  forgotPasswordSuccess(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].FORGOT_PASSWORD_SUCCESS,
      payload
    };
  },

  forgotPasswordFailure(payload) {
    return {
      type: _constants_index__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"].FORGOT_PASSWORD_FAILURE,
      payload
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (loginActions);

/***/ }),

/***/ "./components/common/NavigationBreadCrumbs.js":
/*!****************************************************!*\
  !*** ./components/common/NavigationBreadCrumbs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "@material-ui/core/Breadcrumbs");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/app/components/common/NavigationBreadCrumbs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  breadcrumb: {
    color: '#fff'
  }
}));

const NavigationBreadCrumbs = props => {
  const {
    0: breadcrumbs,
    1: setBreadcrumbs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleBreadcrumbs = url => {
      const breadcrumbs = url.split('/').filter(el => !!el).map(bc => ({
        text: bc.toUpperCase()
      }));
      setBreadcrumbs(breadcrumbs);
    };

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', handleBreadcrumbs);
    handleBreadcrumbs(window.location.pathname);
    return function cleanup() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeComplete', handleBreadcrumbs);
    };
  }, []);
  return __jsx(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.breadcrumb,
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, breadcrumbs.map(breadcrumb => {
    return __jsx("span", {
      className: classes.breadcrumb,
      key: breadcrumb.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, breadcrumb.text);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBreadCrumbs);

/***/ }),

/***/ "./components/dashboard/layouts/index.js":
/*!***********************************************!*\
  !*** ./components/dashboard/layouts/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _topNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topNav */ "./components/dashboard/topNav.js");

var _jsxFileName = "/app/components/dashboard/layouts/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"]).withConfig({
  displayName: "layouts__DashboardContainer",
  componentId: "sc-1p7gadc-0"
})(["margin-top:24px;"]);

class DashboardLayout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initDrift", profile => {
      'use strict';

      const {
        email,
        name
      } = profile;
      !function () {
        var t = window.driftt = window.drift = window.driftt || [];

        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error('Drift snippet included twice.'));
          t.invoked = !0, t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'], t.factory = function (e) {
            return function () {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function (e) {
            t[e] = t.factory(e);
          }), t.load = function (t) {
            var e = 3e5,
                n = Math.ceil(new Date() / e) * e,
                o = document.createElement('script');
            o.type = 'text/javascript', o.async = !0, o.crossorigin = 'anonymous', o.src = 'https://js.driftt.com/include/' + n + '/' + t + '.js';
            var i = document.getElementsByTagName('script')[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('86kungi7t23i');
      drift.identify(name, {
        email
      });
    });
  }

  componentDidMount() {
    const {
      profile
    } = this.props;

    if (profile && profile.email) {
      _sentry_browser__WEBPACK_IMPORTED_MODULE_4__["configureScope"](function (scope) {
        scope.setUser({
          email: profile.email
        });
      });
      this.initDrift(profile);
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_topNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx(DashboardContainer, {
      fixed: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, this.props.children));
  }

}

const mapStateToProps = state => ({
  profile: state.dashboard.profile
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(DashboardLayout));

/***/ }),

/***/ "./components/dashboard/topNav.js":
/*!****************************************!*\
  !*** ./components/dashboard/topNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _common_NavigationBreadCrumbs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/NavigationBreadCrumbs */ "./components/common/NavigationBreadCrumbs.js");

var _jsxFileName = "/app/components/dashboard/topNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '1em'
  },
  iconListItem: {
    marginRight: '.5em'
  },
  breadcrumbs: {
    justifyContent: 'space-evenly',
    flex: 1,
    textAlign: 'left'
  },
  list: {
    width: 250
  },
  appName: {
    position: 'absolute',
    left: 'calc(50% - 75px)',
    width: '150px',
    textAlign: 'center',
    zIndex: -1
  },
  drawerLogo: {
    width: '100px',
    margin: '.5em auto'
  },
  logo: {
    width: '150px',
    margin: '.5em auto 0'
  },
  navTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '18px',
    display: 'block',
    position: 'relative',
    margin: '.5em auto 0'
  }
};

class TopNav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logOut", () => {
      this.props.logout();
    });

    this.state = {
      open: false
    };
    this.onNavToggle = this.onNavToggle.bind(this);
  }

  onNavToggle() {
    const nextState = !this.state.open;
    this.setState({
      open: nextState
    });
  }

  renderPrimaryList() {
    const {
      classes
    } = this.props;
    return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, [{
      text: 'Dashboard',
      path: '/dashboard',
      icon: 'home'
    }, {
      text: 'Reservations',
      path: '/dashboard/reservations',
      icon: 'insert_invitation'
    }, {
      text: 'Services',
      path: '/dashboard/services',
      icon: 'schedule'
    }, {
      text: 'Packages',
      path: '/dashboard/packages',
      icon: 'local_offer'
    }, {
      text: 'Design + Publish',
      path: '/dashboard/design',
      icon: 'build'
    }].map(li => __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: li.path,
      key: li.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.iconListItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, li.icon), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
      primary: li.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    })))));
  }

  renderSecondaryList() {
    const {
      classes
    } = this.props;
    return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, [{
      text: 'Profile',
      path: '/dashboard/profile',
      icon: 'account_box'
    }, {
      text: 'Settings',
      path: '/dashboard/settings',
      icon: 'settings_applications'
    }].map(li => __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: li.path,
      key: li.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.iconListItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, li.icon), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
      primary: li.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })))));
  }

  render() {
    const {
      profile,
      isLoggedIn,
      classes
    } = this.props;
    const {
      open
    } = this.state;
    return __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
      open: open,
      onClose: this.onNavToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("div", {
      className: classes.list,
      role: "presentation",
      onClick: this.onNavToggle,
      onKeyDown: this.onNavToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("div", {
      className: classes.navTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("img", {
      alt: "logo",
      className: classes.drawerLogo,
      src: "../../static/logos/promptli-color.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), this.renderPrimaryList(), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), this.renderSecondaryList())), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
      position: "static",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
      edge: "start",
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "menu",
      onClick: this.onNavToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    })), __jsx("div", {
      className: classes.breadcrumbs,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx(_common_NavigationBreadCrumbs__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    })), __jsx("div", {
      className: classes.appName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("img", {
      alt: "logo",
      className: classes.logo,
      src: "../../static/logos/promptli-white.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
      color: "inherit",
      onClick: this.logOut,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Logout"))));
  }

}

const mapStateToProps = state => {
  return {
    profile: state.dashboard.profile,
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  logout: () => dispatch(_actions__WEBPACK_IMPORTED_MODULE_17__["loginActions"].makeLogoutRequest())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(TopNav)));

/***/ }),

/***/ "./constants/admin/index.js":
/*!**********************************!*\
  !*** ./constants/admin/index.js ***!
  \**********************************/
/*! exports provided: adminActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminActionTypes", function() { return adminActionTypes; });
const adminActionTypes = {
  INIT_ADMIN: 'ADMIN/INIT_ADMIN',
  ADMIN_READY: 'ADMIN/ADMIN_READY'
};

/***/ }),

/***/ "./constants/dashboard/index.js":
/*!**************************************!*\
  !*** ./constants/dashboard/index.js ***!
  \**************************************/
/*! exports provided: dashboardActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardActionTypes", function() { return dashboardActionTypes; });
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

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: actionTypes, dashboardActionTypes, loginActionTypes, adminActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./constants/dashboard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dashboardActionTypes", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./constants/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginActionTypes", function() { return _login__WEBPACK_IMPORTED_MODULE_1__["loginActionTypes"]; });

/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin */ "./constants/admin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adminActionTypes", function() { return _admin__WEBPACK_IMPORTED_MODULE_2__["adminActionTypes"]; });




const actionTypes = {
  DEFAULT_ACTION: 'REDUX_INIT'
};


/***/ }),

/***/ "./constants/login.js":
/*!****************************!*\
  !*** ./constants/login.js ***!
  \****************************/
/*! exports provided: loginActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginActionTypes", function() { return loginActionTypes; });
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

/***/ }),

/***/ "./lib/withAuth.js":
/*!*************************!*\
  !*** ./lib/withAuth.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/app/lib/withAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const withAuth = Page => {
  return class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    componentDidMount() {
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');

      if (token) {
        return {
          token: token,
          isLoggedIn: true
        };
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
      }
    }

    render() {
      return __jsx(Page, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }));
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

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

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/dashboard/design.js":
/*!***********************************!*\
  !*** ./pages/dashboard/design.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/withAuth */ "./lib/withAuth.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/index */ "./actions/index.js");
/* harmony import */ var _components_dashboard_layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dashboard/layouts */ "./components/dashboard/layouts/index.js");

var _jsxFileName = "/app/pages/dashboard/design.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Design extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps() {
    return {
      design: ''
    };
  }

  componentDidMount() {// window.PromptliWidget.init({ title: 'hello from dashboard' }, 'editor')
  }

  render() {
    return __jsx(_components_dashboard_layouts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Dashboard")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Design"), __jsx("div", {
      id: "editor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Design, "defaultProps", {});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Design, "propTypes", {});

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  };
};

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(Design)));

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const {
  API_BASE_URL
} = process.env;
const API = {
  token() {
    return js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
  },

  get(resource, config = {}) {
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
      method: 'get',
      url: `${API_BASE_URL}/${resource}`,
      headers: {
        Authorization: `JWT ${this.token()}`,
        'Content-Type': 'application/json'
      }
    }, config));
  },

  post(resource, payload, config = {}) {
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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
/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/dashboard/design.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/pages/dashboard/design.js */"./pages/dashboard/design.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Breadcrumbs":
/*!************************************************!*\
  !*** external "@material-ui/core/Breadcrumbs" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Breadcrumbs");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@sentry/browser":
/*!**********************************!*\
  !*** external "@sentry/browser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=design.js.map