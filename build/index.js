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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

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
      paddingBefore = attributes.paddingBefore,
      paddingAfter = attributes.paddingAfter,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      bgColor = attributes.bgColor,
      textColor = attributes.textColor,
      textSize = attributes.textSize,
      rounded = attributes.rounded,
      textAlign = attributes.textAlign,
      textShadow = attributes.textShadow,
      fontWeight = attributes.fontWeight,
      inverseTextColor = attributes.inverseTextColor,
      headingInheritTextColor = attributes.headingInheritTextColor,
      headingInheritFontWeight = attributes.headingInheritFontWeight,
      width = attributes.width,
      imgThumbnail = attributes.imgThumbnail,
      borderState = attributes.borderState,
      hoverShadow = attributes.hoverShadow,
      hoverMove = attributes.hoverMove;
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
        classNames.push('pt-' + paddingLeft);
      } // right


      if (!!paddingRight) {
        classNames.push('pb-' + paddingRight);
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

  if (!!width) {
    classNames.push('w-' + width);
  }

  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
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
/*! exports provided: ignoreMailtoSpamProtectionToggle, targetToggle, belowNavbarToggle, touchFooterToggle, inverseTextColorToggle, headingInheritTextColorToggle, headingInheritFontWeightToggle, linkUrlInput, bgAttachmentFixedLimitedToggle, relInput, dataFnInput, stateSelect, bgColorSelect, stateTypeSelect, sizeSelect, marginLeftSelect, marginRightSelect, marginBeforeSelect, marginAfterSelect, displaySelect, alignItemsSelect, paddingBeforeSelect, paddingAfterSelect, paddingLeftSelect, paddingRightSelect, nodeNameSelect, bgPositionSelect, bgSizeSelect, bannerTypeSelect, bannerSizeSelect, bgAttachmentSelect, textShadowSelect, fontWeightSelect, imgUploadClickableImg, imgUploadButton, inlineTemplateSelect, uiTemplateSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMailtoSpamProtectionToggle", function() { return ignoreMailtoSpamProtectionToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetToggle", function() { return targetToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belowNavbarToggle", function() { return belowNavbarToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchFooterToggle", function() { return touchFooterToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseTextColorToggle", function() { return inverseTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritTextColorToggle", function() { return headingInheritTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritFontWeightToggle", function() { return headingInheritFontWeightToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkUrlInput", function() { return linkUrlInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgAttachmentFixedLimitedToggle", function() { return bgAttachmentFixedLimitedToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relInput", function() { return relInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnInput", function() { return dataFnInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSelect", function() { return stateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorSelect", function() { return bgColorSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateTypeSelect", function() { return stateTypeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeSelect", function() { return sizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginLeftSelect", function() { return marginLeftSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginRightSelect", function() { return marginRightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginBeforeSelect", function() { return marginBeforeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginAfterSelect", function() { return marginAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySelect", function() { return displaySelect; });
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
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
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
var states = [{
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
}; // url inputs

var linkUrlInput = function linkUrlInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    label: __('Link URL', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
}; // text inputs

var bgAttachmentFixedLimitedToggle = function bgAttachmentFixedLimitedToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Limit fixed background', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks')
  });
};
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
var stateTypeSelect = function stateTypeSelect(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('State Type', 'bsx-blocks'),
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
var alignItemsSelect = function alignItemsSelect(value, onChangeFunction, allowedValues) {
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
    label: __('Align items', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
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
    value: 'div',
    label: __('div', 'bsx-blocks')
  }, {
    value: 'section',
    label: __('section', 'bsx-blocks')
  }, {
    value: 'ul',
    label: __('ul', 'bsx-blocks')
  }, {
    value: 'ol',
    label: __('ol', 'bsx-blocks')
  }, {
    value: 'li',
    label: __('li', 'bsx-blocks')
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
    value: 'rc',
    label: __('Right center', 'bsx-blocks')
  }, {
    value: '33c',
    label: __('33% center', 'bsx-blocks')
  }, {
    value: '80c',
    label: __('80% center', 'bsx-blocks')
  }, {
    value: '66t',
    label: __('66% top', 'bsx-blocks')
  }, {
    value: '66c',
    label: __('66% center', 'bsx-blocks')
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
    label: __('3 (smallest)', 'bsx-blocks')
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
/*! exports provided: getUrlTruncAndExtension, fullImgIsScaled, getOriginalImgUrl, getSizesAndWithoutSizesTruncFromUrlTrunc, makeSizedImgs, getImgWidthHeight, imgExists, getImgSizesData, makeBase64PreloadImgSrc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlTruncAndExtension", function() { return getUrlTruncAndExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullImgIsScaled", function() { return fullImgIsScaled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalImgUrl", function() { return getOriginalImgUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizesAndWithoutSizesTruncFromUrlTrunc", function() { return getSizesAndWithoutSizesTruncFromUrlTrunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSizedImgs", function() { return makeSizedImgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgWidthHeight", function() { return getImgWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgExists", function() { return imgExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgSizesData", function() { return getImgSizesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBase64PreloadImgSrc", function() { return makeBase64PreloadImgSrc; });
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
function fullImgIsScaled(fullUrl) {
  var urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
}
function getOriginalImgUrl(fullUrl) {
  var truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}
function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  var urlWithoutFileExtensionExplode = urlTrunc.split('-');
  var sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizesTrunc: urlWithoutFileExtensionExplode.join('-')
  };
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
  var sizesAndWithoutSizesTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  var width = sizesAndWithoutSizesTrunc.width;
  var urlWithoutSizesAndFileExtension = sizesAndWithoutSizesTrunc.withoutSizesTrunc;
  var returnList = [];
  scaleList.forEach(function (scale, index) {
    // calculate new size
    var scaledWidth = Math.round(width * scale); // check if default size exists for current img (only if original img is larger)

    if (scaledWidth <= originalWidth) {
      var scaledHeight = Math.round(scaledWidth / ratio);
      var scaledUrl = urlWithoutSizesAndFileExtension + '-' + scaledWidth + 'x' + scaledHeight + '.' + fileExtension;
      returnList.push({
        url: scaledUrl,
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
    var imgScaleList, imgBaseSize, defaultImgList, imgSizesOrder, originalImgUrl, originalWidth, originalHeight, originalImgSizes, scaledImgs, returnImgs, sizedImgsConfig, sizedImgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // scaled (hidden) img settings
            imgScaleList = [0.75, 1.5, 2];
            imgBaseSize = 'large';
            defaultImgList = ['thumbnail', 'medium', imgBaseSize, 'full'];
            imgSizesOrder = ['thumbnail', 'medium', imgScaleList[0] + '', imgBaseSize, imgScaleList[1] + '', imgScaleList[2] + '', 'full', 'original'];
            originalImgUrl = '';
            originalWidth = 0;
            originalHeight = 0;

            if (!fullImgIsScaled(img.url)) {
              _context2.next = 22;
              break;
            }

            // get original, get sizes
            originalImgUrl = getOriginalImgUrl(img.url);
            _context2.prev = 9;
            _context2.next = 12;
            return getImgWidthHeight(originalImgUrl);

          case 12:
            originalImgSizes = _context2.sent;
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](9);
            console.error(_context2.t0);

          case 18:
            originalWidth = originalImgSizes.width;
            originalHeight = originalImgSizes.height;
            _context2.next = 24;
            break;

          case 22:
            // get sizes from full img
            originalWidth = img.sizes.full.width;
            originalHeight = img.sizes.full.height;

          case 24:
            scaledImgs = new Map();
            returnImgs = []; // make sizes only if large img exists

            if (!(img.sizes.large != undefined)) {
              _context2.next = 31;
              break;
            }

            // config for making sizes (might change in newer WP versions)
            sizedImgsConfig = {
              url: img.sizes[imgBaseSize].url,
              scaleList: imgScaleList,
              originalWidth: originalWidth,
              originalHeight: originalHeight
            };
            sizedImgs = makeSizedImgs(sizedImgsConfig); // check all imgs if exist (since WordPress might change hidden img sizes one day);

            _context2.next = 31;
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

          case 31:
            // TEST – TODO: remove
            // for ( let [ key, value ] of Object.entries( scaledImgs ) ) {
            //     console.log( 'scaledImgs[ ' + key + ' ]: ' + value.url );
            // }
            // make ordered list of all existing default img sizes and scaled (hidden) img sizes
            imgSizesOrder.forEach(function (imgSize, index) {
              if (defaultImgList.indexOf(imgSize) != -1 && img.sizes[imgSize] != undefined) {
                // get from default img list
                returnImgs.push({
                  url: img.sizes[imgSize].url,
                  width: img.sizes[imgSize].width,
                  height: img.sizes[imgSize].height
                });
              } else if (imgScaleList.indexOf(parseFloat(imgSize)) != -1 && scaledImgs.get(imgSize) != undefined) {
                // get from scaled imgs list
                returnImgs.push(scaledImgs.get(imgSize));
              } else if (imgSize == 'original' && originalImgUrl) {
                // add unscaled original
                returnImgs.push({
                  url: originalImgUrl,
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

            return _context2.abrupt("return", {
              imgs: returnImgs,
              originalWidth: originalWidth,
              originalHeight: originalHeight
            });

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 15]]);
  }));
  return _getImgSizesData.apply(this, arguments);
}

var makeBase64PreloadImgSrc = function makeBase64PreloadImgSrc(imgWidth, imgHeight) {
  var img = '<svg xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + 'px" height="' + imgHeight + 'px" viewBox="0 0 ' + imgWidth + ' ' + imgHeight + '"><rect fill="none" width="' + imgWidth + '" height="' + imgHeight + '"/></svg>';
  var imgBase64 = btoa(img);
  return 'data:image/svg+xml;base64,' + imgBase64;
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
/*! exports provided: filterByAllowedValueKeys, getTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByAllowedValueKeys", function() { return filterByAllowedValueKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
var filterByAllowedValueKeys = function filterByAllowedValueKeys(mapArray, allowedValues) {
  var filteredValues = [];

  if (typeof allowedValues !== 'undefined' && allowedValues.length > 0) {
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
        d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M15,11H5V9h10V11z"
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
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M24.72,30.03 h-2.02v-1.89h2.02V30.03z M26.91,23.22c-0.39,0.58-0.9,1.12-1.52,1.61c-0.31,0.28-0.51,0.53-0.58,0.77s-0.11,0.6-0.11,1.07h-1.98 c0.01-0.79,0.09-1.35,0.26-1.67c0.17-0.32,0.56-0.74,1.16-1.25c0.43-0.42,0.77-0.82,1.02-1.18c0.24-0.37,0.37-0.78,0.37-1.25 c0-0.54-0.14-0.95-0.42-1.23s-0.69-0.43-1.22-0.43c-0.46,0-0.85,0.12-1.15,0.36c-0.31,0.24-0.46,0.61-0.46,1.1h-1.98 c0.01-1,0.34-1.77,1-2.31c0.66-0.54,1.52-0.8,2.59-0.8c1.16,0,2.05,0.29,2.68,0.86s0.94,1.38,0.94,2.43 C27.5,22.01,27.3,22.65,26.91,23.22z"
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
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M13,31h-1v-2h1V31z M13,27h-1 v-2h1V27z M13,23h-1v-2h1V23z M13,19h-1v-2h1V19z M27,26H14v-3h13V26z M36,31h-1v-2h1V31z M36,27h-1v-2h1V27z M36,23h-1v-2h1V23z M36,19h-1v-2h1V19z"
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
        d: "M39,18H9c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2v-8C41,18.9,40.1,18,39,18z M13,29h-1v-2h1V29z M13,25h-1 v-2h1V25z M13,21h-1v-2h1V21z M27,26H14v-3h13V26z M36,29h-1v-2h1V29z M36,25h-1v-2h1V25z M36,21h-1v-2h1V21z"
      }));
      break;

    case 'banner-column-row':
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
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M35,17h1v2h-1V17z M35,21h1v2 h-1V21z M35,25h1v2h-1V25z M14,21h13v3H14V21z M12,17h1v2h-1V17z M12,21h1v2h-1V21z M12,25h1v2h-1V25z M39,30H9v-2h30V30z"
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
        d: "M18.71,3.29C18.52,3.1,18.27,3,18,3H2C1.74,3,1.48,3.11,1.29,3.29C1.11,3.48,1,3.74,1,4v12c0,0.26,0.11,0.52,0.29,0.71 C1.48,16.89,1.74,17,2,17h16c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16V4C19,3.73,18.89,3.48,18.71,3.29z M17,15H3V5h14 V15z M6,12H5v2h1V12z M6,6H5v2h1V6z M6,9H5v2h1V9z M15,9h-1v2h1V9z M15,6h-1v2h1V6z M15,12h-1v2h1V12z"
      }));
      break;
    // banner

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
        d: "M2,17c-0.26,0-0.52-0.11-0.71-0.29l0,0C1.11,16.52,1,16.26,1,16l0,0V4c0-0.26,0.11-0.52,0.29-0.71l0,0 C1.48,3.11,1.74,3,2,3l0,0h16c0.27,0,0.52,0.1,0.71,0.29l0,0C18.89,3.48,19,3.73,19,4l0,0v12c0,0.27-0.1,0.52-0.29,0.71l0,0 C18.52,16.9,18.27,17,18,17l0,0H2L2,17z M18,16v-1V16L18,16z M3,15h14V5H3V15L3,15z"
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
      templateName = attributes.templateName;
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

  if (!!alignItems) {
    classNames.push('d-flex');

    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-' + alignItems);
    }
  }

  if (!!templateName == 'column-row-banner' && classNames.indexOf('d-flex') == -1) {
    classNames.push('d-flex');
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
  var imgSizes = attributes.imgSizes,
      imgSizeIndex = attributes.imgSizeIndex,
      portraitImgSizes = attributes.portraitImgSizes,
      portraitImgSizeIndex = attributes.portraitImgSizeIndex; // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";

  var srcsetJson = '[ ';
  responsivePortraitMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > skipIndex (no square format)
    var currentPortraitImgSizeIndex = parseInt(portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < portraitImgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + portraitImgSizes[currentPortraitImgSizeIndex].url + '\' }, ';
    }
  });
  responsiveMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > skipIndex (no square format)
    var currentImgSizeIndex = parseInt(imgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentImgSizeIndex > skipIndex && currentImgSizeIndex < imgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + imgSizes[currentImgSizeIndex].url + '\' }, ';
    }
  });

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
    imgSizes: {
      type: 'array',
      default: []
    },
    imgSizeIndex: {
      type: 'string',
      default: '6'
    },
    url: {
      type: 'string'
    },
    portraitImgId: {
      type: 'number'
    },
    portraitImgSizes: {
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
        imgSizeIndex = _props$attributes.imgSizeIndex,
        url = _props$attributes.url,
        portraitImgId = _props$attributes.portraitImgId,
        portraitImgSizes = _props$attributes.portraitImgSizes,
        portraitImgSizeIndex = _props$attributes.portraitImgSizeIndex,
        bannerType = _props$attributes.bannerType,
        bannerSize = _props$attributes.bannerSize,
        bgAttachment = _props$attributes.bgAttachment,
        bgAttachmentFixedLimited = _props$attributes.bgAttachmentFixedLimited,
        bgSize = _props$attributes.bgSize,
        bgPosition = _props$attributes.bgPosition,
        alignItems = _props$attributes.alignItems,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children;

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
        var newImgSizesData, newImgSizes, newImgSizeIndex;
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
                newImgSizesData = _context.sent;
                newImgSizes = newImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newImgSizeIndex = parseInt(imgSizeIndex);

                if (parseInt(imgSizeIndex) >= newImgSizes.length) {
                  newImgSizeIndex = newImgSizes.length - 1;
                }

                setAttributes({
                  imgId: img.id,
                  imgSizes: newImgSizes,
                  imgSizeIndex: newImgSizeIndex.toString(),
                  url: newImgSizes[newImgSizeIndex].url
                }); // console.log( 'url: ' + newImgSizes[ newImgSizeIndex ].url );

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
        var newPortraitImgSizesData, newPortraitImgSizes, newPortraitImgSizeIndex;
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
                newPortraitImgSizesData = _context2.sent;
                newPortraitImgSizes = newPortraitImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (parseInt(portraitImgSizeIndex) >= newPortraitImgSizes.length) {
                  newPortraitImgSizeIndex = newPortraitImgSizes.length - 1;
                } // console.log( 'newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex );


                setAttributes({
                  portraitImgId: portraitImg.id,
                  portraitImgSizes: newPortraitImgSizes,
                  portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                }); // console.log( 'portraitImgSizes[ portraitImgSizeIndex ].url: ' + newPortraitImgSizes[ newPortraitImgSizeIndex ].url );

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
      setAttributes({
        portraitImgId: '',
        portraitImgSizes: []
      });
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

    var onChangeImgSizeIndex = function onChangeImgSizeIndex(value) {
      setAttributes({
        imgSizeIndex: value.toString(),
        url: imgSizes[value].url
      });
    };

    var imgSizeRadioControlOptions = [];
    imgSizes.forEach(function (imgSize, index) {
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
    portraitImgSizes.forEach(function (portraitImgSize, index) {
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
      templateName: templateName
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      bgColor: bgColor,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, bannerClassName);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var TagName = nodeName;
    var bannerStyle = {
      backgroundImage: "url(".concat(url, ")")
    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner template', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["uiTemplateSelect"])(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], templateName, onChangeTemplate)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner image', 'bsx-blocks')
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadClickableImg"])(imgId, url, onSelectImage)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadButton"])(imgId, onSelectImage))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner portrait image (optional)', 'bsx-blocks')
    }, portraitImgId && typeof portraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof portraitImgSizes[portraitImgSizeIndex].url != 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["imgUploadClickableImg"])(portraitImgId, portraitImgSizes[portraitImgSizeIndex].url, onSelectPortraitImage, 'p')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
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
    }), typeof portraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof portraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: portraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner dimensions', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bannerTypeSelect"])(bannerType, onChangeBannerType), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bannerSizeSelect"])(bannerSize, onChangeBannerSize), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgAttachmentSelect"])(bgAttachment, onChangeBgAttachment), bgAttachment === 'fixed' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgAttachmentFixedLimitedToggle"])(bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited)), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["alignItemsSelect"])(alignItems, onChangeAlignItems, ['', 'center', 'end'])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Background', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgColorSelect"])(bgColor, onChangeBgColor)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["touchFooterToggle"])(touchFooter, onChangeTouchFooter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["nodeNameSelect"])(nodeName, onChangeNodeName, ['div', 'section']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgPositionSelect"])(bgPosition, onChangeBgPosition), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["bgSizeSelect"])(bgSize, onChangeBgSize), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
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
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        url = _props$attributes2.url,
        portraitImgId = _props$attributes2.portraitImgId,
        portraitImgSizes = _props$attributes2.portraitImgSizes,
        portraitImgSizeIndex = _props$attributes2.portraitImgSizeIndex,
        bannerType = _props$attributes2.bannerType,
        bannerSize = _props$attributes2.bannerSize,
        bgAttachment = _props$attributes2.bgAttachment,
        bgAttachmentFixedLimited = _props$attributes2.bgAttachmentFixedLimited,
        bgSize = _props$attributes2.bgSize,
        bgPosition = _props$attributes2.bgPosition,
        alignItems = _props$attributes2.alignItems,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter; // class names

    var bannerClassName = makeBannerClassNames({
      bannerType: bannerType,
      bannerSize: bannerSize,
      bgAttachment: bgAttachment,
      bgAttachmentFixedLimited: bgAttachmentFixedLimited,
      bgSize: bgSize,
      bgPosition: bgPosition,
      alignItems: alignItems,
      templateName: templateName
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      bgColor: bgColor,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, bannerClassName);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var srcsetJson = makeSrcsetJson({
      imgSizes: imgSizes,
      imgSizeIndex: imgSizeIndex,
      portraitImgSizes: portraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex
    }); // there might be no images at all, e.g. if background color banner

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_9__["makeSaveAttributes"])({
      'data-fn': imgId ? 'lazyload' : '',
      'data-src': imgId ? url : '',
      'data-srcset': imgId ? srcsetJson : ''
    });
    var TagName = nodeName;
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
    var className = props.className,
        _props$attributes = props.attributes,
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
    });
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
    var className = props.className,
        _props$attributes2 = props.attributes,
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
    });
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

var makeButtonClassNames = function makeButtonClassNames(attributes) {
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
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
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

    var checkEmail = isEmailFormat(href);
    var hrefIsEmail = checkEmail.valid; // const hrefIsEmailIsContent = checkEmail.valid && href == 'mailto:' + content;

    var hrefIsEmailIsContent = hrefIsEmail && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0); // exclude hrefIsEmailIsContent here to keep correct button title shown

    var buttonClassNames = makeButtonClassNames({
      state: state,
      stateType: stateType,
      size: size
    });
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, buttonClassNames); // get content if is empty since content is spam protected email, get content from href instead of from html

    if (!ignoreMailtoSpamProtection && !isSelected && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0 && hrefIsEmailIsContent) {
      setAttributes({
        content: href.substring(7)
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button link settings', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["linkUrlInput"])(href, onChangeHref), hrefIsEmail && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["ignoreMailtoSpamProtectionToggle"])(ignoreMailtoSpamProtection, onChangeIgnoreMailtoSpamProtection)), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["targetToggle"])(target, onChangeTarget), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["relInput"])(rel, onChangeRel), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["dataFnInput"])(dataFn, onChangeDataFn)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["stateSelect"])(state, onChangeState), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["stateTypeSelect"])(stateType, onChangeStateType), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__["sizeSelect"])(size, onChangeSize)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
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
    var className = props.className,
        _props$attributes2 = props.attributes,
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
        ignoreMailtoSpamProtection = _props$attributes2.ignoreMailtoSpamProtection;
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
    });
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, buttonClassNames); // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
    // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_5__["makeSaveAttributes"])({
      href: !(!ignoreMailtoSpamProtection && hrefIsEmail) ? href : 'javascript:void( 0 );',
      'data-fn': !ignoreMailtoSpamProtection && hrefIsEmail ? 'create-mt' : dataFn,
      'data-mt-n': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.name : '',
      'data-mt-d': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.domain : '',
      'data-mt-s': !ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.suffix : '',
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
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
    }];
    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      textAlign: textAlign,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      label: __('Alignment', 'bsx-blocks'),
      value: textAlign,
      onChange: onChangeTextAlign,
      alignmentControls: alignmentControls
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
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

  if (!!columnRowType) {
    classNames.push('column-row-' + columnRowType);
  } else {
    // default class name
    classNames.push('column-row');
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
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/column-rows/column-rows/templates.js");

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
  var display = attributes.display,
      flexDirection = attributes.flexDirection,
      width = attributes.width;
  var classNames = [];

  if (!!display) {
    classNames.push('d-' + display);
  }

  if (!!flexDirection) {
    classNames.push('flex-' + flexDirection);
  }

  if (!!width) {
    classNames.push('w-' + width);
  } // console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );


  return classNames.join(' ');
};

registerBlockType('bsx-blocks/column-rows', {
  title: __('BSX Column Rows', 'bsx-blocks'),
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
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 v-6h30V27z M39,19H9v-5h30V19z"
  })),
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
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var display = attributes.display,
        flexDirection = attributes.flexDirection,
        width = attributes.width;
    return {
      'data-display': display,
      'data-flexDirection': flexDirection,
      'data-width': width
    };
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        templateName = _props$attributes.templateName,
        display = _props$attributes.display,
        flexDirection = _props$attributes.flexDirection,
        width = _props$attributes.width,
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
      var currentTemplate = _templates__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var getTemplateLock = function getTemplateLock(currentTemplateName) {
      var currentTemplate = _templates__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (item) {
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

    var columnsRowsClassNames = makeColumnRowsClassNames({
      display: display,
      flexDirection: flexDirection,
      width: width
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Rows layout', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (template, index) {
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
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_1__["displaySelect"])(display, onChangeDisplay, ['', 'flex']), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Flex direction', 'bsx-blocks'),
      value: flexDirection,
      onChange: onChangeFlexDirection,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: 'column',
        label: __('Column', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Width', 'bsx-blocks'),
      value: width,
      onChange: onChangeWidth,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '100',
        label: __('100 %', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Column Rows template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, _templates__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (template, index) {
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



var makeContainerClassNames = function makeContainerClassNames(isFluid, containerBreakpoint) {
  var prefix = 'container';
  var classNames = [];

  if (isFluid) {
    if (containerBreakpoint === '') {
      classNames.push(prefix + '-fluid');
    } else {
      classNames.push(prefix + '-' + containerBreakpoint);
    }
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

    var containerClassName = makeContainerClassNames(isFluid, containerBreakpoint);
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, containerClassName);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Container Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Fluid container', 'bsx-blocks'),
      checked: !!isFluid,
      onChange: onChangeIsFluid,
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
      help: __('Spacer before element', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Below navbar', 'bsx-blocks'),
      checked: !!belowNavbar,
      onChange: onChangeBelowNavbar,
      help: __('Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
        paddingAfter = _props$attributes2.paddingAfter;
    var containerClassName = makeContainerClassNames(isFluid, containerBreakpoint);
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
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
/* harmony import */ var _img_gallery_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img-gallery/block.js */ "./src/img-gallery/block.js");
/* harmony import */ var _lazy_img_block_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-img/block.js */ "./src/lazy-img/block.js");
/* harmony import */ var _row_with_cols_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./row-with-cols/index.js */ "./src/row-with-cols/index.js");
/* harmony import */ var _section_block_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/block.js */ "./src/section/block.js");
/* harmony import */ var _slider_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider/block.js */ "./src/slider/block.js");
/* harmony import */ var _text_elements_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-elements/index.js */ "./src/text-elements/index.js");
/* harmony import */ var _wrapper_block_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapper/block.js */ "./src/wrapper/block.js");













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
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");




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
    Path = _wp$components.Path;




