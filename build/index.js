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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/_functions/add-class-names.js":
/*!*******************************************!*\
  !*** ./src/_functions/add-class-names.js ***!
  \*******************************************/
/*! exports provided: addClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassNames", function() { return addClassNames; });
// add class names
function addClassNames(attributes, classNamesString) {
  var belowNavbar = attributes.belowNavbar,
      touchFooter = attributes.touchFooter,
      display = attributes.display,
      marginBefore = attributes.marginBefore,
      marginAfter = attributes.marginAfter,
      marginLeft = attributes.marginLeft,
      marginRight = attributes.marginRight,
      resMargin1Breakpoint = attributes.resMargin1Breakpoint,
      resMargin1Position = attributes.resMargin1Position,
      resMargin1Size = attributes.resMargin1Size,
      resMargin2Breakpoint = attributes.resMargin2Breakpoint,
      resMargin2Position = attributes.resMargin2Position,
      resMargin2Size = attributes.resMargin2Size,
      paddingBefore = attributes.paddingBefore,
      paddingAfter = attributes.paddingAfter,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      bgColor = attributes.bgColor,
      textColor = attributes.textColor,
      textSize = attributes.textSize,
      rounded = attributes.rounded,
      textAlign = attributes.textAlign,
      resTextAlignBreakpoint = attributes.resTextAlignBreakpoint,
      resTextAlign = attributes.resTextAlign,
      textShadow = attributes.textShadow,
      fontWeight = attributes.fontWeight,
      inverseTextColor = attributes.inverseTextColor,
      headingInheritTextColor = attributes.headingInheritTextColor,
      headingInheritFontWeight = attributes.headingInheritFontWeight,
      width = attributes.width,
      imgThumbnail = attributes.imgThumbnail,
      borderState = attributes.borderState,
      border = attributes.border,
      hoverShadow = attributes.hoverShadow,
      hoverMove = attributes.hoverMove,
      disabled = attributes.disabled,
      verticalAlign = attributes.verticalAlign,
      speechBubble = attributes.speechBubble,
      isAlert = attributes.isAlert,
      state = attributes.state;
  var classNames = typeof classNamesString != 'undefined' ? classNamesString.split(' ') : [];

  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }

  if (!!touchFooter) {
    classNames.push('mb-n-footer-space');
  }

  if (!!display) {
    classNames.push('d-' + display);
  }

  if (!!marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight) {
    // all
    classNames.push('m-' + marginBefore);
  } else {
    // top & bottom
    if (!!marginBefore && marginBefore === marginAfter) {
      classNames.push('my-' + marginBefore);
    } else {
      if (!!marginBefore) {
        classNames.push('mt-' + marginBefore);
      }

      if (!!marginAfter) {
        classNames.push('mb-' + marginAfter);
      }
    } // left & right


    if (!!marginLeft && marginLeft === marginRight) {
      classNames.push('mx-' + marginLeft);
    } else {
      if (!!marginLeft) {
        classNames.push('ml-' + marginLeft);
      }

      if (!!marginRight) {
        classNames.push('mr-' + marginRight);
      }
    }
  }

  if (!!resMargin1Breakpoint && !!resMargin1Position && !!resMargin1Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin1Position === 'all' ? '' : resMargin1Position) + '-' + (resMargin1Breakpoint === 'xs' ? '' : resMargin1Breakpoint + '-') + resMargin1Size);
  }

  if (!!resMargin2Breakpoint && !!resMargin2Position && !!resMargin2Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin2Position === 'all' ? '' : resMargin2Position) + '-' + (resMargin2Breakpoint === 'xs' ? '' : resMargin2Breakpoint + '-') + resMargin2Size);
  }

  if (!!paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight) {
    // all
    classNames.push('p-' + paddingBefore);
  } else {
    // top & bottom
    if (!!paddingBefore && paddingBefore === paddingAfter) {
      classNames.push('py-' + paddingBefore);
    } else {
      // top
      if (!!paddingBefore) {
        classNames.push('pt-' + paddingBefore);
      } // bottom


      if (!!paddingAfter) {
        classNames.push('pb-' + paddingAfter);
      }
    } // left & right


    if (!!paddingLeft && paddingLeft === paddingRight) {
      classNames.push('px-' + paddingLeft);
    } else {
      // left
      if (!!paddingLeft) {
        classNames.push('pl-' + paddingLeft);
      } // right


      if (!!paddingRight) {
        classNames.push('pr-' + paddingRight);
      }
    }
  }

  if (!!bgColor) {
    classNames.push('bg-' + bgColor);
  }

  if (!!textColor) {
    classNames.push('text-' + textColor);
  }

  if (!!textSize) {
    classNames.push(textSize);
  }

  if (!!textShadow) {
    classNames.push('text-shadow-' + textShadow);
  }

  if (!!fontWeight) {
    classNames.push('font-weight-' + fontWeight);
  }

  if (!!inverseTextColor) {
    classNames.push('text-inverse');
  }

  if (!!headingInheritTextColor) {
    classNames.push('heading-inherit-text');
  }

  if (!!headingInheritFontWeight) {
    classNames.push('heading-inherit-font-weight');
  }

  if (!!rounded) {
    if (rounded == true || rounded == 'rounded') {
      classNames.push('rounded');
    } else {
      classNames.push('rounded-' + rounded);
    }
  }

  if (!!textAlign) {
    classNames.push('text-' + textAlign);
  }

  if (!!resTextAlignBreakpoint && !!resTextAlign) {
    classNames.push('text-' + resTextAlignBreakpoint + '-' + resTextAlign);
  }

  if (!!width) {
    classNames.push('w-' + width);
  }

  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
  }

  if (!!border) {
    if (border == 'true') {
      classNames.push('border');
    } else {
      // TODO: what about multipla values, e.g. top and bottom?
      classNames.push('border-' + border);
    }
  }

  if (!!borderState) {
    classNames.push('border-' + borderState);
  }

  if (!!hoverShadow) {
    classNames.push('hover-shadow');
  }

  if (!!hoverMove) {
    classNames.push('hover-move');
  }

  if (!!disabled) {
    classNames.push('disabled');
  }

  if (!!verticalAlign) {
    classNames.push('align-' + verticalAlign);
  }

  if (!!speechBubble) {
    classNames.push('speech-bubble');

    if (speechBubble != 'md') {
      classNames.push('speech-bubble-' + speechBubble);
    }
  }

  if (!!isAlert) {
    classNames.push('alert');

    if (!!state) {
      classNames.push('alert-' + state);
    }
  }

  return classNames.join(' ');
}

/***/ }),

/***/ "./src/_functions/attributes.js":
/*!**************************************!*\
  !*** ./src/_functions/attributes.js ***!
  \**************************************/
/*! exports provided: makeSaveAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSaveAttributes", function() { return makeSaveAttributes; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

// attribute functions 
// returns list of non empty attributes to add to html element
function makeSaveAttributes(attributes) {
  var nonEmptyAttributes = {};

  for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    //console.log( 'key: "' + key + '", val: "' + value + '"' );
    if (value) {
      nonEmptyAttributes[key] = value;
    }
  }

  return nonEmptyAttributes;
}

/***/ }),

/***/ "./src/_functions/controls.js":
/*!************************************!*\
  !*** ./src/_functions/controls.js ***!
  \************************************/
/*! exports provided: ignoreMailtoSpamProtectionToggle, targetToggle, disabledToggle, belowNavbarToggle, touchFooterToggle, inverseTextColorToggle, headingInheritTextColorToggle, headingInheritFontWeightToggle, roundedToggle, alertToggle, isGalleryParentToggle, linkUrlInput, bgAttachmentFixedLimitedToggle, disableResponsiveDownsizingToggle, relInput, dataFnInput, dataFnOptionsInput, dataFnTargetInput, dataTgInput, iconKeyInput, portraitImgMaxWidthBreakpointInput, stateSelect, bgColorSelect, textColorSelect, buttonStateSelect, colorSelect, stateTypeSelect, sizeSelect, marginLeftSelect, marginRightSelect, marginBeforeSelect, marginAfterSelect, resMarginBreakpointsSelect, resMarginPositionSelect, resMarginSizeSelect, displaySelect, verticalAlignSelect, alignItemsSelect, paddingBeforeSelect, paddingAfterSelect, paddingLeftSelect, paddingRightSelect, nodeNameSelect, bgPositionSelect, bgSizeSelect, bannerTypeSelect, bannerSizeSelect, bgAttachmentSelect, textShadowSelect, fontWeightSelect, borderSelect, borderStateSelect, iconFamilySelect, widthSelect, justifyContentSelect, flexDirectionSelect, breakpointsSelect, textAlignSelect, scaleSelect, textAlignToolbar, imgUploadClickableImg, imgUploadButton, inlineTemplateSelect, uiTemplateSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMailtoSpamProtectionToggle", function() { return ignoreMailtoSpamProtectionToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetToggle", function() { return targetToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledToggle", function() { return disabledToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belowNavbarToggle", function() { return belowNavbarToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchFooterToggle", function() { return touchFooterToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseTextColorToggle", function() { return inverseTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritTextColorToggle", function() { return headingInheritTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritFontWeightToggle", function() { return headingInheritFontWeightToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundedToggle", function() { return roundedToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertToggle", function() { return alertToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGalleryParentToggle", function() { return isGalleryParentToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkUrlInput", function() { return linkUrlInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgAttachmentFixedLimitedToggle", function() { return bgAttachmentFixedLimitedToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableResponsiveDownsizingToggle", function() { return disableResponsiveDownsizingToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relInput", function() { return relInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnInput", function() { return dataFnInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnOptionsInput", function() { return dataFnOptionsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnTargetInput", function() { return dataFnTargetInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTgInput", function() { return dataTgInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconKeyInput", function() { return iconKeyInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portraitImgMaxWidthBreakpointInput", function() { return portraitImgMaxWidthBreakpointInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSelect", function() { return stateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorSelect", function() { return bgColorSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColorSelect", function() { return textColorSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStateSelect", function() { return buttonStateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorSelect", function() { return colorSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateTypeSelect", function() { return stateTypeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeSelect", function() { return sizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginLeftSelect", function() { return marginLeftSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginRightSelect", function() { return marginRightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginBeforeSelect", function() { return marginBeforeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginAfterSelect", function() { return marginAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resMarginBreakpointsSelect", function() { return resMarginBreakpointsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resMarginPositionSelect", function() { return resMarginPositionSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resMarginSizeSelect", function() { return resMarginSizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySelect", function() { return displaySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlignSelect", function() { return verticalAlignSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsSelect", function() { return alignItemsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingBeforeSelect", function() { return paddingBeforeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingAfterSelect", function() { return paddingAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingLeftSelect", function() { return paddingLeftSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingRightSelect", function() { return paddingRightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeNameSelect", function() { return nodeNameSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgPositionSelect", function() { return bgPositionSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgSizeSelect", function() { return bgSizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerTypeSelect", function() { return bannerTypeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerSizeSelect", function() { return bannerSizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgAttachmentSelect", function() { return bgAttachmentSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textShadowSelect", function() { return textShadowSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightSelect", function() { return fontWeightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderSelect", function() { return borderSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStateSelect", function() { return borderStateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconFamilySelect", function() { return iconFamilySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthSelect", function() { return widthSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContentSelect", function() { return justifyContentSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirectionSelect", function() { return flexDirectionSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsSelect", function() { return breakpointsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlignSelect", function() { return textAlignSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSelect", function() { return scaleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlignToolbar", function() { return textAlignToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUploadClickableImg", function() { return imgUploadClickableImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUploadButton", function() { return imgUploadButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineTemplateSelect", function() { return inlineTemplateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiTemplateSelect", function() { return uiTemplateSelect; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/_functions/utilities.js");

// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var _wp$blockEditor = wp.blockEditor,
    URLInput = _wp$blockEditor.URLInput,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    Button = _wp$components.Button; // functions

 // internal vars

var marginPaddingSizes = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: '0',
  label: __('none (0)', 'bsx-blocks')
}, {
  value: '1',
  label: __('extra small', 'bsx-blocks')
}, {
  value: '2',
  label: __('small', 'bsx-blocks')
}, {
  value: '3',
  label: __('medium', 'bsx-blocks')
}, {
  value: '4',
  label: __('large', 'bsx-blocks')
}, {
  value: '5',
  label: __('extra large', 'bsx-blocks')
}];
var breakpointsWithUnset = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'xs',
  label: __('Default (XS up)', 'bsx-blocks')
}, {
  value: 'sm',
  label: __('SM up', 'bsx-blocks')
}, {
  value: 'md',
  label: __('MD up', 'bsx-blocks')
}, {
  value: 'lg',
  label: __('LG up', 'bsx-blocks')
}, {
  value: 'xl',
  label: __('XL up', 'bsx-blocks')
}];
var marginPaddingPositions = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'all',
  label: __('All', 'bsx-blocks')
}, {
  value: 't',
  label: __('Before', 'bsx-blocks')
}, {
  value: 'b',
  label: __('After', 'bsx-blocks')
}, {
  value: '2',
  label: __('Y (before & after)', 'bsx-blocks')
}, {
  value: '3',
  label: __('Left', 'bsx-blocks')
}, {
  value: '4',
  label: __('Right', 'bsx-blocks')
}, {
  value: '5',
  label: __('X (left & right)', 'bsx-blocks')
}];
var states = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: __('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: __('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: __('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: __('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: __('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: __('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: __('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: __('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: __('Dark', 'bsx-blocks')
}];
var textColorStates = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: __('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: __('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: __('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: __('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: __('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: __('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: __('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: __('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: __('Dark', 'bsx-blocks')
}, {
  value: 'muted',
  label: __('Muted', 'bsx-blocks')
}, {
  value: 'white-50',
  label: __('White transparent', 'bsx-blocks')
}, {
  value: 'black-50',
  label: __('Black transparent', 'bsx-blocks')
}, {
  value: 'inherit',
  label: __('Inherit', 'bsx-blocks')
}]; // doesn’t have '', has additional 'text-link'

var btnStates = [{
  value: 'primary',
  label: __('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: __('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: __('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: __('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: __('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: __('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: __('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: __('Dark', 'bsx-blocks')
}, {
  value: 'link',
  label: __('Link Button', 'bsx-blocks')
}, {
  value: 'text-link',
  label: __('Text link', 'bsx-blocks')
}];
var bgStates = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: __('White', 'bsx-blocks')
}, {
  value: 'white-opaque',
  label: __('White opaque', 'bsx-blocks')
}, {
  value: 'white-transparent',
  label: __('White transparent', 'bsx-blocks')
}, {
  value: 'black',
  label: __('Black', 'bsx-blocks')
}, {
  value: 'black-opaque',
  label: __('Black opaque', 'bsx-blocks')
}, {
  value: 'black-transparent',
  label: __('Black transparent', 'bsx-blocks')
}, {
  value: 'primary',
  label: __('Primary', 'bsx-blocks')
}, {
  value: 'primary-opaque',
  label: __('Primary opaque', 'bsx-blocks')
}, {
  value: 'primary-transparent',
  label: __('Primary transparent', 'bsx-blocks')
}, {
  value: 'secondary',
  label: __('Secondary', 'bsx-blocks')
}, {
  value: 'secondary-opaque',
  label: __('Secondary opaque', 'bsx-blocks')
}, {
  value: 'secondary-transparent',
  label: __('Secondary transparent', 'bsx-blocks')
}, {
  value: 'success',
  label: __('Success', 'bsx-blocks')
}, {
  value: 'success-opaque',
  label: __('Success opaque', 'bsx-blocks')
}, {
  value: 'success-transparent',
  label: __('Success transparent', 'bsx-blocks')
}, {
  value: 'danger',
  label: __('Danger', 'bsx-blocks')
}, {
  value: 'danger-opaque',
  label: __('Danger opaque', 'bsx-blocks')
}, {
  value: 'danger-transparent',
  label: __('Danger transparent', 'bsx-blocks')
}, {
  value: 'warning',
  label: __('Warning', 'bsx-blocks')
}, {
  value: 'warning-opaque',
  label: __('Warning opaque', 'bsx-blocks')
}, {
  value: 'warning-transparent',
  label: __('Warning transparent', 'bsx-blocks')
}, {
  value: 'info',
  label: __('Info', 'bsx-blocks')
}, {
  value: 'info-opaque',
  label: __('Info opaque', 'bsx-blocks')
}, {
  value: 'info-transparent',
  label: __('Info transparent', 'bsx-blocks')
}, {
  value: 'light',
  label: __('Light', 'bsx-blocks')
}, {
  value: 'light-opaque',
  label: __('Light opaque', 'bsx-blocks')
}, {
  value: 'light-transparent',
  label: __('Light transparent', 'bsx-blocks')
}, {
  value: 'dark',
  label: __('Dark', 'bsx-blocks')
}, {
  value: 'dark-opaque',
  label: __('Dark opaque', 'bsx-blocks')
}, {
  value: 'dark-transparent',
  label: __('Dark transparent', 'bsx-blocks')
}, {
  value: 'transparent',
  label: __('Transparent', 'bsx-blocks')
}];
var textAlignValues = [{
  value: '',
  label: __('– unset –', 'bsx-blocks')
}, {
  value: 'left',
  label: __('left', 'bsx-blocks')
}, {
  value: 'center',
  label: __('Center', 'bsx-blocks')
}, {
  value: 'right',
  label: __('Right', 'bsx-blocks')
}];
var alignmentControls = [{
  icon: 'editor-alignleft',
  title: __('Align left', 'bsx-blocks'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: __('Align center', 'bsx-blocks'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: __('Align right', 'bsx-blocks'),
  align: 'right'
}, {
  icon: 'editor-alignleft',
  title: __('– unset –', 'bsx-blocks'),
  align: ''
}]; // toggles

var ignoreMailtoSpamProtectionToggle = function ignoreMailtoSpamProtectionToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Spam protected email link (default activated)', 'bsx-blocks'),
    checked: !value,
    onChange: onChangeFunction,
    help: __('If activated email will not be easily readable for machines.', 'bsx-blocks')
  });
};
var targetToggle = function targetToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Open in new tab', 'bsx-blocks'),
    checked: value == '_blank',
    onChange: onChangeFunction
  });
};
var disabledToggle = function disabledToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Disabled', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var belowNavbarToggle = function belowNavbarToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Below navbar', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks')
  });
};
var touchFooterToggle = function touchFooterToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Touch footer', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element touch footer without spacing.', 'bsx-blocks')
  });
};
var inverseTextColorToggle = function inverseTextColorToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inverse text color', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var headingInheritTextColorToggle = function headingInheritTextColorToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inherit text color to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var headingInheritFontWeightToggle = function headingInheritFontWeightToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inherit font weight to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var roundedToggle = function roundedToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Rounded', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var alertToggle = function alertToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Alert', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var isGalleryParentToggle = function isGalleryParentToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Is image gallery parent', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
}; // url inputs

var linkUrlInput = function linkUrlInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    label: __('Link URL', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var bgAttachmentFixedLimitedToggle = function bgAttachmentFixedLimitedToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Limit fixed background', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks')
  });
};
var disableResponsiveDownsizingToggle = function disableResponsiveDownsizingToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Disable responsive image downsizing', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'bsx-blocks')
  });
}; // text inputs

var relInput = function relInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Rel (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnInput = function dataFnInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnOptionsInput = function dataFnOptionsInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn-options (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnTargetInput = function dataFnTargetInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn-target (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataTgInput = function dataTgInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-tg (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var iconKeyInput = function iconKeyInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Icon key', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var portraitImgMaxWidthBreakpointInput = function portraitImgMaxWidthBreakpointInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Portrait image max width breakpoint (numeric in px)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    help: __('Portrait image will be shown up to this width.', 'bsx-blocks')
  });
}; // selects

var stateSelect = function stateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('State', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bgColorSelect = function bgColorSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = bgStates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var textColorSelect = function textColorSelect(value, onChangeFunction, allowedValues, label) {
  var defaultValues = textColorStates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: !!label ? label : __('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var buttonStateSelect = function buttonStateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = btnStates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Color / Appearance', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var colorSelect = function colorSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var stateTypeSelect = function stateTypeSelect(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Button Type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: 'outline',
      label: __('Outline', 'bsx-blocks')
    }, {
      value: '',
      label: __('Filled', 'bsx-blocks')
    }]
  });
};
var sizeSelect = function sizeSelect(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: '',
      label: __('– unset –', 'bsx-blocks')
    }, {
      value: 'sm',
      label: __('Small', 'bsx-blocks')
    }, {
      value: 'lg',
      label: __('Large', 'bsx-blocks')
    }]
  });
};
var marginLeftSelect = function marginLeftSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var marginRightSelect = function marginRightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var marginBeforeSelect = function marginBeforeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Spacer before element', 'bsx-blocks')
  });
};
var marginAfterSelect = function marginAfterSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Spacer after element', 'bsx-blocks')
  });
};
var resMarginBreakpointsSelect = function resMarginBreakpointsSelect(value, onChangeFunction, allowedValues, sizeString) {
  var defaultValues = breakpointsWithUnset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Responsive margin breakpoint', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var resMarginPositionSelect = function resMarginPositionSelect(value, onChangeFunction, allowedValues, sizeString) {
  var defaultValues = marginPaddingPositions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Responsive margin position', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var resMarginSizeSelect = function resMarginSizeSelect(value, onChangeFunction, allowedValues, sizeString) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Responsive margin size', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var displaySelect = function displaySelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'block',
    label: __('Block', 'bsx-blocks')
  }, {
    value: 'inline-block',
    label: __('Inline-block', 'bsx-blocks')
  }, {
    value: 'inline',
    label: __('Inline', 'bsx-blocks')
  }, {
    value: 'flex',
    label: __('Flex', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Display', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var verticalAlignSelect = function verticalAlignSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'middle',
    label: __('Middle', 'bsx-blocks')
  }, {
    value: 'baseline',
    label: __('Baseline', 'bsx-blocks')
  }, {
    value: 'top',
    label: __('Top', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: __('Bottom', 'bsx-blocks')
  }, {
    value: 'text-bottom',
    label: __('Text ottom', 'bsx-blocks')
  }, {
    value: 'text-top',
    label: __('Text top', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Vertical align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var alignItemsSelect = function alignItemsSelect(value, onChangeFunction, allowedValues, disabled, sizeString) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'start',
    label: __('Start', 'bsx-blocks')
  }, {
    value: 'center',
    label: __('Center', 'bsx-blocks')
  }, {
    value: 'end',
    label: __('End', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Align items', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    disabled: disabled
  });
};
var paddingBeforeSelect = function paddingBeforeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer before', 'bsx-blocks')
  });
};
var paddingAfterSelect = function paddingAfterSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer after', 'bsx-blocks')
  });
};
var paddingLeftSelect = function paddingLeftSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer left', 'bsx-blocks')
  });
};
var paddingRightSelect = function paddingRightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer right', 'bsx-blocks')
  });
};
var nodeNameSelect = function nodeNameSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'div',
    label: __('div', 'bsx-blocks')
  }, {
    value: 'span',
    label: __('span', 'bsx-blocks')
  }, {
    value: 'section',
    label: __('section', 'bsx-blocks')
  }, {
    value: 'figure',
    label: __('figure', 'bsx-blocks')
  }, {
    value: 'ul',
    label: __('ul', 'bsx-blocks')
  }, {
    value: 'ol',
    label: __('ol', 'bsx-blocks')
  }, {
    value: 'li',
    label: __('li', 'bsx-blocks')
  }, {
    value: 'h1',
    label: __('h1', 'bsx-blocks')
  }, {
    value: 'h2',
    label: __('h2', 'bsx-blocks')
  }, {
    value: 'h3',
    label: __('h3', 'bsx-blocks')
  }, {
    value: 'h4',
    label: __('h4', 'bsx-blocks')
  }, {
    value: 'h5',
    label: __('h5', 'bsx-blocks')
  }, {
    value: 'h6',
    label: __('h6', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Node name', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Node name (please edit only if you know what you’re doing)', 'bsx-blocks')
  });
};
var bgPositionSelect = function bgPositionSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: 'c',
    label: __('Center center', 'bsx-blocks')
  }, {
    value: 'c25',
    label: __('Center 25%', 'bsx-blocks')
  }, {
    value: 'c66',
    label: __('Center 66%', 'bsx-blocks')
  }, {
    value: 'c75',
    label: __('Center 75%', 'bsx-blocks')
  }, {
    value: 'ct',
    label: __('Center top', 'bsx-blocks')
  }, {
    value: 'lc',
    label: __('Left center', 'bsx-blocks')
  }, {
    value: 'rc',
    label: __('Right center', 'bsx-blocks')
  }, {
    value: '33c',
    label: __('33% center', 'bsx-blocks')
  }, {
    value: '66c',
    label: __('66% center', 'bsx-blocks')
  }, {
    value: '80c',
    label: __('80% center', 'bsx-blocks')
  }, {
    value: '66t',
    label: __('66% top', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bgSizeSelect = function bgSizeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: 'cover',
    label: __('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: __('Contain', 'bsx-blocks')
  }, {
    value: '100a',
    label: __('100% auto', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bannerTypeSelect = function bannerTypeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('Fix height', 'bsx-blocks')
  }, {
    value: 'vh',
    label: __('Viewport dependent height', 'bsx-blocks')
  }, {
    value: 'st',
    label: __('Static height', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Banner height type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks')
  });
};
var bannerSizeSelect = function bannerSizeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '1',
    label: __('1 (biggest)', 'bsx-blocks')
  }, {
    value: '2',
    label: __('2', 'bsx-blocks')
  }, {
    value: '3',
    label: __('3', 'bsx-blocks')
  }, {
    value: '4',
    label: __('4', 'bsx-blocks')
  }, {
    value: '5',
    label: __('5', 'bsx-blocks')
  }, {
    value: '6',
    label: __('6 (smallest)', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Banner height size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks')
  });
};
var bgAttachmentSelect = function bgAttachmentSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'static',
    label: __('static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: __('fixed', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background attachement', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var textShadowSelect = function textShadowSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'dark',
    label: __('Dark', 'bsx-blocks')
  }, {
    value: 'darker',
    label: __('Darker', 'bsx-blocks')
  }, {
    value: 'darkest',
    label: __('Darkest', 'bsx-blocks')
  }, {
    value: 'light',
    label: __('Light', 'bsx-blocks')
  }, {
    value: 'primary',
    label: __('Primary', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Text shadow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var fontWeightSelect = function fontWeightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'light',
    label: __('Light', 'bsx-blocks')
  }, {
    value: 'normal',
    label: __('Normal', 'bsx-blocks')
  }, {
    value: 'bold',
    label: __('Bold', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Font weight', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var borderSelect = function borderSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'true',
    label: __('Around', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: __('Bottom', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Border', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var borderStateSelect = function borderStateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Border color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var iconFamilySelect = function iconFamilySelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– Default –', 'bsx-blocks')
  }, {
    value: 's',
    label: __('Solid', 'bsx-blocks')
  }, {
    value: 'b',
    label: __('Brand', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Icon family', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var widthSelect = function widthSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: '100',
    label: __('100 %', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Width', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var justifyContentSelect = function justifyContentSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'space-between',
    label: __('Space between', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Justify content', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var flexDirectionSelect = function flexDirectionSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'column',
    label: __('Column', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Flex direction', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var breakpointsSelect = function breakpointsSelect(value, onChangeFunction, allowedValues, labelString) {
  var defaultValues = breakpointsWithUnset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: !!labelString ? ' ' + labelString : __('Breakpoint', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var textAlignSelect = function textAlignSelect(value, onChangeFunction, allowedValues, labelString) {
  var defaultValues = textAlignValues;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: !!labelString ? ' ' + labelString : __('Text align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
}; // radio

var scaleSelect = function scaleSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '1',
    label: __('100%', 'bsx-blocks')
  }, {
    value: '0.75',
    label: __('75%', 'bsx-blocks')
  }, {
    value: '0.5',
    label: __('50%', 'bsx-blocks')
  }, {
    value: '0.25',
    label: __('25%', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
    label: __('Scale', 'bsx-blocks'),
    selected: value + '',
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    onChange: onChangeFunction
  });
}; // toolbar

var textAlignToolbar = function textAlignToolbar(value, onChangeFunction) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    label: __('Alignment', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    alignmentControls: alignmentControls
  });
}; // uploads

var imgUploadClickableImg = function imgUploadClickableImg(imgId, url, onChangeFunction, type) {
  var alt = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'bsx-blocks') : __('Change / upload image', 'bsx-blocks');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        className: "bsxui-config-panel-img-button has-margin-bottom",
        onClick: open
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        class: "bsxui-config-panel-img",
        src: url,
        alt: alt
      }));
    }
  });
};
var imgUploadButton = function imgUploadButton(imgId, onChangeFunction, type) {
  var label = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'bsx-blocks') : __('Change / upload image', 'bsx-blocks');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        onClick: open,
        isSecondary: true
      }, label);
    }
  });
}; // template selects

var inlineTemplateSelect = function inlineTemplateSelect(templates, onChangeFunction) {
  // has no templateName since non selected yet
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "bsxui-initial-inline-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "bsxui-initial-inline-control-heading"
  }, __('Please select template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map(function (template, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      label: template.title,
      onClick: function onClick() {
        onChangeFunction(template.name);
      },
      className: 'bsxui-icon-text-button-list-item '
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-icon"
    }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-label"
    }, template.title));
  })));
};
var uiTemplateSelect = function uiTemplateSelect(templates, templateName, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map(function (template, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      label: template.title,
      onClick: function onClick() {
        onChangeFunction(template.name);
      },
      className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-icon"
    }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-label"
    }, template.title));
  }));
};

/***/ }),

/***/ "./src/_functions/img.js":
/*!*******************************!*\
  !*** ./src/_functions/img.js ***!
  \*******************************/
/*! exports provided: getUrlTruncAndExtension, checkFullImgIsScaled, getOriginalImgUrl, getSizesAndWithoutSizesTruncFromUrlTrunc, removeFileExt, getSizeSlugFromUrl, makeSizedImgs, getImgWidthHeight, imgExists, getImgSizesData, makeBase64PreloadImgSrc, makeImgSizesFromImgData, makeImgData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlTruncAndExtension", function() { return getUrlTruncAndExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFullImgIsScaled", function() { return checkFullImgIsScaled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalImgUrl", function() { return getOriginalImgUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizesAndWithoutSizesTruncFromUrlTrunc", function() { return getSizesAndWithoutSizesTruncFromUrlTrunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFileExt", function() { return removeFileExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeSlugFromUrl", function() { return getSizeSlugFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSizedImgs", function() { return makeSizedImgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgWidthHeight", function() { return getImgWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgExists", function() { return imgExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgSizesData", function() { return getImgSizesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBase64PreloadImgSrc", function() { return makeBase64PreloadImgSrc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImgSizesFromImgData", function() { return makeImgSizesFromImgData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImgData", function() { return makeImgData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


// img functions
function getUrlTruncAndExtension(url) {
  var urlExplode = url.split('.');
  var fileExtension = urlExplode[urlExplode.length - 1];
  urlExplode.pop();
  var urlWithoutFileExtension = urlExplode.join('.');
  return {
    trunc: urlWithoutFileExtension,
    extension: fileExtension
  };
}
function checkFullImgIsScaled(fullUrl) {
  var urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
}
function getOriginalImgUrl(fullUrl) {
  var truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}
function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  // remove file name after last '-'
  var urlWithoutFileExtensionExplode = urlTrunc.split('-');
  var sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizeSlugTrunc: urlWithoutFileExtensionExplode.join('-')
  };
}
function removeFileExt(fullUrl) {
  var urlExplode = fullUrl.split('.');
  urlExplode.pop();
  return urlExplode.join('.');
}
function getSizeSlugFromUrl(fullUrl, originalImgUrl) {
  var sizeSlugWithFileExt = fullUrl.replace(removeFileExt(originalImgUrl), '');
  return removeFileExt(sizeSlugWithFileExt);
}
function makeSizedImgs(config) {
  var originalWidth = config.originalWidth,
      originalHeight = config.originalHeight,
      url = config.url,
      scaleList = config.scaleList;
  var ratio = originalWidth / originalHeight;
  var urlTruncAndExtension = getUrlTruncAndExtension(url);
  var fileExtension = urlTruncAndExtension.extension;
  var urlWithoutFileExtension = urlTruncAndExtension.trunc;
  var sizesAndWithoutSizeSlugTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  var width = sizesAndWithoutSizeSlugTrunc.width;
  var urlWithoutSizeSlugAndFileExtension = sizesAndWithoutSizeSlugTrunc.withoutSizeSlugTrunc;
  var returnList = [];
  scaleList.forEach(function (scale, index) {
    // calculate new size
    var scaledWidth = Math.round(width * scale); // check if default size exists for current img (only if original img is larger)

    if (scaledWidth <= originalWidth) {
      var scaledHeight = Math.round(scaledWidth / ratio);
      var sizeSlug = '-' + scaledWidth + 'x' + scaledHeight;
      var scaledUrl = urlWithoutSizeSlugAndFileExtension + sizeSlug + '.' + fileExtension;
      returnList.push({
        url: scaledUrl,
        // deprecated soon
        sizeSlug: sizeSlug,
        width: scaledWidth,
        height: scaledHeight
      });
    }
  });
  return returnList;
}
function getImgWidthHeight(imgUrl) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');

    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height
      });
      img.remove;
    };

    img.onerror = function (err) {
      reject('Error on loading image "' + imgUrl + '"', err);
    };

    img.src = imgUrl;
    document.body.appendChild(img);
  });
}
function imgExists(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    };

    xhr.send(null);
  });
} // getting sorted list of all imgs (default and hidden scaled)

function getImgSizesData(_x) {
  return _getImgSizesData.apply(this, arguments);
}

function _getImgSizesData() {
  _getImgSizesData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(img) {
    var imgScaleList, imgBaseSize, defaultImgList, imgSizesOrder, originalImgUrl, originalWidth, originalHeight, fullImgIsScaled, originalImgSizes, originalImgUrlTruncAndExt, truncWithoutSizeSlug, fileExt, scaledImgs, returnImgs, sizedImgsConfig, sizedImgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // console.log( 'getImgSizesData()' );
            // scaled (hidden) img settings
            imgScaleList = [0.75, 1.5, 2];
            imgBaseSize = 'large';
            defaultImgList = ['thumbnail', 'medium', imgBaseSize, 'full'];
            imgSizesOrder = ['thumbnail', 'medium', imgScaleList[0] + '', imgBaseSize, imgScaleList[1] + '', imgScaleList[2] + '', 'full', 'original'];
            originalImgUrl = '';
            originalWidth = 0;
            originalHeight = 0;
            fullImgIsScaled = checkFullImgIsScaled(img.url);

            if (!fullImgIsScaled) {
              _context2.next = 23;
              break;
            }

            // get original, get sizes
            originalImgUrl = getOriginalImgUrl(img.url);
            _context2.prev = 10;
            _context2.next = 13;
            return getImgWidthHeight(originalImgUrl);

          case 13:
            originalImgSizes = _context2.sent;
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](10);
            console.error(_context2.t0);

          case 19:
            originalWidth = originalImgSizes.width;
            originalHeight = originalImgSizes.height;
            _context2.next = 26;
            break;

          case 23:
            // get sizes from full img
            originalImgUrl = img.sizes.full.url;
            originalWidth = img.sizes.full.width;
            originalHeight = img.sizes.full.height;

          case 26:
            originalImgUrlTruncAndExt = getUrlTruncAndExtension(originalImgUrl);
            truncWithoutSizeSlug = originalImgUrlTruncAndExt.trunc;
            fileExt = originalImgUrlTruncAndExt.extension;
            scaledImgs = new Map();
            returnImgs = []; // make sizes only if large img exists

            if (!(img.sizes.large != undefined)) {
              _context2.next = 36;
              break;
            }

            // config for making sizes (might change in newer WP versions)
            sizedImgsConfig = {
              url: img.sizes[imgBaseSize].url,
              scaleList: imgScaleList,
              originalWidth: originalWidth,
              originalHeight: originalHeight
            };
            sizedImgs = makeSizedImgs(sizedImgsConfig); // console.log( 'sizedImgs: ' + JSON.stringify( sizedImgs, null, 2 ) );
            // check all imgs if exist (since WordPress might change hidden img sizes one day);

            _context2.next = 36;
            return Promise.all(sizedImgs.map( /*#__PURE__*/function () {
              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(sizedImg, index) {
                var currentImageExists;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return imgExists(sizedImg.url);

                      case 2:
                        currentImageExists = _context.sent;

                        if (currentImageExists) {
                          scaledImgs.set(imgScaleList[index] + '', sizedImg);
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 36:
            // console.log( 'scaledImgs.length: ' + scaledImgs.length );
            // // TEST – TODO: remove
            // for ( let [ key, value ] of Object.entries( scaledImgs ) ) {
            //     console.log( 'scaledImgs[ ' + key + ' ].url: ' + value.url );
            //     console.log( 'scaledImgs[ ' + key + ' ].sizeSlug: ' + value.sizeSlug );
            // }
            // make ordered list of all existing default img sizes and scaled (hidden) img sizes
            imgSizesOrder.forEach(function (imgSize, index) {
              if (defaultImgList.indexOf(imgSize) != -1 && img.sizes[imgSize] != undefined) {
                // get from default img list
                returnImgs.push({
                  url: img.sizes[imgSize].url,
                  sizeSlug: getSizeSlugFromUrl(img.sizes[imgSize].url, originalImgUrl),
                  width: img.sizes[imgSize].width,
                  height: img.sizes[imgSize].height
                });
              } else if (imgScaleList.indexOf(parseFloat(imgSize)) != -1 && scaledImgs.get(imgSize) != undefined) {
                // get from scaled imgs list
                returnImgs.push(scaledImgs.get(imgSize));
              } else if (imgSize == 'original' && fullImgIsScaled) {
                // add unscaled original
                returnImgs.push({
                  url: originalImgUrl,
                  sizeSlug: getSizeSlugFromUrl(originalImgUrl, originalImgUrl),
                  width: originalWidth,
                  height: originalHeight
                });
              }
            }); // TEST – TODO: remove
            // returnImgs.forEach( ( returnImg, index ) => {
            //     console.log( 
            //         index + ':\n' 
            //         + returnImg.url + '\n'
            //         + returnImg.width + '\n'
            //         + returnImg.height + '\n'
            //     );
            // } );
            // console.log( 'returnImgs: ' + JSON.stringify( returnImgs, null, 2 ) );
            // console.log( 'truncWithoutSizeSlug: ' + truncWithoutSizeSlug );
            // console.log( 'fileExt: ' + fileExt );

            return _context2.abrupt("return", {
              imgs: returnImgs,
              originalWidth: originalWidth,
              originalHeight: originalHeight,
              truncWithoutSizeSlug: truncWithoutSizeSlug,
              fileExt: fileExt
            });

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 16]]);
  }));
  return _getImgSizesData.apply(this, arguments);
}

