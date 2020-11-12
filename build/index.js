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
// let config = { 
//     belowNavbar, 
//     marginBefore, 
//     marginAfter, 
//     marginLeft,
//     marginRight,
//     paddingBefore, 
//     paddingAfter, 
//     paddingLeft, 
//     paddingRight,
//     bgColor, 
//     textColor, 
//     rounded, 
//     textAlign,
// }
function addClassNames(config, classNamesString) {
  var classNames = typeof classNamesString != 'undefined' ? classNamesString.split(' ') : [];

  if (!!config.belowNavbar) {
    classNames.push('below-navbar-content');
  }

  if (!!config.marginBefore && config.marginBefore === config.marginAfter && config.marginBefore === config.marginLeft && config.marginBefore === config.marginRight) {
    // all
    classNames.push('m-' + config.marginBefore);
  } else {
    // top & bottom
    if (!!config.marginBefore && config.marginBefore === config.marginAfter) {
      classNames.push('my-' + config.marginBefore);
    } else {
      if (!!config.marginBefore) {
        classNames.push('mt-' + config.marginBefore);
      }

      if (!!config.marginAfter) {
        classNames.push('mb-' + config.marginAfter);
      }
    } // left & right


    if (!!config.marginLeft && config.marginLeft === config.marginRight) {
      classNames.push('mx-' + config.marginLeft);
    } else {
      if (!!config.marginLeft) {
        classNames.push('ml-' + config.marginLeft);
      }

      if (!!config.marginRight) {
        classNames.push('mr-' + config.marginRight);
      }
    }
  }

  if (!!config.paddingBefore && config.paddingBefore === config.paddingAfter && config.paddingBefore === config.paddingLeft && config.paddingBefore === config.paddingRight) {
    // all
    classNames.push('p-' + config.paddingBefore);
  } else {
    // top & bottom
    if (!!config.paddingBefore && config.paddingBefore === config.paddingAfter) {
      classNames.push('py-' + config.paddingBefore);
    } else {
      // top
      if (!!config.paddingBefore) {
        classNames.push('pt-' + config.paddingBefore);
      } // bottom


      if (!!config.paddingAfter) {
        classNames.push('pb-' + config.paddingAfter);
      }
    } // left & right


    if (!!config.paddingLeft && config.paddingLeft === config.paddingRight) {
      classNames.push('px-' + config.paddingLeft);
    } else {
      // left
      if (!!config.paddingLeft) {
        classNames.push('pt-' + config.paddingLeft);
      } // right


      if (!!config.paddingRight) {
        classNames.push('pb-' + config.paddingRight);
      }
    }
  }

  if (!!config.bgColor) {
    classNames.push('bg-' + config.bgColor);
  }

  if (!!config.textColor) {
    classNames.push('text-' + config.textColor);
  }

  if (!!config.rounded) {
    classNames.push('rounded');
  }

  if (!!config.textAlign) {
    classNames.push('text-' + config.textAlign);
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

/***/ "./src/_functions/img.js":
/*!*******************************!*\
  !*** ./src/_functions/img.js ***!
  \*******************************/
/*! exports provided: getUrlTruncAndExtension, fullImgIsScaled, getOriginalImgUrl, getSizesAndWithoutSizesTruncFromUrlTrunc, makeSizedImgs, getImgWidthHeight, imgExists, getImgSizesData */
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
  var ratio = config.originalWidth / config.originalHeight;
  var urlTruncAndExtension = getUrlTruncAndExtension(config.url);
  var fileExtension = urlTruncAndExtension.extension;
  var urlWithoutFileExtension = urlTruncAndExtension.trunc;
  var sizesAndWithoutSizesTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  var width = sizesAndWithoutSizesTrunc.width;
  var urlWithoutSizesAndFileExtension = sizesAndWithoutSizesTrunc.withoutSizesTrunc;
  var returnList = [];
  config.scaleList.forEach(function (scale, index) {
    // calculate new size
    var scaledWidth = Math.round(width * scale); // check if default size exists for current img (only if original img is larger)

    if (scaledWidth <= config.originalWidth) {
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
} // export async function getOriginalImgSizes( img ) {
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
              _context2.next = 32;
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
            });

          case 32:
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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var withSelect = wp.data.withSelect;


 // functions

var makeBannerClassNames = function makeBannerClassNames(config) {
  var classNames = [];

  if (true) {
    // always set bannerType and bannerSize to keep debugging easy
    classNames.push('banner-' + config.bannerType + '-' + config.bannerSize);
  }

  if (!!config.bgAttachment) {
    classNames.push('bg-' + config.bgAttachment);
  }

  if (!!config.bgSize) {
    classNames.push('bg-' + config.bgSize);
  }

  if (!!config.bgPosition) {
    classNames.push('bg-' + config.bgPosition);
  }

  if (!!config.alignItems) {
    classNames.push('d-flex');

    if (config.templateName !== 'column-row-banner') {
      classNames.push('align-items-' + config.alignItems);
    }
  }

  if (!!config.templateName && config.templateName == 'column-row-banner' && classNames.indexOf('d-flex') == -1) {
    classNames.push('d-flex');
  }

  return classNames.join(' ');
};

var makeBannerInnerClassNames = function makeBannerInnerClassNames(config) {
  var classNames = ['banner-inner'];

  if (!!config.templateName && config.templateName == 'column-row-banner') {
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

var makeSrcsetJson = function makeSrcsetJson(config) {
  // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + config.imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + config.imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
  var srcsetJson = '[ ';
  responsivePortraitMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > skipIndex (no square format)
    var currentPortraitImgSizeIndex = parseInt(config.portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < config.portraitImgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + config.portraitImgSizes[currentPortraitImgSizeIndex].url + '\' }, ';
    }
  });
  responsiveMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > skipIndex (no square format)
    var currentImgSizeIndex = parseInt(config.imgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentImgSizeIndex > skipIndex && currentImgSizeIndex < config.imgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + config.imgSizes[currentImgSizeIndex].url + '\' }, ';
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
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("path", {
    d: "M17,5H3C1.9,5,1,5.9,1,7v6c0,1.11,0.9,2,2,2h14c1.1,0,2-0.89,2-2V7C19,5.9,18.1,5,17,5z M4.5,7C5.33,7,6,7.67,6,8.5 C6,9.33,5.33,10,4.5,10C3.67,10,3,9.33,3,8.5C3,7.67,3.67,7,4.5,7z M17,13H3l-0.02-1L7,10l2,1l5-3l3,2V13z"
  })),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    belowNavbar: {
      type: 'boolean',
      default: false
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
        templateName = _props$attributes.templateName,
        belowNavbar = _props$attributes.belowNavbar,
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

    var templates = [{
      name: 'empty',
      title: __('Empty', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M24.72,30.03 h-2.02v-1.89h2.02V30.03z M26.91,23.22c-0.39,0.58-0.9,1.12-1.52,1.61c-0.31,0.28-0.51,0.53-0.58,0.77s-0.11,0.6-0.11,1.07h-1.98 c0.01-0.79,0.09-1.35,0.26-1.67c0.17-0.32,0.56-0.74,1.16-1.25c0.43-0.42,0.77-0.82,1.02-1.18c0.24-0.37,0.37-0.78,0.37-1.25 c0-0.54-0.14-0.95-0.42-1.23s-0.69-0.43-1.22-0.43c-0.46,0-0.85,0.12-1.15,0.36c-0.31,0.24-0.46,0.61-0.46,1.1h-1.98 c0.01-1,0.34-1.77,1-2.31c0.66-0.54,1.52-0.8,2.59-0.8c1.16,0,2.05,0.29,2.68,0.86s0.94,1.38,0.94,2.43 C27.5,22.01,27.3,22.65,26.91,23.22z"
      })),
      attributes: {
        marginAfter: '5'
      },
      template: [['core/paragraph', {
        placeholder: 'Change paragraph text or delete...'
      }]],
      templateLock: false
    }, {
      name: 'container-with-heading',
      title: __('Container with Heading', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M13,31h-1v-2h1V31z M13,27h-1 v-2h1V27z M13,23h-1v-2h1V23z M13,19h-1v-2h1V19z M27,26H14v-3h13V26z M36,31h-1v-2h1V31z M36,27h-1v-2h1V27z M36,23h-1v-2h1V23z M36,19h-1v-2h1V19z"
      })),
      attributes: {
        marginAfter: '5'
      },
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading text, configure heading level...',
        textSize: 'display-1',
        textColor: 'white',
        textShadow: 'darker',
        marginAfter: '0'
      }]]]],
      templateLock: false
    }, {
      name: 'static-container-with-heading',
      title: __('Static with Container & Heading', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("path", {
        d: "M39,18H9c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2v-8C41,18.9,40.1,18,39,18z M13,29h-1v-2h1V29z M13,25h-1 v-2h1V25z M13,21h-1v-2h1V21z M27,26H14v-3h13V26z M36,29h-1v-2h1V29z M36,25h-1v-2h1V25z M36,21h-1v-2h1V21z"
      })),
      attributes: {
        bannerType: 'st',
        bannerSize: '3',
        marginAfter: '5'
      },
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading text, configure heading level...',
        textSize: 'display-1',
        textColor: 'white',
        textShadow: 'darker',
        marginAfter: '0'
      }]]]],
      templateLock: false
    }, {
      name: 'column-row-banner',
      title: __('Bottom bar Banner', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M35,17h1v2h-1V17z M35,21h1v2 h-1V21z M35,25h1v2h-1V25z M14,21h13v3H14V21z M12,17h1v2h-1V17z M12,21h1v2h-1V21z M12,25h1v2h-1V25z M39,30H9v-2h30V30z"
      })),
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
        className: 'w-100'
      }, [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading text, configure heading level...',
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
        placeholder: 'Add text...',
        textSize: 'lead',
        textColor: 'white',
        marginAfter: '0'
      }]]]]]]]]]],
      templateLock: false
    }];

    var getTemplateMap = function getTemplateMap(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate : {};
    };

    var template = getTemplateMap(templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = getTemplateMap(value);

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
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_6__["getImgSizesData"])(img);

              case 3:
                newImgSizesData = _context.sent;
                newImgSizes = newImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newImgSizeIndex = parseInt(imgSizeIndex);

                if (imgSizeIndex >= newImgSizes.length) {
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
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_6__["getImgSizesData"])(portraitImg);

              case 3:
                newPortraitImgSizesData = _context2.sent;
                newPortraitImgSizes = newPortraitImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (portraitImgSizeIndex >= newPortraitImgSizeIndex.length) {
                  newPortraitImgSizeIndex = newPortraitImgSizeIndex.length - 1;
                }

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
      bgSize: bgSize,
      bgPosition: bgPosition,
      alignItems: alignItems,
      templateName: templateName
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    }, bannerClassName);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var bannerStyle = {
      backgroundImage: "url(".concat(url, ")")
    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner template', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner image', 'bsx-blocks')
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: url,
          alt: __('Change / upload image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner portrait image (optional)', 'bsx-blocks')
    }, portraitImgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: portraitImgSizes[portraitImgSizeIndex].url,
          alt: __('Change / upload portrait image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No portrait image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload portrait image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: portraitImgSizeIndex.toString(),
      options: portraitImgSizeRadioControlOptions,
      onChange: onChangePortraitImgSizeIndex
    }), portraitImgSizes[portraitImgSizeIndex] != undefined && portraitImgSizes[portraitImgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("a", {
      class: "bsxui-link",
      href: portraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner dimensions', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Banner height type', 'bsx-blocks'),
      value: bannerType,
      onChange: onChangeBannerType,
      options: [{
        value: 'vh',
        label: __('Viewport dependent height', 'bsx-blocks')
      }, {
        value: 'st',
        label: __('Static height', 'bsx-blocks')
      }],
      help: __('Viewport dependent height will be e.g. all viewport height or viewport height - X pixels. Static height instead depends only on the banners contents.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Banner height size', 'bsx-blocks'),
      value: bannerSize,
      onChange: onChangeBannerSize,
      options: [{
        value: '1',
        label: __('1 (biggest)', 'bsx-blocks')
      }, {
        value: '2',
        label: __('2', 'bsx-blocks')
      }, {
        value: '3',
        label: __('3 (smallest)', 'bsx-blocks')
      }],
      help: __('Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Background attachement', 'bsx-blocks'),
      value: bgAttachment,
      onChange: onChangeBgAttachment,
      options: [{
        value: 'static',
        label: __('static', 'bsx-blocks')
      }, {
        value: 'fixed',
        label: __('fixed', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Align items', 'bsx-blocks'),
      value: alignItems,
      onChange: onChangeAlignItems,
      options: [{
        value: 'center',
        label: __('center', 'bsx-blocks')
      }, {
        value: 'end',
        label: __('end', 'bsx-blocks')
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
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
      help: __('Spacer before Banner', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
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
      help: __('Spacer after Banner', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(ToggleControl, {
      label: __('Below navbar', 'bsx-blocks'),
      checked: !!belowNavbar,
      onChange: onChangeBelowNavbar,
      help: __('Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Background advanced position', 'bsx-blocks'),
      value: bgPosition,
      onChange: onChangeBgPosition,
      options: [{
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
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Background advanced size', 'bsx-blocks'),
      value: bgSize,
      onChange: onChangeBgSize,
      options: [{
        value: 'cover',
        label: __('Cover', 'bsx-blocks')
      }, {
        value: 'contain',
        label: __('Contain', 'bsx-blocks')
      }, {
        value: '100a',
        label: __('100% auto', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Padding before', 'bsx-blocks'),
      value: paddingBefore,
      onChange: onChangePaddingBefore,
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
      help: __('Inner spacer before', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectControl, {
      label: __('Padding after', 'bsx-blocks'),
      value: paddingAfter,
      onChange: onChangePaddingAfter,
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
      help: __('Inner spacer after', 'bsx-blocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Banner template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onChangeTemplate(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: bannerClassName,
      style: bannerStyle
    }, !imgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "bsxui-in-widget-overlay-panel bsxui-top"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref6) {
        var open = _ref6.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), noBannerInnerTemplateNames.indexOf(templateName) == -1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
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
        templateName = _props$attributes2.templateName,
        belowNavbar = _props$attributes2.belowNavbar,
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
      bgSize: bgSize,
      bgPosition: bgPosition,
      alignItems: alignItems,
      templateName: templateName
    });
    bannerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__["addClassNames"])({
      belowNavbar: belowNavbar,
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
    });
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_7__["makeSaveAttributes"])({
      'data-srcset': srcsetJson
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: bannerClassName,
      "data-fn": "lazyload",
      "data-src": url
    }, saveAttributes), noBannerInnerTemplateNames.indexOf(templateName) == -1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: bannerInnerClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.Content, null)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(InnerBlocks.Content, null));
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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_functions/attributes.js */ "./src/_functions/attributes.js");



// TODO: add state classes for link button
// TODO: add toggle control for spam protected mailto or tel links (requires basic package js adaption)
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInput = _wp$blockEditor.URLInput,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl;
var withSelect = wp.data.withSelect; // functions imports


 // functions

var makeButtonClassNames = function makeButtonClassNames(config) {
  var classNames = ['btn'];
  var buildClassName = 'btn-';

  if (!!config.state) {
    if (!!config.stateType) {
      buildClassName += config.stateType + '-';
    }

    buildClassName += config.state;
    classNames.push(buildClassName);
  }

  if (!!config.size) {
    classNames.push('btn-' + config.size);
  }

  if (!!config.hrefIsContentIsEmail) {
    classNames.push('create-mt');
  }

  return classNames.join(' ');
}; // const makeSaveAttributes = ( attributes ) => {
//     const nonEmptyAttributes = {};
//     for ( let [ key, value ] of Object.entries( attributes ) ) {
//         //console.log( 'key: "' + key + '", val: "' + value + '"' );
//         if ( value ) {
//             nonEmptyAttributes[ key ] = value;
//         }
//     }
//     return nonEmptyAttributes;
// }


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
}; // const checkHrefIsContentIsEmail = ( emailIsValid, href, content ) => {
//     return emailIsValid && href == 'mailto:' + content;
// }


registerBlockType('bsx-blocks/button', {
  title: __('BSX Button', 'bsx-blocks'),
  icon: 'admin-links',
  category: 'layout',
  parent: ['bsx-blocks/buttons'],
  attributes: {
    href: {
      type: 'string',
      default: ''
    },
    hash: {
      type: 'string',
      default: ''
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.btn'
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
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        href = _props$attributes.href,
        hash = _props$attributes.hash,
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

    var onChangeHash = function onChangeHash(value) {
      setAttributes({
        hash: value
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

    var checkEmail = isEmailFormat(href); // const hrefIsContentIsEmail = checkEmail.valid && href == 'mailto:' + content;

    var hrefIsContentIsEmail = checkEmail.valid && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0); // exclude hrefIsContentIsEmail here to keep correct button title shown

    var buttonClassNames = makeButtonClassNames({
      state: state,
      stateType: stateType,
      size: size
    });
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, buttonClassNames); // adapt content since mailto link saves empty content, see `value={ ! content && hrefIsContentIsEmail ? href.substring( 7 ) : content }`
    // edit spam-protected mailto link format (no class name `create-mt`, no data-attributes):
    // `<a>MY_NAME@MY_DOMAIN.MY_DOMAIN_SUFFIX</a>` or `<a>SOME_CONTENT</a>`
    // console.log( '! content && hrefIsContentIsEmail ? [ href.substring( 7 ) ] : content: ' + ! content && hrefIsContentIsEmail ? [ href.substring( 7 ) ] : content );

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button link settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(URLInput, {
      label: __('Link URL', 'bsx-blocks'),
      value: href,
      onChange: onChangeHref
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToggleControl, {
      label: __('Open in new tab', 'bsx-blocks'),
      checked: target == '_blank',
      onChange: onChangeTarget
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Hash (optional)', 'bsx-blocks'),
      value: hash,
      onChange: onChangeHash
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Rel (optional)', 'bsx-blocks'),
      value: rel,
      onChange: onChangeRel
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('data-fn (optional)', 'bsx-blocks'),
      value: dataFn,
      onChange: onChangeDataFn
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button appearance', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('State', 'bsx-blocks'),
      value: state,
      onChange: onChangeState,
      options: [{
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
        label: __('Link', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('State Type', 'bsx-blocks'),
      value: stateType,
      onChange: onChangeStateType,
      options: [{
        value: 'outline',
        label: __('Outline', 'bsx-blocks')
      }, {
        value: '',
        label: __('Filled', 'bsx-blocks')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Size', 'bsx-blocks'),
      value: size,
      onChange: onChangeSize,
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Margin left', 'bsx-blocks'),
      value: marginLeft,
      onChange: onChangeMarginLeft,
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
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Margin right', 'bsx-blocks'),
      value: marginRight,
      onChange: onChangeMarginRight,
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
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: buttonClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "a",
      multiline: false,
      placeholder: __('Add Title...', 'bsx-blocks'),
      value: _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0 && hrefIsContentIsEmail ? [href.substring(7)] : content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true
    })))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        href = _props$attributes2.href,
        hash = _props$attributes2.hash,
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
        marginAfter = _props$attributes2.marginAfter;
    var checkEmail = isEmailFormat(href); // adapt empty content of email link
    // if ( ! content && checkEmail.valid ) {
    //     content.push[ href.substring( 7 ) ];
    //     console.log( '----- save: content adapted' );
    // }
    // after reload content is empty in case of valid mailto href

    var hrefIsContentIsEmail = checkEmail.valid && (href == 'mailto:' + content || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(content) == 'object' && content.length == 0); // console.log( '---------- checkEmail.valid: ' + checkEmail.valid );
    // console.log( '----- href: ' + href );
    // console.log( '----- content: ' + content );
    // console.log( '----- typeof content: ' + typeof content );
    // console.log( '----- content.length: ' + content.length );
    // console.log( '----- hrefIsContentIsEmail: ' + hrefIsContentIsEmail );

    var buttonClassNames = makeButtonClassNames({
      state: state,
      stateType: stateType,
      size: size,
      hrefIsContentIsEmail: hrefIsContentIsEmail
    });
    buttonClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, buttonClassNames); // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
    // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      href: !hrefIsContentIsEmail ? hash ? href + '#' + hash : href : 'javascript:void( 0 );',
      'data-fn': checkEmail.valid ? 'create-mt' : dataFn,
      'data-mt-n': checkEmail.valid ? checkEmail.name : '',
      'data-mt-d': checkEmail.valid ? checkEmail.domain : '',
      'data-mt-s': checkEmail.valid ? checkEmail.suffix : '',
      target: target,
      rel: href && !hrefIsContentIsEmail ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, (content && !RichText.isEmpty(content) || hrefIsContentIsEmail) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tagName: href ? 'a' : 'button',
      value: hrefIsContentIsEmail ? '' : content,
      className: buttonClassNames
    }, saveAttributes)));
  }
});

/***/ }),

/***/ "./src/buttons/buttons-wrapper/block.js":
/*!**********************************************!*\
  !*** ./src/buttons/buttons-wrapper/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");

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
    SelectControl = _wp$components.SelectControl;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect;

registerBlockType('bsx-blocks/buttons', {
  title: __('BSX Buttons', 'bsx-blocks'),
  icon: 'admin-links',
  category: 'layout',
  attributes: {
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
    var textAlign = attributes.textAlign,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter;
    return {
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
        textAlign = _props$attributes.textAlign,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var template = [['bsx-blocks/button', {}]];
    var allowedBlocks = ['bsx-blocks/button'];

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

    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__["addClassNames"])({
      textAlign: textAlign,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
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
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      label: __('Alignment', 'bsx-blocks'),
      value: textAlign,
      onChange: onChangeTextAlign,
      alignmentControls: alignmentControls
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
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
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: wrapperClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: template,
      allowedBlocks: allowedBlocks,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        textAlign = _props$attributes2.textAlign,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var wrapperClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__["addClassNames"])({
      textAlign: textAlign,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: wrapperClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/buttons/index.js":
/*!******************************!*\
  !*** ./src/buttons/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/block.js */ "./src/buttons/button/block.js");
/* harmony import */ var _buttons_wrapper_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons-wrapper/block.js */ "./src/buttons/buttons-wrapper/block.js");



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

var makeColumnRowClassNames = function makeColumnRowClassNames(config) {
  var classNames = [];

  if (!!config.columnRowType) {
    classNames.push('column-row-' + config.columnRowType);
  } else {
    // default class name
    classNames.push('column-row');
  }

  if (!!config.alignItems) {
    classNames.push('align-items-' + config.alignItems);
  }

  if (!!config.display) {
    classNames.push('d-' + config.display);
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

    var config = {
      columnRowType: columnRowType,
      alignItems: alignItems,
      display: display
    };
    var columnRowClassNames = makeColumnRowClassNames(config);
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
    var config = {
      columnRowType: columnRowType,
      alignItems: alignItems,
      display: display
    };
    var columnRowClassNames = makeColumnRowClassNames(config);
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
    withDispatch = _wp$data.withDispatch;

var makeColumnRowsClassNames = function makeColumnRowsClassNames(config) {
  var classNames = [];

  if (!!config.display) {
    classNames.push('d-' + config.display);
  }

  if (!!config.flexDirection) {
    classNames.push('flex-' + config.flexDirection);
  }

  if (!!config.width) {
    classNames.push('w-' + config.width);
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
        isSelected = props.isSelected;
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

    var getTemplate = function getTemplate(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var getTemplateLock = function getTemplateLock(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.templateLock : false;
    };

    var template = getTemplate(templateName);
    var templateLock = getTemplateLock(templateName);
    var allowedBlocks = ['bsx-blocks/column-row'];

    var onTemplateChange = function onTemplateChange(value) {
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

    var config = {
      display: display,
      flexDirection: flexDirection,
      width: width
    };
    var columnsRowsClassNames = makeColumnRowsClassNames(config);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Rows layout', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onTemplateChange(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-icon"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "bsxui-icon-text-button-list-item-label"
      }, template.title));
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Column Rows settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Column Rows template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onTemplateChange(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
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
    var config = {
      display: display,
      flexDirection: flexDirection,
      width: width
    };
    var columnsRowsClassNames = makeColumnRowsClassNames(config);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: columnsRowsClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");

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
    SelectControl = _wp$components.SelectControl;
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
  icon: 'welcome-widgets-menus',
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
    var config = {
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    };
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__["addClassNames"])(config, containerClassName);
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
    var config = {
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter,
      paddingBefore: paddingBefore,
      paddingAfter: paddingAfter
    };
    containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__["addClassNames"])(config, containerClassName);
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
var withSelect = wp.data.withSelect;
registerBlockType('bsx-blocks/groups', {
  title: __('BSX Groups', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M7,7h6c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v2C6,6.55,6.45,7,7,7z M13,13H7c-0.55,0-1,0.45-1,1v2 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2C14,13.45,13.55,13,13,13z M9.5,11V9c0-0.55-0.45-1-1-1H3C2.45,8,2,8.45,2,9v2 c0,0.55,0.45,1,1,1h5.5C9.05,12,9.5,11.55,9.5,11z M17,8h-5.5c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1H17c0.55,0,1-0.45,1-1V9 C18,8.45,17.55,8,17,8z"
  })),
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

    var templates = [{
      name: 'lazy-img-paragraph-button',
      title: __('Lazy image, paragraph, button', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
      })),
      attributes: {},
      template: [['bsx-blocks/lazy-img', {}], ['core/paragraph', {
        placeholder: 'Add text...'
      }], ['bsx-blocks/buttons', {}]],
      templateLock: false
    }];

    var getTemplateMap = function getTemplateMap(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate : {};
    };

    var template = getTemplateMap(templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = getTemplateMap(value);

      if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
        template = currentTemplateMap.template;
        setAttributes(_objectSpread({
          templateName: value
        }, currentTemplateMap.attributes));
      } else {
        console.log('Error: Template change failed.');
      }

      console.log('changed templateName: ' + value); // console.log( 'changed template: ' + template );
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Group Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
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
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Group template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");


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
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;


var makeClassName = function makeClassName(config) {
  var classNames = ['bsx-gallery'];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('bsx-floating-gallery');
    }
  }

  return classNames.join(' ');
};

var makeInnerClassName = function makeInnerClassName(config) {
  var classNames = [];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-inner');
    } else if (config.galleryType == 'columns') {
      classNames.push('row');
    }
  }

  return classNames.join(' ');
};

var makeItemClassName = function makeItemClassName(config) {
  var classNames = [];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-figure d-inline-block');
    } else if (config.galleryType == 'columns') {
      // TODO: make configurable later
      classNames.push('col-6 col-sm-3 mb-4');
    }
  }

  return classNames.join(' ');
};