var responsivePortraitMediaIndexList = [{
  media: '(orientation: portrait) and (max-width: 499.98px)',
  imgSizeIndexShift: '-1',
  minImgSizeIndex: '1'
}, {
  media: '(orientation: portrait)',
  imgSizeIndexShift: '0',
  minImgSizeIndex: '2'
}];
var responsiveMediaIndexList = [{
  media: '(max-width: 459.98px)',
  imgSizeIndexShift: '-2',
  minImgSizeIndex: '1'
}, {
  media: '(max-width: 767.98px)',
  imgSizeIndexShift: '-1',
  minImgSizeIndex: '2'
}];
var skipIndex = 0;

var makeSourcesAttributesList = function makeSourcesAttributesList(attributes) {
  var imgSizes = attributes.imgSizes,
      imgSizeIndex = attributes.imgSizeIndex,
      responsiveMediaIndexList = attributes.responsiveMediaIndexList,
      portraitImgSizes = attributes.portraitImgSizes,
      portraitImgSizeIndex = attributes.portraitImgSizeIndex,
      responsivePortraitMediaIndexList = attributes.responsivePortraitMediaIndexList,
      skipIndex = attributes.skipIndex,
      disableResponsiveDownsizing = attributes.disableResponsiveDownsizing;
  var sourcesAttributesList = []; // portrait img

  responsivePortraitMediaIndexList.forEach(function (item, index) {
    var currentPortraitImgIndex = parseInt(portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);
    var adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentPortraitImgIndex;

    if (adaptedCurrentPortraitImgIndex < parseInt(portraitImgSizeIndex) && adaptedCurrentPortraitImgIndex > skipIndex && typeof portraitImgSizes[adaptedCurrentPortraitImgIndex] != 'undefined' && typeof portraitImgSizes[adaptedCurrentPortraitImgIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: item.media,
        srcset: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_4__["makeBase64PreloadImgSrc"])(portraitImgSizes[adaptedCurrentPortraitImgIndex].width, portraitImgSizes[adaptedCurrentPortraitImgIndex].height),
        'data-srcset': portraitImgSizes[adaptedCurrentPortraitImgIndex].url,
        'data-width': portraitImgSizes[adaptedCurrentPortraitImgIndex].width,
        'data-height': portraitImgSizes[adaptedCurrentPortraitImgIndex].height
      });
    }
  }); // default img

  responsiveMediaIndexList.forEach(function (item, index) {
    var currentImgIndex = parseInt(imgSizeIndex) + parseInt(item.imgSizeIndexShift);
    var adaptedCurrentImgIndex = currentImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentImgIndex;

    if (!disableResponsiveDownsizing && adaptedCurrentImgIndex < parseInt(imgSizeIndex) && adaptedCurrentImgIndex > skipIndex && typeof imgSizes[adaptedCurrentImgIndex] != 'undefined' && typeof imgSizes[adaptedCurrentImgIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: item.media,
        srcset: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_4__["makeBase64PreloadImgSrc"])(imgSizes[adaptedCurrentImgIndex].width, imgSizes[adaptedCurrentImgIndex].height),
        'data-srcset': imgSizes[adaptedCurrentImgIndex].url,
        'data-width': imgSizes[adaptedCurrentImgIndex].width,
        'data-height': imgSizes[adaptedCurrentImgIndex].height
      });
    }
  });
  return sourcesAttributesList;
};