var makeBase64PreloadImgSrc = function makeBase64PreloadImgSrc(imgWidth, imgHeight) {
  var img = '<svg xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + 'px" height="' + imgHeight + 'px" viewBox="0 0 ' + imgWidth + ' ' + imgHeight + '"><rect fill="none" width="' + imgWidth + '" height="' + imgHeight + '"/></svg>';
  var imgBase64 = btoa(img);
  return 'data:image/svg+xml;base64,' + imgBase64;
};
/*
example:

// was saved in attibutes before
imgSizes = [
    {
        url: '', // url was very large
        width: '',
        height: '',
    },
    // ... (1...n)
];

// is saved in attributes now, replaces imgSizes
imgData = [
    sizes: [
        {
            s: '', // size slug is short
            w: '',
            h: '',
        },
        // ... (1...n)
    ],
    trunc: '',
    ext: '',
];
*/

var makeImgSizesFromImgData = function makeImgSizesFromImgData(imgData) {
  // console.log( 'makeImgSizesFromImgData()' );
  // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) + '\n' );
  var imgSizes = [];

  if (typeof imgData[0] !== 'undefined' && typeof imgData[0].sizes !== 'undefined' && typeof imgData[0].trunc !== 'undefined' && typeof imgData[0].ext !== 'undefined') {
    imgData[0].sizes.forEach(function (size, index) {
      if (typeof size.s !== 'undefined' && typeof size.w !== 'undefined' && typeof size.h !== 'undefined') {
        imgSizes.push({
          url: imgData[0].trunc + size.s + '.' + imgData[0].ext,
          width: size.w,
          height: size.h
        });
      }
    });
  }

  return imgSizes;
};
var makeImgData = function makeImgData(imgSizes, truncWithoutSizeSlug, fileExt) {
  var sizes = [];
  imgSizes.forEach(function (img, index) {
    sizes.push({
      s: img.sizeSlug,
      w: img.width,
      h: img.height
    });
  });
  return [{
    sizes: sizes,
    trunc: truncWithoutSizeSlug,
    ext: fileExt
  }];
}; // export async function getOriginalImgSizes( img ) {
//     if ( fullImgIsScaled( img.url ) ) {
//         // find original img
//         let originalImgSizes;
//         try {
//             originalImgSizes = await getImgWidthHeight( getOriginalImgUrl( img.url ) );
//         } catch( err ) {
//             console.error( err );
//         }
//         return {
//             width: originalImgSizes.width,
//             height: originalImgSizes.height,
//         };
//     }
//     else {
//         // get sizes from full img
//         return {
//             width: img.sizes.full.width,
//             height: img.sizes.full.height,
//         };
//     }
// }

/***/ }),

/***/ "./src/_functions/utilities.js":
/*!*************************************!*\
  !*** ./src/_functions/utilities.js ***!
  \*************************************/
/*! exports provided: filterByAllowedValueKeys, getTemplate, getFileSuffix, getFileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByAllowedValueKeys", function() { return filterByAllowedValueKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSuffix", function() { return getFileSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileName", function() { return getFileName; });
var filterByAllowedValueKeys = function filterByAllowedValueKeys(mapArray, allowedValues) {
  var filteredValues = [];

  if (typeof allowedValues !== 'undefined' && allowedValues != null && Array.isArray(allowedValues) && allowedValues.length > 0) {
    mapArray.forEach(function (item) {
      if (typeof allowedValues.find(function (key) {
        return key === item.value;
      }) !== 'undefined') {
        filteredValues.push(item);
      }
    });
  } else {
    filteredValues = mapArray;
  }

  return filteredValues;
};
var getTemplate = function getTemplate(templates, currentTemplateName) {
  var currentTemplate = templates.find(function (item) {
    return item.name === currentTemplateName;
  });
  return currentTemplate ? currentTemplate : {};
};
var getFileSuffix = function getFileSuffix(filePath) {
  if (!!filePath && filePath.indexOf('.') != -1) {
    var explode = filePath.split('.');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};
var getFileName = function getFileName(filePath) {
  if (!!filePath && filePath.indexOf('/') != -1) {
    var explode = filePath.split('/');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};

/***/ }),

/***/ "./src/_functions/wp-icons.js":
/*!************************************!*\
  !*** ./src/_functions/wp-icons.js ***!
  \************************************/
/*! exports provided: svgIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgIcon", function() { return svgIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// svg icons
function svgIcon(iconKey) {
  var icon = '';

  switch (iconKey) {
    case 'default':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;
    // badge

    case 'badge':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M14.5,7.5c0,0,0,0-9,0C4.12,7.5,3,8.62,3,10c0,1.38,1.12,2.5,2.5,2.5c9,0,9,0,9,0c1.38,0,2.5-1.12,2.5-2.5 C17,8.62,15.88,7.5,14.5,7.5z M14.5,10.5c0,0,0,0-9,0v0C5.22,10.5,5,10.28,5,10c0-0.28,0.22-0.5,0.5-0.5c9,0,9,0,9,0 c0.28,0,0.5,0.22,0.5,0.5C15,10.27,14.78,10.5,14.5,10.5z"
      }));
      break;
    // button

    case 'buttons':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M13,11c0,0,0,0-6,0v0 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c6,0,6,0,6,0c0.55,0,1,0.45,1,1C14,10.55,13.55,11,13,11z"
      }));
      break;

    case 'button':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M15,11H5V9h10V11z"
      }));
      break;

    case 'button-label':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M4,3v3.5h1v-1c0-0.55,0.45-1,1-1h3.25V15c0,0.55-0.45,1-1,1h-1v1h5.5v-1h-1c-0.55,0-1-0.45-1-1V4.5H14c0.55,0,1,0.45,1,1v1 h1V3H4z"
      }));
      break;

    case 'buttons-one-button':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M30,20H18c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C32,20.9,31.1,20,30,20z M29,25.5H19v-3h10V25.5z"
      }));
      break;

    case 'buttons-two-buttons':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M21,20H9c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C23,20.9,22.1,20,21,20z M20,25.5H10v-3h10V25.5z M39,20H27c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C41,20.9,40.1,20,39,20z M38,25.5H28v-3h10V25.5z"
      }));
      break;

    case 'buttons-text-link':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19,20c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H28c0.55,0,1,0.45,1,1v1h1v-5H18v5h1 V20z M17,30v2h14v-2H17z"
      }));
      break;

    case 'buttons-label-text-link':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M27,21c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H36c0.55,0,1,0.45,1,1v1h1v-5H26v5h1 V21z M10,22h1v-1c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H20c0.55,0,1,0.45,1,1v1h1v-5H10V22 z M25,31v2h14v-2H25z"
      }));
      break;
    // button icons (wp ui button)

    case 'carret-left':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M14 5l-5 5 5 5-1 2-7-7 7-7z"
      }));
      break;

    case 'carret-right':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M6 15l5-5-5-5 1-2 7 7-7 7z"
      }));
      break;

    case 'trash':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
      }));
      break;
    // banner

    case 'banner':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M17,5H3C1.9,5,1,5.9,1,7v6c0,1.11,0.9,2,2,2h14c1.1,0,2-0.89,2-2V7C19,5.9,18.1,5,17,5z M4.5,7C5.33,7,6,7.67,6,8.5 C6,9.33,5.33,10,4.5,10C3.67,10,3,9.33,3,8.5C3,7.67,3.67,7,4.5,7z M17,13H3l-0.02-1L7,10l2,1l5-3l3,2V13z"
      }));
      break;

    case 'banner-empty':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;

    case 'banner-container-with-heading':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;

    case 'banner-static-container-with-heading':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;

    case 'column-row-banner':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;
    // check-list

    case 'check-list':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1 C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0 L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58 l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29 l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"
      }));
      break;
    // container

    case 'container':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M6,5H4v2h2V5z M6,9H4v2h2V9z M4,15h2v-2H4V15z M16,5h-2v2h2V5z M16,9h-2v2h2V9z M14,15h2v-2h-2V15z M2,4h16 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H2C1.45,2,1,2.45,1,3C1,3.55,1.45,4,2,4z M18,16H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1C19,16.45,18.55,16,18,16z"
      }));
      break;
    // column-rows

    case 'column-rows':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
      }));
      break;
    // columns

    case 'row-with-cols-col':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
      }));
      break;
    // icon

    case 'icon':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3z M13.08,9.08l-3.75,3.75 c-0.19,0.19-0.44,0.29-0.71,0.29c-0.27,0-0.52-0.1-0.71-0.29l-1.5-1.5c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.42,0 l0.79,0.79l3.04-3.04c0.39-0.39,1.02-0.39,1.41,0C13.47,8.06,13.47,8.69,13.08,9.08z"
      }));
      break;
    // icon-list

    case 'icon-list':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M10,3v3h8V3H10z M4.75,1.88L3.9,3.61L2,3.88l1.37,1.34L3.05,7.12l1.7-0.89l1.7,0.89L6.13,5.22L7.5,3.88L5.6,3.61L4.75,1.88z M10,12h8V9h-8V12z M5.79,8.79L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1 C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,8.4,6.18,8.4,5.79,8.79z M10,18h8v-3 h-8V18z M6.71,14.54c-0.39-0.39-1.02-0.39-1.41,0l-0.54,0.54l-0.54-0.54c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.42 l0.54,0.54l-0.54,0.54c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29c0.26,0,0.51-0.1,0.71-0.29l0.54-0.54l0.54,0.54 c0.19,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L6.16,16.5l0.54-0.54C7.1,15.57,7.1,14.93,6.71,14.54z "
      }));
      break;

    case 'icon-list-item':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M10,9v3h8V9H10z M4.8,7.9L3.9,9.6L2,9.9l1.4,1.3L3,13.1l1.7-0.9l1.7,0.9l-0.3-1.9l1.4-1.3L5.6,9.6L4.8,7.9z"
      }));
      break;
    // slider

    case 'slider':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M10,17c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S10.55,17,10,17z M7,17c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S7.55,17,7,17z M13,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S13.55,17,13,17z M12.61,11.57 c-0.23-0.56-0.1-1.21,0.33-1.63L14.88,8l-1.94-1.94c-0.43-0.43-0.56-1.07-0.33-1.63S13.39,3.5,14,3.5h2V2c0-0.55-0.45-1-1-1H5 C4.45,1,4,1.45,4,2v1.5h2c0.61,0,1.15,0.37,1.39,0.93c0.23,0.56,0.1,1.21-0.33,1.63L5.12,8l1.94,1.94 c0.43,0.43,0.56,1.07,0.33,1.63C7.15,12.13,6.61,12.5,6,12.5H4V14c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v-1.5h-2 C13.39,12.5,12.85,12.13,12.61,11.57z M3,8l3-3H3L0,8l3,3h3L3,8z M17,5h-3l3,3l-3,3h3l3-3L17,5z"
      }));
      break;
    // gallery

    case 'gallery':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M8,10L6,9l-2,1v2.99h9V9l-2-1L8,10z M7,8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2S5,4.9,5,6C5,7.1,5.9,8,7,8z M18.71,4.29 C18.52,4.1,18.27,4,18,4h-2V2c0-0.27-0.1-0.52-0.29-0.71C15.52,1.1,15.27,1,15,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2 v13c0,0.26,0.11,0.52,0.29,0.71C1.48,15.89,1.74,16,2,16h2v2c0,0.26,0.11,0.52,0.29,0.71C4.48,18.89,4.74,19,5,19h13 c0.27,0,0.52-0.1,0.71-0.29C18.9,18.52,19,18.27,19,18V5C19,4.73,18.9,4.48,18.71,4.29z M3,14V3h11v11H3z M17,17H6v-1h9 c0.27,0,0.52-0.1,0.71-0.29C15.9,15.52,16,15.27,16,15V6h1V17z"
      }));
      break;
    // groups

    case 'groups':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M7,7h6c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v2C6,6.55,6.45,7,7,7z M13,13H7c-0.55,0-1,0.45-1,1v2 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2C14,13.45,13.55,13,13,13z M9.5,11V9c0-0.55-0.45-1-1-1H3C2.45,8,2,8.45,2,9v2 c0,0.55,0.45,1,1,1h5.5C9.05,12,9.5,11.55,9.5,11z M17,8h-5.5c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1H17c0.55,0,1-0.45,1-1V9 C18,8.45,17.55,8,17,8z"
      }));
      break;

    case 'groups-lazy-img-paragraph-button':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;

    case 'groups-lazy-img-heading-paragraph':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
      break;
    // lazy img

    case 'lazy-img':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"
      }));
      break;

    case 'img-placeholder':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "360",
        height: "240",
        viewBox: "0 0 360 240",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        d: "M0,0v240h360V0H0z M129.9,40c16.51,0,29.89,13.39,29.89,29.9c0,16.51-13.38,29.89-29.89,29.89 c-16.52,0-29.9-13.38-29.9-29.89C100,53.39,113.38,40,129.9,40z M340,220H20v-40l80-40l80,20l80-60l80,40V220z"
      }));
      break;
    // row with columns

    case 'row-with-cols':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
      }));
      break;
    // section

    case 'section':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"
      }));
      break;

    case 'section-empty':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M38.96,30h2l0.01-3h-2L38.96,30z M23,18h3v-2h-3V18z M28,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M13,36h3v-2h-3V36z M33,18h3v-2h-3 V18z M18,36h3v-2h-3V36z M28,18h3v-2h-3V18z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M9,23H7v3h2 V23z M9,18H7v3h2V18z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M9,28H7v3h2V28z M38.98,25h2l0.01-3h-2L38.98,25z M18.41,14L17,15.41 l2.29,2.29C19.48,17.9,19.73,18,20,18h1v-2h-0.59L18.41,14z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2 V14z"
      }));
      break;

    case 'section-container-heading':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13,24h22v-3H13V24z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9 V33z M9,18H7v3h2V18z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M26,16h-3v2h3V16 z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M23,36h3v-2h-3V36z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M33,36h3v-2h-3V36z M13,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M28,36h3v-2h-3 V36z"
      }));
      break;

    case 'section-container-heading-text-gallery':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M35,20H13v3h22V20z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M26,16h-3v2h3V16z M9,14h1v-2H8 c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59 l-2-2L17,15.41L19.29,17.71z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.96,30h2l0.01-3h-2L38.96,30z M15.58,14L17,12.59l-0.29-0.29C16.52,12.11,16.26,12,16,12 h-4v2L15.58,14L15.58,14z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2 L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2 h-3V36z M35,31v-3h-6v3H35z M21,31h6v-3h-6V31z M13,31h6v-3h-6V31z M35,24H13v1h22V24z M35,26H13v1h22V26z"
      }));
      break;

    case 'section-container-rounded-colored-banner':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M31,16h-3v2h3V16z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29 C7.11,12.48,7,12.74,7,13v3h2V14z M26,16h-3v2h3V16z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1 l0.01-3h-2L38.95,34z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M38.98,25h2 l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2h-3V36z M33,36h3v-2 h-3V36z M13,22v5c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H14C13.45,21,13,21.45,13,22z M26,27h-4v-1h4V27z M20,22h8v1h-8V22z M15,24h18v1H15V24z"
      }));
      break;
    // video

    case 'video':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M17,4H3C1.9,4,1,5.07,1,6.4v7.2C1,14.93,1.9,16,3,16h14c1.1,0,2-1.07,2-2.4V6.4C19,5.07,18.1,4,17,4z M8,13V7l5.2,3L8,13z"
      })));
      break;

    case 'video-placeholder':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "360",
        height: "240",
        viewBox: "0 0 360 240",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        d: "M0,0v240h360V0H0z M160,160V80l69.28,40L160,160z"
      }));
      break;
    // wrapper

    case 'wrapper':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M11,5h3V3h-3V5z M3,9H1v3h2V9z M6,5h3V3H6V5z M6,17h3v-2H6V17z M18.71,3.29C18.52,3.1,18.27,3,18,3h-2v2h1v1h2V4 C19,3.73,18.9,3.48,18.71,3.29z M17,11h2V8h-2V11z M3,14H1v2c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2H3V14z M17,15 h-1v2h2c0.27,0,0.52-0.1,0.71-0.29C18.9,16.52,19,16.27,19,16v-3h-2V15z M11,17h3v-2h-3V17z M1.29,3.29C1.11,3.48,1,3.74,1,4v3h2V5 h1V3H2C1.74,3,1.48,3.11,1.29,3.29z"
      }));
      break;
    // default

    default:
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      }));
  }

  return icon;
}

/***/ }),

/***/ "./src/banner/block.js":
/*!*****************************!*\
  !*** ./src/banner/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../_functions/utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates */ "./src/banner/templates.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    RadioControl = _wp$components.RadioControl;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect; // functions






 // data

 // functions

var makeBannerClassNames = function makeBannerClassNames(attributes) {
  var bannerType = attributes.bannerType,
      bannerSize = attributes.bannerSize,
      bgAttachment = attributes.bgAttachment,
      bgAttachmentFixedLimited = attributes.bgAttachmentFixedLimited,
      bgSize = attributes.bgSize,
      bgPosition = attributes.bgPosition,
      alignItems = attributes.alignItems,
      smAlignItems = attributes.smAlignItems,
      mdAlignItems = attributes.mdAlignItems,
      templateName = attributes.templateName,
      rounded = attributes.rounded,
      href = attributes.href;
  var classNames = [];

  if (!!bannerType) {
    // always set bannerType and bannerSize to keep debugging easy
    classNames.push('banner-' + bannerType + '-' + bannerSize);
  } else {
    classNames.push('banner-' + bannerSize);
  }

  if (!!bgAttachment) {
    classNames.push('bg-' + bgAttachment);
  }

  if (!!bgAttachmentFixedLimited) {
    classNames.push('bg-w2000-static');
  }

  if (!!bgSize) {
    classNames.push('bg-' + bgSize);
  }

  if (!!bgPosition) {
    classNames.push('bg-' + bgPosition);
  }

  if (!!templateName == 'column-row-banner' && classNames.indexOf('d-flex') == -1) {
    classNames.push('d-flex');
  }

  if (!!alignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }

    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-' + alignItems);
    }
  }

  if (!!smAlignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }

    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-sm-' + smAlignItems);
    }
  }

  if (!!mdAlignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }

    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-md-' + mdAlignItems);
    }
  }

  if (rounded === true) {
    classNames.push('of-hidden');
  }

  if (!!href) {
    classNames.push('d-block');
    classNames.push('no-underline');
  }

  return classNames.join(' ');
};

var makeBannerInnerClassNames = function makeBannerInnerClassNames(attributes) {
  var templateName = attributes.templateName;
  var classNames = ['banner-inner'];

  if (!!templateName && templateName == 'column-row-banner') {
    classNames.push('w-100');
    classNames.push('d-flex');
    classNames.push('flex-column');
  }

  return classNames.join(' ');
}; // responsive sizes


var responsivePortraitMediaIndexList = [{
  media: '(orientation: portrait) and (max-width: 499.98px)',
  imgSizeIndexShift: '-1'
}, {
  media: '(orientation: portrait)',
  imgSizeIndexShift: '0'
}];
var responsiveMediaIndexList = [{
  media: '(max-width: 999.98px)',
  imgSizeIndexShift: '-3'
}, {
  media: '(max-width: 1399.98px)',
  imgSizeIndexShift: '-2'
}];
var skipIndex = 0;

var makeSrcsetJson = function makeSrcsetJson(attributes) {
  var calcImgSizes = attributes.calcImgSizes,
      imgSizeIndex = attributes.imgSizeIndex,
      calcPortraitImgSizes = attributes.calcPortraitImgSizes,
      portraitImgSizeIndex = attributes.portraitImgSizeIndex,
      disableResponsiveDownsizing = attributes.disableResponsiveDownsizing; // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + calcImgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + calcImgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";

  var srcsetJson = '[ ';
  responsivePortraitMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > skipIndex (no square format)
    if (!disableResponsiveDownsizing || index == 0) {
      // always add 1st item, others only if downsizing is enabled
      var currentPortraitImgSizeIndex = parseInt(portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);

      if (typeof calcPortraitImgSizes !== 'undefined' && currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < calcPortraitImgSizes.length) {
        srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcPortraitImgSizes[currentPortraitImgSizeIndex].url + '\' }, ';
      }
    }
  });

  if (!disableResponsiveDownsizing) {
    responsiveMediaIndexList.forEach(function (item, index) {
      // add item if img resulting indes > skipIndex (no square format)
      var currentImgSizeIndex = parseInt(imgSizeIndex) + parseInt(item.imgSizeIndexShift);

      if (currentImgSizeIndex > skipIndex && currentImgSizeIndex < calcImgSizes.length) {
        srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcImgSizes[currentImgSizeIndex].url + '\' }, ';
      }
    });
  }

  if (srcsetJson.lastIndexOf(', ') == srcsetJson.length - 2) {
    srcsetJson = srcsetJson.substring(0, srcsetJson.length - 2);
  }

  srcsetJson += ' ]';
  return srcsetJson;
}; // insert directly into banner element without `.banner-inner`


var noBannerInnerTemplateNames = ['column-row-banner'];
registerBlockType('bsx-blocks/banner', {
  title: __('BSX Banner', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_5__["svgIcon"])('banner'),
  category: 'layout',
  attributes: {
    nodeName: {
      type: 'string',
      default: 'div'
    },
    templateName: {
      type: 'string'
    },
    belowNavbar: {
      type: 'boolean',
      default: false
    },
    touchFooter: {
      type: 'boolean',
      default: false
    },
    bgColor: {
      type: 'string'
    },
    imgId: {
      type: 'number'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    imgSizes: {
      type: 'array',
      default: []
    },
    imgData: {
      type: 'array',
      default: []
    },
    imgSizeIndex: {
      type: 'string',
      default: '6'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    url: {
      type: 'string'
    },
    portraitImgId: {
      type: 'number'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    portraitImgSizes: {
      type: 'array',
      default: []
    },
    portraitImgData: {
      type: 'array',
      default: []
    },
    portraitImgSizeIndex: {
      type: 'string',
      default: '3'
    },
    bannerType: {
      type: 'string',
      default: 'vh'
    },
    bannerSize: {
      type: 'string',
      default: '2'
    },
    bgAttachment: {
      type: 'string',
      default: 'fixed'
    },
    bgAttachmentFixedLimited: {
      type: 'boolean'
    },
    bgSize: {
      type: 'string',
      default: 'cover'
    },
    bgPosition: {
      type: 'string',
      default: 'c'
    },
    alignItems: {
      type: 'string',
      default: 'center'
    },
    rounded: {
      type: 'boolean'
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    },
    paddingBefore: {
      type: 'string',
      default: ''
    },
    paddingAfter: {
      type: 'string',
      default: ''
    },
    href: {
      type: 'string'
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    dataFn: {
      type: 'string'
    },
    disableResponsiveDownsizing: {
      type: 'boolean'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        nodeName = _props$attributes.nodeName,
        templateName = _props$attributes.templateName,
        belowNavbar = _props$attributes.belowNavbar,
        touchFooter = _props$attributes.touchFooter,
        bgColor = _props$attributes.bgColor,
        imgId = _props$attributes.imgId,
        imgSizes = _props$attributes.imgSizes,
        imgData = _props$attributes.imgData,
        imgSizeIndex = _props$attributes.imgSizeIndex,
        url = _props$attributes.url,
        portraitImgId = _props$attributes.portraitImgId,
        portraitImgSizes = _props$attributes.portraitImgSizes,
        portraitImgData = _props$attributes.portraitImgData,
        portraitImgSizeIndex = _props$attributes.portraitImgSizeIndex,
        bannerType = _props$attributes.bannerType,
        bannerSize = _props$attributes.bannerSize,
        bgAttachment = _props$attributes.bgAttachment,
        bgAttachmentFixedLimited = _props$attributes.bgAttachmentFixedLimited,
        bgSize = _props$attributes.bgSize,
        bgPosition = _props$attributes.bgPosition,
        alignItems = _props$attributes.alignItems,
        smAlignItems = _props$attributes.smAlignItems,
        mdAlignItems = _props$attributes.mdAlignItems,
        rounded = _props$attributes.rounded,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        href = _props$attributes.href,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        dataFn = _props$attributes.dataFn,
        disableResponsiveDownsizing = _props$attributes.disableResponsiveDownsizing,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children; // initial set, replaces old attr 'imgSizes'

    var hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
    var hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
    var calcImgSizes = hasOldAttrImgSizes ? imgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgSizesFromImgData"])(imgData);
    var calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgSizesFromImgData"])(portraitImgData); // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var template = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_10__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_10__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], value);

      if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
        template = currentTemplateMap.template;
        setAttributes(_objectSpread({
          templateName: value
        }, currentTemplateMap.attributes));
      } else {
        console.log('Error: Template change failed.');
      } // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );

    };

    var onChangeNodeName = function onChangeNodeName(value) {
      setAttributes({
        nodeName: value
      });
    };

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
      });
    };

    var onChangeTouchFooter = function onChangeTouchFooter(value) {
      setAttributes({
        touchFooter: value
      });
    };

    var onChangeBgColor = function onChangeBgColor(value) {
      setAttributes({
        bgColor: value
      });
    };

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(img) {
        var newImgAllData, newImgSizeIndex, newImgData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["getImgSizesData"])(img);

              case 3:
                newImgAllData = _context.sent;
                // check if current img size index fits to new img (might be too large)
                newImgSizeIndex = parseInt(imgSizeIndex);

                if (parseInt(imgSizeIndex) >= newImgAllData.imgs.length) {
                  newImgSizeIndex = newImgAllData.imgs.length - 1;
                } // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')


                newImgData = Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgData"])(newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt); // avoid creating deprecated (empty) attr 'imgSizes'

                if (imgSizes && imgSizes.length > 0) {
                  // delete value of 'imgSizes'
                  setAttributes({
                    imgId: img.id,
                    imgSizes: '',
                    // save empty, replaced by imgData
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: '' // save empty, replaced by imgData

                  });
                } else {
                  // skip 'imgSizes'
                  setAttributes({
                    imgId: img.id,
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString()
                  });
                } // console.log( 'url: ' + newImgAllData.imgs[ newImgSizeIndex ].url );


              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _onSelectImage.apply(this, arguments);
    }

    ;

    function onSelectPortraitImage(_x2) {
      return _onSelectPortraitImage.apply(this, arguments);
    }

    function _onSelectPortraitImage() {
      _onSelectPortraitImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(portraitImg) {
        var newPortraitImgAllData, newPortraitImgSizeIndex, newPortraitImgData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof portraitImg.url !== 'undefined')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["getImgSizesData"])(portraitImg);

              case 3:
                newPortraitImgAllData = _context2.sent;
                // check if current img size index fits to new img (might be too large)
                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (parseInt(portraitImgSizeIndex) >= newPortraitImgAllData.imgs.length) {
                  newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
                } // console.log( 'newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex );
                // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')


                newPortraitImgData = Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgData"])(newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt); // avoid creating deprecated (empty) attr 'portraitImgSizes'

                if (portraitImgSizes && portraitImgSizes.length > 0) {
                  // delete value of 'portraitImgSizes'
                  setAttributes({
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: '',
                    // save empty, replaced by portraitImgData
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                  });
                } else {
                  // skip 'portraitImgSizes'
                  setAttributes({
                    portraitImgId: portraitImg.id,
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                  });
                } // console.log( 'portraitImgSizes[ portraitImgSizeIndex ].url: ' + newPortraitImgAllData.imgs[ newPortraitImgSizeIndex ].url );


              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _onSelectPortraitImage.apply(this, arguments);
    }

    ;

    var onDeleteImage = function onDeleteImage() {
      // avoid creating deprecated attr 'imgSizes'
      if (imgSizes && imgSizes.length > 0) {
        // delete value of 'imgSizes'
        setAttributes({
          imgId: '',
          imgSizes: '',
          imgData: ''
        });
      } else {
        // skip 'imgSizes'
        setAttributes({
          imgId: '',
          imgData: ''
        });
      }
    };

    var onDeletePortraitImage = function onDeletePortraitImage() {
      // avoid creating deprecated attr 'portraitImgSizes'
      if (portraitImgSizes && portraitImgSizes.length > 0) {
        // delete value of 'portraitImgSizes'
        setAttributes({
          portraitImgId: '',
          portraitImgSizes: '',
          portraitImgData: ''
        });
      } else {
        // skip 'portraitImgSizes'
        setAttributes({
          portraitImgId: '',
          portraitImgData: ''
        });
      }
    };

    var onChangeBannerType = function onChangeBannerType(value) {
      setAttributes({
        bannerType: value
      });
    };

    var onChangeBannerSize = function onChangeBannerSize(value) {
      setAttributes({
        bannerSize: value
      });
    };

    var onChangeBgAttachment = function onChangeBgAttachment(value) {
      setAttributes({
        bgAttachment: value
      });
    };

    var onChangeBgAttachmentFixedLimited = function onChangeBgAttachmentFixedLimited(value) {
      setAttributes({
        bgAttachmentFixedLimited: value
      });
    };

    var onChangeBgSize = function onChangeBgSize(value) {
      setAttributes({
        bgSize: value
      });
    };

    var onChangeBgPosition = function onChangeBgPosition(value) {
      setAttributes({
        bgPosition: value
      });
    };

    var onChangeAlignItems = function onChangeAlignItems(value) {
      setAttributes({
        alignItems: value
      });
    };

    var onChangeSmAlignItems = function onChangeSmAlignItems(value) {
      setAttributes({
        smAlignItems: value
      });
    };

    var onChangeMdAlignItems = function onChangeMdAlignItems(value) {
      setAttributes({
        mdAlignItems: value
      });
    };

    var onChangeRounded = function onChangeRounded(value) {
      setAttributes({
        rounded: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangePaddingBefore = function onChangePaddingBefore(value) {
      setAttributes({
        paddingBefore: value
      });
    };

    var onChangePaddingAfter = function onChangePaddingAfter(value) {
      setAttributes({
        paddingAfter: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      setAttributes({
        href: value
      });
    };

    var onChangeTarget = function onChangeTarget(value) {
      setAttributes({
        target: !!value ? '_blank' : ''
      });
    };

    var onChangeRel = function onChangeRel(value) {
      setAttributes({
        rel: value
      });
    };

    var onChangeDataFn = function onChangeDataFn(value) {
      setAttributes({
        dataFn: value
      });
    };

    var onChangeDisableResponsiveDownsizing = function onChangeDisableResponsiveDownsizing(value) {
      setAttributes({
        disableResponsiveDownsizing: value
      });
    };

    var onChangeImgSizeIndex = function onChangeImgSizeIndex(value) {
      setAttributes({
        imgSizeIndex: value.toString()
      });
    };

    var imgSizeRadioControlOptions = [];
    calcImgSizes.forEach(function (imgSize, index) {
      imgSizeRadioControlOptions.push({
        value: index.toString(),
        label: imgSize.width + 'x' + imgSize.height + (imgSize.width === imgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
      });
    });

    var onChangePortraitImgSizeIndex = function onChangePortraitImgSizeIndex(value) {
      setAttributes({
        portraitImgSizeIndex: value.toString()
      });
    };

    var portraitImgSizeRadioControlOptions = [];
    calcPortraitImgSizes.forEach(function (portraitImgSize, index) {
      portraitImgSizeRadioControlOptions.push({
        value: index.toString(),
        label: portraitImgSize.width + 'x' + portraitImgSize.height + (portraitImgSize.width === portraitImgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
      });
    });
    var bannerClassName = makeBannerClassNames({
      bannerType: bannerType,
      bannerSize: bannerSize,
      bgAttachment: bgAttachment,
      bgAttachmentFixedLimited: bgAttachmentFixedLimited,
      bgSize: bgSize,
      bgPosition: bgPosition,
      alignItems: alignItems,
      smAlignItems: smAlignItems,
      mdAlignItems: mdAlignItems,
      templateName: templateName,
      rounded: rounded,
      href: href
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      bgColor: bgColor,
      rounded: rounded,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, bannerClassName);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var TagName = nodeName;
    var bannerStyle = typeof calcImgSizes[imgSizeIndex] !== 'undefined' ? {
      backgroundImage: "url(".concat(calcImgSizes[imgSizeIndex].url, ")")
    } : {};
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner template', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["uiTemplateSelect"])(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], templateName, onChangeTemplate)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner image', 'bsx-blocks')
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadClickableImg"])(imgId, calcImgSizes[imgSizeIndex].url, onSelectImage)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadButton"])(imgId, onSelectImage))), imgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
      onClick: onDeleteImage,
      isDestructive: true
    }, __('Remove image', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), calcImgSizes[imgSizeIndex] != undefined && calcImgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: calcImgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner portrait image (optional)', 'bsx-blocks')
    }, portraitImgId && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadClickableImg"])(portraitImgId, calcPortraitImgSizes[portraitImgSizeIndex].url, onSelectPortraitImage, 'p')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No portrait image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadButton"])(portraitImgId, onSelectPortraitImage, 'p'))), portraitImgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
      onClick: onDeletePortraitImage,
      isDestructive: true
    }, __('Remove portrait image', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: portraitImgSizeIndex.toString(),
      options: portraitImgSizeRadioControlOptions,
      onChange: onChangePortraitImgSizeIndex
    }), typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: calcPortraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner dimensions', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bannerTypeSelect"])(bannerType, onChangeBannerType), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bannerSizeSelect"])(bannerSize, onChangeBannerSize), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgAttachmentSelect"])(bgAttachment, onChangeBgAttachment), bgAttachment === 'fixed' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgAttachmentFixedLimitedToggle"])(bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited)), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["alignItemsSelect"])(alignItems, onChangeAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["alignItemsSelect"])(smAlignItems, onChangeSmAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner', 'SM'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["alignItemsSelect"])(mdAlignItems, onChangeMdAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner', 'MD'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["roundedToggle"])(rounded, onChangeRounded)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Background', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgColorSelect"])(bgColor, onChangeBgColor)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Link', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["linkUrlInput"])(href, onChangeHref), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["relInput"])(rel, onChangeRel), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["dataFnInput"])(dataFn, onChangeDataFn))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["touchFooterToggle"])(touchFooter, onChangeTouchFooter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["nodeNameSelect"])(nodeName, onChangeNodeName, ['div', 'section']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgPositionSelect"])(bgPosition, onChangeBgPosition), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgSizeSelect"])(bgSize, onChangeBgSize), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["disableResponsiveDownsizingToggle"])(disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Banner template', 'bsx-blocks')), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["inlineTemplateSelect"])(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], onChangeTemplate)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(TagName, {
      className: bannerClassName,
      style: bannerStyle
    },  false && false, noBannerInnerTemplateNames.indexOf(templateName) == -1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: bannerInnerClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        nodeName = _props$attributes2.nodeName,
        templateName = _props$attributes2.templateName,
        belowNavbar = _props$attributes2.belowNavbar,
        touchFooter = _props$attributes2.touchFooter,
        bgColor = _props$attributes2.bgColor,
        imgId = _props$attributes2.imgId,
        imgSizes = _props$attributes2.imgSizes,
        imgData = _props$attributes2.imgData,
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        url = _props$attributes2.url,
        portraitImgId = _props$attributes2.portraitImgId,
        portraitImgSizes = _props$attributes2.portraitImgSizes,
        portraitImgData = _props$attributes2.portraitImgData,
        portraitImgSizeIndex = _props$attributes2.portraitImgSizeIndex,
        bannerType = _props$attributes2.bannerType,
        bannerSize = _props$attributes2.bannerSize,
        bgAttachment = _props$attributes2.bgAttachment,
        bgAttachmentFixedLimited = _props$attributes2.bgAttachmentFixedLimited,
        bgSize = _props$attributes2.bgSize,
        bgPosition = _props$attributes2.bgPosition,
        alignItems = _props$attributes2.alignItems,
        smAlignItems = _props$attributes2.smAlignItems,
        mdAlignItems = _props$attributes2.mdAlignItems,
        rounded = _props$attributes2.rounded,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter,
        href = _props$attributes2.href,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel,
        dataFn = _props$attributes2.dataFn,
        disableResponsiveDownsizing = _props$attributes2.disableResponsiveDownsizing; // initial set, replaces old attr 'imgSizes'

    var hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
    var hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
    var calcImgSizes = hasOldAttrImgSizes ? imgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgSizesFromImgData"])(imgData);
    var calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_7__["makeImgSizesFromImgData"])(portraitImgData); // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );
    // class names

    var bannerClassName = makeBannerClassNames({
      bannerType: bannerType,
      bannerSize: bannerSize,
      bgAttachment: bgAttachment,
      bgAttachmentFixedLimited: bgAttachmentFixedLimited,
      bgSize: bgSize,
      bgPosition: bgPosition,
      alignItems: alignItems,
      smAlignItems: smAlignItems,
      mdAlignItems: mdAlignItems,
      templateName: templateName,
      rounded: rounded,
      href: href
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      bgColor: bgColor,
      rounded: rounded,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, bannerClassName);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var srcsetJson = makeSrcsetJson({
      calcImgSizes: calcImgSizes,
      imgSizeIndex: imgSizeIndex,
      calcPortraitImgSizes: calcPortraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      disableResponsiveDownsizing: disableResponsiveDownsizing
    }); // there might be no images at all, e.g. if background color banner

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_9__["makeSaveAttributes"])({
      'data-fn': imgId ? 'lazyload' : dataFn,
      'data-src': imgId ? calcImgSizes[imgSizeIndex].url : '',
      'data-srcset': imgId ? srcsetJson : '',
      href: href,
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
    });
    var TagName = href ? 'a' : nodeName;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: bannerClassName
    }, saveAttributes), noBannerInnerTemplateNames.indexOf(templateName) == -1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: bannerInnerClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.Content, null)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/banner/templates.js":