var makeLinkClassName = function makeLinkClassName(config) {
  var classNames = [];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('d-inline-block');
    } else if (config.galleryType == 'columns') {
      classNames.push('d-block text-center');
    }
  }

  return classNames.join(' ');
};

var makeImgClassName = function makeImgClassName(config) {
  var classNames = [];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('bsx-floating-gallery-img-md');
    } else if (config.galleryType == 'columns') {
      classNames.push('img-fluid');
    }
  }

  return classNames.join(' ');
};

var makeUploadElementClassName = function makeUploadElementClassName(config) {
  var classNames = [];

  if (!!config.galleryType) {
    if (config.galleryType == 'floating') {
      classNames.push('bsxui-mt-3');
    }
  }

  return classNames.join(' ');
};

registerBlockType('bsx-blocks/img-gallery', {
  title: __('BSX Image Gallery', 'bsx-blocks'),
  icon: 'format-gallery',
  category: 'layout',
  attributes: {
    mediaList: {
      type: 'array',
      default: []
    },
    galleryType: {
      type: 'string',
      default: 'columns'
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
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

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
      deleteMediaListItem(index);
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
    galleryClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
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
    var imgClassName = makeImgClassName({
      galleryType: galleryType
    });
    var uploadElementClassName = makeUploadElementClassName({
      galleryType: galleryType
    });
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
      title: __('Margin', 'bsx-blocks')
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
      help: __('Spacer before element', 'bsx-blocks')
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
      help: __('Spacer after element', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: galleryClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: innerClassName
    }, mediaList.map(function (media, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: itemClassName
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
            className: "bsxui-h-auto bsxui-w-100 bsxui-px-0",
            onClick: open
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            className: imgClassName,
            src: media.url,
            alt: __('Upload Image', 'bsx-blocks')
          }));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        tagName: "div",
        multiline: false,
        placeholder: __('Caption (optional)', 'bsx-blocks'),
        value: media.caption,
        onChange: function onChange(value) {
          onChangeCaption(value, index);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "d-flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button",
        onClick: function onClick() {
          onClickMoveUp(index);
        },
        label: __('Move backward', 'bsx-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        d: "M14 5l-5 5 5 5-1 2-7-7 7-7z"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button",
        onClick: function onClick() {
          onClickMoveDown(index);
        },
        label: __('Move forward', 'bsx-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        d: "M6 15l5-5-5-5 1-2 7 7-7 7z"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "button bsxui-text-danger bsxui-border-danger bsxui-ml-auto",
        onClick: function onClick() {
          onClickDelete(index);
        },
        label: __('Remove Image', 'bsx-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        role: "img",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
      })))));
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
    })))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        mediaList = _props$attributes2.mediaList,
        galleryType = _props$attributes2.galleryType,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter; // class names

    var galleryClassName = makeClassName({
      galleryType: galleryType
    });
    galleryClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__["addClassNames"])({
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
    var imgClassName = makeImgClassName({
      galleryType: galleryType
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
        src: "",
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
    }))));
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
/* harmony import */ var _wrapper_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrapper/block.js */ "./src/wrapper/block.js");