registerBlockType('bsx-blocks/lazy-img', {
  title: __('BSX Lazy Image', 'bsx-blocks'),
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_5__["svgIcon"])('lazy-img'),
  category: 'layout',
  attributes: {
    hasFigure: {
      boolean: 'string',
      default: true
    },
    imgSizes: {
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
    url: {
      type: 'string'
    },
    width: {
      type: 'number'
    },
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
    portraitImgSizes: {
      type: 'array',
      default: []
    },
    portraitImgSizeIndex: {
      type: 'string',
      default: '3'
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
    zoomImgSizeIndex: {
      type: 'string'
    },
    disableResponsiveDownsizing: {
      type: 'boolean'
    },
    textAlign: {
      type: 'string',
      default: ''
    },
    marginAfter: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        imgId = _props$attributes.imgId,
        imgSizes = _props$attributes.imgSizes,
        imgSizeIndex = _props$attributes.imgSizeIndex,
        url = _props$attributes.url,
        width = _props$attributes.width,
        height = _props$attributes.height,
        origWidth = _props$attributes.origWidth,
        origHeight = _props$attributes.origHeight,
        portraitImgId = _props$attributes.portraitImgId,
        portraitImgSizes = _props$attributes.portraitImgSizes,
        portraitImgSizeIndex = _props$attributes.portraitImgSizeIndex,
        alt = _props$attributes.alt,
        figcaption = _props$attributes.figcaption,
        rounded = _props$attributes.rounded,
        imgThumbnail = _props$attributes.imgThumbnail,
        borderState = _props$attributes.borderState,
        zoomable = _props$attributes.zoomable,
        zoomImgSizeIndex = _props$attributes.zoomImgSizeIndex,
        disableResponsiveDownsizing = _props$attributes.disableResponsiveDownsizing,
        textAlign = _props$attributes.textAlign,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        setState = props.setState;

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(img) {
        var newImgSizesData, newImgSizes, originalWidth, originalHeight, newImgSizeIndex, newLowestSrcsetImgSizeIndex, newZoomImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_4__["getImgSizesData"])(img);

              case 3:
                newImgSizesData = _context.sent;
                newImgSizes = newImgSizesData.imgs;
                originalWidth = newImgSizesData.originalWidth;
                originalHeight = newImgSizesData.originalHeight; // TEST
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

                if (parseInt(imgSizeIndex) >= newImgSizes.length) {
                  newImgSizeIndex = newImgSizes.length - 1; // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                } // do not use thumbnail for srcset if has square format, start with img sizes index 1 then


                newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1; // check if current zoom img size index fits to new img (might be too large) or is unset

                newZoomImgSizeIndex = zoomImgSizeIndex;

                if (!zoomImgSizeIndex || parseInt(zoomImgSizeIndex) < parseInt(newImgSizeIndex) || parseInt(zoomImgSizeIndex) >= parseInt(newImgSizes.length)) {
                  newZoomImgSizeIndex = (newImgSizes.length - 1).toString();
                }

                setAttributes({
                  imgId: img.id,
                  imgSizes: newImgSizes,
                  imgSizeIndex: newImgSizeIndex.toString(),
                  url: newImgSizes[newImgSizeIndex].url,
                  width: parseInt(newImgSizes[newImgSizeIndex].width),
                  height: parseInt(newImgSizes[newImgSizeIndex].height),
                  origWidth: originalWidth,
                  origHeight: originalHeight,
                  alt: img.alt,
                  zoomImgSizeIndex: newZoomImgSizeIndex
                }); // TEST – TODO: remove
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
        var newPortraitImgSizesData, newPortraitImgSizes, newPortraitImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof portraitImg.url !== 'undefined')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_4__["getImgSizesData"])(portraitImg);

              case 3:
                newPortraitImgSizesData = _context2.sent;
                newPortraitImgSizes = newPortraitImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (parseInt(portraitImgSizeIndex) >= newPortraitImgSizes.length) {
                  newPortraitImgSizeIndex = newPortraitImgSizes.length - 1;
                }

                setAttributes({
                  portraitImgId: portraitImg.id,
                  portraitImgSizes: newPortraitImgSizes,
                  portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
                });

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
      setAttributes({
        portraitImgId: '',
        portraitImgSizes: []
      });
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

    var onChangeImgWidth = function onChangeImgWidth(value) {
      setAttributes({
        width: parseInt(value)
      });
    };

    var onChangeImgHeight = function onChangeImgHeight(value) {
      setAttributes({
        height: parseInt(value)
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
          zoomImgSizeIndex: (imgSizes.length - 1).toString()
        });
      } else {
        setAttributes({
          zoomable: value
        });
      }
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
    }];

    var onChangeImgSizeIndex = function onChangeImgSizeIndex(value) {
      setAttributes({
        imgSizeIndex: value.toString(),
        url: imgSizes[value].url,
        width: parseInt(imgSizes[value].width),
        height: parseInt(imgSizes[value].height)
      });
    };

    var imgSizeRadioControlOptions = [];
    imgSizes.forEach(function (imgSize, index) {
      imgSizeRadioControlOptions.push({
        value: index.toString(),
        label: imgSize.width + 'x' + imgSize.height + (imgSizes[imgSizes.length - 1].width !== imgSizes[imgSizes.length - 1].height && imgSize.width === imgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
      });
    });

    var onChangePortraitImgSizeIndex = function onChangePortraitImgSizeIndex(value) {
      setAttributes({
        portraitImgSizeIndex: value.toString()
      });
    };

    var portraitImgSizeRadioControlOptions = [];
    portraitImgSizes.forEach(function (portraitImgSize, index) {
      portraitImgSizeRadioControlOptions.push({
        value: index.toString(),
        label: portraitImgSize.width + 'x' + portraitImgSize.height + (portraitImgSizes[portraitImgSizes.length - 1].width !== portraitImgSizes[portraitImgSizes.length - 1].height && portraitImgSize.width === portraitImgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
      });
    });
    var zoomImgSizeRadioControlOptions = [];
    imgSizes.forEach(function (imgSize, index) {
      if (index >= imgSizeIndex) {
        zoomImgSizeRadioControlOptions.push({
          value: index.toString(),
          label: imgSize.width + 'x' + imgSize.height + (imgSizes[imgSizes.length - 1].width !== imgSizes[imgSizes.length - 1].height && imgSize.width === imgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
        });
      }
    }); // prepare img sources attributes

    var sourcesAttributesList = makeSourcesAttributesList({
      imgSizes: imgSizes,
      imgSizeIndex: imgSizeIndex,
      responsiveMediaIndexList: responsiveMediaIndexList,
      portraitImgSizes: portraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
      skipIndex: skipIndex,
      disableResponsiveDownsizing: disableResponsiveDownsizing
    }); // class names

    var classNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    });
    var imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, 'img-fluid'); // image

    var image = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", null, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: url,
      alt: alt
    }));
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(AlignmentToolbar, {
      label: __('Alignment', 'bsx-blocks'),
      value: textAlign,
      onChange: onChangeTextAlign,
      alignmentControls: alignmentControls
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
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
          src: url,
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
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
      class: "bsxui-link",
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed image width', 'bsx-blocks'),
      value: width,
      onChange: onChangeImgWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed image height', 'bsx-blocks'),
      value: height,
      onChange: onChangeImgHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
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
    }, portraitImgId && typeof portraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof portraitImgSizes[portraitImgSizeIndex].url != 'undefined' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
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
          src: portraitImgSizes[portraitImgSizeIndex].url,
          alt: __('Change / upload portrait image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, !!zoomable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, "Portrait image is deactivated since zoomable image is set.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No portrait image selected yet –', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          disabled: !!zoomable,
          onClick: open,
          isSecondary: true
        }, __('Change / upload portrait image', 'bsx-blocks'));
      }
    })), portraitImgId && typeof portraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof portraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
      onClick: onDeletePortraitImage,
      isDestructive: true
    }, __('Remove portrait image', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: portraitImgSizeIndex.toString(),
      options: portraitImgSizeRadioControlOptions,
      onChange: onChangePortraitImgSizeIndex
    }), typeof portraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof portraitImgSizes[portraitImgSizeIndex].url != 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
      class: "bsxui-link",
      href: portraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Zoomable (optional)', 'bsx-blocks')
    }, portraitImgSizes.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-alert"
    }, "Zoomable image is deactivated since portrait image is set.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      className: portraitImgSizes.length > 0 ? 'bsxui-disabled' : '',
      label: __('Zoomable image', 'bsx-blocks'),
      checked: !!zoomable,
      onChange: onChangeZoomable,
      help: __('If enabled click on image will open shadowbox with large image.', 'bsx-blocks')
    }), zoomable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
      label: __('Zoom image size', 'bsx-blocks'),
      selected: zoomImgSizeIndex,
      options: zoomImgSizeRadioControlOptions,
      onChange: onChangeZoomImgSizeIndex
    }), imgSizeIndex == zoomImgSizeIndex && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('Currently your zoom image is not larger than your original image.', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
      label: __('Disable responsive image downsizing', 'bsx-blocks'),
      checked: !!disableResponsiveDownsizing,
      onChange: onChangeDisableResponsiveDownsizing,
      help: __('Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'bsx-blocks')
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
    var className = props.className,
        _props$attributes2 = props.attributes,
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        imgSizes = _props$attributes2.imgSizes,
        url = _props$attributes2.url,
        width = _props$attributes2.width,
        height = _props$attributes2.height,
        origWidth = _props$attributes2.origWidth,
        origHeight = _props$attributes2.origHeight,
        portraitImgId = _props$attributes2.portraitImgId,
        portraitImgSizes = _props$attributes2.portraitImgSizes,
        portraitImgSizeIndex = _props$attributes2.portraitImgSizeIndex,
        alt = _props$attributes2.alt,
        figcaption = _props$attributes2.figcaption,
        rounded = _props$attributes2.rounded,
        imgThumbnail = _props$attributes2.imgThumbnail,
        borderState = _props$attributes2.borderState,
        zoomable = _props$attributes2.zoomable,
        zoomImgSizeIndex = _props$attributes2.zoomImgSizeIndex,
        disableResponsiveDownsizing = _props$attributes2.disableResponsiveDownsizing,
        textAlign = _props$attributes2.textAlign,
        marginAfter = _props$attributes2.marginAfter; // prepare img sources attributes

    var sourcesAttributesList = makeSourcesAttributesList({
      imgSizes: imgSizes,
      imgSizeIndex: imgSizeIndex,
      responsiveMediaIndexList: responsiveMediaIndexList,
      portraitImgSizes: portraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
      skipIndex: skipIndex,
      disableResponsiveDownsizing: disableResponsiveDownsizing
    }); // class names

    var classNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      textAlign: textAlign,
      marginAfter: marginAfter
    });
    var imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_6__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, 'img-fluid'); // allow zoomable img

    /*
    <div class="float-md-right grid-float-md-6" data-fn="photoswipe">
        <figure>
            <a class="d-inline-block zoomable-img" href="example-img-006-1440x720.jpg" data-size="1440x720">
                <script>document.write('<img class="img-fluid" src="" width="760" height="380" data-fn="lazyload" data-src="example-img-006-1440x720-thumb.jpg" alt="Image 6">');</script>
                <noscript><img class="img-fluid" src="example-img-006-1440x720-thumb.jpg" alt="Image 6"></noscript>
            </a>
            <figcaption>
                Donec pede justo, fringilla vel
            </figcaption>
        </figure>
    </div>
    */
    // attributes

    var saveAttributes = !zoomable ? {} : Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_7__["makeSaveAttributes"])({
      'data-fn': 'photoswipe'
    }); // TODO: manage zoomImgSizeIndex

    var aSaveAttributes = zoomable && typeof imgSizes[zoomImgSizeIndex] != 'undefined' ? Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_7__["makeSaveAttributes"])({
      'href': imgSizes[zoomImgSizeIndex].url,
      'data-size': imgSizes[zoomImgSizeIndex].width + 'x' + imgSizes[zoomImgSizeIndex].height
    }) : {};
    var image = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", null, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_4__["makeBase64PreloadImgSrc"])(width, height),
      alt: alt,
      "data-src": url,
      width: width,
      height: height,
      "data-fn": "lazyload"
    })), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: imgClassName,
      src: url,
      alt: alt,
      width: width,
      height: height
    })));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classNames
    }, saveAttributes), url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, zoomable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: 'zoomable-img'
    }, aSaveAttributes), image) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, image), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "font-italic",
      value: figcaption
    })));
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
    }; // class name


    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      marginBefore: marginBefore,
      marginAfter: marginAfter
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
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_7__["touchFooterToggle"])(touchFooter, onChangeTouchFooter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
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
        marginAfter = _props$attributes2.marginAfter;
    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      belowNavbar: belowNavbar,
      touchFooter: touchFooter,
      marginBefore: marginBefore,
      marginAfter: marginAfter
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
  }]]]]]]]],
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
  }]]]]]]]]]],
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
  }]]]]]]]]]],
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
      default: 'columns'
    },
    // imgList: { // TODO: maybe do later?
    //     type: 'array',
    //     default: [],
    // },
    itemData: {
      type: 'array',
      source: 'query',
      selector: '.item',
      query: {
        imgId: {
          type: 'string',
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
        } // url: {
        //     type: 'string',
        //     source: 'attribute',
        //     selector: 'a',
        //     attribute: 'href',
        // },
        // size: {
        //     type: 'string',
        //     source: 'attribute',
        //     selector: 'a',
        //     attribute: 'data-size',
        // },

      },
      default: []
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
        itemData = _props$attributes.itemData,
        prevText = _props$attributes.prevText,
        nextText = _props$attributes.nextText,
        rounded = _props$attributes.rounded,
        imgThumbnail = _props$attributes.imgThumbnail,
        borderState = _props$attributes.borderState,
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
    // update itemData all `item` at position `index`

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
      setAttributes({
        sliderType: value
      });
    };

    var onChangeImg = function onChangeImg(index, img) {
      updateItemDataItem(index, {
        imgId: img.id,
        imgUrl: img.sizes.thumbnail.url,
        imgWidth: img.sizes.thumbnail.width,
        imgHeight: img.sizes.thumbnail.height,
        imgAlt: img.alt,
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

    var onChangeFooterText_1 = function onChangeFooterText_1(index, value) {
      updateItemDataValue(index, 'footerText_1', value);
    };

    var onChangeFooterText_2 = function onChangeFooterText_2(index, value) {
      updateItemDataValue(index, 'footerText_2', value);
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
    }, imgClassName);
    var itemClassName = 'item d-block text-center';
    var textClassName = 'h4 font-weight-normal font-italic mb-4';
    var footer1ClassName = 'font-weight-bold text-uppercase';
    var footer2ClassName = '';
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
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Prev button text', 'bsx-blocks'),
      value: prevText,
      onChange: onChangePrevText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Next button text', 'bsx-blocks'),
      value: nextText,
      onChange: onChangeNextText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Image appearance', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Rounded', 'bsx-blocks'),
      checked: !!rounded ? 'circle' : '',
      onChange: onChangeRounded
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Border', 'bsx-blocks'),
      checked: !!imgThumbnail,
      onChange: onChangeImgThumbnail
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: sliderWrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, itemData.map(function (item, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
        value: item.id,
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
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
      }, Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_3__["svgIcon"])('trash')))));
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
        itemData = _props$attributes2.itemData,
        prevText = _props$attributes2.prevText,
        nextText = _props$attributes2.nextText,
        rounded = _props$attributes2.rounded,
        imgThumbnail = _props$attributes2.imgThumbnail,
        borderState = _props$attributes2.borderState,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter; // class names

    var sliderWrapperClassName = makeClassName({
      sliderType: sliderType
    });
    sliderWrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, sliderWrapperClassName);
    var sliderClassName = 'owl-carousel owl-theme outer-nav nav-lg';
    var imgClassName = 'img-fluid';
    imgClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_4__["addClassNames"])({
      rounded: rounded,
      imgThumbnail: imgThumbnail,
      borderState: borderState
    }, imgClassName);
    var itemClassName = 'item d-block text-center';
    var textClassName = 'h4 font-weight-normal font-italic mb-4';
    var footer1ClassName = 'font-weight-bold text-uppercase';
    var footer2ClassName = '';
    var TagName = 'div';
    var prevLabel = !!prevText ? prevText : __('Prev', 'bsx-blocks');
    var nextLabel = !!nextText ? nextText : __('Next', 'bsx-blocks');
    var prevHtml = '<i class="fa fa-chevron-left" aria-label="' + prevLabel + '"></i>';
    var nextHtml = '<i class="fa fa-chevron-right" aria-label="' + nextLabel + '"></i>';
    var options = "{ lazyLoad: false, multiLazyload: true, responsive: { 0: { items: 1 } }, margin: 0, encodeUriNavText: [ '" + encodeURI(prevHtml) + "', '" + encodeURI(nextHtml) + "' ], navClass: [ 'btn btn-link is-prev', 'btn btn-link is-next' ] }"; // makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight )

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TagName, {
      className: sliderWrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: sliderClassName,
      "data-fn": "owl-carousel",
      "data-fn-options": options
    }, itemData.map(function (item, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
      })));
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