/*!*********************************!*\
  !*** ./src/banner/templates.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData; // functions


var templates = [{
  name: 'empty',
  title: __('Empty', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('banner-empty'),
  attributes: {
    marginAfter: '5'
  },
  template: [['core/paragraph', {
    placeholder: __('Change paragraph text or delete...', 'bsx-blocks')
  }]],
  templateLock: false
}, {
  name: 'container-with-heading',
  title: __('Container with Heading', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('banner-container-with-heading'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: __('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]],
  templateLock: false
}, {
  name: 'static-container-with-heading',
  title: __('Static with Container & Heading', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('banner-static-container-with-heading'),
  attributes: {
    bannerType: 'st',
    bannerSize: '3',
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: __('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]],
  templateLock: false
}, {
  name: 'column-row-banner',
  title: __('Bottom bar Banner', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('banner-column-row'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/column-rows', {
    templateName: 'default-auto',
    display: 'flex',
    flexDirection: 'column',
    className: 'banner-inner'
  }, [['bsx-blocks/column-row', {
    columnRowType: '',
    display: 'flex',
    alignItems: 'center'
  }, [['bsx-blocks/wrapper', {
    width: '100'
  }, [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: __('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]]]]], ['bsx-blocks/column-row', {
    columnRowType: 'auto'
  }, [['bsx-blocks/wrapper', {
    bgColor: 'primary-transparent',
    paddingBefore: '3',
    paddingAfter: '3'
  }, [['bsx-blocks/container', {}, [['core/paragraph', {
    placeholder: __('Add text...', 'bsx-blocks'),
    textSize: 'lead',
    textColor: 'white',
    marginAfter: '0'
  }]]]]]]]]]],
  templateLock: false
}, {
  name: 'heading-text-banner',
  title: __('Heading Text Banner', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('heading-text-banner'),
  attributes: {
    marginAfter: '5',
    bannerSize: '1',
    belowNavbar: true
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    textShadow: 'darker',
    fontWeight: 'normal',
    headingInheritTextColor: true,
    headingInheritFontWeight: true,
    textColor: 'white',
    textAlign: 'center',
    marginAfter: '4'
  }, [['core/heading', {
    level: 1,
    placeholder: __('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1'
  }]]], ['bsx-blocks/wrapper', {
    textSize: 'h2',
    textShadow: 'darker',
    fontWeight: 'bold',
    textColor: 'white',
    headingInheritTextColor: true,
    headingInheritFontWeight: true,
    textAlign: 'center'
  }, [['core/paragraph', {
    placeholder: __('Add text...', 'bsx-blocks')
  }]]]]]],
  templateLock: false
}, {
  name: 'heading-text-button-color-banner',
  title: __('Heading Text Button Color Banner', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('heading-text-button-color-banner'),
  attributes: {
    marginAfter: '5',
    bannerType: 'st',
    bgColor: 'primary',
    bannerSize: '2',
    nodeName: 'section'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    inverseTextColor: true,
    headingInheritTextColor: true,
    textAlign: 'center'
  }, [['core/heading', {
    marginAfter: '0',
    placeholder: __('Add heading text, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/wrapper', {
    textSize: 'lead',
    inverseTextColor: true,
    headingInheritTextColor: true,
    textAlign: 'center',
    marginBefore: 4,
    paddingAfter: 3
  }, [['core/paragraph', {
    placeholder: __('Add text...', 'bsx-blocks')
  }]]], ['bsx-blocks/buttons', {
    templateName: 'one-button',
    textAlign: 'center'
  }, [['bsx-blocks/button', {
    state: 'light',
    stateType: '',
    size: 'lg'
  }]]]]]],
  templateLock: false
}];
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/buttons/button-label/block.js":
/*!*******************************************!*\
  !*** ./src/buttons/button-label/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path; // functions imports




registerBlockType('bsx-blocks/button-label', {
  title: __('BSX Button Label', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('button-label'),
  category: 'layout',
  parent: ['bsx-blocks/buttons'],
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'span'
    },
    display: {
      type: 'string',
      default: ''
    },
    marginLeft: {
      type: 'string',
      default: ''
    },
    marginRight: {
      type: 'string',
      default: ''
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        content = _props$attributes.content,
        display = _props$attributes.display,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeIgnoreMailtoSpamProtection = function onChangeIgnoreMailtoSpamProtection(value) {
      setAttributes({
        ignoreMailtoSpamProtection: !value
      });
    };

    var labelClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      display: display,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, className);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Button Label appearance (optional)', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["displaySelect"])(display, onChangeDisplay, ['', 'inline-block'])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin (optional)', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginLeftSelect"])(marginLeft, onChangeMarginLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginRightSelect"])(marginRight, onChangeMarginRight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      className: labelClassNames,
      multiline: false,
      placeholder: __('Add label...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        content = _props$attributes2.content,
        display = _props$attributes2.display,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var labelClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      display: display,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, className);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "span",
      value: content,
      className: labelClassNames
    }));
  }
});

/***/ }),

/***/ "./src/buttons/button/block.js":
/*!*************************************!*\
  !*** ./src/buttons/button/block.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");



// TODO: add state classes for text-link button
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path; // functions imports




 // functions

var makeButtonClassNames = function makeButtonClassNames(attributes, className) {
  var state = attributes.state,
      stateType = attributes.stateType,
      size = attributes.size,
      hrefIsEmailIsContent = attributes.hrefIsEmailIsContent,
      ignoreMailtoSpamProtection = attributes.ignoreMailtoSpamProtection;
  var classNames = [];
  var buildClassName = 'btn-';

  if (!!state) {
    if (state == 'text-link') {
      classNames.push('text-link');
    } else {
      classNames.push('btn');

      if (!!stateType) {
        buildClassName += stateType + '-';
      }

      buildClassName += state;
      classNames.push(buildClassName);
    }
  }

  if (!!size) {
    classNames.push('btn-' + size);
  }

  if (!ignoreMailtoSpamProtection && hrefIsEmailIsContent) {
    classNames.push('create-mt');
  }

  if (!!className) {
    classNames.push(className);
  }

  return classNames.join(' ');
};

var isEmailFormat = function isEmailFormat(href) {
  if (href.indexOf('mailto:') == 0 && /\S+@\S+\.\S+/.test(href.substring(7))) {
    var explode = href.substring(7).split('@');
    var name = explode[0];
    explode = explode[1].split('.');
    var suffix = explode[explode.length - 1]; // doest’t need to contain the whole suffix in cases of e.g. `.co.uk`

    explode.pop();
    var domain = explode.join('.'); // might contain part of suffix in cases of e.g. `.co.uk`
    // console.log( 'href: ' + href );
    // console.log( 'valid: ' + true );
    // console.log( 'name: ' + name );
    // console.log( 'domain: ' + domain );
    // console.log( 'suffix: ' + suffix );

    return {
      valid: true,
      name: name,
      domain: domain,
      suffix: suffix
    };
  } else {
    // console.log( 'href: ' + href );
    // console.log( 'valid: ' + false );
    return {
      valid: false
    };
  }
};

registerBlockType('bsx-blocks/button', {
  title: __('BSX Button', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('button'),
  category: 'layout',
  parent: ['bsx-blocks/buttons'],
  attributes: {
    href: {
      type: 'string',
      default: ''
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.btn, .text-link'
    },
    target: {
      type: 'string',
      default: ''
    },
    rel: {
      type: 'string',
      default: ''
    },
    state: {
      type: 'string',
      default: 'primary'
    },
    stateType: {
      type: 'string',
      default: 'outline'
    },
    size: {
      type: 'string',
      default: ''
    },
    dataFn: {
      type: 'string',
      default: ''
    },
    marginLeft: {
      type: 'string',
      default: ''
    },
    marginRight: {
      type: 'string',
      default: ''
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    },
    ignoreMailtoSpamProtection: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean',
      default: ''
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        href = _props$attributes.href,
        content = _props$attributes.content,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        state = _props$attributes.state,
        stateType = _props$attributes.stateType,
        size = _props$attributes.size,
        dataFn = _props$attributes.dataFn,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        ignoreMailtoSpamProtection = _props$attributes.ignoreMailtoSpamProtection,
        disabled = _props$attributes.disabled,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var checkEmail = isEmailFormat(href);
    var hrefIsEmail = checkEmail.valid; // const hrefIsEmailIsContent = checkEmail.valid && href == 'mailto:' + content;

    var hrefIsEmailIsContent = hrefIsEmail && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0);

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      // TODO: check hrefIsEmailIsContent
      var checkEmail = isEmailFormat(href);
      var hrefIsEmail = checkEmail.valid;
      hrefIsEmailIsContent = hrefIsEmail && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0);
      setAttributes({
        href: value
      });
    };

    var onChangeTarget = function onChangeTarget(value) {
      setAttributes({
        target: !!value ? '_blank' : ''
      });
    };

    var onChangeRel = function onChangeRel(value) {
      setAttributes({
        rel: value
      });
    };

    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeStateType = function onChangeStateType(value) {
      setAttributes({
        stateType: value
      });
    };

    var onChangeSize = function onChangeSize(value) {
      setAttributes({
        size: value
      });
    };

    var onChangeDataFn = function onChangeDataFn(value) {
      setAttributes({
        dataFn: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeIgnoreMailtoSpamProtection = function onChangeIgnoreMailtoSpamProtection(value) {
      setAttributes({
        ignoreMailtoSpamProtection: !value
      });
    };

    var onChangeDisabled = function onChangeDisabled(value) {
      setAttributes({
        disabled: value
      });
    }; // exclude hrefIsEmailIsContent here to keep correct button title shown


    var buttonClassNames = makeButtonClassNames({
      state: state,
      stateType: stateType,
      size: size
    }, className);
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      disabled: disabled
    }, buttonClassNames); // get content if is empty since content is spam protected email, get content from href instead of from html

    if (!ignoreMailtoSpamProtection && !isSelected && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0 && hrefIsEmailIsContent) {
      setAttributes({
        content: href.substring(7)
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button link settings', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["linkUrlInput"])(href, onChangeHref), hrefIsEmail && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["ignoreMailtoSpamProtectionToggle"])(ignoreMailtoSpamProtection, onChangeIgnoreMailtoSpamProtection)), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["disabledToggle"])(disabled, onChangeDisabled), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["relInput"])(rel, onChangeRel), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataFnInput"])(dataFn, onChangeDataFn)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["buttonStateSelect"])(state, onChangeState), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["stateTypeSelect"])(stateType, onChangeStateType), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["sizeSelect"])(size, onChangeSize)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginLeftSelect"])(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginRightSelect"])(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: href || state == 'text-link' ? 'a' : 'button',
      className: buttonClassNames,
      multiline: false,
      placeholder: __('Add Title...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true,
      href: 'javascript:void( 0 );'
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        href = _props$attributes2.href,
        content = _props$attributes2.content,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel,
        state = _props$attributes2.state,
        stateType = _props$attributes2.stateType,
        size = _props$attributes2.size,
        dataFn = _props$attributes2.dataFn,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        ignoreMailtoSpamProtection = _props$attributes2.ignoreMailtoSpamProtection,
        disabled = _props$attributes2.disabled;
    var checkEmail = isEmailFormat(href); // adapt empty content of email link
    // if ( ! content && checkEmail.valid ) {
    //     content.push[ href.substring( 7 ) ];
    //     console.log( '----- save: content adapted' );
    // }
    // after reload content is empty in case of valid mailto href

    var hrefIsEmail = checkEmail.valid;
    var hrefIsEmailIsContent = hrefIsEmail && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0); // console.log( '---------- checkEmail.valid: ' + checkEmail.valid );
    // console.log( '----- href: ' + href );
    // console.log( '----- content: ' + content );
    // console.log( '----- typeof content: ' + typeof content );
    // console.log( '----- content.length: ' + content.length );
    // console.log( '----- hrefIsEmailIsContent: ' + hrefIsEmailIsContent );

    var buttonClassNames = makeButtonClassNames({
      state: state,
      stateType: stateType,
      size: size,
      hrefIsEmailIsContent: hrefIsEmailIsContent,
      ignoreMailtoSpamProtection: ignoreMailtoSpamProtection
    }, className);
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      disabled: disabled
    }, buttonClassNames); // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
    // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      href: !(!ignoreMailtoSpamProtection && hrefIsEmail) ? href : 'javascript:void( 0 );',
      'data-fn': !ignoreMailtoSpamProtection && hrefIsEmail ? 'create-mt' : dataFn,
      'data-mt-n': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.name : '',
      'data-mt-d': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.domain : '',
      'data-mt-s': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.suffix : '',
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : '',
      'disabled': !href && disabled
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, (content && !RichText.isEmpty(content) || !ignoreMailtoSpamProtection && hrefIsEmailIsContent) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tagName: href || state == 'text-link' ? 'a' : 'button',
      value: !ignoreMailtoSpamProtection && hrefIsEmailIsContent ? '' : content,
      className: buttonClassNames
    }, saveAttributes)));
  }
});

/***/ }),

/***/ "./src/buttons/buttons/block.js":
/*!**************************************!*\
  !*** ./src/buttons/buttons/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_functions/utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates */ "./src/buttons/buttons/templates.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO: enable inheritance of default attribute values to allow precomposed blocks of equal buttons ?
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect; // functions imports




 // data


registerBlockType('bsx-blocks/buttons', {
  title: __('BSX Buttons', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('buttons'),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    textAlign: {
      type: 'string',
      default: ''
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var templateName = attributes.templateName,
        textAlign = attributes.textAlign,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter;
    return {
      'data-template-name': templateName,
      'data-text-align': textAlign,
      'data-margin-before': marginBefore,
      'data-margin-after': marginAfter
    };
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        templateName = _props$attributes.templateName,
        textAlign = _props$attributes.textAlign,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var allowedBlocks = ['bsx-blocks/button-label', 'bsx-blocks/button'];
    var template = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_5__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_6__["default"], templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_5__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_6__["default"], value);

      if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
        template = currentTemplateMap.template;
        setAttributes(_objectSpread({
          templateName: value
        }, currentTemplateMap.attributes));
      } else {
        console.log('Error: Template change failed.');
      } // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );

    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      textAlign: textAlign,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: wrapperClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: template,
      allowedBlocks: allowedBlocks,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        textAlign = _props$attributes2.textAlign,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      textAlign: textAlign,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: wrapperClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/buttons/buttons/templates.js":
/*!******************************************!*\
  !*** ./src/buttons/buttons/templates.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData; // functions


var templates = [{
  name: 'one-button',
  title: __('One Button', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('buttons-one-button'),
  attributes: {},
  template: [['bsx-blocks/button', {}]],
  templateLock: false
}, {
  name: 'two-buttons',
  title: __('Two Buttons', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('buttons-two-buttons'),
  attributes: {},
  template: [['bsx-blocks/button', {}], ['bsx-blocks/button', {}]],
  templateLock: false
}, {
  name: 'text-link',
  title: __('Text Link', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('buttons-text-link'),
  attributes: {},
  template: [['bsx-blocks/button', {
    state: 'text-link'
  }]],
  templateLock: false
}, {
  name: 'label-text-link',
  title: __('Label with Text Link', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('buttons-label-text-link'),
  attributes: {},
  template: [['bsx-blocks/button-label', {}], ['bsx-blocks/button', {
    state: 'text-link'
  }]],
  templateLock: false
}];
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/buttons/index.js":
/*!******************************!*\
  !*** ./src/buttons/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/block.js */ "./src/buttons/buttons/block.js");
/* harmony import */ var _button_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/block.js */ "./src/buttons/button/block.js");
/* harmony import */ var _button_label_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-label/block.js */ "./src/buttons/button-label/block.js");




/***/ }),

/***/ "./src/column-rows/column-row/block.js":
/*!*********************************************!*\
  !*** ./src/column-rows/column-row/block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl;
var withSelect = wp.data.withSelect;


var makeColumnRowClassNames = function makeColumnRowClassNames(attributes) {
  var columnRowType = attributes.columnRowType,
      alignItems = attributes.alignItems,
      display = attributes.display;
  var classNames = [];

  if (columnRowType != 'unset') {
    if (!!columnRowType) {
      classNames.push('column-row-' + columnRowType);
    } else {
      // default class name
      classNames.push('column-row');
    }
  }

  if (!!alignItems) {
    classNames.push('align-items-' + alignItems);
  }

  if (!!display) {
    classNames.push('d-' + display);
  } //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );


  return classNames.join(' ');
};

registerBlockType('bsx-blocks/column-row', {
  title: __('BSX Column Row', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('column-rows'),
  category: 'layout',
  parent: ['bsx-blocks/column-rows'],
  attributes: {
    columnRowType: {
      type: 'string',
      default: ''
    },
    alignItems: {
      type: 'string'
    },
    display: {
      type: 'string'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var columnRowType = attributes.columnRowType,
        alignItems = attributes.alignItems,
        display = attributes.display;
    return {
      'data-column-row-type': columnRowType,
      'data-align-items': alignItems,
      'data-display': display
    };
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        columnRowType = _props$attributes.columnRowType,
        alignItems = _props$attributes.alignItems,
        display = _props$attributes.display,
        setAttributes = props.setAttributes;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var onChangeColumnRowType = function onChangeColumnRowType(value) {
      setAttributes({
        columnRowType: value
      });
    };

    var onChangeAlignItems = function onChangeAlignItems(value) {
      setAttributes({
        alignItems: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var columnRowClassNames = makeColumnRowClassNames({
      columnRowType: columnRowType,
      alignItems: alignItems,
      display: display
    });
    /*
    if ( !! props.attributes ) {
        console.log( 'build col: ' );
        for ( let [ key, value ] of Object.entries( props.attributes ) ) {
            console.log( 'key: "' + key + '", value: "' + value + '"' );
        }
    }
    */

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Row', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Columns Row height', 'bsx-blocks'),
      value: columnRowType,
      onChange: onChangeColumnRowType,
      options: [{
        value: 'unset',
        label: __('– unset – (unstyled)', 'bsx-blocks')
      }, {
        value: '',
        label: __('– Default – (flexible height)', 'bsx-blocks')
      }, {
        value: 'auto',
        label: __('Auto (static height)', 'bsx-blocks')
      }],
      help: __('Column Rows will share their patent’s height dividing it into flexible and/or static height segments.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Vertical Align', 'bsx-blocks'),
      value: alignItems,
      onChange: onChangeAlignItems,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'start',
        label: __('Start', 'bsx-blocks')
      }, {
        value: 'center',
        label: __('Center', 'bsx-blocks')
      }, {
        value: 'end',
        label: __('End', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Display', 'bsx-blocks'),
      value: display,
      onChange: onChangeDisplay,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'flex',
        label: __('Flex', 'bsx-blocks')
      }]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: columnRowClassNames,
      "data-block": "column-row",
      "data-column-row-type": columnRowType
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        columnRowType = _props$attributes2.columnRowType,
        alignItems = _props$attributes2.alignItems,
        display = _props$attributes2.display;
    var columnRowClassNames = makeColumnRowClassNames({
      columnRowType: columnRowType,
      alignItems: alignItems,
      display: display
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: columnRowClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/column-rows/column-rows/block.js":
/*!**********************************************!*\
  !*** ./src/column-rows/column-rows/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./src/column-rows/column-rows/templates.js");

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch; // functions

 // import { getTemplate } from './../../_functions/utilities.js';

 // data



var makeColumnRowsClassNames = function makeColumnRowsClassNames(attributes) {
  var templateName = attributes.templateName,
      display = attributes.display,
      flexDirection = attributes.flexDirection,
      width = attributes.width,
      justifyContent = attributes.justifyContent;
  var classNames = [];

  if (!!display) {
    classNames.push('d-' + display);
  }

  if (!!flexDirection) {
    classNames.push('flex-' + flexDirection);
  }

  if (!!width) {
    classNames.push('w-' + width);
  }

  if (!!justifyContent) {
    classNames.push('justify-content-' + justifyContent);
  } else if (templateName == 'space-between-columns') {
    // fallback
    classNames.push('justify-content-between');
  } // console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );


  return classNames.join(' ');
};

registerBlockType('bsx-blocks/column-rows', {
  title: __('BSX Column Rows', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('column-rows'),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    display: {
      type: 'string',
      default: 'flex'
    },
    flexDirection: {
      type: 'string',
      default: 'column'
    },
    width: {
      type: 'string',
      default: '100'
    },
    justifyContent: {
      type: 'string'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var display = attributes.display,
        flexDirection = attributes.flexDirection,
        width = attributes.width,
        justifyContent = attributes.justifyContent;
    return {
      'data-display': display,
      'data-flexDirection': flexDirection,
      'data-width': width,
      'data-justify-content': justifyContent
    };
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        templateName = _props$attributes.templateName,
        display = _props$attributes.display,
        flexDirection = _props$attributes.flexDirection,
        width = _props$attributes.width,
        justifyContent = _props$attributes.justifyContent,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected; // const templates = [
    //     {
    //         name: 'default-auto',
    //         title: __( 'Flex, static', 'bsx-blocks' ),
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
    //                 <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"/>
    //             </svg>
    //         ),
    //         template: [ 
    //             [ 
    //                 'bsx-blocks/column-row', 
    //                 {},
    //                 [
    //                     [
    //                         'core/paragraph',
    //                         { 
    //                             placeholder: 'Edit or insert other content and delete paragraph...',
    //                         }
    //                     ]
    //                 ],
    //             ], 
    //             [ 
    //                 'bsx-blocks/column-row', 
    //                 {
    //                     columnRowType: 'auto',
    //                 },
    //                 [
    //                     [
    //                         'core/paragraph',
    //                         { 
    //                             placeholder: 'Edit or insert other content and delete paragraph...',
    //                         }
    //                     ]
    //                 ],
    //             ], 
    //         ],
    //         templateLock: false,
    //     },
    //     {
    //         name: 'auto-default',
    //         title: __( 'Static, flex', 'bsx-blocks' ),
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
    //                 <path fill-rule="evenodd" clip-rule="evenodd" d="M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"/>
    //             </svg>
    //         ),
    //         template: [ 
    //             [ 
    //                 'bsx-blocks/column-row', 
    //                 {
    //                     columnRowType: 'auto',
    //                 },
    //                 [
    //                     [
    //                         'core/paragraph',
    //                         { 
    //                             placeholder: 'Edit or insert other content and delete paragraph...',
    //                         }
    //                     ]
    //                 ],
    //             ], 
    //             [ 
    //                 'bsx-blocks/column-row', 
    //                 {},
    //                 [
    //                     [
    //                         'core/paragraph',
    //                         { 
    //                             placeholder: 'Edit or insert other content and delete paragraph...',
    //                         }
    //                     ]
    //                 ],
    //             ], 
    //         ],
    //         templateLock: false,
    //     },
    // ];

    var getTemplate = function getTemplate(currentTemplateName) {
      var currentTemplate = _templates__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var getTemplateLock = function getTemplateLock(currentTemplateName) {
      var currentTemplate = _templates__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.templateLock : false;
    };

    var template = getTemplate(templateName);
    var templateLock = getTemplateLock(templateName);
    var allowedBlocks = ['bsx-blocks/column-row'];

    var onChangeTemplate = function onChangeTemplate(value) {
      template = getTemplate(value);
      setAttributes({
        templateName: value
      }); // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var onChangeFlexDirection = function onChangeFlexDirection(value) {
      setAttributes({
        flexDirection: value
      });
    };

    var onChangeWidth = function onChangeWidth(value) {
      setAttributes({
        width: value
      });
    };

    var onChangeJustifyContent = function onChangeJustifyContent(value) {
      setAttributes({
        justifyContent: value
      });
    };

    var columnsRowsClassNames = makeColumnRowsClassNames({
      templateName: templateName,
      display: display,
      flexDirection: flexDirection,
      width: width,
      justifyContent: justifyContent
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Rows layout', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_1__["displaySelect"])(display, onChangeDisplay, ['', 'flex']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_1__["flexDirectionSelect"])(flexDirection, onChangeFlexDirection), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_1__["widthSelect"])(width, onChangeWidth), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_1__["justifyContentSelect"])(justifyContent, onChangeJustifyContent)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Column Rows template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item '
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: columnsRowsClassNames,
      "data-block": "column-rows",
      "data-template-name": templateName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: template,
      templateLock: templateLock,
      allowedBlocks: allowedBlocks
    })))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        display = _props$attributes2.display,
        flexDirection = _props$attributes2.flexDirection,
        width = _props$attributes2.width;
    var columnsRowsClassNames = makeColumnRowsClassNames({
      templateName: templateName,
      display: display,
      flexDirection: flexDirection,
      width: width
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: columnsRowsClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/column-rows/column-rows/templates.js":
/*!**************************************************!*\
  !*** ./src/column-rows/column-rows/templates.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");

// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData; // functions


var templates = [{
  name: 'default-auto',
  title: __('Flex, static', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"
  })),
  template: [['bsx-blocks/column-row', {}, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]], ['bsx-blocks/column-row', {
    columnRowType: 'auto'
  }, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]]],
  templateLock: false
}, {
  name: 'auto-default',
  title: __('Static, flex', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"
  })),
  template: [['bsx-blocks/column-row', {
    columnRowType: 'auto'
  }, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]], ['bsx-blocks/column-row', {}, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]]],
  templateLock: false
}, {
  name: 'space-between-columns',
  title: __('Space between columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('none'),
  template: [['bsx-blocks/column-row', {
    columnRowType: 'unset'
  }, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]], ['bsx-blocks/column-row', {
    columnRowType: 'unset'
  }, [['core/paragraph', {
    placeholder: 'Edit or insert other content and delete paragraph...'
  }]]]],
  templateLock: false
}];
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/column-rows/index.js":
/*!**********************************!*\
  !*** ./src/column-rows/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column_rows_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-rows/block.js */ "./src/column-rows/column-rows/block.js");
/* harmony import */ var _column_row_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-row/block.js */ "./src/column-rows/column-row/block.js");



/***/ }),

