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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

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

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dmhT");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

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

/***/ "6AFH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@sentry/browser"
var browser_ = __webpack_require__("xJD9");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: ./actions/index.js + 3 modules
var actions = __webpack_require__("dpnd");

// EXTERNAL MODULE: external "@material-ui/core/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__("nZMi");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/common/NavigationBreadCrumbs.js
var __jsx = external_react_default.a.createElement;




const useStyles = Object(core_["makeStyles"])(theme => ({
  breadcrumb: {
    color: '#fff'
  }
}));

const NavigationBreadCrumbs = props => {
  const {
    0: breadcrumbs,
    1: setBreadcrumbs
  } = Object(external_react_["useState"])([]);
  const classes = useStyles();
  Object(external_react_["useEffect"])(() => {
    const handleBreadcrumbs = url => {
      const breadcrumbs = url.split('/').filter(el => !!el).map(bc => ({
        text: bc.toUpperCase()
      }));
      setBreadcrumbs(breadcrumbs);
    };

    router_default.a.events.on('routeChangeComplete', handleBreadcrumbs);
    handleBreadcrumbs(window.location.pathname);
    return function cleanup() {
      router_default.a.events.off('routeChangeComplete', handleBreadcrumbs);
    };
  }, []);
  return __jsx(Breadcrumbs_default.a, {
    className: classes.breadcrumb,
    "aria-label": "breadcrumb"
  }, breadcrumbs.map(breadcrumb => {
    return __jsx("span", {
      className: classes.breadcrumb,
      key: breadcrumb.text
    }, breadcrumb.text);
  }));
};

/* harmony default export */ var common_NavigationBreadCrumbs = (NavigationBreadCrumbs);
// CONCATENATED MODULE: ./components/dashboard/topNav.js

var topNav_jsx = external_react_default.a.createElement;


















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

class topNav_TopNav extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "logOut", () => {
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
    return topNav_jsx(List_default.a, null, [{
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
    }].map(li => topNav_jsx(link_default.a, {
      href: li.path,
      key: li.path
    }, topNav_jsx(ListItem_default.a, {
      button: true
    }, topNav_jsx(Icon_default.a, {
      className: classes.iconListItem
    }, li.icon), topNav_jsx(ListItemText_default.a, {
      primary: li.text
    })))));
  }

  renderSecondaryList() {
    const {
      classes
    } = this.props;
    return topNav_jsx(List_default.a, null, [{
      text: 'Profile',
      path: '/dashboard/profile',
      icon: 'account_box'
    }, {
      text: 'Settings',
      path: '/dashboard/settings',
      icon: 'settings_applications'
    }].map(li => topNav_jsx(link_default.a, {
      href: li.path,
      key: li.path
    }, topNav_jsx(ListItem_default.a, {
      button: true
    }, topNav_jsx(Icon_default.a, {
      className: classes.iconListItem
    }, li.icon), topNav_jsx(ListItemText_default.a, {
      primary: li.text
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
    return topNav_jsx("div", {
      className: classes.root
    }, topNav_jsx(Drawer_default.a, {
      open: open,
      onClose: this.onNavToggle
    }, topNav_jsx("div", {
      className: classes.list,
      role: "presentation",
      onClick: this.onNavToggle,
      onKeyDown: this.onNavToggle
    }, topNav_jsx("div", {
      className: classes.navTitle
    }, topNav_jsx("img", {
      alt: "logo",
      className: classes.drawerLogo,
      src: "../../static/logos/promptli-color.png"
    })), topNav_jsx(Divider_default.a, null), this.renderPrimaryList(), topNav_jsx(Divider_default.a, null), this.renderSecondaryList())), topNav_jsx(AppBar_default.a, {
      position: "static"
    }, topNav_jsx(Toolbar_default.a, null, topNav_jsx(IconButton_default.a, {
      edge: "start",
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "menu",
      onClick: this.onNavToggle
    }, topNav_jsx(Menu_default.a, null)), topNav_jsx("div", {
      className: classes.breadcrumbs
    }, topNav_jsx(common_NavigationBreadCrumbs, null)), topNav_jsx("div", {
      className: classes.appName
    }, topNav_jsx("img", {
      alt: "logo",
      className: classes.logo,
      src: "../../static/logos/promptli-white.png"
    })), topNav_jsx(Button_default.a, {
      color: "inherit",
      onClick: this.logOut
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
  logout: () => dispatch(actions["b" /* loginActions */].makeLogoutRequest())
});

/* harmony default export */ var topNav = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(styles_["withStyles"])(styles)(topNav_TopNav)));
// CONCATENATED MODULE: ./components/dashboard/layouts/index.js

var layouts_jsx = external_react_default.a.createElement;






const DashboardContainer = external_styled_components_default()(core_["Container"]).withConfig({
  displayName: "layouts__DashboardContainer",
  componentId: "sc-1p7gadc-0"
})(["margin-top:24px;"]);

class layouts_DashboardLayout extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "initDrift", profile => {
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
      browser_["configureScope"](function (scope) {
        scope.setUser({
          email: profile.email
        });
      });
      this.initDrift(profile);
    }
  }

  render() {
    return layouts_jsx("div", null, layouts_jsx(topNav, null), layouts_jsx(DashboardContainer, {
      fixed: true
    }, this.props.children));
  }

}

const layouts_mapStateToProps = state => ({
  profile: state.dashboard.profile
});

/* harmony default export */ var layouts = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(layouts_mapStateToProps, null)(layouts_DashboardLayout));

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dmhT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("v8KW");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dpnd");
/* harmony import */ var _components_dashboard_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6AFH");

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
    return __jsx(_components_dashboard_layouts__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "Dashboard")), __jsx("div", null, "Design"), __jsx("div", {
      id: "editor"
    }));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Design, "defaultProps", {});

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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Design)));

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "nZMi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Breadcrumbs");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "xJD9":
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

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