/***/ }),

/***/ "./src/lazy-img/block.js":
/*!*******************************!*\
  !*** ./src/lazy-img/block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");



var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
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

var makeSourcesAttributesList = function makeSourcesAttributesList(config) {
  var sourcesAttributesList = []; // portrait img

  config.responsivePortraitMediaIndexList.forEach(function (item, index) {
    var currentPortraitImgIndex = parseInt(config.portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);
    var adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentPortraitImgIndex;

    if (adaptedCurrentPortraitImgIndex < parseInt(config.portraitImgSizeIndex) && adaptedCurrentPortraitImgIndex > config.skipIndex && typeof config.portraitImgSizes[adaptedCurrentPortraitImgIndex] != 'undefined' && typeof config.portraitImgSizes[adaptedCurrentPortraitImgIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: item.media,
        srcset: '',
        'data-srcset': config.portraitImgSizes[adaptedCurrentPortraitImgIndex].url,
        'data-width': config.portraitImgSizes[adaptedCurrentPortraitImgIndex].width,
        'data-height': config.portraitImgSizes[adaptedCurrentPortraitImgIndex].height
      });
    }
  }); // default img

  config.responsiveMediaIndexList.forEach(function (item, index) {
    var currentImgIndex = parseInt(config.imgSizeIndex) + parseInt(item.imgSizeIndexShift);
    var adaptedCurrentImgIndex = currentImgIndex < parseInt(item.minImgSizeIndex) ? parseInt(item.minImgSizeIndex) : currentImgIndex;

    if (adaptedCurrentImgIndex < parseInt(config.imgSizeIndex) && adaptedCurrentImgIndex > config.skipIndex && typeof config.imgSizes[adaptedCurrentImgIndex] != 'undefined' && typeof config.imgSizes[adaptedCurrentImgIndex].url != 'undefined') {
      sourcesAttributesList.push({
        media: item.media,
        srcset: '',
        'data-srcset': config.imgSizes[adaptedCurrentImgIndex].url,
        'data-width': config.imgSizes[adaptedCurrentImgIndex].width,
        'data-height': config.imgSizes[adaptedCurrentImgIndex].height
      });
    }
  });
  return sourcesAttributesList;
};

registerBlockType('bsx-blocks/lazy-img', {
  title: __('BSX Lazy Image', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"
  })),
  category: 'layout',
  attributes: {
    hasFigure: {
      boolean: 'string',
      default: true
    },
    textAlign: {
      type: 'string',
      default: ''
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
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        setState = props.setState;

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(img) {
        var newImgSizesData, newImgSizes, originalWidth, originalHeight, newImgSizeIndex, newLowestSrcsetImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_3__["getImgSizesData"])(img);

              case 3:
                newImgSizesData = _context.sent;
                newImgSizes = newImgSizesData.imgs;
                originalWidth = newImgSizesData.originalWidth;
                originalHeight = newImgSizesData.originalHeight; // TEST
                // console.log( '-----> newImgSizes:' );
                // newImgSizes.forEach( ( imgSize, index ) => {
                //     console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                // } );
                // check if current img size index fits to new img (might be too large)

                newImgSizeIndex = parseInt(imgSizeIndex);

                if (imgSizeIndex >= newImgSizes.length) {
                  newImgSizeIndex = newImgSizes.length - 1; //console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                } // do not use thumbnail for srcset if has square format, start with img sizes index 1 then


                newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;
                setAttributes({
                  imgId: img.id,
                  imgSizes: newImgSizes,
                  imgSizeIndex: newImgSizeIndex.toString(),
                  url: newImgSizes[newImgSizeIndex].url,
                  width: newImgSizes[newImgSizeIndex].width,
                  height: newImgSizes[newImgSizeIndex].height,
                  origWidth: originalWidth,
                  origHeight: originalHeight,
                  alt: img.alt
                }); // TEST – TODO: remove
                // for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                //     console.log( 'key: "' + key + '", val: "' + value + '"' );
                // }
                // console.log( 'mediumUrl: ' + img.sizes.medium.url );
                // console.log( 'mediumWidth: ' + img.sizes.medium.width );
                // console.log( 'mediumHeight: ' + img.sizes.medium.height );
                // console.log( 'largeUrl: ' + img.sizes.large.url );
                // console.log( 'largeWidth: ' + img.sizes.large.width );
                // console.log( 'largeHeight: ' + img.sizes.large.height );
                // console.log( 'ratio thumbnail ( ' + img.sizes.thumbnail.width + ' / ' + img.sizes.thumbnail.height + ' ): ' + img.sizes.thumbnail.width / img.sizes.thumbnail.height );
                // console.log( 'ratio medium ( ' + img.sizes.medium.width + ' / ' + img.sizes.medium.height + ' ): ' + img.sizes.medium.width / img.sizes.medium.height );
                // console.log( 'ratio large ( ' + img.sizes.large.width + ' / ' + img.sizes.large.height + ' ): ' + img.sizes.large.width / img.sizes.large.height );
                // console.log( 'ratio full ( ' + img.sizes.full.width + ' / ' + img.sizes.full.height + ' ): ' + img.sizes.full.width / img.sizes.full.height );

              case 11:
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
      _onSelectPortraitImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(portraitImg) {
        var newPortraitImgSizesData, newPortraitImgSizes, newPortraitImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof portraitImg.url !== 'undefined')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return Object(_functions_img_js__WEBPACK_IMPORTED_MODULE_3__["getImgSizesData"])(portraitImg);

              case 3:
                newPortraitImgSizesData = _context2.sent;
                newPortraitImgSizes = newPortraitImgSizesData.imgs; // check if current img size index fits to new img (might be too large)

                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (portraitImgSizeIndex >= newPortraitImgSizeIndex.length) {
                  newPortraitImgSizeIndex = newPortraitImgSizeIndex.length - 1;
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

    var onChangeMediaWidth = function onChangeMediaWidth(value) {
      setAttributes({
        width: value
      });
    };

    var onChangeMediaHeight = function onChangeMediaHeight(value) {
      setAttributes({
        height: value
      });
    };

    var onChangeImgSizeIndex = function onChangeImgSizeIndex(value) {
      setAttributes({
        imgSizeIndex: value.toString(),
        url: imgSizes[value].url,
        width: imgSizes[value].width,
        height: imgSizes[value].height
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
    }); // prepare img sources attributes

    var sourcesAttributesList = makeSourcesAttributesList({
      imgSizes: imgSizes,
      imgSizeIndex: imgSizeIndex,
      responsiveMediaIndexList: responsiveMediaIndexList,
      portraitImgSizes: portraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
      skipIndex: skipIndex
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Image', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Alt', 'bsx-blocks'),
      value: alt,
      onChange: onChangeMediaAlt
    }), imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: url,
          alt: __('Change / upload image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      class: "bsxui-link",
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Displayed image width', 'bsx-blocks'),
      value: width,
      onChange: onChangeMediaWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Displayed image height', 'bsx-blocks'),
      value: height,
      onChange: onChangeMediaHeight
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Portrait image (optional)', 'bsx-blocks')
    }, portraitImgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          className: "bsxui-config-panel-img-button has-margin-bottom",
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
          class: "bsxui-config-panel-img",
          src: portraitImgSizes[portraitImgSizeIndex].url,
          alt: __('Change / upload portrait image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No portrait image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectPortraitImage,
      allowedTypes: "image",
      value: portraitImgId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload portrait image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: portraitImgSizeIndex.toString(),
      options: portraitImgSizeRadioControlOptions,
      onChange: onChangePortraitImgSizeIndex
    }), portraitImgSizes[portraitImgSizeIndex] != undefined && portraitImgSizes[portraitImgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      class: "bsxui-link",
      href: portraitImgSizes[portraitImgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected portrait image', 'bsx-blocks'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("figure", {
      className: className
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("picture", null, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      className: 'img-fluid upload-img',
      src: url,
      alt: alt
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
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
        figcaption = _props$attributes2.figcaption; // prepare img sources attributes

    var sourcesAttributesList = makeSourcesAttributesList({
      imgSizes: imgSizes,
      imgSizeIndex: imgSizeIndex,
      responsiveMediaIndexList: responsiveMediaIndexList,
      portraitImgSizes: portraitImgSizes,
      portraitImgSizeIndex: portraitImgSizeIndex,
      responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
      skipIndex: skipIndex
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: className
    }, url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("picture", null, sourcesAttributesList.map(function (sourceAttributes, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", sourceAttributes);
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      className: "img-fluid",
      src: "",
      alt: alt,
      "data-src": url,
      width: width,
      height: height,
      "data-fn": "lazyload"
    })), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      className: "img-fluid",
      src: url,
      alt: alt,
      width: width,
      height: height
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText.Content, {
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

var makeColClassNames = function makeColClassNames(sizesArray, marginAfter) {
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
  });

  if (marginAfter) {
    colClassNames.push('mb-' + marginAfter);
  } //console.log( 'colClassNames.join( \' \' ): "' + colClassNames.join( ' ' ) + '"' );


  return colClassNames.join(' ');
};

registerBlockType('bsx-blocks/col', {
  title: __('BSX Column', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
  })),
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
    marginAfter: {
      type: 'string',
      default: '3'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sizeXs = attributes.sizeXs,
        sizeSm = attributes.sizeSm,
        sizeMd = attributes.sizeMd,
        sizeLg = attributes.sizeLg,
        sizeXl = attributes.sizeXl;
    return {
      'data-size': sizeXs,
      'data-size-sm': sizeSm,
      'data-size-md': sizeMd,
      'data-size-lg': sizeLg,
      'data-size-xl': sizeXl
    };
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : []; //console.log( 'parentClientId: "' + parentClientId + '"' );

    var ancestorClientIds = getBlockParentsByBlockName(clientId, 'bsx-blocks/row-with-cols'); //console.log( 'ancestorClientIds: "' + ancestorClientIds + '"' );

    /*
    ancestorClientIds.forEach( ( ancestorClientId, index ) => {
        console.log( 'ancestorClientId[ ' + index + ' ]: "' + ancestorClientId + '"' );
    } ); 
    */
    // get last item which is parent

    var parentClientId = ancestorClientIds[ancestorClientIds.length - 1];
    var parentAttributes = getBlockAttributes(parentClientId); //console.log( 'parentAttributes: "' + parentAttributes + '"' );

    /*
    if ( !! parentAttributes ) {
        for ( let [ key, value ] of Object.entries( parentAttributes ) ) {
            console.log( 'key: "' + key + '", value: "' + value + '"' );
        }
    }
    */
    //console.log( 'parentAttributes.fromRowConfig: "' + parentAttributes.fromRowConfig + '"' );

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
        marginAfter = _props$attributes.marginAfter,
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
        sizeXl: parentAttributes.sizeXl
      });
    };

    var onChangeMarginAfter = function onChangeMarginAfter(value) {
      setAttributes({
        marginAfter: value
      });
    };

    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl], marginAfter);
    setAttributes({
      fromRowConfig: parentAttributes.fromRowConfig
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Margin after', 'bsx-blocks'),
      value: marginAfter,
      onChange: onChangeMarginAfter,
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
      help: __('Spacer after Column', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
        marginAfter = _props$attributes2.marginAfter;
    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl], marginAfter);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
    withDispatch = _wp$data.withDispatch;

var makeRowClassNames = function makeRowClassNames(alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter) {
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

  if (marginBefore && marginBefore === marginAfter) {
    classNames.push('my-' + marginBefore);
  } else {
    if (marginBefore) {
      classNames.push('mt-' + marginBefore);
    }

    if (marginAfter) {
      classNames.push('mb-' + marginAfter);
    }
  }

  if (paddingBefore && paddingBefore === paddingAfter) {
    classNames.push('py-' + paddingBefore);
  } else {
    if (paddingBefore) {
      classNames.push('pt-' + paddingBefore);
    }

    if (paddingAfter) {
      classNames.push('pb-' + paddingAfter);
    }
  } //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );


  return classNames.join(' ');
};

registerBlockType('bsx-blocks/row-with-cols', {
  title: __('BSX Columns', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
  })),
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
        formRow = attributes.formRow;
    return {
      'data-align-items': alignItems,
      'data-justify-content': justifyContent,
      'data-no-gutters': noGutters,
      'data-form-row': formRow
    };
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId,
        getBlockAttributes = _select.getBlockAttributes;

    var children = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
    var childrenAttributes = [];
    children.forEach(function (column, index) {
      childrenAttributes.push(getBlockAttributes(column.clientId));
    });
    return {
      children: children,
      childrenAttributes: childrenAttributes
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
        sizeXs = _props$attributes.sizeXs,
        sizeSm = _props$attributes.sizeSm,
        sizeMd = _props$attributes.sizeMd,
        sizeLg = _props$attributes.sizeLg,
        sizeXl = _props$attributes.sizeXl,
        colsMarginAfter = _props$attributes.colsMarginAfter,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children,
        childrenAttributes = props.childrenAttributes,
        updateBlockAttributes = props.updateBlockAttributes;
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
      var colType = value == 'custom' ? 'custom' : 'default';
      console.log('onColsTemplateChange: "' + value + '"');
      console.log('colType: "' + colType + '"');
      /*
      console.log( 'value: "' + value + '"' );
      console.log( 'colsTemplate: "' + colsTemplate + '"' );
      console.log( 'colsTemplate.length: "' + colsTemplate.length + '"' );
       colsTemplate.forEach( ( item, index ) => {
          console.log( 'item[ ' + index + ' ]: "' + item + '"' );
           if ( !! item ) {
              for ( let [ key, value ] of Object.entries( item ) ) {
                  console.log( 'key: "' + key + '", value: "' + value + '"' );
              }
          }
      } ); 
      */

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
      });
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
        if (childrenAttributes[index].enableInheritanceFromRow) {
          var newAttributes = {
            sizeXs: value.sizeXs != undefined ? value.sizeXs : sizeXs,
            sizeSm: value.sizeSm != undefined ? value.sizeSm : sizeSm,
            sizeMd: value.sizeMd != undefined ? value.sizeMd : sizeMd,
            sizeLg: value.sizeLg != undefined ? value.sizeLg : sizeLg,
            sizeXl: value.sizeXl != undefined ? value.sizeXl : sizeXl,
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

    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter);
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
      help: __('Inner spacer before', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Padding after', 'bsx-blocks'),
      value: paddingAfter,
      onChange: onChangePaddingAfter,
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
      help: __('Inner spacer after', 'bsx-blocks')
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
        sizeXs = _props$attributes2.sizeXs,
        sizeSm = _props$attributes2.sizeSm,
        sizeMd = _props$attributes2.sizeMd,
        sizeLg = _props$attributes2.sizeLg,
        sizeXl = _props$attributes2.sizeXl,
        colsMarginAfter = _props$attributes2.colsMarginAfter,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter;
    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter);
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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var withSelect = wp.data.withSelect;


registerBlockType('bsx-blocks/section', {
  title: __('BSX Section', 'bsx-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    d: "M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"
  })),
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string'
    },
    belowNavbar: {
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
        id = _props$attributes.id,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        children = props.children;

    var hasInnerBlocks = function hasInnerBlocks(children) {
      return children.length > 0;
    };

    var templates = [{
      name: 'empty',
      title: __('Empty', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
      })),
      attributes: {
        marginAfter: '5'
      },
      template: [],
      templateLock: false
    }, {
      name: 'container-with-heading',
      title: __('Container with Heading', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
      })),
      attributes: {
        marginAfter: '5'
      },
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading, configure heading level...'
      }]]]],
      templateLock: false
    }, {
      name: 'container-heading-text-gallery',
      title: __('Container, Heading, Text & Gallery', 'bsx-blocks'),
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
      })),
      attributes: {
        marginAfter: '5'
      },
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading, configure heading level...'
      }], ['core/paragraph', {
        placeholder: 'Add text...'
      }], ['bsx-blocks/img-gallery', {
        galleryType: 'floating'
      }]]]],
      templateLock: false
    }];

    var getTemplateMap = function getTemplateMap(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate : {};
    };

    var template = getTemplateMap(templateName).template;

    var onChangeTemplate = function onChangeTemplate(value) {
      var currentTemplateMap = getTemplateMap(value);

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


    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Section Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToggleControl, {
      label: __('Move below navbar', 'bsx-blocks'),
      checked: !!belowNavbar,
      onChange: onChangeBelowNavbar,
      help: __('If enabled section has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('ID', 'bsx-blocks'),
      value: id,
      onChange: onChangeId
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
      help: __('Spacer before Container', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
      help: __('Spacer after Container', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, !templateName ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-initial-inline-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-initial-inline-control-heading"
    }, __('Please select Banner template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
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
        id = _props$attributes2.id,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var containerClassName = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__["addClassNames"])({
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    });
    var saveAttributes = Object(_functions_attributes_js__WEBPACK_IMPORTED_MODULE_4__["makeSaveAttributes"])({
      id: id
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: containerClassName
    }, saveAttributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null));
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

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
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl; // TODO: refactor function `makeClassNames( ... )` to `makeWrapperClassNames( config )`
// TODO: add text align, border, border-color

var makeClassNames = function makeClassNames(bgColor, textColor, rounded, marginBefore, marginAfter, paddingBefore, paddingAfter, paddingLeft, paddingRight) {
  var classNames = [];

  if (!!bgColor) {
    classNames.push('bg-' + bgColor);
  }

  if (!!textColor) {
    classNames.push('text-' + textColor);
  }

  if (!!rounded) {
    classNames.push('rounded');
  }

  if (!!marginBefore && marginBefore === marginAfter) {
    classNames.push('my-' + marginBefore);
  } else {
    if (!!marginBefore) {
      classNames.push('mt-' + marginBefore);
    }

    if (!!marginAfter) {
      classNames.push('mb-' + marginAfter);
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

  return classNames.join(' ');
};
/*

                <div class="border rounded bg-light my-3 px-1">
                    <div class="row form-row">
                        <div class="col-6">
                            <TextControl 
                                label={ __( 'Classes (optional)', 'bsx-blocks' ) }
                                value={ additionalClasses } 
                                onChange={ onChangeAdditionalClasses }
                            />
                        </div>
                        <div class="col-6">
                            <TextControl 
                                label={ __( 'Attributes (optional)', 'bsx-blocks' ) }
                                value={ additionalAttributes } 
                                onChange={ onChangeAdditionalAttributes }
                            />
                        </div>
                    </div>
                </div>
*/
// icon: editor-table


registerBlockType('bsx-blocks/wrapper', {
  title: __('BSX Wrapper', 'bsx-blocks'),
  icon: 'marker',
  category: 'layout',
  attributes: {
    additionalClasses: {
      type: 'string'
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
    bgColor: {
      type: 'string'
    },
    rounded: {
      type: 'string'
    },
    textColor: {
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
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        additionalClasses = _props$attributes.additionalClasses,
        id = _props$attributes.id,
        dataFn = _props$attributes.dataFn,
        dataTg = _props$attributes.dataTg,
        bgColor = _props$attributes.bgColor,
        textColor = _props$attributes.textColor,
        rounded = _props$attributes.rounded,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        paddingBefore = _props$attributes.paddingBefore,
        paddingAfter = _props$attributes.paddingAfter,
        paddingLeft = _props$attributes.paddingLeft,
        paddingRight = _props$attributes.paddingRight,
        setAttributes = props.setAttributes;

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

    var wrapperClassName = makeClassNames(bgColor, textColor, rounded, marginBefore, marginAfter, paddingBefore, paddingAfter, paddingLeft, paddingRight);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Color & appearance', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Background color', 'bsx-blocks'),
      value: bgColor,
      onChange: onChangeBgColor,
      options: [{
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
      }],
      help: __('Spacer before Container', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Rounded', 'bsx-blocks'),
      checked: !!rounded,
      onChange: onChangeRounded
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
      help: __('Spacer before Container', 'bsx-blocks')
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
      help: __('Spacer after Container', 'bsx-blocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Padding', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Padding left', 'bsx-blocks'),
      value: paddingLeft,
      onChange: onChangePaddingLeft,
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
      help: __('Inner spacer left', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Padding right', 'bsx-blocks'),
      value: paddingRight,
      onChange: onChangePaddingRight,
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
      help: __('Inner spacer right', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: wrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        additionalClasses = _props$attributes2.additionalClasses,
        id = _props$attributes2.id,
        dataFn = _props$attributes2.dataFn,
        dataTg = _props$attributes2.dataTg,
        bgColor = _props$attributes2.bgColor,
        textColor = _props$attributes2.textColor,
        rounded = _props$attributes2.rounded,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter,
        paddingLeft = _props$attributes2.paddingLeft,
        paddingRight = _props$attributes2.paddingRight,
        setAttributes = props.setAttributes;
    var wrapperClassName = makeClassNames(bgColor, textColor, rounded, marginBefore, marginAfter, paddingBefore, paddingAfter, paddingLeft, paddingRight);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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