/***/ "./src/container/block.js":
/*!********************************!*\
  !*** ./src/container/block.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");

// TODO: add default marginAfter: '5'?
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var withSelect = wp.data.withSelect;




var makeContainerClassNames = function makeContainerClassNames(isFluid, containerBreakpoint, sized) {
  var prefix = 'container';
  var classNames = [];

  if (isFluid) {
    if (containerBreakpoint === '') {
      classNames.push(prefix + '-fluid');
    } else {
      classNames.push(prefix + '-' + containerBreakpoint);
    }
  } else if (!!sized) {
    // e.g. .sized-container-xl
    classNames.push('sized-' + prefix + '-' + sized);
  } else {
    classNames.push(prefix);
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/container', {
  title: __('BSX Container', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('container'),
  category: 'layout',
  attributes: {
    isFluid: {
      type: 'boolean',
      default: false
    },
    containerBreakpoint: {
      type: 'string',
      default: ''
    },
    belowNavbar: {
      type: 'boolean',
      default: false
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    },
    paddingBefore: {
      type: 'string',
      default: ''
    },
    paddingAfter: {
      type: 'string',
      default: ''
    },
    marginLeft: {
      type: 'string'
    },
    paddingRight: {
      type: 'string'
    },
    sized: {
      type: 'string'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        isFluid = _props$attributes.isFluid,
        containerBreakpoint = _props$attributes.containerBreakpoint,
        belowNavbar = _props$attributes.belowNavbar,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        paddingLeft = _props$attributes.paddingLeft,
        paddingRight = _props$attributes.paddingRight,
        sized = _props$attributes.sized,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var onChangeIsFluid = function onChangeIsFluid(value) {
      if (value === false) {
        // reset container breakpoint
        setAttributes({
          containerBreakpoint: ''
        });
      }

      setAttributes({
        isFluid: value
      });
    };

    var onChangeContainerBreakpoint = function onChangeContainerBreakpoint(value) {
      setAttributes({
        containerBreakpoint: value
      });
    };

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangePaddingBefore = function onChangePaddingBefore(value) {
      setAttributes({
        paddingBefore: value
      });
    };

    var onChangePaddingAfter = function onChangePaddingAfter(value) {
      setAttributes({
        paddingAfter: value
      });
    };

    var onChangePaddingLeft = function onChangePaddingLeft(value) {
      setAttributes({
        paddingLeft: value
      });
    };

    var onChangePaddingRight = function onChangePaddingRight(value) {
      setAttributes({
        paddingRight: value
      });
    };

    var onChangeSized = function onChangeSized(value) {
      setAttributes({
        sized: value
      });
    };

    var containerClassName = makeContainerClassNames(isFluid, containerBreakpoint, sized);
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight
    }, containerClassName);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Container Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Fluid container', 'bsx-blocks'),
      checked: !!isFluid,
      onChange: onChangeIsFluid,
      disabled: !!sized,
      help: __('Fluid width from XS up', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Non fluid Breakpoint', 'bsx-blocks'),
      value: containerBreakpoint,
      onChange: onChangeContainerBreakpoint,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'sm',
        label: __('SM', 'bsx-blocks')
      }, {
        value: 'md',
        label: __('MD', 'bsx-blocks')
      }, {
        value: 'lg',
        label: __('LG', 'bsx-blocks')
      }, {
        value: 'xl',
        label: __('XL', 'bsx-blocks')
      }],
      disabled: !isFluid,
      help: __('Has (non fluid) Container width from this breakpoint up', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Sized container', 'bsx-blocks'),
      value: sized,
      onChange: onChangeSized,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'lg',
        label: __('LG', 'bsx-blocks')
      }, {
        value: 'xl',
        label: __('XL', 'bsx-blocks')
      }],
      disabled: isFluid,
      help: __('Has (non fluid) Container width from this breakpoint up', 'bsx-blocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingLeftSelect"])(paddingLeft, onChangePaddingLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingRightSelect"])(paddingRight, onChangePaddingRight)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: containerClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        isFluid = _props$attributes2.isFluid,
        containerBreakpoint = _props$attributes2.containerBreakpoint,
        belowNavbar = _props$attributes2.belowNavbar,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter,
        paddingLeft = _props$attributes2.paddingLeft,
        paddingRight = _props$attributes2.paddingRight,
        sized = _props$attributes2.sized;
    var containerClassName = makeContainerClassNames(isFluid, containerBreakpoint, sized);
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight
    }, containerClassName);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: containerClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/groups/block.js":
/*!*****************************!*\
  !*** ./src/groups/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates */ "./src/groups/templates.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect;

 // data


registerBlockType('bsx-blocks/groups', {
  title: __('BSX Groups', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('groups'),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children
    };
  })(function (props) {
    var className = props.className,
        templateName = props.attributes.templateName,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var template = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_3__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_4__["default"], templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_3__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_4__["default"], value);

      if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
        template = currentTemplateMap.template;
        setAttributes(_objectSpread({
          templateName: value
        }, currentTemplateMap.attributes));
      } else {
        console.log('Error: Template change failed.');
      } // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );

    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Group Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Group template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        templateName = props.attributes.templateName;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/groups/templates.js":
/*!*********************************!*\
  !*** ./src/groups/templates.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData; // functions


var templates = [{
  name: 'lazy-img-paragraph-button',
  title: __('Lazy image, paragraph, button', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('groups-lazy-img-paragraph-button'),
  attributes: {},
  template: [['bsx-blocks/lazy-img', {}], ['core/paragraph', {
    placeholder: 'Add text...'
  }], ['bsx-blocks/buttons', {
    templateName: 'one-button'
  }]],
  templateLock: false
}, {
  name: 'lazy-img-heading-paragraph',
  title: __('Lazy image, heading, paragraph', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('groups-lazy-img-heading-paragraph'),
  attributes: {},
  template: [['bsx-blocks/lazy-img', {}], ['core/heading', {
    placeholder: 'Add heading, configure heading level...'
  }], ['core/paragraph', {
    placeholder: 'Add text...'
  }]],
  templateLock: false
}, {
  name: 'lazy-img-heading-paragraph-button',
  title: __('Lazy image, heading, paragraph, button', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('groups-lazy-img-heading-paragraph-button'),
  attributes: {},
  template: [['bsx-blocks/lazy-img', {}], ['core/heading', {
    placeholder: 'Add heading, configure heading level...'
  }], ['core/paragraph', {
    placeholder: 'Add text...'
  }], ['bsx-blocks/buttons', {
    templateName: 'one-button'
  }]],
  templateLock: false
}];
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/icon-list/icon-list-item/block.js":
/*!***********************************************!*\
  !*** ./src/icon-list/icon-list-item/block.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");

// TODO: add state classes for text-link button
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var withSelect = wp.data.withSelect; // functions imports





registerBlockType('bsx-blocks/icon-list-item', {
  title: __('BSX Icon List Item', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('icon-list-item'),
  category: 'layout',
  parent: ['bsx-blocks/icon-list'],
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: '.content'
    },
    iconKey: {
      type: 'string',
      default: 'check'
    },
    iconFamily: {
      type: 'string'
    },
    calcIconFamily: {
      type: 'string'
    },
    itemTextColor: {
      type: 'string'
    },
    iconTextColor: {
      type: 'string'
    },
    calcIconTextColor: {
      type: 'string'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
        getBlockAttributes = _select.getBlockAttributes;

    var ancestorClientIds = getBlockParentsByBlockName(clientId, 'bsx-blocks/icon-list'); // get last item which is parent

    var parentClientId = ancestorClientIds[ancestorClientIds.length - 1];
    var parentAttributes = getBlockAttributes(parentClientId);
    return {
      parentAttributes: parentAttributes
    };
  })(function (props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        content = _props$attributes.content,
        iconKey = _props$attributes.iconKey,
        iconFamily = _props$attributes.iconFamily,
        calcIconFamily = _props$attributes.calcIconFamily,
        itemTextColor = _props$attributes.itemTextColor,
        iconTextColor = _props$attributes.iconTextColor,
        calcIconTextColor = _props$attributes.calcIconTextColor,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        parentAttributes = props.parentAttributes; // console.log( JSON.stringify( parentAttributes, null, 2 ) );
    // console.log( JSON.stringify( props.attributes, null, 2 ) );
    // initial settings

    if (!calcIconFamily) {
      setAttributes({
        calcIconFamily: !iconFamily && typeof parentAttributes.globalIconFamily != 'undefined' ? parentAttributes.globalIconFamily : ''
      });
    }

    if (!calcIconTextColor && !itemTextColor) {
      // do not set icon color if item color is set, inherit icon color instead
      setAttributes({
        calcIconTextColor: !iconTextColor && typeof parentAttributes.globalIconTextColor != 'undefined' ? parentAttributes.globalIconTextColor : ''
      });
    }

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeIconKey = function onChangeIconKey(value) {
      setAttributes({
        iconKey: value
      });
    };

    var onChangeIconFamily = function onChangeIconFamily(value) {
      // get icon family from item config or from parent config
      setAttributes({
        iconFamily: value,
        calcIconFamily: !value && typeof parentAttributes.globalIconFamily != 'undefined' ? parentAttributes.globalIconFamily : value
      });
    };

    var onChangeIconTextColor = function onChangeIconTextColor(value) {
      setAttributes({
        iconTextColor: value,
        calcIconTextColor: !value && typeof parentAttributes.globalIconTextColor != 'undefined' ? parentAttributes.globalIconTextColor : value
      });
    };

    var onChangeItemTextColor = function onChangeItemTextColor(value) {
      // reset icon color if all item has text color
      setAttributes({
        itemTextColor: value,
        iconTextColor: '',
        calcIconTextColor: ''
      });
    };

    var itemClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textColor: itemTextColor
    }, className);
    var iconClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textColor: calcIconTextColor
    }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Icon Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["iconKeyInput"])(iconKey, onChangeIconKey), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["iconFamilySelect"])(iconFamily, onChangeIconFamily), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["textColorSelect"])(iconTextColor, onChangeIconTextColor, [], __('Icon Color', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Item Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["textColorSelect"])(itemTextColor, onChangeItemTextColor, [], __('Item Color', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: itemClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      class: iconClassNames,
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      multiline: false,
      placeholder: __('Add text...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: []
    }))];
  }),
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        content = _props$attributes2.content,
        iconKey = _props$attributes2.iconKey,
        iconFamily = _props$attributes2.iconFamily,
        calcIconFamily = _props$attributes2.calcIconFamily,
        itemTextColor = _props$attributes2.itemTextColor,
        iconTextColor = _props$attributes2.iconTextColor,
        calcIconTextColor = _props$attributes2.calcIconTextColor;
    var itemClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textColor: itemTextColor
    }, className);
    var iconClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textColor: calcIconTextColor
    }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: itemClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: iconClassNames,
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "span",
      value: content,
      className: "content"
    })));
  }
});

/***/ }),

/***/ "./src/icon-list/icon-list/block.js":
/*!******************************************!*\
  !*** ./src/icon-list/icon-list/block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");

// TODO: enable inheritance of default attribute values to allow precomposed blocks of equal buttons ?
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var Fragment = wp.element.Fragment;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch; // functions imports




registerBlockType('bsx-blocks/icon-list', {
  title: __('BSX Icon List', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('icon-list'),
  category: 'layout',
  attributes: {
    globalIconFamily: {
      type: 'string'
    },
    globalIconTextColor: {
      type: 'string',
      default: 'primary'
    },
    textAlign: {
      type: 'string'
    },
    display: {
      type: 'string'
    },
    marginLeft: {
      type: 'string'
    },
    marginRight: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    }
  },
  // getEditWrapperProps( attributes ) {
  //     const {
  //         templateName,
  //         textAlign,
  //         marginBefore,
  //         marginAfter,
  //     } = attributes;
  //     return {
  //         'data-template-name': templateName,
  //         'data-text-align': textAlign,
  //         'data-margin-before': marginBefore,
  //         'data-margin-after': marginAfter,
  //     };
  // },
  // TODO: remove?
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children,
      getBlockAttributes: getBlockAttributes
    };
  })(withDispatch(function (dispatch) {
    var _dispatch = dispatch('core/block-editor'),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    return {
      updateBlockAttributes: updateBlockAttributes
    };
  })(function (props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        globalIconFamily = _props$attributes.globalIconFamily,
        globalIconTextColor = _props$attributes.globalIconTextColor,
        textAlign = _props$attributes.textAlign,
        display = _props$attributes.display,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        children = props.children,
        getBlockAttributes = props.getBlockAttributes,
        updateBlockAttributes = props.updateBlockAttributes;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var allowedBlocks = ['icon-list-item'];

    var onChangeGlobalIconFamily = function onChangeGlobalIconFamily(value) {
      setAttributes({
        globalIconFamily: value
      });
    };

    var onChangeGlobalIconTextColor = function onChangeGlobalIconTextColor(value) {
      // change childrens calcIconTextColor
      setAttributes({
        globalIconTextColor: value
      });
      children.forEach(function (child, index) {
        var childAttributes = getBlockAttributes(child.clientId); // console.log( 'child[ ' + index + ' ] attributes: \n' );
        // console.log( JSON.stringify( childAttributes, null, 2 ) );

        if (!childAttributes.iconTextColor && !childAttributes.itemTextColor) {
          // change only if no icon color and no item color is set
          var newAttributes = {
            calcIconTextColor: value
          };
          updateBlockAttributes(child.clientId, newAttributes);
        }
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var ulClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textAlign: textAlign,
      display: display,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, 'fa-ul');
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Settings', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["iconFamilySelect"])(globalIconFamily, onChangeGlobalIconFamily), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["textColorSelect"])(globalIconTextColor, onChangeGlobalIconTextColor, [], __('List Icon Color', 'bsx-blocks')), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["displaySelect"])(display, onChangeDisplay)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginLeftSelect"])(marginLeft, onChangeMarginLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginRightSelect"])(marginRight, onChangeMarginRight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: ulClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: allowedBlocks
    })))];
  })),
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        globalIconFamily = _props$attributes2.globalIconFamily,
        globalIconTextColor = _props$attributes2.globalIconTextColor,
        textAlign = _props$attributes2.textAlign,
        display = _props$attributes2.display,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var ulClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      textAlign: textAlign,
      display: display,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, 'fa-ul');
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: ulClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/icon-list/index.js":
/*!********************************!*\
  !*** ./src/icon-list/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_list_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-list/block.js */ "./src/icon-list/icon-list/block.js");
/* harmony import */ var _icon_list_item_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-list-item/block.js */ "./src/icon-list/icon-list-item/block.js");



/***/ }),

/***/ "./src/img-gallery/block.js":
/*!**********************************!*\
  !*** ./src/img-gallery/block.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");


// TODO: get caption or more data from html? (thumb data will not be available from noscript)
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path; // functions imports






var makeClassName = function makeClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = ['bsx-gallery'];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('bsx-floating-gallery');
    }
  }

  return classNames.join(' ');
};

var makeInnerClassName = function makeInnerClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = [];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-inner');
    } else if (galleryType == 'columns') {
      classNames.push('row');
    }
  }

  return classNames.join(' ');
};

var makeItemClassName = function makeItemClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = [];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-figure d-inline-block');
    } else if (galleryType == 'columns') {
      // TODO: make configurable later
      classNames.push('col-6 col-sm-3 mb-4');
    }
  }

  return classNames.join(' ');
};

var makeLinkClassName = function makeLinkClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = [];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('d-inline-block');
    } else if (galleryType == 'columns') {
      classNames.push('d-block text-center');
    }
  }

  return classNames.join(' ');
};

var makeImgClassName = function makeImgClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = [];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-img-md');
    } else if (galleryType == 'columns') {
      classNames.push('img-fluid');
    }
  }

  return classNames.join(' ');
};

var makeUploadElementClassName = function makeUploadElementClassName(attributes) {
  var galleryType = attributes.galleryType;
  var classNames = ['bsxui-inline-control'];

  if (!!galleryType) {
    if (galleryType == 'floating') {
      classNames.push('bsxui-mt-3');
    }
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/img-gallery', {
  title: __('BSX Image Gallery', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('gallery'),
  category: 'layout',
  attributes: {
    mediaList: {
      type: 'array',
      default: []
    },
    // itemData: {
    //     type: 'array',
    //     source: 'query',
    //     selector: 'figure',
    //     query: {
    //         figcaption: {
    //             type: 'array',
    //             source: 'children',
    //             selector: 'figcaption',
    //         },
    //         url: {
    //             type: 'string',
    //             source: 'attribute',
    //             selector: 'a',
    //             attribute: 'href',
    //         },
    //         size: {
    //             type: 'string',
    //             source: 'attribute',
    //             selector: 'a',
    //             attribute: 'data-size',
    //         },
    //     },
    //     default: [],
    // },
    galleryType: {
      type: 'string',
      default: 'columns'
    },
    figcaption: {
      type: 'array',
      source: 'children',
      selector: '.bsx-gallery-figcaption'
    },
    rounded: {
      type: 'boolean'
    },
    imgThumbnail: {
      type: 'boolean'
    },
    borderState: {
      type: 'string'
    },
    hoverShadow: {
      type: 'boolean'
    },
    hoverMove: {
      type: 'boolean'
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        mediaList = _props$attributes.mediaList,
        galleryType = _props$attributes.galleryType,
        figcaption = _props$attributes.figcaption,
        rounded = _props$attributes.rounded,
        imgThumbnail = _props$attributes.imgThumbnail,
        borderState = _props$attributes.borderState,
        hoverShadow = _props$attributes.hoverShadow,
        hoverMove = _props$attributes.hoverMove,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected; // TEST – TODO: remove
    // console.log( 'typeof itemData: ' + typeof itemData );
    // itemData.forEach( ( item, index ) => {
    //     console.log( index + ' : ' + item );
    //     for ( let [ key, value ] of Object.entries( item ) ) {
    //         // const printValue = ( value ) => {
    //         //     let returnString = '';
    //         //     if ( Array.isArray( value ) ) {
    //         //         value.forEach( ( item, index ) => {
    //         //             returnString += index + ': ' + item + ', ';
    //         //         } );
    //         //     }
    //         //     else {
    //         //         returnString = value;
    //         //     }
    //         //     return returnString;
    //         // }
    //         console.log( '----- key: "' + key + '", val: "' + value + '"' );
    //     }
    // } );

    var onAddImage = function onAddImage(mediaStack) {
      var addMedia = [];
      mediaStack.forEach(function (media) {
        addMedia.push({
          id: media.id,
          url: media.url,
          width: media.sizes.full.width,
          height: media.sizes.full.height,
          alt: media.alt,
          thumbUrl: media.sizes.medium.url,
          thumbWidth: media.sizes.medium.width,
          thumbHeight: media.sizes.medium.height,
          caption: media.alt
        });
      });
      addMediaListItem(addMedia);
    };

    var onUpdateImage = function onUpdateImage(media, index) {
      updateMediaListItem({
        id: media.id,
        url: media.url,
        width: media.sizes.full.width,
        height: media.sizes.full.height,
        alt: media.alt,
        thumbUrl: media.sizes.medium.url,
        thumbWidth: media.sizes.medium.width,
        thumbHeight: media.sizes.medium.height,
        caption: media.alt
      }, index);
    };

    var onClickDelete = function onClickDelete(index) {
      var response = confirm(__('Delete item') + ' ' + (index + 1) + '?');

      if (response == true) {
        deleteMediaListItem(index);
      } else {// do nothing
      }
    };

    var onClickMoveUp = function onClickMoveUp(index) {
      var newIndex = index > 0 ? index - 1 : mediaList.length - 1;
      mediaListItemMoveTo(index, newIndex);
    };

    var onClickMoveDown = function onClickMoveDown(index) {
      var newIndex = index < mediaList.length - 1 ? index + 1 : 0;
      mediaListItemMoveTo(index, newIndex);
    };

    var onChangeCaption = function onChangeCaption(value, index) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(0, index)), [{
        id: mediaList[index].id,
        url: mediaList[index].url,
        width: mediaList[index].width,
        height: mediaList[index].height,
        alt: mediaList[index].alt,
        thumbUrl: mediaList[index].thumbUrl,
        thumbWidth: mediaList[index].thumbWidth,
        thumbHeight: mediaList[index].thumbHeight,
        caption: value
      }], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(index + 1)));
      setAttributes({
        mediaList: newMediaList
      });
    };

    var addMediaListItem = function addMediaListItem(newItem) {
      return setAttributes({
        mediaList: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newItem))
      });
    };

    var updateMediaListItem = function updateMediaListItem(newItem, index) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(0, index)), [newItem], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(index + 1)));
      setAttributes({
        mediaList: newMediaList
      });
    };

    var deleteMediaListItem = function deleteMediaListItem(index) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(index + 1)));
      setAttributes({
        mediaList: newMediaList
      });
    };

    var mediaListItemMoveTo = function mediaListItemMoveTo(index, newIndex) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mediaList.slice(index + 1)));
      var newMediaList2 = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newMediaList.slice(0, newIndex)), [mediaList[index]], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newMediaList.slice(newIndex)));
      setAttributes({
        mediaList: newMediaList2
      });
    };

    var onChangeGalleryType = function onChangeGalleryType(value) {
      setAttributes({
        galleryType: value
      });
    };

    var onChangeFigcaption = function onChangeFigcaption(value) {
      setAttributes({
        figcaption: value
      });
    };

    var onChangeRounded = function onChangeRounded(value) {
      setAttributes({
        rounded: value
      });
    };

    var onChangeImgThumbnail = function onChangeImgThumbnail(value) {
      setAttributes({
        imgThumbnail: value
      });
    };

    var onChangeBorderState = function onChangeBorderState(value) {
      setAttributes({
        borderState: value
      });
    };

    var onChangeHoverShadow = function onChangeHoverShadow(value) {
      setAttributes({
        hoverShadow: value
      });
    };

    var onChangeHoverMove = function onChangeHoverMove(value) {
      setAttributes({
        hoverMove: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    }; // class names


    var galleryClassName = makeClassName({
      galleryType: galleryType
    });
    galleryClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, galleryClassName);
    var innerClassName = makeInnerClassName({
      galleryType: galleryType
    });
    var itemClassName = makeItemClassName({
      galleryType: galleryType
    });
    var linkClassName = makeLinkClassName({
      galleryType: galleryType
    });
    linkClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      hoverShadow: hoverShadow,
      hoverMove: hoverMove
    }, linkClassName);
    var imgClassName = makeImgClassName({
      galleryType: galleryType
    });
    imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, imgClassName);
    var uploadElementClassName = makeUploadElementClassName({
      galleryType: galleryType
    });
    var TagName = 'figure';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Gallery settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Gallery type', 'bsx-blocks'),
      value: galleryType,
      onChange: onChangeGalleryType,
      options: [{
        value: 'columns',
        label: __('Columns', 'bsx-blocks')
      }, {
        value: 'floating',
        label: __('Floating (equal image height)', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Thumbnail appearance', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Rounded corners', 'bsx-blocks'),
      checked: !!rounded,
      onChange: onChangeRounded
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Border', 'bsx-blocks'),
      checked: !!imgThumbnail,
      onChange: onChangeImgThumbnail
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["borderStateSelect"])(borderState, onChangeBorderState), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Mouseover shadow', 'bsx-blocks'),
      checked: !!hoverShadow,
      onChange: onChangeHoverShadow
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Mouseover move', 'bsx-blocks'),
      checked: !!hoverMove,
      onChange: onChangeHoverMove
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: galleryClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: innerClassName
    }, mediaList.map(function (media, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        className: linkClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        key: index,
        onSelect: function onSelect(value) {
          return onUpdateImage(value, index);
        },
        allowedTypes: "image",
        value: media.id,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle",
            onClick: open
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            className: imgClassName,
            src: media.url,
            alt: __('Upload Image', 'bsx-blocks')
          }));
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        multiline: false,
        placeholder: __('Caption (optional)', 'bsx-blocks'),
        value: media.caption,
        onChange: function onChange(value) {
          onChangeCaption(value, index);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-inline-control"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "bsxui-d-flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button",
        onClick: function onClick() {
          onClickMoveUp(index);
        },
        label: __('Move backward', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('carret-left')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button",
        onClick: function onClick() {
          onClickMoveDown(index);
        },
        label: __('Move forward', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('carret-right')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto",
        onClick: function onClick() {
          onClickDelete(index);
        },
        label: __('Remove Image', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('trash')))));
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: uploadElementClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onAddImage,
      allowedTypes: "image",
      multiple: true,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "button button-large bsxui-w-100",
          onClick: open
        }, __('Add image(s)', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        mediaList = _props$attributes2.mediaList,
        galleryType = _props$attributes2.galleryType,
        figcaption = _props$attributes2.figcaption,
        rounded = _props$attributes2.rounded,
        imgThumbnail = _props$attributes2.imgThumbnail,
        borderState = _props$attributes2.borderState,
        hoverShadow = _props$attributes2.hoverShadow,
        hoverMove = _props$attributes2.hoverMove,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter; // class names

    var galleryClassName = makeClassName({
      galleryType: galleryType
    });
    galleryClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, galleryClassName);
    var innerClassName = makeInnerClassName({
      galleryType: galleryType
    });
    var itemClassName = makeItemClassName({
      galleryType: galleryType
    });
    var linkClassName = makeLinkClassName({
      galleryType: galleryType
    });
    linkClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      hoverShadow: hoverShadow,
      hoverMove: hoverMove
    }, linkClassName);
    var imgClassName = makeImgClassName({
      galleryType: galleryType
    });
    imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, imgClassName);
    var TagName = 'figure';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: galleryClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsx-gallery",
      itemscope: true,
      itemtype: "http://schema.org/ImageGallery",
      "data-fn": "photoswipe"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: innerClassName
    }, mediaList.map(function (media, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        class: itemClassName,
        itemprop: "associatedMedia",
        itemscope: true,
        itemtype: "http://schema.org/ImageObject"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        class: linkClassName,
        href: media.url,
        itemprop: "contentUrl",
        "data-size": media.width + 'x' + media.height
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_2__["makeBase64PreloadImgSrc"])(media.thumbWidth, media.thumbHeight),
        alt: media.alt,
        width: media.thumbWidth,
        height: media.thumbHeight,
        "data-src": media.thumbUrl,
        "data-fn": "lazyload"
      }), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: media.thumbUrl,
        alt: media.alt,
        width: media.thumbWidth,
        height: media.thumbHeight
      }))), media.caption && !RichText.isEmpty(media.caption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "figcaption",
        className: "sr-only",
        value: media.caption,
        itemprop: "caption description"
      }));
    }))), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "bsx-gallery-figcaption font-italic",
      value: figcaption
    }));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/block.js */ "./src/banner/block.js");
/* harmony import */ var _buttons_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/index.js */ "./src/buttons/index.js");
/* harmony import */ var _column_rows_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-rows/index.js */ "./src/column-rows/index.js");
/* harmony import */ var _container_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/block.js */ "./src/container/block.js");
/* harmony import */ var _groups_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups/block.js */ "./src/groups/block.js");
/* harmony import */ var _icon_list_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-list/index.js */ "./src/icon-list/index.js");
/* harmony import */ var _img_gallery_block_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img-gallery/block.js */ "./src/img-gallery/block.js");
/* harmony import */ var _lazy_img_block_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy-img/block.js */ "./src/lazy-img/block.js");
/* harmony import */ var _row_with_cols_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./row-with-cols/index.js */ "./src/row-with-cols/index.js");
/* harmony import */ var _section_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/block.js */ "./src/section/block.js");
/* harmony import */ var _slider_block_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider/block.js */ "./src/slider/block.js");
/* harmony import */ var _text_elements_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-elements/index.js */ "./src/text-elements/index.js");
/* harmony import */ var _video_block_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/block.js */ "./src/video/block.js");
/* harmony import */ var _wrapper_block_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrapper/block.js */ "./src/wrapper/block.js");















/***/ }),

/***/ "./src/lazy-img/block.js":
/*!*******************************!*\
  !*** ./src/lazy-img/block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");




// TODO: save img urls in shorter way (e.g. trunc + suffixes/sizes, or only id?)

/*
    "imgUrlTrunc":"http://localhost/wordpress-testing/wp-content/uploads/2021/04/sergio-jara-yX9WbPbz8J8-unsplash-3000x1000-1-"
    "imgUrlExt":".jpg"
    "imgTruncSizes":[
        {"u":"150x150","s":"[150,150]"},
        {"u":"300x100","s":"[300,100]"},
        ...
    ]
*/
// TODO: advanced setting: allow zoomable img without `data-fn="photoswipe"` attr for making gallery with external attr (e.g. container or wrapper)
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path; // functions imports







var makeSourcesAttributesList = function makeSourcesAttributesList(attributes) {
  var calcImgSizes = attributes.calcImgSizes,
      imgSizeIndex = attributes.imgSizeIndex,
      calcPortraitImgSizes = attributes.calcPortraitImgSizes,
      portraitImgSizeIndex = attributes.portraitImgSizeIndex,
      portraitImgMaxWidthBreakpoint = attributes.portraitImgMaxWidthBreakpoint,
      disableResponsiveDownsizing = attributes.disableResponsiveDownsizing;
  var responsivePortraitMediaIndexList = [{
    breakpoint: 460,
    imgSizeIndexShift: '-1',
    minImgSizeIndex: '1'
  }, {
    breakpoint: 576,
    imgSizeIndexShift: '0',
    minImgSizeIndex: '2'
  }];
  var responsiveMediaIndexList = [{
    breakpoint: 460,
    imgSizeIndexShift: '-2',
    minImgSizeIndex: '1'
  }, {
    breakpoint: 768,
    imgSizeIndexShift: '-1',
    minImgSizeIndex: '2'
  }];
  var skipIndex = 0;
  var sourcesAttributesList = []; // portrait img

  if (!disableResponsiveDownsizing) {
    // downsize, iterate list
    responsivePortraitMediaIndexList.forEach(function (item, index) {
      var currentPortraitImgIndex = parseInt(portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);
      var adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentPortraitImgIndex;

      if (adaptedCurrentPortraitImgIndex <= parseInt(portraitImgSizeIndex) && adaptedCurrentPortraitImgIndex > skipIndex && typeof calcPortraitImgSizes !== 'undefined' && typeof calcPortraitImgSizes[adaptedCurrentPortraitImgIndex] != 'undefined' && typeof calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].url != 'undefined') {
        sourcesAttributesList.push({
          media: '(orientation: portrait) and (max-width: ' + (parseInt(index == responsivePortraitMediaIndexList.length - 1 && !!portraitImgMaxWidthBreakpoint ? portraitImgMaxWidthBreakpoint : item.breakpoint) - 0.02) + 'px)',
          srcset: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeBase64PreloadImgSrc"])(calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].width, calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].height),
          'data-srcset': calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].url,
          'data-width': calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].width,
          'data-height': calcPortraitImgSizes[adaptedCurrentPortraitImgIndex].height
        });
      }
    });
  } else {
    // use largest portrait img size
    if (!!portraitImgSizeIndex && typeof calcPortraitImgSizes !== 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: '(orientation: portrait) and (max-width: ' + (parseInt(!!portraitImgMaxWidthBreakpoint ? portraitImgMaxWidthBreakpoint : responsivePortraitMediaIndexList[responsivePortraitMediaIndexList.length - 1].breakpoint) - 0.02) + 'px)',
        srcset: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeBase64PreloadImgSrc"])(calcPortraitImgSizes[portraitImgSizeIndex].width, calcPortraitImgSizes[portraitImgSizeIndex].height),
        'data-srcset': calcPortraitImgSizes[portraitImgSizeIndex].url,
        'data-width': calcPortraitImgSizes[portraitImgSizeIndex].width,
        'data-height': calcPortraitImgSizes[portraitImgSizeIndex].height
      });
    }
  } // default img


  responsiveMediaIndexList.forEach(function (item, index) {
    var currentImgIndex = parseInt(imgSizeIndex) + parseInt(item.imgSizeIndexShift);
    var adaptedCurrentImgIndex = currentImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentImgIndex;

    if (!disableResponsiveDownsizing && adaptedCurrentImgIndex < parseInt(imgSizeIndex) && adaptedCurrentImgIndex > skipIndex && typeof calcImgSizes != 'undefined' && typeof calcImgSizes[adaptedCurrentImgIndex] != 'undefined' && typeof calcImgSizes[adaptedCurrentImgIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: '(max-width: ' + (parseInt(item.breakpoint) - 0.02) + 'px)',
        srcset: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeBase64PreloadImgSrc"])(calcImgSizes[adaptedCurrentImgIndex].width, calcImgSizes[adaptedCurrentImgIndex].height),
        'data-srcset': calcImgSizes[adaptedCurrentImgIndex].url,
        'data-width': calcImgSizes[adaptedCurrentImgIndex].width,
        'data-height': calcImgSizes[adaptedCurrentImgIndex].height
      });
    }
  });
  return sourcesAttributesList;
};