var makeBadgeClassNames = function makeBadgeClassNames(attributes) {
  var state = attributes.state,
      badgeType = attributes.badgeType;
  var classNames = ['badge'];

  if (!!state) {
    classNames.push('badge-' + state);
  }

  if (!!badgeType) {
    classNames.push('badge-' + badgeType);
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
      selector: '.badge'
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
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        href = _props$attributes.href,
        content = _props$attributes.content,
        state = _props$attributes.state,
        badgeType = _props$attributes.badgeType,
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

    var badgeClassNames = makeBadgeClassNames({
      state: state,
      badgeType: badgeType
    });
    badgeClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, badgeClassNames);
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginLeftSelect"])(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginRightSelect"])(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_5__["marginAfterSelect"])(marginAfter, onChangeMarginAfter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: href ? 'a' : 'span',
      className: badgeClassNames,
      multiline: false,
      placeholder: __('Add Text...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true,
      href: 'javascript:void( 0 );'
    }))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        href = _props$attributes2.href,
        content = _props$attributes2.content,
        state = _props$attributes2.state,
        badgeType = _props$attributes2.badgeType,
        marginLeft = _props$attributes2.marginLeft,
        marginRight = _props$attributes2.marginRight,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var badgeClassNames = makeBadgeClassNames({
      state: state,
      badgeType: badgeType
    });
    badgeClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, badgeClassNames);
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: href // target: target, 
      // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',

    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tagName: href ? 'a' : 'span',
      value: content,
      className: badgeClassNames
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


