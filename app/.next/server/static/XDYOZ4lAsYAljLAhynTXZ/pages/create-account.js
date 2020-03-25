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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("M4yR");


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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "M4yR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dpnd");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("MbLX");
/* harmony import */ var _components_common_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YgBE");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class CreateAccount extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getFormFields = this.getFormFields.bind(this);
    this.login = this.login.bind(this);
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
      name: 'name',
      label: 'Name',
      value: this.state.name,
      type: 'email'
    }, {
      name: 'email',
      label: 'Email',
      value: this.state.email,
      type: 'email'
    }, {
      name: 'password',
      label: 'Password',
      value: this.state.password,
      type: 'password'
    }, {
      name: 'confirmPassword',
      label: 'Confirm Password',
      value: this.state.confirmPassword,
      type: 'password'
    }];
  }

  login() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
  }

  async onSubmit(e) {
    e && e.preventDefault();
    const {
      email,
      password,
      name,
      confirmPassword
    } = this.state;

    if (password !== confirmPassword) {
      alert('passwords must match');
    } else {
      this.props.createAccount({
        email,
        password,
        name
      });
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-2085888330"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-2085888330"
    }, "Create Account")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), __jsx("img", {
      style: {
        margin: '8em auto 4em',
        width: '225px',
        display: 'block',
        position: 'relative'
      },
      alt: "logo",
      src: "../static/logos/promptli-color.png",
      className: "jsx-2085888330"
    }), __jsx(_components_common_Form__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      onSubmit: this.onSubmit,
      submitBtnText: "Create Account",
      fields: this.getFormFields(),
      onChange: this.onChange,
      title: "Create an Account"
    }), __jsx("div", {
      className: "jsx-2085888330"
    }, __jsx("p", {
      style: {
        textAlign: 'center',
        width: '100%'
      },
      className: "jsx-2085888330"
    }, "Already have an account?", ' ', __jsx("a", {
      style: {
        cursor: 'pointer',
        color: '#2a45ff'
      },
      role: "button",
      onClick: this.login,
      className: "jsx-2085888330"
    }, "Click here to sign in."), ' ')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
    createAccount: payload => {
      dispatch(_actions_index__WEBPACK_IMPORTED_MODULE_5__[/* loginActions */ "b"].createUserRequest(payload));
    },
    checkAuth: () => dispatch(_actions_index__WEBPACK_IMPORTED_MODULE_5__[/* loginActions */ "b"].checkAuthRequest())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CreateAccount));

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

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

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

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

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

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

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