registerBlockType('bsx-blocks/lazy-img', {
  title: __('BSX Lazy Image', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_4__["svgIcon"])('lazy-img'),
  category: 'layout',
  attributes: {
    hasFigure: {
      boolean: 'string',
      default: true
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    imgSizes: {
      type: 'array',
      default: []
    },
    imgData: {
      type: 'array',
      default: []
    },
    imgSizeIndex: {
      type: 'string',
      default: '3'
    },
    imgId: {
      type: 'number'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    url: {
      type: 'string'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    width: {
      type: 'number'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
    height: {
      type: 'number'
    },
    origWidth: {
      type: 'number'
    },
    origHeight: {
      type: 'number'
    },
    portraitImgId: {
      type: 'number'
    },
    // deprecated, do not set anymore, keep alive for existing blocks (replaced by portraitImgData)
    portraitImgSizes: {
      type: 'array',
      default: []
    },
    portraitImgData: {
      type: 'array',
      default: []
    },
    portraitImgSizeIndex: {
      type: 'string',
      default: '3'
    },
    portraitImgMaxWidthBreakpoint: {
      type: 'string'
    },
    alt: {
      type: 'string'
    },
    figcaption: {
      type: 'array',
      source: 'children',
      selector: 'figcaption'
    },
    rounded: {
      type: 'string'
    },
    imgThumbnail: {
      type: 'boolean'
    },
    borderState: {
      type: 'string'
    },
    zoomable: {
      type: 'boolean'
    },
    externalGalleryParent: {
      type: 'boolean'
    },
    zoomImgSizeIndex: {
      type: 'string'
    },
    disableResponsiveDownsizing: {
      type: 'boolean'
    },
    textAlign: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    aAdditionalClassName: {
      type: 'string'
    },
    pictureAdditionalClassName: {
      type: 'string'
    },
    imgAdditionalClassName: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    scale: {
      type: 'number'
    },
    displayedWidth: {
      type: 'text'
    },
    displayedHeight: {
      type: 'text'
    },
    noFigureTag: {
      type: 'boolean'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        imgId = _props$attributes.imgId,
        imgSizes = _props$attributes.imgSizes,
        imgData = _props$attributes.imgData,
        imgSizeIndex = _props$attributes.imgSizeIndex,
        url = _props$attributes.url,
        width = _props$attributes.width,
        height = _props$attributes.height,
        origWidth = _props$attributes.origWidth,
        origHeight = _props$attributes.origHeight,
        portraitImgId = _props$attributes.portraitImgId,
        portraitImgSizes = _props$attributes.portraitImgSizes,
        portraitImgData = _props$attributes.portraitImgData,
        portraitImgSizeIndex = _props$attributes.portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint = _props$attributes.portraitImgMaxWidthBreakpoint,
        alt = _props$attributes.alt,
        figcaption = _props$attributes.figcaption,
        rounded = _props$attributes.rounded,
        imgThumbnail = _props$attributes.imgThumbnail,
        borderState = _props$attributes.borderState,
        zoomable = _props$attributes.zoomable,
        externalGalleryParent = _props$attributes.externalGalleryParent,
        zoomImgSizeIndex = _props$attributes.zoomImgSizeIndex,
        disableResponsiveDownsizing = _props$attributes.disableResponsiveDownsizing,
        textAlign = _props$attributes.textAlign,
        marginAfter = _props$attributes.marginAfter,
        aAdditionalClassName = _props$attributes.aAdditionalClassName,
        pictureAdditionalClassName = _props$attributes.pictureAdditionalClassName,
        imgAdditionalClassName = _props$attributes.imgAdditionalClassName,
        href = _props$attributes.href,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        scale = _props$attributes.scale,
        displayedWidth = _props$attributes.displayedWidth,
        displayedHeight = _props$attributes.displayedHeight,
        noFigureTag = _props$attributes.noFigureTag,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        setState = props.setState; // TEST
    // console.log( 'imgId: ' + imgId );
    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
    // console.log( 'imgSizes (deprecated): ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );
    // console.log( 'portraitImgId: ' + portraitImgId );
    // console.log( 'portraitImgData: ' + JSON.stringify( portraitImgData, null, 2 ) );
    // console.log( 'portraitImgSizes (deprecated): ' + JSON.stringify( portraitImgSizes, null, 2 ) + '\n' );
    // initial set, replaces old attr 'imgSizes'

    var hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
    var hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
    var calcImgSizes = hasOldAttrImgSizes ? imgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgSizesFromImgData"])(imgData);
    var calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgSizesFromImgData"])(portraitImgData); // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );
    // if ( typeof imgData !== 'undefined' ) {
    //     console.log( '-----> INITIAL SET (create calcImgSizes from imgData):\n' );
    // }
    // else {
    //     console.log( 'NO INITIAL SET (keep imgSizes):\n' );
    // }
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // /TEST

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(img) {
        var newImgAllData, originalWidth, originalHeight, newImgData, newImgSizeIndex, newLowestSrcsetImgSizeIndex, newZoomImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["getImgSizesData"])(img);

              case 3:
                newImgAllData = _context.sent;
                originalWidth = newImgAllData.originalWidth;
                originalHeight = newImgAllData.originalHeight; // TEST
                // console.log( 'TEST:\n' );
                // console.log( 'newImgAllData: ' + JSON.stringify( newImgAllData, null, 2 ) );
                // /TEST
                // TODO: replace by 'newImgAllData'
                // const newImgSizes = newImgAllData.imgs;
                // const sizes = [];
                // newImgAllData.imgs.forEach( ( img, index ) => {
                //     sizes.push( {
                //         s: img.sizeSlug,
                //         w: img.width,
                //         h: img.height,
                //     } );
                // } );
                // const newImgData = [ {
                //     sizes: sizes,
                //     trunc: newImgAllData.truncWithoutSizeSlug,
                //     ext: newImgAllData.fileExt,
                // } ];
                // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')

                newImgData = Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgData"])(newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt); // TEST
                // console.log( 'TEST 2:\n' );
                // console.log( 'newImgData: ' + JSON.stringify( newImgData, null, 2 ) );
                // /TEST
                // TEST
                // console.log( 'originalWidth: ' + originalWidth );
                // console.log( 'originalHeight: ' + originalHeight );
                // console.log( 'newImgSizes.length: ' + newImgSizes.length );
                // console.log( 'imgSizeIndex: ' + imgSizeIndex );
                // console.log( '-----> newImgSizes:' );
                // newImgSizes.forEach( ( imgSize, index ) => {
                //     console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                // } );
                // check if current img size index fits to new img (might be too large)

                newImgSizeIndex = parseInt(imgSizeIndex);

                if (parseInt(imgSizeIndex) >= newImgAllData.imgs.length) {
                  newImgSizeIndex = newImgAllData.imgs.length - 1; // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                } // do not use thumbnail for srcset if has square format, start with img sizes index 1 then


                newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1; // check if current zoom img size index fits to new img (might be too large) or is unset

                newZoomImgSizeIndex = zoomImgSizeIndex;

                if (zoomable && !zoomImgSizeIndex || parseInt(zoomImgSizeIndex) < parseInt(newImgSizeIndex) || parseInt(zoomImgSizeIndex) >= parseInt(newImgAllData.imgs.length)) {
                  newZoomImgSizeIndex = (newImgAllData.imgs.length - 1).toString();
                } // avoid creating deprecated (empty) attr 'imgSizes'


                if (imgSizes && imgSizes.length > 0) {
                  // delete value of 'imgSizes'
                  setAttributes({
                    imgId: img.id,
                    imgSizes: '',
                    // save empty, replaced by imgData
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: '',
                    // save empty, replaced by imgData
                    width: '',
                    // save empty, replaced by imgDat
                    height: '',
                    // save empty, replaced by imgDat
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                    zoomImgSizeIndex: newZoomImgSizeIndex
                  });
                } else {
                  // skip 'imgSizes'
                  setAttributes({
                    imgId: img.id,
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                    zoomImgSizeIndex: newZoomImgSizeIndex
                  });
                } // TEST – TODO: remove
                // for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                //     console.log( 'key: "' + key + '", val: "' + value + '"' );
                // }


              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _onSelectImage.apply(this, arguments);
    }

    ;

    function onSelectPortraitImage(_x2) {
      return _onSelectPortraitImage.apply(this, arguments);
    }

    function _onSelectPortraitImage() {
      _onSelectPortraitImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(portraitImg) {
        var newPortraitImgAllData, newPortraitImgData, newPortraitImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof portraitImg.url !== 'undefined')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["getImgSizesData"])(portraitImg);

              case 3:
                newPortraitImgAllData = _context2.sent;
                // const newPortraitImgSizes = newPortraitImgAllData.imgs;
                // prepare new attr 'imgData' (replacing old attr 'imgSizes')
                // const sizes = [];
                // newPortraitImgAllData.imgs.forEach( ( img, index ) => {
                //     sizes.push( {
                //         s: img.sizeSlug,
                //         w: img.width,
                //         h: img.height,
                //     } );
                // } );
                // const newPortraitImgData = [ {
                //     sizes: sizes,
                //     trunc: newPortraitImgAllData.truncWithoutSizeSlug,
                //     ext: newPortraitImgAllData.fileExt,
                // } ];
                // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')
                newPortraitImgData = Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgData"])(newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt); // check if current img size index fits to new img (might be too large)

                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (parseInt(portraitImgSizeIndex) >= newPortraitImgAllData.imgs.length) {
                  newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
                } // avoid creating deprecated (empty) attr 'portraitImgSizes'


                if (portraitImgSizes && portraitImgSizes.length > 0) {
                  // delete value of 'portraitImgSizes'
                  setAttributes({
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: '',
                    // save empty, replaced by portraitImgData
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                  });
                } else {
                  // skip 'portraitImgSizes'
                  setAttributes({
                    portraitImgId: portraitImg.id,
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _onSelectPortraitImage.apply(this, arguments);
    }

    ;

    var onDeletePortraitImage = function onDeletePortraitImage() {
      // avoid creating deprecated attr 'portraitImgSizes'
      if (portraitImgSizes && portraitImgSizes.length > 0) {
        // delete value of 'portraitImgSizes'
        setAttributes({
          portraitImgId: '',
          portraitImgSizes: '',
          portraitImgData: ''
        });
      } else {
        // skip 'portraitImgSizes'
        setAttributes({
          portraitImgId: '',
          portraitImgData: ''
        });
      }
    };

    var onChangeMediaAlt = function onChangeMediaAlt(value) {
      setAttributes({
        alt: value
      });
    };

    var onChangeFigcaption = function onChangeFigcaption(value) {
      setAttributes({
        figcaption: value
      });
    };

    var onChangeScale = function onChangeScale(value) {
      setAttributes({
        scale: parseFloat(value),
        displayedWidth: !!value && value != origWidth ? Math.round(origWidth * parseFloat(value)) : '',
        displayedHeight: !!value && value != origHeight ? Math.round(origHight * parseFloat(value)) : ''
      });
    };

    var onChangeDisplayedWidth = function onChangeDisplayedWidth(value) {
      setAttributes({
        displayedWidth: value != origWidth ? parseFloat(value) : '',
        displayedHeight: value != origHeight ? Math.round(value / origWidth * origHeight) : '',
        scale: parseFloat(value / origWidth)
      });
    };

    var onChangeDisplayedHeight = function onChangeDisplayedHeight(value) {
      setAttributes({
        displayedHeight: value != origWidth ? parseFloat(value) : origWidth,
        displayedWidth: value != origHeight ? Math.round(value / origHeight * origWidth) : '',
        scale: parseFloat(value / origHeight)
      });
    };

    var onChangeRounded = function onChangeRounded(value) {
      setAttributes({
        rounded: value
      });
    };

    var onChangeImgThumbnail = function onChangeImgThumbnail(value) {
      setAttributes({
        imgThumbnail: value
      });
    };

    var onChangeBorderState = function onChangeBorderState(value) {
      setAttributes({
        borderState: value
      });
    };

    var onChangeZoomable = function onChangeZoomable(value) {
      if (zoomImgSizeIndex == undefined) {
        setAttributes({
          zoomable: value,
          zoomImgSizeIndex: (calcImgSizes.length - 1).toString()
        });
      } else {
        setAttributes({
          zoomable: value
        });
      }
    };

    var onChangeExternalGalleryParent = function onChangeExternalGalleryParent(value) {
      setAttributes({
        externalGalleryParent: value
      });
    };

    var onChangeZoomImgSizeIndex = function onChangeZoomImgSizeIndex(value) {
      setAttributes({
        zoomImgSizeIndex: value.toString()
      });
    };

    var onChangeDisableResponsiveDownsizing = function onChangeDisableResponsiveDownsizing(value) {
      setAttributes({
        disableResponsiveDownsizing: value
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeAAdditionalClassName = function onChangeAAdditionalClassName(value) {
      setAttributes({
        aAdditionalClassName: value
      });
    };

    var onChangePictureAdditionalClassName = function onChangePictureAdditionalClassName(value) {
      setAttributes({
        pictureAdditionalClassName: value
      });
    };

    var onChangeImgAdditionalClassName = function onChangeImgAdditionalClassName(value) {
      setAttributes({
        imgAdditionalClassName: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      if (href == '') {
        // reset aAdditionalClassName
        setAttributes({
          href: value,
          aAdditionalClassName: ''
        });
      } else {
        setAttributes({
          href: value
        });
      }
    };

    var onChangeTarget = function onChangeTarget(value) {
      setAttributes({
        target: !!value ? '_blank' : ''
      });
    };

    var onChangeRel = function onChangeRel(value) {
      setAttributes({
        rel: value
      });
    }; // const onChangeDataFn = ( value ) => {
    //     setAttributes( { dataFn: value } );
    // };


    var onChangeNoFigureTag = function onChangeNoFigureTag(value) {
      setAttributes({
        noFigureTag: value,
        zoomable: false,
        figcaption: []
      });
    };

    var onChangeImgSizeIndex = function onChangeImgSizeIndex(value) {
      setAttributes({
        imgSizeIndex: value.toString() // url: calcImgSizes[ value ].url,
        // width: parseInt( calcImgSizes[ value ].width ),
        // height: parseInt( calcImgSizes[ value ].height ),

      });
    };

    var imgSizeRadioControlOptions = [];

    if (typeof calcImgSizes !== 'undefined') {
      calcImgSizes.forEach(function (imgSize, index) {
        imgSizeRadioControlOptions.push({
          value: index.toString(),
          label: imgSize.width + 'x' + imgSize.height + (calcImgSizes[calcImgSizes.length - 1].width !== calcImgSizes[calcImgSizes.length - 1].height && imgSize.width === imgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
        });
      });
    }

    var onChangePortraitImgSizeIndex = function onChangePortraitImgSizeIndex(value) {
      setAttributes({
        portraitImgSizeIndex: value.toString()
      });
    };

    var portraitImgSizeRadioControlOptions = [];

    if (typeof calcPortraitImgSizes !== 'undefined') {
      calcPortraitImgSizes.forEach(function (portraitImgSize, index) {
        portraitImgSizeRadioControlOptions.push({
          value: index.toString(),
          label: portraitImgSize.width + 'x' + portraitImgSize.height + (calcPortraitImgSizes[calcPortraitImgSizes.length - 1].width !== calcPortraitImgSizes[calcPortraitImgSizes.length - 1].height && portraitImgSize.width === portraitImgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
        });
      });
    }

    var zoomImgSizeRadioControlOptions = [];

    if (typeof calcImgSizes !== 'undefined') {
      calcImgSizes.forEach(function (imgSize, index) {
        if (index >= imgSizeIndex) {
          zoomImgSizeRadioControlOptions.push({
            value: index.toString(),
            label: imgSize.width + 'x' + imgSize.height + (calcImgSizes[calcImgSizes.length - 1].width !== calcImgSizes[calcImgSizes.length - 1].height && imgSize.width === imgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
          });
        }
      });
    }

    var onChangePortraitImgMaxWidthBreakpoint = function onChangePortraitImgMaxWidthBreakpoint(value) {
      setAttributes({
        portraitImgMaxWidthBreakpoint: value.toString()
      });
    }; // prepare img sources attributes


    var sourcesAttributesList = makeSourcesAttributesList({
      calcImgSizes: calcImgSizes,
      imgSizeIndex: imgSizeIndex,
      calcPortraitImgSizes: calcPortraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      portraitImgMaxWidthBreakpoint: portraitImgMaxWidthBreakpoint,
      disableResponsiveDownsizing: disableResponsiveDownsizing
    }); // class names

    var classNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    });
    var imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, 'img-fluid' + (imgAdditionalClassName ? ' ' + imgAdditionalClassName : '')); // image

    var image = imgId && typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[imgSizeIndex] !== 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", {
      className: pictureAdditionalClassName
    }, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: calcImgSizes[imgSizeIndex].url,
      alt: alt,
      width: !!displayedWidth ? displayedWidth : calcImgSizes[imgSizeIndex].width,
      height: !!displayedHeight ? displayedHeight : calcImgSizes[imgSizeIndex].height
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Image', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Alt', 'bsx-blocks'),
      value: alt,
      onChange: onChangeMediaAlt
    }), imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: calcImgSizes[imgSizeIndex].url,
          alt: __('Change / upload image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), calcImgSizes[imgSizeIndex] != undefined && calcImgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
      class: "bsxui-link",
      href: calcImgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), imgId && typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[imgSizeIndex] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed width', 'bsx-blocks'),
      value: !!displayedWidth ? displayedWidth : calcImgSizes[imgSizeIndex].width,
      onChange: onChangeDisplayedWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed height', 'bsx-blocks'),
      value: !!displayedHeight ? displayedHeight : calcImgSizes[imgSizeIndex].height,
      onChange: onChangeDisplayedHeight
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["scaleSelect"])(scale, onChangeScale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
      label: __('Rounded', 'bsx-blocks'),
      value: rounded,
      onChange: onChangeRounded,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'rounded',
        label: __('Rounded corners', 'bsx-blocks')
      }, {
        value: 'circle',
        label: __('Circle', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      label: __('Border', 'bsx-blocks'),
      checked: !!imgThumbnail,
      onChange: onChangeImgThumbnail
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
      label: __('Border color', 'bsx-blocks'),
      value: borderState,
      onChange: onChangeBorderState,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'white',
        label: __('White', 'bsx-blocks')
      }, {
        value: 'primary',
        label: __('Primary', 'bsx-blocks')
      }, {
        value: 'secondary',
        label: __('Secondary', 'bsx-blocks')
      }, {
        value: 'success',
        label: __('Success', 'bsx-blocks')
      }, {
        value: 'danger',
        label: __('Danger', 'bsx-blocks')
      }, {
        value: 'warning',
        label: __('Warning', 'bsx-blocks')
      }, {
        value: 'info',
        label: __('Info', 'bsx-blocks')
      }, {
        value: 'light',
        label: __('Light', 'bsx-blocks')
      }, {
        value: 'dark',
        label: __('Dark', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Portrait image (optional)', 'bsx-blocks')
    }, !!zoomable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('Portrait image is deactivated since Zoomable image is set.', 'bsx-blocks'))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, portraitImgId && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: calcPortraitImgSizes[portraitImgSizeIndex].url,
          alt: __('Change / upload portrait image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No portrait image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload portrait image', 'bsx-blocks'));
      }
    })), portraitImgId && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
      onClick: onDeletePortraitImage,
      isDestructive: true
    }, __('Remove portrait image', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: portraitImgSizeIndex.toString(),
      options: portraitImgSizeRadioControlOptions,
      onChange: onChangePortraitImgSizeIndex
    }), typeof calcPortraitImgSizes != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
      class: "bsxui-link",
      href: calcPortraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Zoomable (optional)', 'bsx-blocks')
    }, calcPortraitImgSizes.length > 0 || !!href ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, !!href ? __('Zoomable image is deactivated since href is set.', 'bsx-blocks') : __('Zoomable image is deactivated since Portrait image is set.', 'bsx-blocks'))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      className: calcPortraitImgSizes.length > 0 || !!noFigureTag ? 'bsxui-disabled' : '',
      label: __('Zoomable image', 'bsx-blocks'),
      checked: !!zoomable,
      onChange: onChangeZoomable,
      help: __('If enabled click on image will open shadowbox gallery with large image.', 'bsx-blocks')
    }), zoomable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
      label: __('Zoom image size', 'bsx-blocks'),
      selected: zoomImgSizeIndex,
      options: zoomImgSizeRadioControlOptions,
      onChange: onChangeZoomImgSizeIndex
    }), imgSizeIndex == zoomImgSizeIndex && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('Currently your zoom image is not larger than your original image.', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      label: __('External gallery parent', 'bsx-blocks'),
      checked: !!externalGalleryParent,
      onChange: onChangeExternalGalleryParent,
      help: __('Enabled if using custom external shadowbox gallery element (e.g. configured BSX Wrapper) wrapping this image.', 'bsx-blocks')
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('Zoomable image is deactivated since No figure Tag is set.', 'bsx-blocks'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Link (optional)', 'bsx-blocks')
    }, !!zoomable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('Link is deactivated since <i>Zoomable image</i> is set.', 'bsx-blocks'))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["linkUrlInput"])(href, onChangeHref), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["relInput"])(rel, onChangeRel))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Margin (optional)', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
      label: __('Margin after', 'bsx-blocks'),
      value: marginAfter,
      onChange: onChangeMarginAfter,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '0',
        label: __('none (0)', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Spacer after element', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["disableResponsiveDownsizingToggle"])(disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["portraitImgMaxWidthBreakpointInput"])(portraitImgMaxWidthBreakpoint, onChangePortraitImgMaxWidthBreakpoint), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      className: !!zoomable ? 'bsxui-disabled' : '',
      label: __('No figure tag', 'bsx-blocks'),
      checked: !!noFigureTag,
      onChange: onChangeNoFigureTag
    }), !!zoomable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('Figure tag must exist since Zoomable image is set.', 'bsx-blocks'))), !!href && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('A element additional class(es)', 'bsx-blocks'),
      value: aAdditionalClassName,
      onChange: onChangeAAdditionalClassName
    }), !noFigureTag ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Picture element additional class(es)', 'bsx-blocks'),
      value: pictureAdditionalClassName,
      onChange: onChangePictureAdditionalClassName
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('Picture element additional class(es) is deactivated since No figure tag is set. Use Additional class(es) instead.', 'bsx-blocks'), ".")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Image element additional class(es)', 'bsx-blocks'),
      value: imgAdditionalClassName,
      onChange: onChangeImgAdditionalClassName
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", {
      className: classNames
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, !zoomable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, image) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
      className: 'zoomable-img'
    }, image)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }))];
  },
  // <script>
  //     document.write(
  //         '<picture>'
  //         + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
  //         + '<source media="(min-width: 1440px)" srcset="" data-srcset="/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
  //         + '<source media="(min-width: 1140px)" srcset="" data-srcset="/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
  //         + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
  //         + '</picture>'
  //     );
  // </script>
  // <noscript><img class="img-fluid" src="/example-img-006-720x480.jpg" alt="Example image"></noscript>
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        imgSizes = _props$attributes2.imgSizes,
        imgData = _props$attributes2.imgData,
        url = _props$attributes2.url,
        width = _props$attributes2.width,
        height = _props$attributes2.height,
        origWidth = _props$attributes2.origWidth,
        origHeight = _props$attributes2.origHeight,
        portraitImgId = _props$attributes2.portraitImgId,
        portraitImgSizes = _props$attributes2.portraitImgSizes,
        portraitImgData = _props$attributes2.portraitImgData,
        portraitImgSizeIndex = _props$attributes2.portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint = _props$attributes2.portraitImgMaxWidthBreakpoint,
        alt = _props$attributes2.alt,
        figcaption = _props$attributes2.figcaption,
        rounded = _props$attributes2.rounded,
        imgThumbnail = _props$attributes2.imgThumbnail,
        borderState = _props$attributes2.borderState,
        zoomable = _props$attributes2.zoomable,
        externalGalleryParent = _props$attributes2.externalGalleryParent,
        zoomImgSizeIndex = _props$attributes2.zoomImgSizeIndex,
        disableResponsiveDownsizing = _props$attributes2.disableResponsiveDownsizing,
        textAlign = _props$attributes2.textAlign,
        marginAfter = _props$attributes2.marginAfter,
        aAdditionalClassName = _props$attributes2.aAdditionalClassName,
        pictureAdditionalClassName = _props$attributes2.pictureAdditionalClassName,
        imgAdditionalClassName = _props$attributes2.imgAdditionalClassName,
        href = _props$attributes2.href,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel,
        scale = _props$attributes2.scale,
        displayedWidth = _props$attributes2.displayedWidth,
        displayedHeight = _props$attributes2.displayedHeight,
        noFigureTag = _props$attributes2.noFigureTag; // TEST
    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
    // console.log( 'imgSizes: ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );
    // initial set, replaces old attr 'imgSizes'

    var hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
    var hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
    var calcImgSizes = hasOldAttrImgSizes ? imgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgSizesFromImgData"])(imgData);
    var calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeImgSizesFromImgData"])(portraitImgData); // prepare img sources attributes

    var sourcesAttributesList = makeSourcesAttributesList({
      calcImgSizes: calcImgSizes,
      imgSizeIndex: imgSizeIndex,
      calcPortraitImgSizes: calcPortraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      portraitImgMaxWidthBreakpoint: portraitImgMaxWidthBreakpoint,
      disableResponsiveDownsizing: disableResponsiveDownsizing
    }); // class names

    var classNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    }, className);
    var aClassName = zoomable ? 'zoomable-img' : !!href && !!aAdditionalClassName ? aAdditionalClassName : ''; // let aClassName = '';
    // if ( zoomable ) {
    //     aClassName += 'zoomable-img';
    // }
    // if ( !! href && !! aAdditionalClassName ) {
    //     aClassName += ' ' + aAdditionalClassName.trim();
    // }

    var imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, 'img-fluid' + (imgAdditionalClassName ? ' ' + imgAdditionalClassName : '')); // attributes
    // allow zoomable img

    var saveAttributes = zoomable && !externalGalleryParent ? Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_6__["makeSaveAttributes"])({
      'data-fn': 'photoswipe'
    }) : {}; // manage zoomImgSizeIndex & href, target, rel

    var aSaveAttributes = zoomable && typeof calcImgSizes[zoomImgSizeIndex] != 'undefined' ? Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_6__["makeSaveAttributes"])({
      'href': calcImgSizes[zoomImgSizeIndex].url,
      'data-size': calcImgSizes[zoomImgSizeIndex].width + 'x' + calcImgSizes[zoomImgSizeIndex].height
    }) : !!href ? {
      'href': href,
      'target': target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
    } : {};
    var image = typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[imgSizeIndex] !== 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", {
      className: !noFigureTag ? pictureAdditionalClassName : classNames
    }, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_8__["makeBase64PreloadImgSrc"])(calcImgSizes[imgSizeIndex].width, calcImgSizes[imgSizeIndex].height),
      alt: alt,
      "data-src": calcImgSizes[imgSizeIndex].url,
      width: !!displayedWidth ? displayedWidth : calcImgSizes[imgSizeIndex].width,
      height: !!displayedHeight ? displayedHeight : calcImgSizes[imgSizeIndex].height,
      "data-fn": "lazyload"
    })), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: calcImgSizes[imgSizeIndex].url,
      alt: alt,
      width: !!displayedWidth ? displayedWidth : calcImgSizes[imgSizeIndex].width,
      height: !!displayedHeight ? displayedHeight : calcImgSizes[imgSizeIndex].height
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null);
    var aOrImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, zoomable || href ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: aClassName
    }, aSaveAttributes), image) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, image));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, !noFigureTag ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classNames
    }, saveAttributes), typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[imgSizeIndex] !== 'undefined' && typeof calcImgSizes[imgSizeIndex].url !== 'undefined' && calcImgSizes[imgSizeIndex].url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, aOrImage, figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "font-italic",
      value: figcaption
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[imgSizeIndex] !== 'undefined' && typeof calcImgSizes[imgSizeIndex].url !== 'undefined' && calcImgSizes[imgSizeIndex].url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, aOrImage)));
  }
});

/***/ }),

/***/ "./src/row-with-cols/col/block.js":
/*!****************************************!*\
  !*** ./src/row-with-cols/col/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl;
var withSelect = wp.data.withSelect; // functions





var makeColClassNames = function makeColClassNames(sizesArray) {
  var prefix = 'col';
  var sizeIntervals = ['xs', 'sm', 'md', 'lg', 'xl'];
  var colClassNames = [];
  sizesArray.forEach(function (value, index) {
    var sizeInterval = sizeIntervals[index];
    var buildClassName = '';

    if (value) {
      buildClassName += 'col';

      if (sizeInterval == 'xs') {// do nothing 
      } else {
        buildClassName += '-' + sizeInterval;
      }

      if (value != 'null') {
        buildClassName += '-' + value;
      }

      colClassNames.push(buildClassName);
    }
  }); //console.log( 'colClassNames.join( \' \' ): "' + colClassNames.join( ' ' ) + '"' );

  return colClassNames.join(' ');
};

registerBlockType('bsx-blocks/col', {
  title: __('BSX Column', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('row-with-cols-col'),
  category: 'layout',
  parent: ['bsx-blocks/row-with-cols'],
  attributes: {
    colType: {
      type: 'string',
      default: 'custom'
    },
    enableInheritanceFromRow: {
      type: 'boolean',
      default: true
    },
    sizeXs: {
      type: 'string',
      default: ''
    },
    sizeSm: {
      type: 'string',
      default: ''
    },
    sizeMd: {
      type: 'string',
      default: '4'
    },
    sizeLg: {
      type: 'string',
      default: ''
    },
    sizeXl: {
      type: 'string',
      default: ''
    },
    nodeName: {
      type: 'string',
      default: 'div'
    },
    marginAfter: {
      type: 'string',
      default: '3'
    },
    display: {
      type: 'string'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sizeXs = attributes.sizeXs,
        sizeSm = attributes.sizeSm,
        sizeMd = attributes.sizeMd,
        sizeLg = attributes.sizeLg,
        sizeXl = attributes.sizeXl,
        display = attributes.display;
    return {
      'data-size': sizeXs,
      'data-size-sm': sizeSm,
      'data-size-md': sizeMd,
      'data-size-lg': sizeLg,
      'data-size-xl': sizeXl,
      'data-display': display
    };
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : []; // console.log( 'parentClientId: "' + parentClientId + '"' );

    var ancestorClientIds = getBlockParentsByBlockName(clientId, 'bsx-blocks/row-with-cols'); // console.log( 'ancestorClientIds: "' + ancestorClientIds + '"' );
    // ancestorClientIds.forEach( ( ancestorClientId, index ) => {
    //     console.log( 'ancestorClientId[ ' + index + ' ]: "' + ancestorClientId + '"' );
    // } ); 
    // get last item which is parent

    var parentClientId = ancestorClientIds[ancestorClientIds.length - 1];
    var parentAttributes = getBlockAttributes(parentClientId); // console.log( 'parentAttributes: "' + parentAttributes + '"' );
    // if ( !! parentAttributes ) {
    //     for ( let [ key, value ] of Object.entries( parentAttributes ) ) {
    //         console.log( 'key: "' + key + '", value: "' + value + '"' );
    //     }
    // }
    // console.log( 'parentAttributes.fromRowConfig: "' + parentAttributes.fromRowConfig + '"' );

    return {
      parentAttributes: parentAttributes,
      children: children
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        colType = _props$attributes.colType,
        enableInheritanceFromRow = _props$attributes.enableInheritanceFromRow,
        sizeXs = _props$attributes.sizeXs,
        sizeSm = _props$attributes.sizeSm,
        sizeMd = _props$attributes.sizeMd,
        sizeLg = _props$attributes.sizeLg,
        sizeXl = _props$attributes.sizeXl,
        nodeName = _props$attributes.nodeName,
        marginAfter = _props$attributes.marginAfter,
        display = _props$attributes.display,
        setAttributes = props.setAttributes,
        parentAttributes = props.parentAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    }; // xs


    var onChangeXsColSize = function onChangeXsColSize(value) {
      setAttributes({
        sizeXs: !!value ? value.toString() : ''
      });
    };

    var onChangeXsEqualSize = function onChangeXsEqualSize(value) {
      if (value) {
        setAttributes({
          sizeXs: 'null'
        });
      } else if (sizeXs == 'null') {
        setAttributes({
          sizeXs: ''
        });
      }
    };

    var onChangeXsAutoSize = function onChangeXsAutoSize(value) {
      if (value) {
        setAttributes({
          sizeXs: 'auto'
        });
      } else if (sizeXs == 'auto') {
        setAttributes({
          sizeXs: ''
        });
      }
    }; // sm


    var onChangeSmColSize = function onChangeSmColSize(value) {
      setAttributes({
        sizeSm: !!value ? value.toString() : ''
      });
    };

    var onChangeSmEqualSize = function onChangeSmEqualSize(value) {
      if (value) {
        setAttributes({
          sizeSm: 'null'
        });
      } else if (sizeSm == 'null') {
        setAttributes({
          sizeSm: ''
        });
      }
    };

    var onChangeSmAutoSize = function onChangeSmAutoSize(value) {
      if (value) {
        setAttributes({
          sizeSm: 'auto'
        });
      } else if (sizeSm == 'auto') {
        setAttributes({
          sizeSm: ''
        });
      }
    }; // md


    var onChangeMdColSize = function onChangeMdColSize(value) {
      setAttributes({
        sizeMd: !!value ? value.toString() : ''
      });
    };

    var onChangeMdEqualSize = function onChangeMdEqualSize(value) {
      if (value) {
        setAttributes({
          sizeMd: 'null'
        });
      } else if (sizeMd == 'null') {
        setAttributes({
          sizeMd: ''
        });
      }
    };

    var onChangeMdAutoSize = function onChangeMdAutoSize(value) {
      if (value) {
        setAttributes({
          sizeMd: 'auto'
        });
      } else if (sizeMd == 'auto') {
        setAttributes({
          sizeMd: ''
        });
      }
    }; // lg


    var onChangeLgColSize = function onChangeLgColSize(value) {
      setAttributes({
        sizeLg: !!value ? value.toString() : ''
      });
    };

    var onChangeLgEqualSize = function onChangeLgEqualSize(value) {
      if (value) {
        setAttributes({
          sizeLg: 'null'
        });
      } else if (sizeLg == 'null') {
        setAttributes({
          sizeLg: ''
        });
      }
    };

    var onChangeLgAutoSize = function onChangeLgAutoSize(value) {
      if (value) {
        setAttributes({
          sizeLg: 'auto'
        });
      } else if (sizeLg == 'auto') {
        setAttributes({
          sizeLg: ''
        });
      }
    }; // xl


    var onChangeXlColSize = function onChangeXlColSize(value) {
      setAttributes({
        sizeXl: !!value ? value.toString() : ''
      });
    };

    var onChangeXlEqualSize = function onChangeXlEqualSize(value) {
      if (value) {
        setAttributes({
          sizeXl: 'null'
        });
      } else if (sizeXl == 'null') {
        setAttributes({
          sizeXl: ''
        });
      }
    };

    var onChangeXlAutoSize = function onChangeXlAutoSize(value) {
      if (value) {
        setAttributes({
          sizeXl: 'auto'
        });
      } else if (sizeXl == 'auto') {
        setAttributes({
          sizeXl: ''
        });
      }
    };

    var onChangeEnableInheritanceFromRow = function onChangeEnableInheritanceFromRow(value) {
      setAttributes({
        enableInheritanceFromRow: value
      });
    };

    var onClickEnableInheritanceFromRow = function onClickEnableInheritanceFromRow(value) {
      //console.log( 'onClickEnableInheritanceFromRow' );
      setAttributes({
        sizeXs: parentAttributes.sizeXs,
        sizeSm: parentAttributes.sizeSm,
        sizeMd: parentAttributes.sizeMd,
        sizeLg: parentAttributes.sizeLg,
        sizeXl: parentAttributes.sizeXl,
        nodeName: parentAttributes.colsNodeName,
        marginAfter: parentAttributes.colsMarginAfter
      });
    };

    var onChangeNodeName = function onChangeNodeName(value) {
      setAttributes({
        nodeName: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl]);
    colClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      marginAfter: marginAfter,
      display: display
    }, colClassName);
    setAttributes({
      fromRowConfig: parentAttributes.fromRowConfig
    });
    var TagName = nodeName;
    /*
    if ( !! props.attributes ) {
        console.log( 'build col: ' );
        for ( let [ key, value ] of Object.entries( props.attributes ) ) {
            console.log( 'key: "' + key + '", value: "' + value + '"' );
        }
    }
    */

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Sizes (this Column)', 'bsx-blocks')
    }, colType === 'custom' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Enable inheritance from Row', 'bsx-blocks'),
      checked: !!enableInheritanceFromRow,
      onChange: onChangeEnableInheritanceFromRow,
      help: __('If enabled allows overwriting Column settings from Row', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: onClickEnableInheritanceFromRow,
      isSecondary: true,
      disabled: !enableInheritanceFromRow
    }, __('Inherit Settings for this Column', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('XS Column Width', 'bsx-blocks'),
      value: parseInt(sizeXs),
      onChange: onChangeXsColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('XS Equal Width', 'bsx-blocks'),
      checked: sizeXs == 'null',
      onChange: onChangeXsEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('XS Auto Width', 'bsx-blocks'),
      checked: sizeXs == 'auto',
      onChange: onChangeXsAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('SM Column Width', 'bsx-blocks'),
      value: parseInt(sizeSm),
      onChange: onChangeSmColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('SM Equal Width', 'bsx-blocks'),
      checked: sizeSm == 'null',
      onChange: onChangeSmEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('SM Auto Width', 'bsx-blocks'),
      checked: sizeSm == 'auto',
      onChange: onChangeSmAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('MD Column Width', 'bsx-blocks'),
      value: parseInt(sizeMd),
      onChange: onChangeMdColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('MD Equal Width', 'bsx-blocks'),
      checked: sizeMd == 'null',
      onChange: onChangeMdEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('MD Auto Width', 'bsx-blocks'),
      checked: sizeMd == 'auto',
      onChange: onChangeMdAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('LG Column Width', 'bsx-blocks'),
      value: parseInt(sizeLg),
      onChange: onChangeLgColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('LG Equal Width', 'bsx-blocks'),
      checked: sizeLg == 'null',
      onChange: onChangeLgEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('LG Auto Width', 'bsx-blocks'),
      checked: sizeLg == 'auto',
      onChange: onChangeLgAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('XL Column Width', 'bsx-blocks'),
      value: parseInt(sizeXl),
      onChange: onChangeXlColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('XL Equal Width', 'bsx-blocks'),
      checked: sizeXl == 'null',
      onChange: onChangeXlEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('XL Auto Width', 'bsx-blocks'),
      checked: sizeXl == 'auto',
      onChange: onChangeXlAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginAfterSelect"])(marginAfter, onChangeMarginAfter), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Node name', 'bsx-blocks'),
      value: nodeName,
      onChange: onChangeNodeName,
      options: [{
        value: 'div',
        label: __('div', 'bsx-blocks')
      }, {
        value: 'section',
        label: __('section', 'bsx-blocks')
      }],
      help: __('Node name (please edit only if you know what you’re doing)', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["displaySelect"])(display, onChangeDisplay, ['', 'flex']))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, {
      className: colClassName,
      "data-col-type": colType
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        colType = _props$attributes2.colType,
        enableInheritanceFromRow = _props$attributes2.enableInheritanceFromRow,
        sizeXs = _props$attributes2.sizeXs,
        sizeSm = _props$attributes2.sizeSm,
        sizeMd = _props$attributes2.sizeMd,
        sizeLg = _props$attributes2.sizeLg,
        sizeXl = _props$attributes2.sizeXl,
        nodeName = _props$attributes2.nodeName,
        marginAfter = _props$attributes2.marginAfter,
        display = _props$attributes2.display;
    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl]);
    colClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      marginAfter: marginAfter,
      display: display
    }, colClassName);
    var TagName = nodeName;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, {
      className: colClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/row-with-cols/index.js":
/*!************************************!*\
  !*** ./src/row-with-cols/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _col_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./col/block.js */ "./src/row-with-cols/col/block.js");
