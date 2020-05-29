/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

!function (e) {
  var t = {};

  function l(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, l), o.l = !0, o.exports;
  }

  l.m = e, l.c = t, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      l.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "", l(l.s = 4);
}([function (e, t) {
  !function () {
    e.exports = this.wp.element;
  }();
}, function (e, t) {
  !function () {
    e.exports = this.wp.components;
  }();
}, function (e, t) {
  !function () {
    e.exports = this.wp.blocks;
  }();
}, function (e, t) {
  !function () {
    e.exports = this.wp.serverSideRender;
  }();
}, function (e, t, l) {
  "use strict";

  l.r(t);
  var n = l(0),
      o = l(2),
      a = (l(5), l(1)),
      c = (l(6), l(3)),
      r = l.n(c),
      s = (l(7), wp.i18n),
      i = s.__;
  s.setLocaleData;
  Object(o.registerBlockType)("bsx-blocks/bsx-03-button", {
    title: i("BSX Button", "bsx-blocks"),
    icon: "admin-links",
    category: "layout",
    attributes: {
      linkHref: {
        type: "string"
      },
      linkHash: {
        type: "string",
        default: ""
      },
      linkText: {
        type: "string"
      },
      linkTarget: {
        type: "string",
        default: ""
      },
      linkRel: {
        type: "string",
        default: ""
      },
      linkState: {
        type: "string",
        default: "primary"
      },
      linkStateType: {
        type: "string",
        default: "outline"
      },
      linkAttributes: {
        type: "string",
        default: ""
      }
    },
    edit: function edit(e) {
      var t = e.className,
          l = e.attributes,
          o = l.linkHref,
          c = l.linkHash,
          s = l.linkText,
          b = l.linkTarget,
          u = l.linkRel,
          f = l.linkState,
          k = l.linkStateType,
          p = l.linkAttributes,
          d = e.setAttributes;
      e.posts;
      return Object(n.createElement)("div", {
        className: t
      }, Object(n.createElement)(r.a, {
        block: "bsx-blocks/bsx-03-button",
        attributes: e.attributes
      }), Object(n.createElement)("div", {
        class: "border rounded bg-light my-3 px-1"
      }, Object(n.createElement)("div", {
        class: "row form-row"
      }, Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Button text", "bsx-blocks"),
        value: s,
        onChange: function onChange(e) {
          d({
            linkText: e
          });
        }
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Href (Post ID)", "bsx-blocks"),
        value: o,
        onChange: function onChange(e) {
          d({
            linkHref: e
          });
        }
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Hash (optional)", "bsx-blocks"),
        value: c,
        onChange: function onChange(e) {
          d({
            linkHash: e
          });
        }
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.SelectControl, {
        label: i("State", "bsx-blocks"),
        value: f,
        onChange: function onChange(e) {
          d({
            linkState: e
          });
        },
        options: [{
          value: "primary",
          label: i("Primary", "bsx-blocks")
        }, {
          value: "secondary",
          label: i("Secondary", "bsx-blocks")
        }, {
          value: "success",
          label: i("Success", "bsx-blocks")
        }, {
          value: "danger",
          label: i("Danger", "bsx-blocks")
        }, {
          value: "warning",
          label: i("Warning", "bsx-blocks")
        }, {
          value: "info",
          label: i("Info", "bsx-blocks")
        }, {
          value: "light",
          label: i("Light", "bsx-blocks")
        }, {
          value: "dark",
          label: i("Dark", "bsx-blocks")
        }, {
          value: "link",
          label: i("Link", "bsx-blocks")
        }]
      }))), Object(n.createElement)("div", {
        class: "row form-row"
      }, Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.SelectControl, {
        label: i("State", "bsx-blocks"),
        value: k,
        onChange: function onChange(e) {
          d({
            linkStateType: e
          });
        },
        options: [{
          value: "outline",
          label: i("Outline", "bsx-blocks")
        }, {
          value: "",
          label: i("Filled", "bsx-blocks")
        }]
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Target (optional)", "bsx-blocks"),
        value: b,
        onChange: function onChange(e) {
          d({
            linkTarget: e
          });
        }
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Rel (optional)", "bsx-blocks"),
        value: u,
        onChange: function onChange(e) {
          d({
            linkRel: e
          });
        }
      })), Object(n.createElement)("div", {
        class: "col-3"
      }, Object(n.createElement)(a.TextControl, {
        label: i("Attributes (optional)", "bsx-blocks"),
        value: p,
        placeholder: i('data-1="foo" data-2="bar"', "bsx-blocks"),
        onChange: function onChange(e) {
          d({
            linkAttributes: e
          });
        }
      })))));
    },
    save: function save(e) {
      return null;
    }
  });
}, function (e, t) {
  !function () {
    e.exports = this.wp.blockEditor;
  }();
}, function (e, t) {
  !function () {
    e.exports = this.wp.data;
  }();
}, function (e, t) {
  !function () {
    e.exports = this.wp.compose;
  }();
}]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

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

/***/ })

/******/ });
//# sourceMappingURL=build.js.map