/***/ }),

/***/ "./src/wrapper/block.js":
/*!******************************!*\
  !*** ./src/wrapper/block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/wp-icons.js */ "./src/_functions/wp-icons.js");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");

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
  icon: Object(_functions_wp_icons_js__WEBPACK_IMPORTED_MODULE_1__["svgIcon"])('wrapper'),
  category: 'layout',
  attributes: {
    nodeName: {
      type: 'string',
      default: 'div'
    },
    id: {
      type: 'string'
    },
    dataFn: {
      type: 'string'
    },
    dataTg: {
      type: 'string'
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
      type: 'string',
      default: ''
    },
    width: {
      type: 'string'
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
    paddingLeft: {
      type: 'string',
      default: ''
    },
    paddingRight: {
      type: 'string',
      default: ''
    },
    touchFooter: {
      type: 'boolean'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var textAlign = attributes.textAlign,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter;
    return {
      'data-text-align': textAlign,
      'data-margin-before': marginBefore,
      'data-margin-after': marginAfter
    };
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        nodeName = _props$attributes.nodeName,
        id = _props$attributes.id,
        dataFn = _props$attributes.dataFn,
        dataTg = _props$attributes.dataTg,
        belowNavbar = _props$attributes.belowNavbar,
        bgColor = _props$attributes.bgColor,
        textColor = _props$attributes.textColor,
        textSize = _props$attributes.textSize,
        textAlign = _props$attributes.textAlign,
        textShadow = _props$attributes.textShadow,
        fontWeight = _props$attributes.fontWeight,
        inverseTextColor = _props$attributes.inverseTextColor,
        headingInheritTextColor = _props$attributes.headingInheritTextColor,
        headingInheritFontWeight = _props$attributes.headingInheritFontWeight,
        width = _props$attributes.width,
        rounded = _props$attributes.rounded,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        paddingLeft = _props$attributes.paddingLeft,
        paddingRight = _props$attributes.paddingRight,
        touchFooter = _props$attributes.touchFooter,
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

    var onChangeTouchFooter = function onChangeTouchFooter(value) {
      setAttributes({
        touchFooter: value
      });
    };

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
    }];
    var wrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      bgColor: bgColor,
      textColor: textColor,
      textSize: textSize,
      rounded: rounded,
      textAlign: textAlign,
      textShadow: textShadow,
      fontWeight: fontWeight,
      inverseTextColor: inverseTextColor,
      headingInheritTextColor: headingInheritTextColor,
      headingInheritFontWeight: headingInheritFontWeight,
      width: width,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      touchFooter: touchFooter
    });
    var TagName = nodeName;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      label: __('Alignment', 'bsx-blocks'),
      value: textAlign,
      onChange: onChangeTextAlign,
      alignmentControls: alignmentControls
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Color & appearance', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["bgColorSelect"])(bgColor, onChangeBgColor), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Text color (optional)', 'bsx-blocks'),
      value: textColor,
      onChange: onChangeTextColor,
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
      }, {
        value: 'white-50',
        label: __('White transparent', 'bsx-blocks')
      }, {
        value: 'black-50',
        label: __('Black transparent', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Text size (optional)', 'bsx-blocks'),
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
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["textShadowSelect"])(textShadow, onChangeTextShadow), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["fontWeightSelect"])(fontWeight, onChangeFontWeight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["inverseTextColorToggle"])(inverseTextColor, onChangeInverseTextColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["headingInheritTextColorToggle"])(headingInheritTextColor, onChangeHeadingInheritTextColor), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["headingInheritFontWeightToggle"])(headingInheritFontWeight, onChangeHeadingInheritFontWeight), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Rounded', 'bsx-blocks'),
      checked: !!rounded,
      onChange: onChangeRounded
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginBeforeSelect"])(marginBefore, onChangeMarginBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["marginAfterSelect"])(marginAfter, onChangeMarginAfter)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Padding', 'bsx-blocks')
    }, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingBeforeSelect"])(paddingBefore, onChangePaddingBefore), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingAfterSelect"])(paddingAfter, onChangePaddingAfter), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingLeftSelect"])(paddingLeft, onChangePaddingLeft), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["paddingRightSelect"])(paddingRight, onChangePaddingRight))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Node name', 'bsx-blocks'),
      value: nodeName,
      onChange: onChangeNodeName,
      options: [{
        value: 'div',
        label: __('div', 'bsx-blocks')
      }, {
        value: 'section',
        label: __('section', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Width', 'bsx-blocks'),
      value: width,
      onChange: onChangeWidth,
      options: [{
        value: '',
        label: __('– unset –', 'bsx-blocks')
      }, {
        value: '100',
        label: __('100 %', 'bsx-blocks')
      }]
    }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_3__["touchFooterToggle"])(touchFooter, onChangeTouchFooter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, {
      className: wrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        nodeName = _props$attributes2.nodeName,
        id = _props$attributes2.id,
        dataFn = _props$attributes2.dataFn,
        dataTg = _props$attributes2.dataTg,
        belowNavbar = _props$attributes2.belowNavbar,
        bgColor = _props$attributes2.bgColor,
        textColor = _props$attributes2.textColor,
        textSize = _props$attributes2.textSize,
        textAlign = _props$attributes2.textAlign,
        textShadow = _props$attributes2.textShadow,
        fontWeight = _props$attributes2.fontWeight,
        inverseTextColor = _props$attributes2.inverseTextColor,
        headingInheritTextColor = _props$attributes2.headingInheritTextColor,
        headingInheritFontWeight = _props$attributes2.headingInheritFontWeight,
        width = _props$attributes2.width,
        rounded = _props$attributes2.rounded,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter,
        paddingLeft = _props$attributes2.paddingLeft,
        paddingRight = _props$attributes2.paddingRight,
        touchFooter = _props$attributes2.touchFooter,
        setAttributes = props.setAttributes;
    var wrapperClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
      belowNavbar: belowNavbar,
      bgColor: bgColor,
      textColor: textColor,
      textSize: textSize,
      rounded: rounded,
      textAlign: textAlign,
      textShadow: textShadow,
      fontWeight: fontWeight,
      inverseTextColor: inverseTextColor,
      headingInheritTextColor: headingInheritTextColor,
      headingInheritFontWeight: headingInheritFontWeight,
      width: width,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      touchFooter: touchFooter
    });
    var TagName = nodeName;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, {
      className: wrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
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