/* harmony import */ var _row_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row/block.js */ "./src/row-with-cols/row/block.js");



/***/ }),

/***/ "./src/row-with-cols/row/block.js":
/*!****************************************!*\
  !*** ./src/row-with-cols/row/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch; // functions




var makeRowClassNames = function makeRowClassNames(attributes) {
  var alignItems = attributes.alignItems,
      justifyContent = attributes.justifyContent,
      noGutters = attributes.noGutters,
      formRow = attributes.formRow,
      rowReverse = attributes.rowReverse;
  var prefix = 'col';
  var classNames = ['row'];

  if (alignItems) {
    classNames.push('align-items-' + alignItems);
  }

  if (justifyContent) {
    classNames.push('justify-content-' + justifyContent);
  }

  if (noGutters) {
    classNames.push('no-gutters');
  }

  if (formRow) {
    classNames.push('form-row');
  }

  if (rowReverse) {
    if (rowReverse == 'xs') {
      classNames.push('flex-row-reverse');
    } else {
      classNames.push('flex-' + rowReverse + '-row-reverse');
    }
  } //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );


  return classNames.join(' ');
};

registerBlockType('bsx-blocks/row-with-cols', {
  title: __('BSX Columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('row-with-cols'),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    enableInheritanceToCols: {
      type: 'boolean',
      default: false
    },
    alignItems: {
      type: 'string'
    },
    justifyContent: {
      type: 'string'
    },
    noGutters: {
      type: 'boolean'
    },
    formRow: {
      type: 'boolean'
    },
    rowReverse: {
      type: 'string'
    },
    sizeXs: {
      type: 'string',
      default: ''
    },
    sizeSm: {
      type: 'string',
      default: ''
    },
    sizeMd: {
      type: 'string',
      default: '4'
    },
    sizeLg: {
      type: 'string',
      default: ''
    },
    sizeXl: {
      type: 'string',
      default: ''
    },
    colsNodeName: {
      type: 'string',
      default: 'div'
    },
    colsMarginAfter: {
      type: 'string',
      default: '3'
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    },
    paddingBefore: {
      type: 'string',
      default: ''
    },
    paddingAfter: {
      type: 'string',
      default: ''
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var alignItems = attributes.alignItems,
        justifyContent = attributes.justifyContent,
        noGutters = attributes.noGutters,
        formRow = attributes.formRow,
        rowReverse = attributes.rowReverse;
    return {
      'data-align-items': alignItems,
      'data-justify-content': justifyContent,
      'data-no-gutters': noGutters,
      'data-form-row': formRow,
      'data-flex-row-reverse': rowReverse
    };
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    // TODO: get only children’s config `enableInheritanceFromRow`?
    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : []; // const childrenAttributes = [];
    // children.forEach( ( column, index ) => {
    //     // childrenAttributes.push( getBlockAttributes( column.clientId ) );
    //     const currentChildAttributes = getBlockAttributes( column.clientId );
    // } );

    return {
      children: children,
      // childrenAttributes, // HAD TO BE FIXED: React doesn’t seem to like this
      getBlockAttributes: getBlockAttributes // FIX: return function instead and get attributes later

    };
  })(withDispatch(function (dispatch) {
    var _dispatch = dispatch('core/block-editor'),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    return {
      updateBlockAttributes: updateBlockAttributes
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        templateName = _props$attributes.templateName,
        enableInheritanceToCols = _props$attributes.enableInheritanceToCols,
        alignItems = _props$attributes.alignItems,
        justifyContent = _props$attributes.justifyContent,
        noGutters = _props$attributes.noGutters,
        formRow = _props$attributes.formRow,
        rowReverse = _props$attributes.rowReverse,
        sizeXs = _props$attributes.sizeXs,
        sizeSm = _props$attributes.sizeSm,
        sizeMd = _props$attributes.sizeMd,
        sizeLg = _props$attributes.sizeLg,
        sizeXl = _props$attributes.sizeXl,
        colsNodeName = _props$attributes.colsNodeName,
        colsMarginAfter = _props$attributes.colsMarginAfter,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children,
        updateBlockAttributes = props.updateBlockAttributes,
        getBlockAttributes = props.getBlockAttributes;
    var templates = [{
      name: '1-1-1',
      title: __('3 Columns (1:1:1)', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }, {
      name: '1-1',
      title: __('2 Columns (1:1)', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '6',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '6',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }, {
      name: '1-2',
      title: __('2 Columns (1:2)', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '8',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }, {
      name: '2-1',
      title: __('2 Columns (2:1)', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '8',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }, {
      name: '1-2-1',
      title: __('3 Columns (1:2:1)', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '3',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '6',
        sizeLg: '',
        sizeXl: ''
      }], ['bsx-blocks/col', {
        colType: 'default',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '3',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }, {
      name: 'custom',
      title: __('Custom', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      })),
      template: [['bsx-blocks/col', {
        colType: 'custom',
        sizeXs: '',
        sizeSm: '',
        sizeMd: '4',
        sizeLg: '',
        sizeXl: ''
      }]],
      templateLock: false
    }];

    var getColsTemplate = function getColsTemplate(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var getColsTemplateLock = function getColsTemplateLock(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.templateLock : false;
    };

    var colsTemplate = getColsTemplate(templateName);
    var colsTemplateLock = getColsTemplateLock(templateName);
    var allowedBlocks = ['bsx-blocks/col'];

    var onColsTemplateChange = function onColsTemplateChange(value) {
      colsTemplate = getColsTemplate(value);
      var colType = value == 'custom' ? 'custom' : 'default'; // console.log( 'onColsTemplateChange: "' + value + '"' );
      // console.log( 'colType: "' + colType + '"' );
      // console.log( 'value: "' + value + '"' );
      // console.log( 'colsTemplate: "' + colsTemplate + '"' );
      // console.log( 'colsTemplate.length: "' + colsTemplate.length + '"' );
      // colsTemplate.forEach( ( item, index ) => {
      //     console.log( 'item[ ' + index + ' ]: "' + item + '"' );
      //     if ( !! item ) {
      //         for ( let [ key, value ] of Object.entries( item ) ) {
      //             console.log( 'key: "' + key + '", value: "' + value + '"' );
      //         }
      //     }
      // } ); 

      if (value != 'custom') {
        // resize columns
        children.forEach(function (column, index) {
          if (colsTemplate.length > index) {
            var newAttributes = colsTemplate[index][1];
            updateBlockAttributes(column.clientId, _objectSpread({
              colType: colType
            }, newAttributes));
          }
        });
      } else {
        // change col type
        children.forEach(function (column, index) {
          var newAttributes = {
            colType: colType
          };
          updateBlockAttributes(column.clientId, newAttributes);
        });
      }

      setAttributes({
        templateName: value
      }); // console.log( 'DONE onColsTemplateChange' )
    };

    var onChangeAlignItems = function onChangeAlignItems(value) {
      setAttributes({
        alignItems: value
      });
    };

    var onChangeJustifyContent = function onChangeJustifyContent(value) {
      setAttributes({
        justifyContent: value
      });
    };

    var onChangeNoGutters = function onChangeNoGutters(value) {
      setAttributes({
        noGutters: value
      });

      if (value === true) {
        setAttributes({
          formRow: false
        });
      }
    };

    var onChangeFormRow = function onChangeFormRow(value) {
      setAttributes({
        formRow: value
      });

      if (value === true) {
        setAttributes({
          noGutters: false
        });
      }
    };

    var onChangeRowReverse = function onChangeRowReverse(value) {
      setAttributes({
        rowReverse: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangePaddingBefore = function onChangePaddingBefore(value) {
      setAttributes({
        paddingBefore: value
      });
    };

    var onChangePaddingAfter = function onChangePaddingAfter(value) {
      setAttributes({
        paddingAfter: value
      });
    };

    var onChangeEnableInheritanceToCols = function onChangeEnableInheritanceToCols(value) {
      setAttributes({
        enableInheritanceToCols: value
      });
    }; // value = { sizeXX: 'newValue' }


    var inheritToCols = function inheritToCols(value) {
      //console.log( 'inheritToCols: ' + typeof value );
      children.forEach(function (column, index) {
        //console.log( 'childrenAttributes[' + index + ' ]: "' + childrenAttributes[ index ] + '"' );
        // if ( childrenAttributes[ index ].enableInheritanceFromRow ) {
        // FIX: get attributes here
        if (getBlockAttributes(column.clientId).enableInheritanceFromRow) {
          var newAttributes = {
            sizeXs: value.sizeXs != undefined ? value.sizeXs : sizeXs,
            sizeSm: value.sizeSm != undefined ? value.sizeSm : sizeSm,
            sizeMd: value.sizeMd != undefined ? value.sizeMd : sizeMd,
            sizeLg: value.sizeLg != undefined ? value.sizeLg : sizeLg,
            sizeXl: value.sizeXl != undefined ? value.sizeXl : sizeXl,
            nodeName: value.colsNodeName != undefined ? value.colsNodeName : colsNodeName,
            marginAfter: value.colsMarginAfter != undefined ? value.colsMarginAfter : colsMarginAfter
          };
          updateBlockAttributes(column.clientId, newAttributes);
        }
      });
    }; // xs


    var onChangeXsColSize = function onChangeXsColSize(value) {
      var attr = {
        sizeXs: !!value ? value.toString() : ''
      };
      setAttributes(attr);
      inheritToCols(attr);
    };

    var onChangeXsEqualSize = function onChangeXsEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeXs: 'null'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeXs == 'null') {
          var _attr = {
            sizeXs: ''
          };
          setAttributes(_attr);
          inheritToCols(_attr);
        }
      }
    };

    var onChangeXsAutoSize = function onChangeXsAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeXs: 'auto'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeXs == 'auto') {
          var _attr2 = {
            sizeXs: ''
          };
          setAttributes(_attr2);
          inheritToCols(_attr2);
        }
      }
    }; // sm


    var onChangeSmColSize = function onChangeSmColSize(value) {
      var attr = {
        sizeSm: !!value ? value.toString() : ''
      };
      setAttributes(attr);
      inheritToCols(attr);
    };

    var onChangeSmEqualSize = function onChangeSmEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeSm: 'null'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeSm == 'null') {
          var _attr3 = {
            sizeSm: ''
          };
          setAttributes(_attr3);
          inheritToCols(_attr3);
        }
      }
    };

    var onChangeSmAutoSize = function onChangeSmAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeSm: 'auto'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeSm == 'auto') {
          var _attr4 = {
            sizeSm: ''
          };
          setAttributes(_attr4);
          inheritToCols(_attr4);
        }
      }
    }; // md


    var onChangeMdColSize = function onChangeMdColSize(value) {
      var attr = {
        sizeMd: !!value ? value.toString() : ''
      };
      setAttributes(attr);
      inheritToCols(attr);
    };

    var onChangeMdEqualSize = function onChangeMdEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeMd: 'null'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeMd == 'null') {
          var _attr5 = {
            sizeMd: ''
          };
          setAttributes(_attr5);
          inheritToCols(_attr5);
        }
      }
    };

    var onChangeMdAutoSize = function onChangeMdAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeMd: 'auto'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeMd == 'auto') {
          var _attr6 = {
            sizeMd: ''
          };
          setAttributes(_attr6);
          inheritToCols(_attr6);
        }
      }
    }; // lg


    var onChangeLgColSize = function onChangeLgColSize(value) {
      var attr = {
        sizeLg: !!value ? value.toString() : ''
      };
      setAttributes(attr);
      inheritToCols(attr);
    };

    var onChangeLgEqualSize = function onChangeLgEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeLg: 'null'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeLg == 'null') {
          var _attr7 = {
            sizeLg: ''
          };
          setAttributes(_attr7);
          inheritToCols(_attr7);
        }
      }
    };

    var onChangeLgAutoSize = function onChangeLgAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeLg: 'auto'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeLg == 'auto') {
          var _attr8 = {
            sizeLg: ''
          };
          setAttributes(_attr8);
          inheritToCols(_attr8);
        }
      }
    }; // xl


    var onChangeXlColSize = function onChangeXlColSize(value) {
      var attr = {
        sizeXl: !!value ? value.toString() : ''
      };
      setAttributes(attr);
      inheritToCols(attr);
    };

    var onChangeXlEqualSize = function onChangeXlEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeXl: 'null'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeXl == 'null') {
          var _attr9 = {
            sizeXl: ''
          };
          setAttributes(_attr9);
          inheritToCols(_attr9);
        }
      }
    };

    var onChangeXlAutoSize = function onChangeXlAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          var attr = {
            sizeXl: 'auto'
          };
          setAttributes(attr);
          inheritToCols(attr);
        } else if (sizeXl == 'auto') {
          var _attr10 = {
            sizeXl: ''
          };
          setAttributes(_attr10);
          inheritToCols(_attr10);
        }
      }
    }; // cols node name bottom


    var onChangeColsNodeName = function onChangeColsNodeName(value) {
      if (enableInheritanceToCols) {
        var attr = {
          colsNodeName: value
        };
        setAttributes(attr);
        inheritToCols(attr);
      }
    }; // cols margin bottom


    var onChangeColsMarginAfter = function onChangeColsMarginAfter(value) {
      if (enableInheritanceToCols) {
        var attr = {
          colsMarginAfter: value
        };
        setAttributes(attr);
        inheritToCols(attr);
      }
    };

    var rowClassNames = makeRowClassNames({
      alignItems: alignItems,
      justifyContent: justifyContent,
      noGutters: noGutters,
      formRow: formRow,
      rowReverse: rowReverse
    });
    rowClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, rowClassNames);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Columns Layout', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onColsTemplateChange(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Row Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Vertical Align', 'bsx-blocks'),
      value: alignItems,
      onChange: onChangeAlignItems,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'start',
        label: __('Start', 'bsx-blocks')
      }, {
        value: 'center',
        label: __('Center', 'bsx-blocks')
      }, {
        value: 'end',
        label: __('End', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Justify Content', 'bsx-blocks'),
      value: justifyContent,
      onChange: onChangeJustifyContent,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'start',
        label: __('Start', 'bsx-blocks')
      }, {
        value: 'center',
        label: __('Center', 'bsx-blocks')
      }, {
        value: 'end',
        label: __('End', 'bsx-blocks')
      }, {
        value: 'between',
        label: __('Between', 'bsx-blocks')
      }, {
        value: 'around',
        label: __('Around', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('No Gutters', 'bsx-blocks'),
      checked: !!noGutters,
      onChange: onChangeNoGutters
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Form Row', 'bsx-blocks'),
      checked: !!formRow,
      onChange: onChangeFormRow
    })), templateName === 'custom' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Inherit Columns Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Enable inheritance to Columns', 'bsx-blocks'),
      checked: !!enableInheritanceToCols,
      onChange: onChangeEnableInheritanceToCols,
      help: __('If enabled all Columns settings can be overwritten here. To protect selected Columns from beeing overwritten, disable inheritance option in respective Column settings.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('XS Column Width', 'bsx-blocks'),
      value: parseInt(sizeXs),
      onChange: onChangeXsColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      disabled: !enableInheritanceToCols,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('XS Equal Width', 'bsx-blocks'),
      checked: sizeXs == 'null',
      onChange: onChangeXsEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('XS Auto Width', 'bsx-blocks'),
      checked: sizeXs == 'auto',
      onChange: onChangeXsAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('SM Column Width', 'bsx-blocks'),
      value: parseInt(sizeSm),
      onChange: onChangeSmColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      disabled: !enableInheritanceToCols,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('SM Equal Width', 'bsx-blocks'),
      checked: sizeSm == 'null',
      onChange: onChangeSmEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('SM Auto Width', 'bsx-blocks'),
      checked: sizeSm == 'auto',
      onChange: onChangeSmAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('MD Column Width', 'bsx-blocks'),
      value: parseInt(sizeMd),
      onChange: onChangeMdColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      disabled: !enableInheritanceToCols,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('MD Equal Width', 'bsx-blocks'),
      checked: sizeMd == 'null',
      onChange: onChangeMdEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('MD Auto Width', 'bsx-blocks'),
      checked: sizeMd == 'auto',
      onChange: onChangeMdAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('LG Column Width', 'bsx-blocks'),
      value: parseInt(sizeLg),
      onChange: onChangeLgColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      disabled: !enableInheritanceToCols,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('LG Equal Width', 'bsx-blocks'),
      checked: sizeLg == 'null',
      onChange: onChangeLgEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('LG Auto Width', 'bsx-blocks'),
      checked: sizeLg == 'auto',
      onChange: onChangeLgAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('XL Column Width', 'bsx-blocks'),
      value: parseInt(sizeXl),
      onChange: onChangeXlColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
      disabled: !enableInheritanceToCols,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('XL Equal Width', 'bsx-blocks'),
      checked: sizeXl == 'null',
      onChange: onChangeXlEqualSize,
      className: "mb-0"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('XL Auto Width', 'bsx-blocks'),
      checked: sizeXl == 'auto',
      onChange: onChangeXlAutoSize
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Margin after', 'bsx-blocks'),
      value: colsMarginAfter,
      onChange: onChangeColsMarginAfter,
      options: [{
        value: '',
        label: __('– none –', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Spacer after Column (not Row)', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Node name', 'bsx-blocks'),
      value: colsNodeName,
      onChange: onChangeColsNodeName,
      options: [{
        value: 'div',
        label: __('div', 'bsx-blocks')
      }, {
        value: 'section',
        label: __('section', 'bsx-blocks')
      }],
      help: __('Column node name (please edit only if you know what you’re doing)', 'bsx-blocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Row margin (not Columns)', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Margin before', 'bsx-blocks'),
      value: marginBefore,
      onChange: onChangeMarginBefore,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '0',
        label: __('none (0)', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Spacer before Row', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Margin after', 'bsx-blocks'),
      value: marginAfter,
      onChange: onChangeMarginAfter,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '0',
        label: __('none (0)', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Spacer after Row', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Padding before', 'bsx-blocks'),
      value: paddingBefore,
      onChange: onChangePaddingBefore,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '0',
        label: __('none (0)', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Inner spacer before', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Padding after', 'bsx-blocks'),
      value: paddingAfter,
      onChange: onChangePaddingAfter,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '0',
        label: __('none (0)', 'bsx-blocks')
      }, {
        value: '1',
        label: __('extra small', 'bsx-blocks')
      }, {
        value: '2',
        label: __('small', 'bsx-blocks')
      }, {
        value: '3',
        label: __('medium', 'bsx-blocks')
      }, {
        value: '4',
        label: __('large', 'bsx-blocks')
      }, {
        value: '5',
        label: __('extra large', 'bsx-blocks')
      }],
      help: __('Inner spacer after', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Columns order reverse', 'bsx-blocks'),
      value: rowReverse,
      onChange: onChangeRowReverse,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'xs',
        label: __('XS up', 'bsx-blocks')
      }, {
        value: 'sm',
        label: __('SM up', 'bsx-blocks')
      }, {
        value: 'md',
        label: __('MD up', 'bsx-blocks')
      }, {
        value: 'lg',
        label: __('LG up', 'bsx-blocks')
      }, {
        value: 'xl',
        label: __('XL', 'bsx-blocks')
      }],
      help: __('Reverse Column order from selected size', 'bsx-blocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Columns template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onColsTemplateChange(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: rowClassNames,
      "data-template-name": templateName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: colsTemplate,
      templateLock: colsTemplateLock,
      allowedBlocks: allowedBlocks
    })))];
  })),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        enableInheritanceToCols = _props$attributes2.enableInheritanceToCols,
        alignItems = _props$attributes2.alignItems,
        justifyContent = _props$attributes2.justifyContent,
        noGutters = _props$attributes2.noGutters,
        formRow = _props$attributes2.formRow,
        rowReverse = _props$attributes2.rowReverse,
        sizeXs = _props$attributes2.sizeXs,
        sizeSm = _props$attributes2.sizeSm,
        sizeMd = _props$attributes2.sizeMd,
        sizeLg = _props$attributes2.sizeLg,
        sizeXl = _props$attributes2.sizeXl,
        colsNodeName = _props$attributes2.colsNodeName,
        colsMarginAfter = _props$attributes2.colsMarginAfter,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter;
    var rowClassNames = makeRowClassNames({
      alignItems: alignItems,
      justifyContent: justifyContent,
      noGutters: noGutters,
      formRow: formRow,
      rowReverse: rowReverse
    });
    rowClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, rowClassNames);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: rowClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/section/block.js":
/*!******************************!*\
  !*** ./src/section/block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates */ "./src/section/templates.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect;




 // data


registerBlockType('bsx-blocks/section', {
  title: __('BSX Section', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('section'),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    belowNavbar: {
      type: 'boolean',
      default: false
    },
    touchFooter: {
      type: 'boolean',
      default: false
    },
    id: {
      type: 'string',
      default: ''
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    },
    bgColor: {
      type: 'string'
    },
    paddingBefore: {
      type: 'string'
    },
    paddingAfter: {
      type: 'string'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    return {
      children: children
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        templateName = _props$attributes.templateName,
        belowNavbar = _props$attributes.belowNavbar,
        touchFooter = _props$attributes.touchFooter,
        id = _props$attributes.id,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        bgColor = _props$attributes.bgColor,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var template = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_8__["default"], templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getTemplate"])(_templates__WEBPACK_IMPORTED_MODULE_8__["default"], value);

      if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
        template = currentTemplateMap.template;
        setAttributes(_objectSpread({
          templateName: value
        }, currentTemplateMap.attributes));
      } else {
        console.log('Error: Template change failed.');
      } // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );

    };

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
      });
    };

    var onChangeTouchFooter = function onChangeTouchFooter(value) {
      setAttributes({
        touchFooter: value
      });
    };

    var onChangeId = function onChangeId(value) {
      setAttributes({
        id: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeBgColor = function onChangeBgColor(value) {
      setAttributes({
        bgColor: value
      });
    };

    var onChangePaddingBefore = function onChangePaddingBefore(value) {
      setAttributes({
        paddingBefore: value
      });
    };

    var onChangePaddingAfter = function onChangePaddingAfter(value) {
      setAttributes({
        paddingAfter: value
      });
    }; // class name


    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      bgColor: bgColor,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Section Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('ID', 'bsx-blocks'),
      value: id,
      onChange: onChangeId
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["touchFooterToggle"])(touchFooter, onChangeTouchFooter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["bgColorSelect"])(bgColor, onChangeBgColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: containerClassName,
      id: id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        belowNavbar = _props$attributes2.belowNavbar,
        touchFooter = _props$attributes2.touchFooter,
        id = _props$attributes2.id,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        bgColor = _props$attributes2.bgColor,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter;
    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      bgColor: bgColor,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    });
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      id: id
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: containerClassName
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/section/templates.js":
/*!**********************************!*\
  !*** ./src/section/templates.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData; // functions


var templates = [{
  name: 'empty',
  title: __('Empty', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('section-empty'),
  attributes: {
    marginAfter: '5'
  },
  template: [],
  templateLock: false
}, {
  name: 'container-with-heading',
  title: __('Container with Heading', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('section-container-heading'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]]],
  templateLock: false
}, {
  name: 'container-heading-text-gallery',
  title: __('Container, Heading, Text & Gallery', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('section-container-heading-text-gallery'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }], ['core/paragraph', {
    placeholder: __('Add text...', 'bsx-blocks')
  }], ['bsx-blocks/img-gallery', {
    galleryType: 'floating',
    rounded: true,
    imgThumbnail: true,
    borderState: 'info'
  }]]]],
  templateLock: false
}, {
  name: 'rounded-color-banner',
  title: __('Rounded colored Banner (primary dark)', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('section-container-rounded-colored-banner'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    bgColor: 'primary',
    textColor: 'dark',
    textAlign: 'center',
    rounded: true,
    paddingBefore: '4',
    paddingAfter: '4',
    paddingLeft: '3',
    paddingRight: '3'
  }, [['core/heading', {
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks'),
    textColor: 'dark',
    marginAfter: '3'
  }], ['core/paragraph', {
    placeholder: __('Add text...', 'bsx-blocks'),
    textSize: 'lead'
  }], ['bsx-blocks/buttons', {
    templateName: 'one-button'
  }, [['bsx-blocks/button', {
    state: 'dark',
    marginBefore: '1',
    marginAfter: '1',
    marginLeft: '1',
    marginRight: '1'
  }, []]]]]]]]],
  templateLock: false
}, {
  name: 'img-badge-heading-text-button-columns',
  title: __('Image Badge Heading Button Columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('img-badge-heading-text-button-columns'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/row-with-cols', {
    templateName: '1-2',
    alignItems: 'center',
    justifyContent: 'center'
  }, [['bsx-blocks/col', {
    colType: 'default',
    sizeXs: '8',
    sizeMd: '5',
    sizeLg: '6'
  }, [['bsx-blocks/row-with-cols', {
    templateName: '1-1',
    justifyContent: 'center'
  }, [['bsx-blocks/col', {
    colType: 'default',
    sizeXs: '12',
    sizeLg: '10',
    marginAfter: ''
  }, [['bsx-blocks/lazy-img', {
    rounded: 'circle',
    marginAfter: ''
  }]]]]]]], ['bsx-blocks/col', {
    colType: 'default',
    sizeMd: '7',
    sizeLg: '6'
  }, [['bsx-blocks/wrapper', {
    textSize: 'lead',
    marginAfter: '2'
  }, [['bsx-blocks/badge', {
    state: 'secondary'
  }]]], ['core/heading', {}], ['core/paragraph', {}], ['bsx-blocks/buttons', {
    templateName: 'one-button'
  }, [['bsx-blocks/button', {
    state: 'primary',
    stateType: '',
    size: 'lg'
  }, []]]]]]]]]]],
  templateLock: false
}, {
  name: 'badge-heading-text-button-img-columns',
  title: __('Badge Heading Button Image Columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('badge-heading-text-button-img-columns'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/row-with-cols', {
    templateName: '1-2',
    alignItems: 'center',
    justifyContent: 'center',
    rowReverse: 'md'
  }, [['bsx-blocks/col', {
    colType: 'default',
    sizeXs: '8',
    sizeMd: '5',
    sizeLg: '6'
  }, [['bsx-blocks/row-with-cols', {
    templateName: '1-1',
    justifyContent: 'center'
  }, [['bsx-blocks/col', {
    colType: 'default',
    sizeXs: '12',
    sizeLg: '10',
    marginAfter: ''
  }, [['bsx-blocks/lazy-img', {
    rounded: 'circle',
    marginAfter: ''
  }]]]]]]], ['bsx-blocks/col', {
    colType: 'default',
    sizeMd: '7',
    sizeLg: '6'
  }, [['bsx-blocks/wrapper', {
    textSize: 'lead',
    marginAfter: '2'
  }, [['bsx-blocks/badge', {
    state: 'secondary'
  }]]], ['core/heading', {}], ['core/paragraph', {}], ['bsx-blocks/buttons', {
    templateName: 'one-button'
  }, [['bsx-blocks/button', {
    state: 'primary',
    stateType: '',
    size: 'lg'
  }, []]]]]]]]]]],
  templateLock: false
}, {
  name: 'heading-list-columns',
  title: __('Heading List Columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('heading-list-columns'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    paddingBefore: '4',
    marginAfter: '5',
    textAlign: 'center'
  }, [['core/heading', {
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/row-with-cols', {
    templateName: '1-1-1'
  }, [['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    border: 'bottom',
    marginAfter: '3'
  }, [['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/check-list', {}]]], ['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    border: 'bottom',
    marginAfter: '3'
  }, [['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/check-list', {}]]], ['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    border: 'bottom',
    marginAfter: '3'
  }, [['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/check-list', {}]]]]]]]],
  templateLock: false
}, {
  name: 'bg-heading-icon-heading-text-columns',
  title: __('Background Heading Icon Heading Text Columns', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_0__["svgIcon"])('bg-heading-icon-heading-text-columns'),
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/wrapper', {
    bgColor: 'light',
    paddingBefore: '5',
    paddingAfter: '4'
  }, [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    marginBefore: '3',
    marginAfter: '5',
    textAlign: 'center'
  }, [['core/heading', {
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/row-with-cols', {
    templateName: '1-1-1'
  }, [['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    textAlign: 'center',
    marginAfter: '3'
  }, [['bsx-blocks/icon', {
    iconKey: 'heart',
    iconSize: '5x',
    marginAfter: '2'
  }], ['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['core/paragraph', {}]]], ['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    textAlign: 'center',
    marginAfter: '3'
  }, [['bsx-blocks/icon', {
    iconKey: 'heart',
    iconSize: '5x',
    marginAfter: '2'
  }], ['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['core/paragraph', {}]]], ['bsx-blocks/col', {
    colType: 'default'
  }, [['bsx-blocks/wrapper', {
    textAlign: 'center',
    marginAfter: '3'
  }, [['bsx-blocks/icon', {
    iconKey: 'heart',
    iconSize: '5x',
    marginAfter: '2'
  }], ['core/heading', {
    level: '3',
    placeholder: __('Add heading, configure heading level...', 'bsx-blocks')
  }]]], ['core/paragraph', {}]]]]]]]]]],
  templateLock: false
}];
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/slider/block.js":
/*!*****************************!*\
  !*** ./src/slider/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");


// TODO: get caption or more data from html? (thumb data will not be available from noscript)
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path; // functions imports






var makeClassName = function makeClassName(attributes) {
  var sliderType = attributes.sliderType;
  var classNames = ['bsx-slider-wrapper'];

  if (!!sliderType) {
    if (sliderType == 'citation') {
      classNames.push('bsx-citation-slider');
    }
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/slider', {
  title: __('BSX Slider', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('slider'),
  category: 'layout',
  attributes: {
    sliderType: {
      type: 'string',
      default: 'citation'
    },
    // imgList: { // TODO: maybe do later?
    //     type: 'array',
    //     default: [],
    // },
    imgSize: {
      type: 'string'
    },
    itemData: {
      type: 'array',
      source: 'query',
      selector: '.item',
      query: {
        imgId: {
          type: 'number',
          source: 'attribute',
          selector: 'figure',
          attribute: 'data-id'
        },
        imgUrl: {
          type: 'string',
          source: 'attribute',
          selector: 'figure',
          attribute: 'data-url'
        },
        imgWidth: {
          type: 'string',
          source: 'attribute',
          selector: 'figure',
          attribute: 'data-width'
        },
        imgHeight: {
          type: 'string',
          source: 'attribute',
          selector: 'figure',
          attribute: 'data-height'
        },
        imgAlt: {
          type: 'string',
          source: 'attribute',
          selector: 'figure',
          attribute: 'data-alt'
        },
        heading: {
          type: 'array',
          source: 'children',
          selector: '[data-slide-heading]'
        },
        subline: {
          type: 'array',
          source: 'children',
          selector: '[data-slide-subline]'
        },
        text: {
          type: 'array',
          source: 'children',
          selector: '[data-slide-text]'
        },
        footerText_1: {
          type: 'array',
          source: 'children',
          selector: '[data-slide-footer-1]'
        },
        footerText_2: {
          type: 'array',
          source: 'children',
          selector: '[data-slide-footer-2]'
        },
        url: {
          type: 'string',
          selector: 'a',
          source: 'attribute',
          attribute: 'href'
        },
        target: {
          type: 'string',
          selector: 'a',
          source: 'attribute',
          attribute: 'target'
        },
        rel: {
          type: 'string',
          selector: 'a',
          source: 'attribute',
          attribute: 'rel'
        } // size: {
        //     type: 'string',
        //     selector: 'a',
        //     source: 'attribute',
        //     attribute: 'data-size',
        // },

      },
      default: []
    },
    hint: {
      type: 'string'
    },
    prevText: {
      type: 'string'
    },
    nextText: {
      type: 'string'
    },
    rounded: {
      type: 'string',
      default: 'circle'
    },
    imgThumbnail: {
      type: 'boolean'
    },
    bgColor: {
      type: 'string'
    },
    borderState: {
      type: 'string'
    },
    marginBefore: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        sliderType = _props$attributes.sliderType,
        imgSize = _props$attributes.imgSize,
        itemData = _props$attributes.itemData,
        hint = _props$attributes.hint,
        prevText = _props$attributes.prevText,
        nextText = _props$attributes.nextText,
        rounded = _props$attributes.rounded,
        imgThumbnail = _props$attributes.imgThumbnail,
        borderState = _props$attributes.borderState,
        bgColor = _props$attributes.bgColor,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected; // TEST – TODO: remove
    // console.log( 'typeof itemData: ' + typeof itemData );
    // itemData.forEach( ( item, index ) => {
    //     console.log( index + ' : ' + item );
    //     for ( let [ key, value ] of Object.entries( item ) ) {
    //         // const printValue = ( value ) => {
    //         //     let returnString = '';
    //         //     if ( Array.isArray( value ) ) {
    //         //         value.forEach( ( item, index ) => {
    //         //             returnString += index + ': ' + item + ', ';
    //         //         } );
    //         //     }
    //         //     else {
    //         //         returnString = value;
    //         //     }
    //         //     return returnString;
    //         // }
    //         console.log( '----- key: "' + key + '", val: "' + value + '"' );
    //     }
    // } );
    // initial overwrites

    itemData.forEach(function (item, index) {
      if (item.subline === '&nbsp;') {
        item.subline = '';
      }
    }); // update itemData all `item` at position `index`

    var updateItemDataItem = function updateItemDataItem(index, newItem) {
      var newItemData = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(0, index)), [newItem], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(index + 1)));
      setAttributes({
        itemData: newItemData
      });
    }; // update itemData single `value` for `key` at position `index`


    var updateItemDataValue = function updateItemDataValue(index, key, value) {
      var newItem = itemData[index];
      newItem[key] = value;
      updateItemDataItem(index, newItem);
    }; // // update imgList all `item` at position `index`
    // const updateImgListItem = ( index, newItem ) => {
    //     const newImgList = [
    //         ...imgList.slice( 0, index ),
    //         newItem,
    //         ...imgList.slice( index + 1 )
    //     ];
    //     setAttributes( { imgList: newImgList } );
    // }
    // // update imgList single `value` for `key` at position `index`
    // const updateImgListValue = ( index, key, value ) => {
    //     let newItem = imgList[ index ];
    //     newItem[ key ] = value;
    //     updateImgListItem( index, newItem );
    // }


    var onChangeSliderType = function onChangeSliderType(value) {
      if (value === 'product-gallery') {
        setAttributes({
          sliderType: value,
          rounded: ''
        });
      } else {
        setAttributes({
          sliderType: value
        });
      }
    };

    var onChangeImgSize = function onChangeImgSize(value) {
      setAttributes({
        imgSize: value
      }); // TODO: change all img urls & sizes

      itemData.forEach(function (item, index) {
        console.log('imgId: ' + item.imgId);
      });
    };

    var onChangeImg = function onChangeImg(index, img) {
      // TODO: make img url configurable
      var newImg = {};

      if (sliderType === 'product-gallery') {
        newImg.url = img.sizes.medium.url;
        newImg.width = img.sizes.medium.width;
        newImg.height = img.sizes.medium.height;
      } else {
        newImg.url = img.sizes.thumbnail.url;
        newImg.width = img.sizes.thumbnail.width;
        newImg.height = img.sizes.thumbnail.height;
      }

      updateItemDataItem(index, {
        imgId: img.id,
        imgUrl: newImg.url,
        imgWidth: newImg.width,
        imgHeight: newImg.height,
        imgAlt: img.alt,
        heading: itemData[index].heading,
        subline: itemData[index].subline,
        text: itemData[index].text,
        footerText_1: itemData[index].footerText_1,
        footerText_2: itemData[index].footerText_2
      }); // updateImgListItem( index, { 
      //     imgId: img.id,
      //     imgUrl: img.sizes.thumbnail.url,
      //     imgWidth: img.sizes.thumbnail.width,
      //     imgHeight: img.sizes.thumbnail.height,
      //     imgAlt: img.alt,
      // } );
    };

    var onChangeAlt = function onChangeAlt(index, value) {
      updateItemDataValue(index, 'imgAlt', value); // updateImgListValue( index, 'imgAlt', value );
    };

    var onChangeText = function onChangeText(index, value) {
      updateItemDataValue(index, 'text', value);
    };

    var onChangeHeading = function onChangeHeading(index, value) {
      updateItemDataValue(index, 'heading', value);
    };

    var onChangeSubline = function onChangeSubline(index, value) {
      updateItemDataValue(index, 'subline', value);
    };

    var onChangeFooterText_1 = function onChangeFooterText_1(index, value) {
      updateItemDataValue(index, 'footerText_1', value);
    };

    var onChangeFooterText_2 = function onChangeFooterText_2(index, value) {
      updateItemDataValue(index, 'footerText_2', value);
    };

    var onChangeUrl = function onChangeUrl(index, value) {
      updateItemDataValue(index, 'url', value);
    };

    var onChangeTarget = function onChangeTarget(index, value) {
      updateItemDataValue(index, 'target', value);
    };

    var onChangeRel = function onChangeRel(index, value) {
      updateItemDataValue(index, 'rel', value);
    };

    var onChangeBgColor = function onChangeBgColor(value) {
      setAttributes({
        bgColor: value
      });
    };

    var onAddItem = function onAddItem() {
      setAttributes({
        itemData: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData), [{}])
      });
    };

    var deleteItemDataItem = function deleteItemDataItem(index) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(index + 1)));
      setAttributes({
        itemData: newMediaList
      });
    };

    var itemDataItemMoveTo = function itemDataItemMoveTo(index, newIndex) {
      var newMediaList = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(itemData.slice(index + 1)));
      var newMediaList2 = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newMediaList.slice(0, newIndex)), [itemData[index]], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newMediaList.slice(newIndex)));
      setAttributes({
        itemData: newMediaList2
      });
    };

    var onClickDelete = function onClickDelete(index) {
      var response = confirm(__('Delete item') + ' ' + (index + 1) + '?');

      if (response == true) {
        deleteItemDataItem(index);
      } else {// do nothing
      }
    };

    var onClickMoveUp = function onClickMoveUp(index) {
      var newIndex = index > 0 ? index - 1 : itemData.length - 1;
      itemDataItemMoveTo(index, newIndex);
    };

    var onClickMoveDown = function onClickMoveDown(index) {
      var newIndex = index < itemData.length - 1 ? index + 1 : 0;
      itemDataItemMoveTo(index, newIndex);
    };

    var onChangeHint = function onChangeHint(value) {
      setAttributes({
        hint: value
      });
    };

    var onChangePrevText = function onChangePrevText(value) {
      setAttributes({
        prevText: value
      });
    };

    var onChangeNextText = function onChangeNextText(value) {
      setAttributes({
        nextText: value
      });
    };

    var onChangeRounded = function onChangeRounded(value) {
      setAttributes({
        rounded: value
      });
    };

    var onChangeImgThumbnail = function onChangeImgThumbnail(value) {
      setAttributes({
        imgThumbnail: value
      });
    };

    var onChangeBorderState = function onChangeBorderState(value) {
      setAttributes({
        borderState: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    }; // class names


    var sliderWrapperClassName = makeClassName({
      sliderType: sliderType
    });
    sliderWrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, sliderWrapperClassName);
    var sliderClassName = 'owl-carousel owl-theme';
    var imgClassName = 'owl-lazy img-fluid';
    imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, imgClassName); // must contain .item to get attributes from html

    var itemClassName = sliderType === 'citation' ? 'item d-block text-center' : 'item px-3 py-2 text-center' + (typeof bgColor !== 'undefined' && !!bgColor ? ' bg-' + bgColor : ''); // const textClassName = 'h4 font-weight-normal font-italic mb-4';
    // const headingClassName = 'test-1';
    // const sublineClassName = 'test-2';
    // const footer1ClassName = 'font-weight-bold text-uppercase';
    // const footer2ClassName = '';

    var textClassName = 'h4 font-weight-normal font-italic mb-4';
    var headingClassName = 'h4 text-center';
    var sublineClassName = 'small text-center mb-2';
    var footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
    var footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
    var hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';
    var TagName = 'div';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Slider settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Slider type', 'bsx-blocks'),
      value: sliderType,
      onChange: onChangeSliderType,
      options: [{
        value: 'citation',
        label: __('Citation', 'bsx-blocks')
      }, {
        value: 'product-gallery',
        label: __('Product Gallery', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Hint', 'bsx-blocks'),
      value: hint,
      onChange: onChangeHint
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Prev button text', 'bsx-blocks'),
      value: prevText,
      onChange: onChangePrevText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Next button text', 'bsx-blocks'),
      value: nextText,
      onChange: onChangeNextText
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["bgColorSelect"])(bgColor, onChangeBgColor)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Image appearance', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Rounded', 'bsx-blocks'),
      checked: !!rounded ? 'circle' : '',
      onChange: onChangeRounded
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Border', 'bsx-blocks'),
      checked: !!imgThumbnail,
      onChange: onChangeImgThumbnail
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["borderStateSelect"])(borderState, onChangeBorderState), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Image size', 'bsx-blocks'),
      value: imgSize,
      onChange: onChangeImgSize,
      options: [{
        value: 'thumbnail',
        label: __('Thumbnail (square format)', 'bsx-blocks')
      }, {
        value: 'medium',
        label: __('Medium', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: sliderWrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, itemData.map(function (item, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, sliderType === 'citation' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col-4 col-sm-3 col-lg-2 mx-auto"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        key: index,
        onSelect: function onSelect(value) {
          return onChangeImg(index, value);
        },
        allowedTypes: "image",
        value: item.imgId,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, item.imgUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle",
            onClick: open
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            className: imgClassName,
            src: item.imgUrl,
            alt: __('Change/upload Image', 'bsx-blocks')
          })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "button button-large bsxui-w-100",
            onClick: open
          }, __('Add Image', 'bsx-blocks')));
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-inline-control"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Alt text', 'bsx-blocks'),
        value: item.imgAlt,
        onChange: function onChange(value) {
          onChangeAlt(index, value);
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "px-3 px-md-5"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: textClassName,
        multiline: false,
        placeholder: __('Insert text here...', 'bsx-blocks'),
        value: item.text,
        onChange: function onChange(value) {
          onChangeText(index, value);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: footer1ClassName,
        multiline: false,
        placeholder: __('Insert footer text 1 here...', 'bsx-blocks'),
        value: item.footerText_1,
        onChange: function onChange(value) {
          onChangeFooterText_1(index, value);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: footer2ClassName,
        multiline: false,
        placeholder: __('Insert footer text 2 here...', 'bsx-blocks'),
        value: item.footerText_2,
        onChange: function onChange(value) {
          onChangeFooterText_2(index, value);
        }
      }))), sliderType === 'product-gallery' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-owl-slide-1-2-3-4 p-2"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: ""
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        key: index,
        onSelect: function onSelect(value) {
          return onChangeImg(index, value);
        },
        allowedTypes: "image",
        value: item.imgId,
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, item.imgUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle",
            onClick: open
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            className: imgClassName,
            src: item.imgUrl,
            alt: __('Change/upload Image', 'bsx-blocks')
          })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "button button-large bsxui-w-100",
            onClick: open
          }, __('Add Image', 'bsx-blocks')));
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-inline-control"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Alt text', 'bsx-blocks'),
        value: item.imgAlt,
        onChange: function onChange(value) {
          onChangeAlt(index, value);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "px-3"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: headingClassName,
        multiline: false,
        placeholder: __('Add heading here...', 'bsx-blocks'),
        value: item.heading,
        onChange: function onChange(value) {
          onChangeHeading(index, value);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: sublineClassName,
        multiline: false,
        placeholder: __('Add subline here...', 'bsx-blocks'),
        value: item.subline,
        onChange: function onChange(value) {
          onChangeSubline(index, value);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "row no-gutters align-items-end"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col-auto"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: footer1ClassName,
        multiline: false,
        placeholder: __('Original price...', 'bsx-blocks'),
        value: item.footerText_1,
        onChange: function onChange(value) {
          onChangeFooterText_1(index, value);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col text-right"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("small", {
        class: hintClassName
      }, hint), "\xA0", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        className: footer2ClassName + ' bsxui-inline-editor',
        multiline: false,
        placeholder: __('Current price...', 'bsx-blocks'),
        value: item.footerText_2,
        onChange: function onChange(value) {
          onChangeFooterText_2(index, value);
        }
      }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "bsxui-inline-control bsxui-mb-3"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "bsxui-d-flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button",
        onClick: function onClick() {
          onClickMoveUp(index);
        },
        label: __('Move backward', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('carret-left')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button",
        onClick: function onClick() {
          onClickMoveDown(index);
        },
        label: __('Move forward', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('carret-right')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto",
        onClick: function onClick() {
          onClickDelete(index);
        },
        label: __('Remove Item', 'bsx-blocks')
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('trash'))))));
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      className: "button button-large bsxui-w-100",
      onClick: onAddItem
    }, __('Add item', 'bsx-blocks'))))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        sliderType = _props$attributes2.sliderType,
        imgSize = _props$attributes2.imgSize,
        itemData = _props$attributes2.itemData,
        hint = _props$attributes2.hint,
        prevText = _props$attributes2.prevText,
        nextText = _props$attributes2.nextText,
        rounded = _props$attributes2.rounded,
        imgThumbnail = _props$attributes2.imgThumbnail,
        borderState = _props$attributes2.borderState,
        bgColor = _props$attributes2.bgColor,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter; // class names

    var sliderWrapperClassName = makeClassName({
      sliderType: sliderType
    });
    sliderWrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, sliderWrapperClassName);
    var sliderClassName = 'owl-carousel owl-theme outer-nav nav-lg' + (sliderType === 'citation' ? ' bsx-slider-fadeout' : '');
    var imgClassName = 'img-fluid' + (sliderType === 'product-gallery' ? ' owl-lazy' : '');
    imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, imgClassName); // must contain .item to get attributes from html

    var itemClassName = sliderType === 'citation' ? 'item d-block text-center' : 'item d-block px-3 py-2 text-center' + (typeof bgColor !== 'undefined' && !!bgColor ? ' bg-' + bgColor : '');
    var textClassName = 'h4 font-weight-normal font-italic mb-4';
    var headingClassName = 'h4 text-center';
    var sublineClassName = 'small text-center mb-2';
    var footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
    var footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
    var hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';
    var TagName = 'div';
    var prevLabel = !!prevText ? prevText : __('Prev', 'bsx-blocks');
    var nextLabel = !!nextText ? nextText : __('Next', 'bsx-blocks');
    var prevHtml = '<i class="fa fa-chevron-left" aria-label="' + prevLabel + '"></i>';
    var nextHtml = '<i class="fa fa-chevron-right" aria-label="' + nextLabel + '"></i>'; // if lazyLoad: true use data-src="..." data-g-fn="lazyload"
    // if lazyLoad: false, multiLazyload: true use class="... owl-lazy" data-g-src="..." loading="lazy"

    var options = sliderType === 'citation' ? "{ lazyLoad: false, multiLazyload: true, responsive: { 0: { items: 1 } }, margin: 0, encodeUriNavText: [ '" + encodeURI(prevHtml) + "', '" + encodeURI(nextHtml) + "' ], navClass: [ 'btn btn-link is-prev', 'btn btn-link is-next' ] }" : "{ lazyLoad: true, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }, encodeUriNavText: [ '" + encodeURI(prevHtml) + "', '" + encodeURI(nextHtml) + "' ], navClass: [ 'btn btn-primary is-prev', 'btn btn-primary is-next' ], navSpeed: 300, autoplaySpeed: 400, dotsSpeed: 400, smartSpeed: 300, fluidSpeed: 400, dragEndSpeed: 200 }"; // makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight )

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: sliderWrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: sliderClassName,
      "data-fn": "owl-carousel",
      "data-fn-options": options
    }, itemData.map(function (item, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
      }, sliderType === 'citation' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col-4 col-sm-3 col-lg-2 mx-auto"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        "data-id": item.imgId,
        "data-url": item.imgUrl,
        "data-width": item.imgWidth,
        "data-height": item.imgHeight,
        "data-alt": item.imgAlt
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_2__["makeBase64PreloadImgSrc"])(item.imgWidth, item.imgHeight),
        alt: item.imgAlt,
        width: item.imgWidth,
        height: item.imgHeight,
        "data-g-src": item.imgUrl,
        "data-g-fn": "lazyload"
      }), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: item.imgUrl,
        alt: item.imgAlt,
        width: item.imgWidth,
        height: item.imgHeight
      }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "px-3 px-md-5"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "div",
        className: textClassName,
        "data-slide-text": true,
        value: item.text
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "div",
        className: footer1ClassName,
        "data-slide-footer-1": true,
        value: item.footerText_1
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "div",
        className: footer2ClassName,
        "data-slide-footer-2": true,
        value: item.footerText_2
      }))), sliderType === 'product-gallery' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: ""
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        "data-id": item.imgId,
        "data-url": item.imgUrl,
        "data-width": item.imgWidth,
        "data-height": item.imgHeight,
        "data-alt": item.imgAlt
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_2__["makeBase64PreloadImgSrc"])(item.imgWidth, item.imgHeight),
        alt: item.imgAlt,
        width: item.imgWidth,
        height: item.imgHeight,
        "data-src": item.imgUrl,
        loading: "lazy"
      }), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: imgClassName,
        src: item.imgUrl,
        alt: item.imgAlt,
        width: item.imgWidth,
        height: item.imgHeight
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: ""
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "div",
        className: headingClassName,
        "data-slide-heading": true,
        value: item.heading
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "div",
        className: sublineClassName,
        "data-slide-subline": true,
        value: item.subline == '' ? '&nbsp;' : item.subline
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "row no-gutters align-items-end"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col-auto"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "strike",
        className: footer1ClassName,
        "data-slide-footer-1": true,
        value: item.footerText_1
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col text-right"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("small", {
        class: hintClassName
      }, hint), "\xA0", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "strong",
        className: footer2ClassName,
        "data-slide-footer-2": true,
        value: item.footerText_2
      }))))));
    })));
  }
});

/***/ }),

/***/ "./src/text-elements/badge/block.js":
/*!******************************************!*\
  !*** ./src/text-elements/badge/block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");


var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    SelectControl = _wp$components.SelectControl; // functions imports




 // functions

var makeBadgeClassNames = function makeBadgeClassNames(attributes, className) {
  var state = attributes.state,
      badgeType = attributes.badgeType;
  var classNames = ['badge'];

  if (!!state) {
    classNames.push('badge-' + state);
  }

  if (!!badgeType) {
    classNames.push('badge-' + badgeType);
  }

  if (!!className) {
    classNames.push(className);
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/badge', {
  title: __('BSX Badge', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('badge'),
  category: 'layout',
  attributes: {
    href: {
      type: 'string',
      default: ''
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.badge-content'
    },
    state: {
      type: 'string',
      default: 'primary'
    },
    badgeType: {
      type: 'string'
    },
    marginLeft: {
      type: 'string'
    },
    marginRight: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    bgColor: {
      type: 'string'
    },
    iconKey: {
      type: 'string'
    },
    iconFamily: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        href = _props$attributes.href,
        content = _props$attributes.content,
        state = _props$attributes.state,
        badgeType = _props$attributes.badgeType,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        textColor = _props$attributes.textColor,
        bgColor = _props$attributes.bgColor,
        iconKey = _props$attributes.iconKey,
        iconFamily = _props$attributes.iconFamily,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      setAttributes({
        href: value
      });
    }; // const onChangeTarget = ( value ) => {
    //     setAttributes( { target: !! value ? '_blank' : '' } );
    // };
    // const onChangeRel = ( value ) => {
    //     setAttributes( { rel: value } );
    // };


    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeBadgeType = function onChangeBadgeType(value) {
      setAttributes({
        badgeType: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeTextColor = function onChangeTextColor(value) {
      setAttributes({
        textColor: value
      });
    };

    var onChangeBgColor = function onChangeBgColor(value) {
      setAttributes({
        bgColor: value
      });
    };

    var onChangeIconKey = function onChangeIconKey(value) {
      setAttributes({
        iconKey: value
      });
    };

    var onChangeIconFamily = function onChangeIconFamily(value) {
      setAttributes({
        iconFamily: value
      });
    };

    var badgeClassNames = makeBadgeClassNames({
      state: state,
      badgeType: badgeType
    }, className);
    badgeClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      textColor: textColor,
      bgColor: bgColor
    }, badgeClassNames);

    if (!iconKey) {
      badgeClassNames += ' badge-content';
    }

    var TagName = href ? 'a' : 'span';
    var iconFamilyClassName = !!iconFamily ? 'fa' + iconFamily : 'fa';
    var iconClassNames = iconFamilyClassName + ' ' + (iconKey ? 'fa-' + iconKey : '') + ' pr-1';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Settings', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["linkUrlInput"])(href, onChangeHref)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["stateSelect"])(state, onChangeState), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Type', 'bsx-blocks'),
      value: badgeType,
      onChange: onChangeBadgeType,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'pill',
        label: __('Pill', 'bsx-blocks')
      }]
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["textColorSelect"])(textColor, onChangeTextColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["bgColorSelect"])(bgColor, onChangeBgColor)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Icon', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["iconKeyInput"])(iconKey, onChangeIconKey), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["iconFamilySelect"])(iconFamily, onChangeIconFamily)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginLeftSelect"])(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginRightSelect"])(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, iconKey ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: badgeClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: iconClassNames,
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: 'span',
      multiline: false,
      placeholder: __('Add Text...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true,
      href: 'javascript:void( 0 );'
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: TagName,
      className: badgeClassNames,
      multiline: false,
      placeholder: __('Add Text...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true,
      href: 'javascript:void( 0 );'
    })))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        href = _props$attributes2.href,
        content = _props$attributes2.content,
        state = _props$attributes2.state,
        badgeType = _props$attributes2.badgeType,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        textColor = _props$attributes2.textColor,
        bgColor = _props$attributes2.bgColor,
        iconKey = _props$attributes2.iconKey,
        iconFamily = _props$attributes2.iconFamily;
    var badgeClassNames = makeBadgeClassNames({
      state: state,
      badgeType: badgeType
    }, className);
    badgeClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      textColor: textColor,
      bgColor: bgColor
    }, badgeClassNames);

    if (!iconKey) {
      badgeClassNames += ' badge-content';
    }

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: href // target: target, 
      // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',

    });
    var TagName = href ? 'a' : 'span';
    var iconFamilyClassName = !!iconFamily ? 'fa' + iconFamily : 'fa';
    var iconClassNames = iconFamilyClassName + ' ' + (iconKey ? 'fa-' + iconKey : '') + ' pr-1';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, iconKey ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: badgeClassNames
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: iconClassNames,
      "aria-hidden": "true"
    }), content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'span',
      value: content,
      className: 'badge-content'
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tagName: TagName,
      value: content,
      className: badgeClassNames
    }, saveAttributes))));
  }
});

/***/ }),

/***/ "./src/text-elements/check-list/block.js":
/*!***********************************************!*\
  !*** ./src/text-elements/check-list/block.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    SelectControl = _wp$components.SelectControl; // functions imports




 // functions

registerBlockType('bsx-blocks/check-list', {
  title: __('BSX Check List', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('check-list'),
  category: 'layout',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: '.checklist'
    },
    state: {
      type: 'string',
      default: 'primary'
    },
    marginLeft: {
      type: 'string'
    },
    marginRight: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    display: {
      type: 'string'
    },
    textAlign: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        content = _props$attributes.content,
        state = _props$attributes.state,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        display = _props$attributes.display,
        textAlign = _props$attributes.textAlign,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var checklistClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      display: display,
      textAlign: textAlign
    }, !!className ? 'checklist ' + className : 'checklist');
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["stateSelect"])(state, onChangeState), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["displaySelect"])(display, onChangeDisplay)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginLeftSelect"])(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginRightSelect"])(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "ul",
      multiline: "li",
      placeholder: __('Add list items...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      className: checklistClassNames
    })];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        content = _props$attributes2.content,
        state = _props$attributes2.state,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        display = _props$attributes2.display,
        textAlign = _props$attributes2.textAlign;
    var checklistClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      display: display,
      textAlign: textAlign
    }, !!className ? 'checklist ' + className : 'checklist');
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "ul",
      value: content,
      className: checklistClassNames
    }));
  }
});

/***/ }),

/***/ "./src/text-elements/icon/block.js":
/*!*****************************************!*\
  !*** ./src/text-elements/icon/block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");


// TODO: add title (to be used if link)
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl; // functions imports




 // functions

var makeIconClassNames = function makeIconClassNames(attributes) {
  var state = attributes.state,
      hoverState = attributes.hoverState,
      iconSize = attributes.iconSize;
  var classNames = [];

  if (!!hoverState) {
    classNames.push('hover-text-' + hoverState);
  }

  if (!!state) {
    classNames.push('text-' + state);
  } // if ( !! iconType ) {
  //     classNames.push( 'fa-' + iconType );
  // }


  if (!!iconSize) {
    classNames.push('fa-' + iconSize);
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/icon', {
  title: __('BSX Icon', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('icon'),
  category: 'layout',
  attributes: {
    iconKey: {
      type: 'string',
      default: 'heart'
    },
    iconFamily: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    state: {
      type: 'string',
      default: 'primary'
    },
    hoverState: {
      type: 'string'
    },
    iconType: {
      type: 'string'
    },
    iconSize: {
      type: 'string'
    },
    marginLeft: {
      type: 'string'
    },
    marginRight: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    verticalAlign: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        iconKey = _props$attributes.iconKey,
        iconFamily = _props$attributes.iconFamily,
        href = _props$attributes.href,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        state = _props$attributes.state,
        hoverState = _props$attributes.hoverState,
        iconType = _props$attributes.iconType,
        iconSize = _props$attributes.iconSize,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        verticalAlign = _props$attributes.verticalAlign,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onChangeIconKey = function onChangeIconKey(value) {
      setAttributes({
        iconKey: value
      });
    };

    var onChangeIconFamily = function onChangeIconFamily(value) {
      setAttributes({
        iconFamily: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      setAttributes({
        href: value
      });
    };

    var onChangeTarget = function onChangeTarget(value) {
      setAttributes({
        target: !!value ? '_blank' : ''
      });
    };

    var onChangeRel = function onChangeRel(value) {
      setAttributes({
        rel: value
      });
    };

    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeHoverState = function onChangeHoverState(value) {
      setAttributes({
        hoverState: value
      });
    };

    var onChangeIconType = function onChangeIconType(value) {
      setAttributes({
        iconType: value
      });
    };

    var onChangeIconSize = function onChangeIconSize(value) {
      setAttributes({
        iconSize: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeVerticalAlign = function onChangeVerticalAlign(value) {
      setAttributes({
        verticalAlign: value
      });
    };

    var iconClassNames = makeIconClassNames({
      state: state,
      hoverState: hoverState,
      iconType: iconType,
      iconSize: iconSize
    });
    iconClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      verticalAlign: verticalAlign
    }, iconClassNames);
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: 'javascript:void( 0 );' // target: target, 
      // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',

    });
    var familyClassName = !!iconFamily ? 'fa' + iconFamily : 'fa';
    var mergedIconClassName = iconType == 'circle' ? 'fa-stack ' + iconClassNames : familyClassName + ' fa-' + iconKey + ' ' + iconClassNames;
    var iconInnerClassName = iconType == 'circle' ? familyClassName + ' fa-' + iconKey + ' fa-stack-1x fa-inverse' : '';
    var TagName = !!href ? 'a' : 'span';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["iconKeyInput"])(iconKey, onChangeIconKey), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["iconFamilySelect"])(iconFamily, onChangeIconFamily), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["textColorSelect"])(state, onChangeState), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Hover color', 'bsx-blocks'),
      value: hoverState,
      onChange: onChangeHoverState
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Icon type', 'bsx-blocks'),
      value: iconType,
      onChange: onChangeIconType,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'circle',
        label: __('Circle', 'bsx-blocks')
      }, {
        value: 'border',
        label: __('Border', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Icon size', 'bsx-blocks'),
      value: iconSize,
      onChange: onChangeIconSize,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'lg',
        label: __('Lg', 'bsx-blocks')
      }, {
        value: '2x',
        label: __('2x', 'bsx-blocks')
      }, {
        value: '3x',
        label: __('3x', 'bsx-blocks')
      }, {
        value: '4x',
        label: __('4x', 'bsx-blocks')
      }, {
        value: '5x',
        label: __('5x', 'bsx-blocks')
      }, {
        value: '6x',
        label: __('6x', 'bsx-blocks')
      }, {
        value: '7x',
        label: __('7x', 'bsx-blocks')
      }, {
        value: '8x',
        label: __('8x', 'bsx-blocks')
      }, {
        value: '9x',
        label: __('9x', 'bsx-blocks')
      }, {
        value: '10x',
        label: __('10x', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginLeftSelect"])(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginRightSelect"])(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Link', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["linkUrlInput"])(href, onChangeHref), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["relInput"])(rel, onChangeRel))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["verticalAlignSelect"])(verticalAlign, onChangeVerticalAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, iconType == 'circle' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      class: mergedIconClassName,
      "aria-hidden": "true"
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
      class: "fa fa-circle fa-stack-2x"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
      class: iconInnerClassName
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      class: mergedIconClassName,
      "aria-hidden": "true"
    }, saveAttributes)))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        iconKey = _props$attributes2.iconKey,
        iconFamily = _props$attributes2.iconFamily,
        href = _props$attributes2.href,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel,
        state = _props$attributes2.state,
        hoverState = _props$attributes2.hoverState,
        iconType = _props$attributes2.iconType,
        iconSize = _props$attributes2.iconSize,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        verticalAlign = _props$attributes2.verticalAlign;
    var iconClassNames = makeIconClassNames({
      state: state,
      hoverState: hoverState,
      iconType: iconType,
      iconSize: iconSize
    });
    iconClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      verticalAlign: verticalAlign
    }, iconClassNames);
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: href,
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
    });
    var familyClassName = !!iconFamily ? 'fa' + iconFamily : 'fa';
    var mergedIconClassName = iconType == 'circle' ? 'fa-stack ' + iconClassNames : familyClassName + ' fa-' + iconKey + ' ' + iconClassNames;
    var iconInnerClassName = iconType == 'circle' ? familyClassName + ' fa-' + iconKey + ' fa-stack-1x fa-inverse' : '';
    var TagName = !!href ? 'a' : 'span';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, iconType == 'circle' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: mergedIconClassName,
      "aria-hidden": "true"
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
      class: "fa fa-circle fa-stack-2x"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
      class: iconInnerClassName
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: mergedIconClassName,
      "aria-hidden": "true"
    }, saveAttributes)));
  }
});

/***/ }),

/***/ "./src/text-elements/index.js":
/*!************************************!*\
  !*** ./src/text-elements/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badge_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge/block.js */ "./src/text-elements/badge/block.js");
/* harmony import */ var _icon_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/block.js */ "./src/text-elements/icon/block.js");
/* harmony import */ var _check_list_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-list/block.js */ "./src/text-elements/check-list/block.js");
/* harmony import */ var _svg_img_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-img/block.js */ "./src/text-elements/svg-img/block.js");





/***/ }),

/***/ "./src/text-elements/svg-img/block.js":
/*!********************************************!*\
  !*** ./src/text-elements/svg-img/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_functions/controls.js */ "./src/_functions/controls.js");


var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
 // functions imports






var unwrapContent = function unwrapContent(content) {
  if (!!content && content.indexOf('svg-wrap') != -1) {
    var unwrappedContentArray = content.split('><');
    unwrappedContentArray.shift();
    unwrappedContentArray.pop();
    var unwrappedContent = '<' + unwrappedContentArray.join('><') + '>';
    return unwrappedContent;
  } else {
    return content;
  }
};

registerBlockType('bsx-blocks/svg-img', {
  title: __('BSX SVG Image', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_2__["svgIcon"])('svg'),
  category: 'layout',
  attributes: {
    content: {
      type: 'string',
      source: 'html'
    },
    nodeName: {
      type: 'string',
      default: 'figure'
    },
    href: {
      type: 'string'
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    verticalAlign: {
      type: 'string'
    },
    textAlign: {
      type: 'string'
    },
    display: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        content = _props$attributes.content,
        nodeName = _props$attributes.nodeName,
        href = _props$attributes.href,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        state = _props$attributes.state,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        verticalAlign = _props$attributes.verticalAlign,
        textAlign = _props$attributes.textAlign,
        display = _props$attributes.display,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected; // unwrap content (remove wrapping outer element)

    setAttributes({
      content: unwrapContent(content)
    });

    var onChangeContent = function onChangeContent(value) {
      setAttributes({
        content: value
      });
    };

    var onChangeHref = function onChangeHref(value) {
      setAttributes({
        href: value
      });
    };

    var onChangeTarget = function onChangeTarget(value) {
      setAttributes({
        target: !!value ? '_blank' : ''
      });
    };

    var onChangeRel = function onChangeRel(value) {
      setAttributes({
        rel: value
      });
    };

    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeVerticalAlign = function onChangeVerticalAlign(value) {
      setAttributes({
        verticalAlign: value
      });
    };

    var onChangeNodeName = function onChangeNodeName(value) {
      setAttributes({
        nodeName: value
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      state: state,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      verticalAlign: verticalAlign,
      textAlign: textAlign,
      display: display
    }, 'svg-wrap'); // const saveAttributes = makeSaveAttributes( {
    //     href: href, 
    //     target: target, 
    //     rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    // } );

    var TagName = !!nodeName ? nodeName : '';

    if (!!href) {
      TagName = 'a';
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Content', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
      label: __('SVG code', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Link', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["linkUrlInput"])(href, onChangeHref), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["relInput"])(rel, onChangeRel))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["verticalAlignSelect"])(verticalAlign, onChangeVerticalAlign), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["displaySelect"])(display, onChangeDisplay), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["nodeNameSelect"])(nodeName, onChangeNodeName, ['', 'figure', 'div', 'span'])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !content ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, __('Add SVG code (right column)', 'bsx-blocks')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, TagName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: wrapperClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], null, content)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], null, content)))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        content = _props$attributes2.content,
        nodeName = _props$attributes2.nodeName,
        href = _props$attributes2.href,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel,
        state = _props$attributes2.state,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        verticalAlign = _props$attributes2.verticalAlign,
        textAlign = _props$attributes2.textAlign,
        display = _props$attributes2.display; // unwrap content (remove wrapping outer element)

    var unwrappedContent = unwrapContent(content);
    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      state: state,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      verticalAlign: verticalAlign,
      textAlign: textAlign,
      display: display
    }, 'svg-wrap');
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: href,
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
    });
    var TagName = !!nodeName ? nodeName : '';

    if (!!href) {
      TagName = 'a';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, TagName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: wrapperClassNames
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], null, unwrappedContent)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], null, unwrappedContent));
  }
});

/***/ }),

/***/ "./src/video/block.js":
/*!****************************!*\
  !*** ./src/video/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/utilities.js */ "./src/_functions/utilities.js");


var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;





/*

<video class="img-fluid align-middle" autoplay="" loop="" playsinline="" muted="" poster="https://linku.digital/wp-content/uploads/2021/10/linku-scan-card-animation-005-ae-poster.png" width="555" height="480">
    <source src="https://linku.digital/wp-content/uploads/2022/01/linku-scan-card-animation-006a.mov" type="video/mp4; codecs=hvc1">
    <source src="https://linku.digital/wp-content/uploads/2022/01/linku-scan-card-animation-006a.webm" type="video/webm">
    Your browser does not support HTML video.
</video>

*/

registerBlockType('bsx-blocks/video', {
  title: __('BSX Video', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('video'),
  category: 'layout',
  attributes: {
    notHasFigure: {
      boolean: 'string'
    },
    figcaption: {
      type: 'array',
      source: 'children',
      selector: 'figcaption'
    },
    videoId: {
      type: 'number'
    },
    videoUrl: {
      type: 'string',
      selector: "source:first-of-type",
      source: "attribute",
      attribute: "src"
    },
    videoIsHvc1: {
      type: 'boolean'
    },
    video2Id: {
      type: 'number'
    },
    video2Url: {
      type: 'string',
      selector: "source:last-of-type",
      source: "attribute",
      attribute: "src"
    },
    videoWidth: {
      type: 'number'
    },
    videoHeight: {
      type: 'number'
    },
    posterId: {
      type: 'number'
    },
    posterUrl: {
      type: 'string',
      selector: "video",
      source: "attribute",
      attribute: "poster"
    },
    scale: {
      type: 'number'
    },
    displayedWidth: {
      type: 'text',
      selector: "video",
      source: "attribute",
      attribute: "width"
    },
    displayedHeight: {
      type: 'text',
      selector: "video",
      source: "attribute",
      attribute: "height"
    },
    controls: {
      type: 'boolean',
      selector: "video",
      source: "attribute",
      attribute: "controls"
    },
    autoplay: {
      type: 'boolean',
      selector: "video",
      source: "attribute",
      attribute: "autoplay",
      default: true
    },
    playsinline: {
      type: 'boolean',
      selector: "video",
      source: "attribute",
      attribute: "playsinline",
      default: true
    },
    loop: {
      type: 'boolean',
      selector: "video",
      source: "attribute",
      attribute: "loop",
      default: true
    },
    muted: {
      type: 'boolean',
      selector: "video",
      source: "attribute",
      attribute: "muted",
      default: true
    },
    textAlign: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        notHasFigure = _props$attributes.notHasFigure,
        figcaption = _props$attributes.figcaption,
        videoId = _props$attributes.videoId,
        videoUrl = _props$attributes.videoUrl,
        videoIsHvc1 = _props$attributes.videoIsHvc1,
        video2Id = _props$attributes.video2Id,
        video2Url = _props$attributes.video2Url,
        videoWidth = _props$attributes.videoWidth,
        videoHeight = _props$attributes.videoHeight,
        posterId = _props$attributes.posterId,
        posterUrl = _props$attributes.posterUrl,
        scale = _props$attributes.scale,
        displayedWidth = _props$attributes.displayedWidth,
        displayedHeight = _props$attributes.displayedHeight,
        controls = _props$attributes.controls,
        autoplay = _props$attributes.autoplay,
        playsinline = _props$attributes.playsinline,
        loop = _props$attributes.loop,
        muted = _props$attributes.muted,
        textAlign = _props$attributes.textAlign,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes;

    var onChangeNotHasFigure = function onChangeNotHasFigure(value) {
      if (!!value) {
        setAttributes({
          notHasFigure: value,
          textAlign: '',
          figcaption: ''
        });
      } else {
        setAttributes({
          notHasFigure: value
        });
      }
    };

    var onChangeFigcaption = function onChangeFigcaption(value) {
      setAttributes({
        figcaption: value
      });
    };

    var onSelectVideo = function onSelectVideo(video) {
      if (typeof video.url !== 'undefined') {
        setAttributes({
          videoId: video.id,
          videoUrl: video.url,
          videoWidth: parseFloat(video.width),
          videoHeight: parseFloat(video.height),
          displayedWidth: !!scale ? scale * parseFloat(video.width) : parseFloat(video.width),
          displayedHeight: !!scale ? scale * parseFloat(video.height) : parseFloat(video.height)
        });
      }
    };

    var onChangeVideoIsHvc1 = function onChangeVideoIsHvc1(value) {
      setAttributes({
        videoIsHvc1: value
      });
    };

    var onSelectVideo2 = function onSelectVideo2(video) {
      if (typeof video.url !== 'undefined') {
        setAttributes({
          video2Id: video.id,
          video2Url: video.url
        });
      }
    };

    var onDeleteVideo2 = function onDeleteVideo2() {
      setAttributes({
        video2Id: '',
        video2Url: ''
      });
    };

    var onSelectPosterImage = function onSelectPosterImage(img) {
      if (typeof img.url !== 'undefined') {
        setAttributes({
          posterId: img.id,
          posterUrl: img.url
        });
      }
    };

    var onDeletePosterImage = function onDeletePosterImage() {
      setAttributes({
        posterId: '',
        posterUrl: ''
      });
    };

    var onChangeScale = function onChangeScale(value) {
      setAttributes({
        scale: parseFloat(value),
        displayedWidth: !!value ? Math.round(videoWidth * parseFloat(value)) : videoWidth,
        displayedHeight: !!value ? Math.round(videoHeight * parseFloat(value)) : videoHeight
      });
    };

    var onChangeDisplayedWidth = function onChangeDisplayedWidth(value) {
      setAttributes({
        displayedWidth: parseFloat(value),
        displayedHeight: Math.round(value / videoWidth * videoHeight),
        scale: parseFloat(value / videoWidth)
      });
    };

    var onChangeDisplayedHeight = function onChangeDisplayedHeight(value) {
      setAttributes({
        displayedHeight: parseFloat(value),
        displayedWidth: Math.round(value / videoHeight * videoWidth),
        scale: parseFloat(value / videoHeight)
      });
    };

    var onChangeControls = function onChangeControls(value) {
      setAttributes({
        controls: value
      });
    };

    var onChangeAutoplay = function onChangeAutoplay(value) {
      setAttributes({
        autoplay: value
      });
    };

    var onChangePlaysinline = function onChangePlaysinline(value) {
      setAttributes({
        playsinline: value
      });
    };

    var onChangeLoop = function onChangeLoop(value) {
      setAttributes({
        loop: value
      });
    };

    var onChangeMuted = function onChangeMuted(value) {
      setAttributes({
        muted: value
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    }; // class names


    var outerClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    }, className);
    var videoClassNames = 'img-fluid align-middle';

    if (!!notHasFigure) {
      videoClassNames += !!outerClassNames ? ' ' + outerClassNames : '';
    } // video attributes
    // set controls always true within editor


    var videoSaveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      'controls': true,
      'autoplay': autoplay,
      'loop': loop,
      'playsinline': playsinline,
      'muted': muted,
      'poster': posterUrl,
      'width': !!displayedWidth ? displayedWidth : !!scale ? scale * videoWidth : videoWidth,
      'height': !!displayedHeight ? displayedHeight : !!scale ? scale * videoHeight : videoHeight
    }); // video html

    var videoFileSuffix = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileSuffix"])(videoUrl);
    var videoType = videoFileSuffix == 'mov' && videoIsHvc1 ? 'video/mp4; codecs=hvc1' : 'video/' + videoFileSuffix;
    var video2Type = 'video/' + Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileSuffix"])(video2Url);
    var video = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: videoClassNames
    }, videoSaveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: videoUrl,
      type: videoType
    }), video2Url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: video2Url,
      type: video2Type
    }), "Your browser does not support HTML video.");
    var video1Only = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: videoClassNames
    }, videoSaveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: videoUrl,
      type: videoType
    }), "Your browser does not support HTML video.");
    var video2Only = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: videoClassNames
    }, videoSaveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: video2Url,
      type: video2Type
    }), "Your browser does not support HTML video.");
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, !notHasFigure && Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Video', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('If using transparency (alpha) put 1st mov file with HVC1 Codec active and 2nd webm file.', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, videoId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectVideo,
      allowedTypes: "video",
      value: videoId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, video1Only);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileName"])(videoUrl)))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No video selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectVideo,
      allowedTypes: "video",
      value: videoId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload video', 'bsx-blocks'));
      }
    })), videoId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Video is HVC1 Codec (mov file with alpha)', 'bsx-blocks'),
      checked: !!videoIsHvc1,
      onChange: onChangeVideoIsHvc1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, video2Id ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectVideo2,
      allowedTypes: "video",
      value: video2Id,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, video2Only);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileName"])(video2Url)))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No video 2 selected yet –', 'bsx-blocks'))), videoId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectVideo2,
      allowedTypes: "video",
      value: video2Id,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload video 2', 'bsx-blocks'));
      }
    })), video2Id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      onClick: onDeleteVideo2,
      isDestructive: true
    }, __('Remove video 2', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Video settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Controls', 'bsx-blocks'),
      checked: !!controls,
      onChange: onChangeControls
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Autoplay', 'bsx-blocks'),
      checked: !!autoplay,
      onChange: onChangeAutoplay
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Playsinline', 'bsx-blocks'),
      checked: !!playsinline,
      onChange: onChangePlaysinline
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Loop', 'bsx-blocks'),
      checked: !!loop,
      onChange: onChangeLoop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Muted', 'bsx-blocks'),
      checked: !!muted,
      onChange: onChangeMuted
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Poster image (recommended)', 'bsx-blocks')
    }, posterId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectPosterImage,
      allowedTypes: "image",
      value: posterId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: posterUrl,
          alt: __('Change / upload poster image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No poster image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectPosterImage,
      allowedTypes: "image",
      value: posterId,
      render: function render(_ref6) {
        var open = _ref6.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload poster image', 'bsx-blocks'));
      }
    })), posterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      onClick: onDeletePosterImage,
      isDestructive: true
    }, __('Remove poster image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Dimensions', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Displayed width', 'bsx-blocks'),
      value: displayedWidth + '',
      onChange: onChangeDisplayedWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Displayed height', 'bsx-blocks'),
      value: displayedHeight + '',
      onChange: onChangeDisplayedHeight
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["scaleSelect"])(scale, onChangeScale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin (optional)', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Not wrapped by figure', 'bsx-blocks'),
      checked: !!notHasFigure,
      onChange: onChangeNotHasFigure
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: outerClassNames
    }, videoId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, video) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder-empty'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectVideo,
      allowedTypes: "video",
      value: videoId,
      render: function render(_ref7) {
        var open = _ref7.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          onClick: open,
          isSecondary: true,
          className: 'bsxui-banner-button',
          title: __('Select / upload video', 'bsx-blocks')
        }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('video-placeholder'));
      }
    })), !notHasFigure && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        className = _props$attributes2.className,
        notHasFigure = _props$attributes2.notHasFigure,
        figcaption = _props$attributes2.figcaption,
        videoId = _props$attributes2.videoId,
        videoUrl = _props$attributes2.videoUrl,
        videoIsHvc1 = _props$attributes2.videoIsHvc1,
        video2Id = _props$attributes2.video2Id,
        video2Url = _props$attributes2.video2Url,
        videoWidth = _props$attributes2.videoWidth,
        videoHeight = _props$attributes2.videoHeight,
        posterId = _props$attributes2.posterId,
        posterUrl = _props$attributes2.posterUrl,
        scale = _props$attributes2.scale,
        displayedWidth = _props$attributes2.displayedWidth,
        displayedHeight = _props$attributes2.displayedHeight,
        controls = _props$attributes2.controls,
        autoplay = _props$attributes2.autoplay,
        playsinline = _props$attributes2.playsinline,
        loop = _props$attributes2.loop,
        muted = _props$attributes2.muted,
        textAlign = _props$attributes2.textAlign,
        marginAfter = _props$attributes2.marginAfter; // class names

    var outerClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    }, className);
    var videoClassNames = 'img-fluid align-middle';

    if (!!notHasFigure) {
      videoClassNames += !!outerClassNames ? ' ' + outerClassNames : '';
    } // video attributes


    var videoSaveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      'controls': controls,
      'autoplay': autoplay,
      'loop': loop,
      'playsinline': playsinline,
      'muted': muted,
      'poster': posterUrl,
      'width': !!displayedWidth ? displayedWidth : !!scale ? scale * videoWidth : videoWidth,
      'height': !!displayedHeight ? displayedHeight : !!scale ? scale * videoHeight : videoHeight
    });
    var videoFileSuffix = Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileSuffix"])(videoUrl);
    var videoType = videoFileSuffix == 'mov' && videoIsHvc1 ? 'video/mp4; codecs=hvc1' : 'video/' + videoFileSuffix;
    var video2Type = 'video/' + Object(_functions_utilities_js__WEBPACK_IMPORTED_MODULE_6__["getFileSuffix"])(video2Url); // video html

    var video = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: videoClassNames
    }, videoSaveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: videoUrl,
      type: videoType
    }), video2Url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      src: video2Url,
      type: video2Type
    }), "Your browser does not support HTML video.");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !notHasFigure ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: outerClassNames
    }, !!videoUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, video, figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "font-italic",
      value: figcaption
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, video));
  }
});

/***/ }),

/***/ "./src/wrapper/block.js":
/*!******************************!*\
  !*** ./src/wrapper/block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");



var _attributes;


var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var Fragment = wp.element.Fragment;




registerBlockType('bsx-blocks/wrapper', {
  title: __('BSX Wrapper', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('wrapper'),
  category: 'layout',
  attributes: (_attributes = {
    nodeName: {
      type: 'string',
      default: 'div'
    },
    id: {
      type: 'string'
    },
    dataFn: {
      type: 'string' // source: "attribute",
      // attribute: "data-fn",

    },
    dataFnOptions: {
      type: 'string' // source: "attribute",
      // attribute: "data-fn-options",

    },
    dataFnTarget: {
      type: 'string' // source: "attribute",
      // attribute: "data-fn-target",

    },
    dataTg: {
      type: 'string' // source: "attribute",
      // attribute: "data-tg",

    },
    belowNavbar: {
      type: 'boolean'
    },
    bgColor: {
      type: 'string'
    },
    textSize: {
      type: 'string'
    },
    textShadow: {
      type: 'string'
    },
    fontWeight: {
      type: 'string'
    },
    inverseTextColor: {
      type: 'boolean'
    },
    headingInheritTextColor: {
      type: 'boolean'
    },
    headingInheritFontWeight: {
      type: 'boolean'
    },
    rounded: {
      type: 'boolean',
      default: false
    },
    textColor: {
      type: 'string'
    },
    textAlign: {
      type: 'string'
    },
    resTextAlignBreakpoint: {
      type: 'string'
    },
    resTextAlign: {
      type: 'string'
    },
    border: {
      type: 'string'
    },
    borderState: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    marginBefore: {
      type: 'string'
    },
    marginAfter: {
      type: 'string'
    },
    resMargin1Breakpoint: {
      type: 'string'
    },
    resMargin1Position: {
      type: 'string'
    },
    resMargin1Size: {
      type: 'string'
    },
    resMargin2Breakpoint: {
      type: 'string'
    },
    resMargin2Position: {
      type: 'string'
    },
    resMargin2Size: {
      type: 'string'
    },
    paddingBefore: {
      type: 'string'
    },
    paddingAfter: {
      type: 'string'
    },
    marginLeft: {
      type: 'string'
    },
    paddingRight: {
      type: 'string'
    },
    paddingLeft: {
      type: 'string'
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "paddingRight", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "touchFooter", {
    type: 'boolean'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "display", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "verticalAlign", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "speechBubble", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "isAlert", {
    type: 'boolean'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "state", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_attributes, "isGalleryParent", {
    type: 'boolean'
  }), _attributes),
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var textAlign = attributes.textAlign,
        resTextAlignBreakpoint = attributes.resTextAlignBreakpoint,
        resTextAlign = attributes.resTextAlign,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter,
        marginLeft = attributes.marginLeft,
        marginRight = attributes.marginRight,
        resMargin1Breakpoint = attributes.resMargin1Breakpoint,
        resMargin1Position = attributes.resMargin1Position,
        resMargin1Size = attributes.resMargin1Size,
        resMargin2Breakpoint = attributes.resMargin2Breakpoint,
        resMargin2Position = attributes.resMargin2Position,
        resMargin2Size = attributes.resMargin2Size,
        paddingBefore = attributes.paddingBefore,
        paddingAfter = attributes.paddingAfter,
        paddingLeft = attributes.paddingLeft,
        paddingRight = attributes.paddingRight,
        display = attributes.display,
        verticalAlign = attributes.verticalAlign,
        isAlert = attributes.isAlert,
        state = attributes.state;
    return {
      'data-text-align': textAlign,
      'data-res-text-align': resTextAlignBreakpoint + '-' + resTextAlign,
      'data-margin-before': marginBefore,
      'data-margin-after': marginAfter,
      'data-margin-left': marginLeft,
      'data-margin-right': marginRight,
      'data-display': display,
      'data-vertical-align': verticalAlign,
      'data-is-alert': !!isAlert ? 'true' : 'false',
      'data-state': state
    };
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        nodeName = _props$attributes.nodeName,
        id = _props$attributes.id,
        dataFn = _props$attributes.dataFn,
        dataFnOptions = _props$attributes.dataFnOptions,
        dataFnTarget = _props$attributes.dataFnTarget,
        dataTg = _props$attributes.dataTg,
        belowNavbar = _props$attributes.belowNavbar,
        bgColor = _props$attributes.bgColor,
        textColor = _props$attributes.textColor,
        textSize = _props$attributes.textSize,
        textAlign = _props$attributes.textAlign,
        resTextAlignBreakpoint = _props$attributes.resTextAlignBreakpoint,
        resTextAlign = _props$attributes.resTextAlign,
        textShadow = _props$attributes.textShadow,
        fontWeight = _props$attributes.fontWeight,
        inverseTextColor = _props$attributes.inverseTextColor,
        headingInheritTextColor = _props$attributes.headingInheritTextColor,
        headingInheritFontWeight = _props$attributes.headingInheritFontWeight,
        width = _props$attributes.width,
        rounded = _props$attributes.rounded,
        border = _props$attributes.border,
        borderState = _props$attributes.borderState,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        marginLeft = _props$attributes.marginLeft,
        marginRight = _props$attributes.marginRight,
        resMargin1Breakpoint = _props$attributes.resMargin1Breakpoint,
        resMargin1Position = _props$attributes.resMargin1Position,
        resMargin1Size = _props$attributes.resMargin1Size,
        resMargin2Breakpoint = _props$attributes.resMargin2Breakpoint,
        resMargin2Position = _props$attributes.resMargin2Position,
        resMargin2Size = _props$attributes.resMargin2Size,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        paddingLeft = _props$attributes.paddingLeft,
        paddingRight = _props$attributes.paddingRight,
        touchFooter = _props$attributes.touchFooter,
        display = _props$attributes.display,
        verticalAlign = _props$attributes.verticalAlign,
        speechBubble = _props$attributes.speechBubble,
        isAlert = _props$attributes.isAlert,
        state = _props$attributes.state,
        isGalleryParent = _props$attributes.isGalleryParent,
        setAttributes = props.setAttributes;

    var onChangeNodeName = function onChangeNodeName(value) {
      setAttributes({
        nodeName: value
      });
    };

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
      });
    };

    var onChangeBgColor = function onChangeBgColor(value) {
      setAttributes({
        bgColor: value
      });
    };

    var onChangeTextColor = function onChangeTextColor(value) {
      setAttributes({
        textColor: value
      });
    };

    var onChangeState = function onChangeState(value) {
      setAttributes({
        state: value
      });
    };

    var onChangeTextSize = function onChangeTextSize(value) {
      setAttributes({
        textSize: value
      });
    };

    var onChangeTextShadow = function onChangeTextShadow(value) {
      setAttributes({
        textShadow: value
      });
    };

    var onChangeTextAlign = function onChangeTextAlign(value) {
      setAttributes({
        textAlign: value
      });
    };

    var onChangeResTextAlignBreakpoint = function onChangeResTextAlignBreakpoint(value) {
      setAttributes({
        resTextAlignBreakpoint: value
      });
    };

    var onChangeResTextAlign = function onChangeResTextAlign(value) {
      setAttributes({
        resTextAlign: value
      });
    };

    var onChangeFontWeight = function onChangeFontWeight(value) {
      setAttributes({
        fontWeight: value
      });
    };

    var onChangeInverseTextColor = function onChangeInverseTextColor(value) {
      setAttributes({
        inverseTextColor: value
      });
    };

    var onChangeHeadingInheritTextColor = function onChangeHeadingInheritTextColor(value) {
      setAttributes({
        headingInheritTextColor: value
      });
    };

    var onChangeHeadingInheritFontWeight = function onChangeHeadingInheritFontWeight(value) {
      setAttributes({
        headingInheritFontWeight: value
      });
    };

    var onChangeWidth = function onChangeWidth(value) {
      setAttributes({
        width: value
      });
    };

    var onChangeRounded = function onChangeRounded(value) {
      setAttributes({
        rounded: value
      });
    };

    var onChangeBorder = function onChangeBorder(value) {
      setAttributes({
        border: value
      });
    };

    var onChangeBorderState = function onChangeBorderState(value) {
      setAttributes({
        borderState: value
      });
    };

    var onChangeIsAlert = function onChangeIsAlert(value) {
      setAttributes({
        isAlert: value
      });
    };

    var onChangeMarginBefore = function onChangeMarginBefore(value) {
      setAttributes({
        marginBefore: value
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var onChangeMarginLeft = function onChangeMarginLeft(value) {
      setAttributes({
        marginLeft: value
      });
    };

    var onChangeMarginRight = function onChangeMarginRight(value) {
      setAttributes({
        marginRight: value
      });
    };

    var onChangeResMargin1Breakpoint = function onChangeResMargin1Breakpoint(value) {
      setAttributes({
        resMargin1Breakpoint: value
      });
    };

    var onChangeResMargin1Position = function onChangeResMargin1Position(value) {
      setAttributes({
        resMargin1Position: value
      });
    };

    var onChangeResMargin1Size = function onChangeResMargin1Size(value) {
      setAttributes({
        resMargin1Size: value
      });
    };

    var onChangeResMargin2Breakpoint = function onChangeResMargin2Breakpoint(value) {
      setAttributes({
        resMargin2Breakpoint: value
      });
    };

    var onChangeResMargin2Position = function onChangeResMargin2Position(value) {
      setAttributes({
        resMargin2Position: value
      });
    };

    var onChangeResMargin2Size = function onChangeResMargin2Size(value) {
      setAttributes({
        resMargin2Size: value
      });
    };

    var onChangePaddingBefore = function onChangePaddingBefore(value) {
      setAttributes({
        paddingBefore: value
      });
    };

    var onChangePaddingAfter = function onChangePaddingAfter(value) {
      setAttributes({
        paddingAfter: value
      });
    };

    var onChangePaddingLeft = function onChangePaddingLeft(value) {
      setAttributes({
        paddingLeft: value
      });
    };

    var onChangePaddingRight = function onChangePaddingRight(value) {
      setAttributes({
        paddingRight: value
      });
    };

    var onChangeTouchFooter = function onChangeTouchFooter(value) {
      setAttributes({
        touchFooter: value
      });
    };

    var onChangeDisplay = function onChangeDisplay(value) {
      setAttributes({
        display: value
      });
    };

    var onChangeVerticalAlign = function onChangeVerticalAlign(value) {
      setAttributes({
        verticalAlign: value
      });
    };

    var onChangeSpeechBubble = function onChangeSpeechBubble(value) {
      setAttributes({
        speechBubble: value
      });
    };

    var onChangeDataFn = function onChangeDataFn(value) {
      setAttributes({
        dataFn: value
      });
    };

    var onChangeDataFnOptions = function onChangeDataFnOptions(value) {
      setAttributes({
        dataFnOptions: value
      });
    };

    var onChangeDataFnTarget = function onChangeDataFnTarget(value) {
      setAttributes({
        dataFnTarget: value
      });
    };

    var onChangeDataTg = function onChangeDataTg(value) {
      setAttributes({
        dataTg: value
      });
    };

    var onChangeIsGalleryParent = function onChangeIsGalleryParent(value) {
      setAttributes({
        isGalleryParent: value
      });
    };

    var wrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      bgColor: bgColor,
      textColor: textColor,
      textSize: textSize,
      rounded: rounded,
      border: border,
      borderState: borderState,
      textAlign: textAlign,
      resTextAlignBreakpoint: resTextAlignBreakpoint,
      resTextAlign: resTextAlign,
      textShadow: textShadow,
      fontWeight: fontWeight,
      inverseTextColor: inverseTextColor,
      headingInheritTextColor: headingInheritTextColor,
      headingInheritFontWeight: headingInheritFontWeight,
      width: width,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      marginLeft: marginLeft,
      marginRight: marginRight,
      resMargin1Breakpoint: resMargin1Breakpoint,
      resMargin1Position: resMargin1Position,
      resMargin1Size: resMargin1Size,
      resMargin2Breakpoint: resMargin2Breakpoint,
      resMargin2Position: resMargin2Position,
      resMargin2Size: resMargin2Size,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      touchFooter: touchFooter,
      display: display,
      verticalAlign: verticalAlign,
      speechBubble: speechBubble,
      isAlert: isAlert,
      state: state
    });
    var TagName = nodeName;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["textAlignToolbar"])(textAlign, onChangeTextAlign)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Texte', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["textColorSelect"])(textColor, onChangeTextColor), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Text size', 'bsx-blocks'),
      value: textSize,
      onChange: onChangeTextSize,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'lead',
        label: __('Larger', 'bsx-blocks')
      }, {
        value: 'small',
        label: __('Smaller', 'bsx-blocks')
      }, {
        value: 'h6',
        label: __('Heading 6 (smallest)', 'bsx-blocks')
      }, {
        value: 'h5',
        label: __('Heading 5', 'bsx-blocks')
      }, {
        value: 'h4',
        label: __('Heading 4', 'bsx-blocks')
      }, {
        value: 'h3',
        label: __('Heading 3', 'bsx-blocks')
      }, {
        value: 'h2',
        label: __('Heading 2', 'bsx-blocks')
      }, {
        value: 'h1',
        label: __('Heading 1 (biggest)', 'bsx-blocks')
      }, {
        value: 'display-4',
        label: __('Large 4 (smallest)', 'bsx-blocks')
      }, {
        value: 'display-3',
        label: __('Large 3', 'bsx-blocks')
      }, {
        value: 'display-2',
        label: __('Large 2', 'bsx-blocks')
      }, {
        value: 'display-1',
        label: __('Large 1 (biggest)', 'bsx-blocks')
      }]
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["textShadowSelect"])(textShadow, onChangeTextShadow), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["fontWeightSelect"])(fontWeight, onChangeFontWeight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["inverseTextColorToggle"])(inverseTextColor, onChangeInverseTextColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["headingInheritTextColorToggle"])(headingInheritTextColor, onChangeHeadingInheritTextColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["headingInheritFontWeightToggle"])(headingInheritFontWeight, onChangeHeadingInheritFontWeight)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["bgColorSelect"])(bgColor, onChangeBgColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["roundedToggle"])(rounded, onChangeRounded), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["borderSelect"])(border, onChangeBorder), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["borderStateSelect"])(borderState, onChangeBorderState), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["alertToggle"])(isAlert, onChangeIsAlert), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["stateSelect"])(state, onChangeState)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginLeftSelect"])(marginLeft, onChangeMarginLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginRightSelect"])(marginRight, onChangeMarginRight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Padding', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["paddingLeftSelect"])(paddingLeft, onChangePaddingLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["paddingRightSelect"])(paddingRight, onChangePaddingRight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Responsive text align', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('Use in addition to Alignment toolbar.', 'bsx-blocks'))), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["breakpointsSelect"])(resTextAlignBreakpoint, onChangeResTextAlignBreakpoint), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["textAlignSelect"])(resTextAlign, onChangeResTextAlign))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["nodeNameSelect"])(nodeName, onChangeNodeName, ['div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["displaySelect"])(display, onChangeDisplay), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["verticalAlignSelect"])(verticalAlign, onChangeVerticalAlign), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["widthSelect"])(width, onChangeWidth), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Speech bubble', 'bsx-blocks'),
      value: speechBubble,
      onChange: onChangeSpeechBubble,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'sm',
        label: __('Small', 'bsx-blocks')
      }, {
        value: 'md',
        label: __('Medium', 'bsx-blocks')
      }, {
        value: 'lg',
        label: __('Large', 'bsx-blocks')
      }]
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["touchFooterToggle"])(touchFooter, onChangeTouchFooter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginBreakpointsSelect"])(resMargin1Breakpoint, onChangeResMargin1Breakpoint, [], '1'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginPositionSelect"])(resMargin1Position, onChangeResMargin1Position, [], '1'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginSizeSelect"])(resMargin1Size, onChangeResMargin1Size, [], '1'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginBreakpointsSelect"])(resMargin2Breakpoint, onChangeResMargin2Breakpoint, [], '2'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginPositionSelect"])(resMargin2Position, onChangeResMargin2Position, [], '2'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["resMarginSizeSelect"])(resMargin2Size, onChangeResMargin2Size, [], '2'), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["isGalleryParentToggle"])(isGalleryParent, onChangeIsGalleryParent), !isGalleryParent ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataFnInput"])(dataFn, onChangeDataFn)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-alert"
    }, __('dataFn is deactivated since element is image gallery parent.', 'bsx-blocks'))), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataFnOptionsInput"])(dataFnOptions, onChangeDataFnOptions), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataFnTargetInput"])(dataFnTarget, onChangeDataFnTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataTgInput"])(dataTg, onChangeDataTg))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TagName, {
      className: wrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        nodeName = _props$attributes2.nodeName,
        id = _props$attributes2.id,
        dataFn = _props$attributes2.dataFn,
        dataFnOptions = _props$attributes2.dataFnOptions,
        dataFnTarget = _props$attributes2.dataFnTarget,
        dataTg = _props$attributes2.dataTg,
        belowNavbar = _props$attributes2.belowNavbar,
        bgColor = _props$attributes2.bgColor,
        textColor = _props$attributes2.textColor,
        textSize = _props$attributes2.textSize,
        textAlign = _props$attributes2.textAlign,
        resTextAlignBreakpoint = _props$attributes2.resTextAlignBreakpoint,
        resTextAlign = _props$attributes2.resTextAlign,
        textShadow = _props$attributes2.textShadow,
        fontWeight = _props$attributes2.fontWeight,
        inverseTextColor = _props$attributes2.inverseTextColor,
        headingInheritTextColor = _props$attributes2.headingInheritTextColor,
        headingInheritFontWeight = _props$attributes2.headingInheritFontWeight,
        width = _props$attributes2.width,
        rounded = _props$attributes2.rounded,
        border = _props$attributes2.border,
        borderState = _props$attributes2.borderState,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        resMargin1Breakpoint = _props$attributes2.resMargin1Breakpoint,
        resMargin1Position = _props$attributes2.resMargin1Position,
        resMargin1Size = _props$attributes2.resMargin1Size,
        resMargin2Breakpoint = _props$attributes2.resMargin2Breakpoint,
        resMargin2Position = _props$attributes2.resMargin2Position,
        resMargin2Size = _props$attributes2.resMargin2Size,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter,
        paddingLeft = _props$attributes2.paddingLeft,
        paddingRight = _props$attributes2.paddingRight,
        touchFooter = _props$attributes2.touchFooter,
        display = _props$attributes2.display,
        verticalAlign = _props$attributes2.verticalAlign,
        speechBubble = _props$attributes2.speechBubble,
        isAlert = _props$attributes2.isAlert,
        state = _props$attributes2.state,
        isGalleryParent = _props$attributes2.isGalleryParent,
        setAttributes = props.setAttributes;
    var wrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      bgColor: bgColor,
      textColor: textColor,
      textSize: textSize,
      rounded: rounded,
      border: border,
      borderState: borderState,
      textAlign: textAlign,
      resTextAlignBreakpoint: resTextAlignBreakpoint,
      resTextAlign: resTextAlign,
      textShadow: textShadow,
      fontWeight: fontWeight,
      inverseTextColor: inverseTextColor,
      headingInheritTextColor: headingInheritTextColor,
      headingInheritFontWeight: headingInheritFontWeight,
      width: width,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      marginLeft: marginLeft,
      marginRight: marginRight,
      resMargin1Breakpoint: resMargin1Breakpoint,
      resMargin1Position: resMargin1Position,
      resMargin1Size: resMargin1Size,
      resMargin2Breakpoint: resMargin2Breakpoint,
      resMargin2Position: resMargin2Position,
      resMargin2Size: resMargin2Size,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      touchFooter: touchFooter,
      display: display,
      verticalAlign: verticalAlign,
      speechBubble: speechBubble,
      isAlert: isAlert,
      state: state
    });
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      // href: href, 
      // target: ref ? target : '', 
      // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
      'data-fn': isGalleryParent ? 'photoswipe' : dataFn,
      'data-fn-options': dataFnOptions,
      'data-fn-target': dataFnTarget,
      'data-tg': dataTg
    });
    var TagName = nodeName;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TagName, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: wrapperClassName
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map