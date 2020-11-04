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
//     paddingBefore, 
//     paddingAfter, 
//     paddingLeft, 
//     paddingRight,
//     bgColor, 
//     textColor, 
//     rounded, 
// }
function addClassNames(config, classNamesString) {
  var classNames = typeof classNamesString != 'undefined' ? classNamesString.split(' ') : [];

  if (config.belowNavbar) {
    classNames.push('below-navbar-content');
  }

  if (config.marginBefore && config.marginBefore === config.marginAfter) {
    classNames.push('my-' + config.marginBefore);
  } else {
    if (config.marginBefore) {
      classNames.push('mt-' + config.marginBefore);
    }

    if (config.marginAfter) {
      classNames.push('mb-' + config.marginAfter);
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

  return classNames.join(' ');
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");





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


var makeBannerClassNames = function makeBannerClassNames(bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter) {
  var classNames = [];

  if (true) {
    // always set bannerType and bannerSize to keep debugging easy
    classNames.push('banner-' + bannerType + '-' + bannerSize);
  }

  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }

  if (!!bgAttachment) {
    classNames.push('bg-' + bgAttachment);
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

  if (!!templateName && templateName == 'column-row-banner' && classNames.indexOf('d-flex') == -1) {
    classNames.push('d-flex');
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
};

var getUrlTruncAndExtension = function getUrlTruncAndExtension(url) {
  var urlExplode = url.split('.');
  var fileExtension = urlExplode[urlExplode.length - 1];
  urlExplode.pop();
  var urlWithoutFileExtension = urlExplode.join('.');
  return {
    trunc: urlWithoutFileExtension,
    extension: fileExtension
  };
};

var fullImgIsScaled = function fullImgIsScaled(fullUrl) {
  var urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
};

var getOriginalImgUrl = function getOriginalImgUrl(fullUrl) {
  var truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
};

var getSizesAndWithoutSizesTruncFromUrlTrunc = function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  var urlWithoutFileExtensionExplode = urlTrunc.split('-');
  var sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizesTrunc: urlWithoutFileExtensionExplode.join('-')
  };
};

var makeSizedImgs = function makeSizedImgs(config) {
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
};

var getOriginalImgSizes = function getOriginalImgSizes(originalImgUrl) {
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
      reject('Error on loading image "' + originalImgUrl + '"', err);
    };

    img.src = originalImgUrl;
    document.body.appendChild(img);
  });
};

var imageExists = function imageExists(url) {
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
}; // scaled (hidden) img settings


var imgScaleList = [0.75, 1.5, 2];
var imgBaseSize = 'large';
var defaultImgList = ['thumbnail', 'medium', imgBaseSize, 'full'];
var imgSizesOrder = ['thumbnail', 'medium', imgScaleList[0] + '', imgBaseSize, imgScaleList[1] + '', imgScaleList[2] + '', 'full', 'original']; // getting sorted list of all imgs (default and hidden scaled)

function getImgSizes(_x) {
  return _getImgSizes.apply(this, arguments);
} // responsive sizes


function _getImgSizes() {
  _getImgSizes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(img) {
    var originalImgUrl, originalWidth, originalHeight, originalImgSizes, scaledImgs, returnImgs, sizedImgsConfig, sizedImgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            originalImgUrl = '';
            originalWidth = 0;
            originalHeight = 0;

            if (!fullImgIsScaled(img.url)) {
              _context4.next = 18;
              break;
            }

            // get original, get sizes
            originalImgUrl = getOriginalImgUrl(img.url);
            _context4.prev = 5;
            _context4.next = 8;
            return getOriginalImgSizes(originalImgUrl);

          case 8:
            originalImgSizes = _context4.sent;
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](5);
            console.error(_context4.t0);

          case 14:
            originalWidth = originalImgSizes.width || 0;
            originalHeight = originalImgSizes.height || 0;
            _context4.next = 20;
            break;

          case 18:
            // get sizes from full img
            originalWidth = img.sizes.full.width;
            originalHeight = img.sizes.full.height;

          case 20:
            scaledImgs = {};
            returnImgs = []; // make sizes only if marge img exists

            if (!(img.sizes.large != undefined)) {
              _context4.next = 28;
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

            _context4.next = 27;
            return Promise.all(sizedImgs.map( /*#__PURE__*/function () {
              var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(sizedImg, index) {
                var currentImageExists;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return imageExists(sizedImg.url);

                      case 2:
                        currentImageExists = _context3.sent;

                        if (currentImageExists) {
                          scaledImgs[imgScaleList[index] + ''] = sizedImg;
                        }

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x4, _x5) {
                return _ref7.apply(this, arguments);
              };
            }()));

          case 27:
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
              } else if (imgScaleList.indexOf(parseFloat(imgSize)) != -1 && scaledImgs[imgSize] != undefined) {
                // get from scaled imgs list
                returnImgs.push(scaledImgs[imgSize]);
              } else if (imgSize == 'original' && originalImgUrl) {
                // add unscaled original
                returnImgs.push({
                  url: originalImgUrl,
                  width: originalWidth,
                  height: originalHeight
                });
              }
            });

          case 28:
            return _context4.abrupt("return", returnImgs);

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 11]]);
  }));
  return _getImgSizes.apply(this, arguments);
}

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

var makeSrcsetJson = function makeSrcsetJson(_imgSizes, _imgSizeIndex, _portraitImgSizes, _portraitImgSizeIndex) {
  // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + _imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + _imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
  var srcsetJson = '[ ';
  responsivePortraitMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > 0 (no square format)
    var currentPortraitImgSizeIndex = parseInt(_portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentPortraitImgSizeIndex > 0 && currentPortraitImgSizeIndex < _portraitImgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + _portraitImgSizes[currentPortraitImgSizeIndex].url + '\' }, ';
    }
  });
  responsiveMediaIndexList.forEach(function (item, index) {
    // add item if img resulting indes > 0 (no square format)
    var currentImgSizeIndex = parseInt(_imgSizeIndex) + parseInt(item.imgSizeIndexShift);

    if (currentImgSizeIndex > 0 && currentImgSizeIndex < _imgSizes.length) {
      srcsetJson += '{ media: \'' + item.media + '\', src: \'' + _imgSizes[currentImgSizeIndex].url + '\' }, ';
    }
  });

  if (srcsetJson.lastIndexOf(', ') == srcsetJson.length - 2) {
    srcsetJson = srcsetJson.substring(0, srcsetJson.length - 2);
  }

  srcsetJson += ' ]';
  return srcsetJson;
};

var makeSaveAttributes = function makeSaveAttributes(attributes) {
  var nonEmptyAttributes = {};

  for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    //console.log( 'key: "' + key + '", val: "' + value + '"' );
    if (value) {
      nonEmptyAttributes[key] = value;
    }
  }

  return nonEmptyAttributes;
}; // insert directly into banner element without `.banner-inner`


var noBannerInnerTemplateNames = ['column-row-banner'];
registerBlockType('bsx-blocks/banner', {
  title: __('BSX Banner', 'bsx-blocks'),
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
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M12,18c1.66,0,3,1.34,3,3 s-1.34,3-3,3s-3-1.34-3-3S10.34,18,12,18z M39,30H9v-2l8-3l4,2l12-6l6,4V30z"
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
    portraitUrl: {
      type: 'string'
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
        portraitUrl = _props$attributes.portraitUrl,
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
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading text, configure heading level...',
        textSize: 'display-1',
        textColor: 'white',
        textShadow: 'darker'
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
        textShadow: 'darker'
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
    }]; // <div class="below-navbar-content d-flex bg-fixed bg-cover banner-vh-2 bg-66c bg-md-c" data-fn="lazyload" data-src="/wp-content/themes/bsx-wordpress-example/assets/example-img/example-banner-005.jpg">
    //     <div class="banner-inner w-100 d-flex flex-column">
    //         <div class="column-row d-flex">
    //             <div class="w-100 d-flex">
    //             </div>
    //         </div>
    //         <div class="column-row-auto">
    //         </div>
    //     </div>
    // </div>

    var getTemplate = function getTemplate(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var template = getTemplate(templateName);

    var onTemplateChange = function onTemplateChange(value) {
      template = getTemplate(value);
      setAttributes({
        templateName: value
      }); // console.log( 'changed templateName: ' + value );
      // console.log( 'changed template: ' + template );
    };

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
      });
    };

    function onSelectImage(_x2) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(img) {
        var newImgSizes, newImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return getImgSizes(img);

              case 3:
                newImgSizes = _context.sent;
                // check if current img size index fits to new img (might be too large)
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

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _onSelectImage.apply(this, arguments);
    }

    ;

    function onSelectPortraitImage(_x3) {
      return _onSelectPortraitImage.apply(this, arguments);
    }

    function _onSelectPortraitImage() {
      _onSelectPortraitImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(portraitImg) {
        var newPortraitImgSizes, newPortraitImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof portraitImg.url !== 'undefined')) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return getImgSizes(portraitImg);

              case 3:
                newPortraitImgSizes = _context2.sent;
                // check if current img size index fits to new img (might be too large)
                newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);

                if (portraitImgSizeIndex >= newPortraitImgSizeIndex.length) {
                  newPortraitImgSizeIndex = newPortraitImgSizeIndex.length - 1;
                }

                setAttributes({
                  portraitImgId: portraitImg.id,
                  portraitImgSizes: newPortraitImgSizes,
                  portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                  portraitUrl: newPortraitImgSizes[newPortraitImgSizeIndex].url
                }); // console.log( 'portraitUrl: ' + newPortraitImgSizes[ newPortraitImgSizeIndex ].url );

              case 7:
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
        portraitImgSizeIndex: value.toString(),
        portraitUrl: portraitImgSizes[value].url
      });
    };

    var portraitImgSizeRadioControlOptions = [];
    portraitImgSizes.forEach(function (portraitImgSize, index) {
      portraitImgSizeRadioControlOptions.push({
        value: index.toString(),
        label: portraitImgSize.width + 'x' + portraitImgSize.height + (portraitImgSize.width === portraitImgSize.height ? ' ' + __('(Square format)', 'bsx-blocks') : '')
      });
    });
    var bannerClassName = makeBannerClassNames(bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter);
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
          onTemplateChange(template.name);
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
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(PanelBody, {
      title: __('Banner portrait image (optional)', 'bsx-blocks')
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(MediaUpload, {
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
          src: portraitUrl,
          alt: __('Change / upload portrait image', 'bsx-blocks')
        }));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      class: "bsxui-config-panel-text"
    }, __('– No image selected yet –', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
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
          onTemplateChange(template.name);
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
        portraitUrl = _props$attributes2.portraitUrl,
        bannerType = _props$attributes2.bannerType,
        bannerSize = _props$attributes2.bannerSize,
        bgAttachment = _props$attributes2.bgAttachment,
        bgSize = _props$attributes2.bgSize,
        bgPosition = _props$attributes2.bgPosition,
        alignItems = _props$attributes2.alignItems,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter,
        paddingBefore = _props$attributes2.paddingBefore,
        paddingAfter = _props$attributes2.paddingAfter; // TODO: use addClassNames
    // TODO: add templateName
    // TODO: make bannerInnerCLassName

    var bannerClassName = makeBannerClassNames(bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter);
    var bannerInnerClassName = makeBannerInnerClassNames({
      templateName: templateName
    });
    var srcsetJson = makeSrcsetJson(imgSizes, imgSizeIndex, portraitImgSizes, portraitImgSizeIndex);
    var saveAttributes = makeSaveAttributes({
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



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
var withSelect = wp.data.withSelect;

var makeButtonClassNames = function makeButtonClassNames(state, stateType, size, marginLeft, marginRight) {
  var classNames = ['btn'];
  var prefix = 'btn-';
  var buildClassName = prefix;

  if (state) {
    if (stateType) {
      buildClassName += stateType + '-';
    }

    buildClassName += state;
    classNames.push(buildClassName);
  }

  if (size) {
    classNames.push(prefix + size);
  }

  if (marginLeft && marginLeft === marginRight) {
    classNames.push('mx-' + marginLeft);
  } else {
    if (marginLeft) {
      classNames.push('ml-' + marginLeft);
    }

    if (marginRight) {
      classNames.push('mr-' + marginRight);
    }
  }

  return classNames.join(' ');
};

var makeSaveAttributes = function makeSaveAttributes(attributes) {
  var nonEmptyAttributes = {};

  for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    //console.log( 'key: "' + key + '", val: "' + value + '"' );
    if (value) {
      nonEmptyAttributes[key] = value;
    }
  }

  return nonEmptyAttributes;
};

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

    var buttonClassNames = makeButtonClassNames(state, stateType, size, marginLeft, marginRight);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Button Settings', 'bsx-blocks')
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Rel (optional)', 'bsx-blocks'),
      value: rel,
      onChange: onChangeRel
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('data-fn (optional)', 'bsx-blocks'),
      value: dataFn,
      onChange: onChangeDataFn
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: buttonClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "a",
      multiline: false,
      placeholder: __('Add Title...', 'bsx-blocks'),
      value: content,
      onChange: onChangeContent,
      allowedFormats: [],
      keepPlaceholderOnFocus: true
    })), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-isselected-config-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(URLInput, {
      value: href,
      onChange: onChangeHref
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToggleControl, {
      label: __('Open in new tab'),
      checked: target == '_blank',
      onChange: onChangeTarget
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Hash (optional)', 'bsx-blocks'),
      value: hash,
      onChange: onChangeHash
    }))))];
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
        marginRight = _props$attributes2.marginRight;
    var buttonClassNames = makeButtonClassNames(state, stateType, size, marginLeft, marginRight);
    var saveAttributes = makeSaveAttributes({
      href: hash ? href + '#' + hash : href,
      target: target,
      rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : '',
      'data-fn': dataFn
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, content && !RichText.isEmpty(content) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tagName: href ? 'a' : 'button',
      value: content,
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

var makeWrapperClassNames = function makeWrapperClassNames(textAlign, marginBefore, marginAfter) {
  var classNames = [];

  if (textAlign) {
    classNames.push('text-' + textAlign);
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

  return classNames.join(' ');
};

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

    var wrapperClassNames = makeWrapperClassNames(textAlign, marginBefore, marginAfter);
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
    var wrapperClassNames = makeWrapperClassNames(textAlign, marginBefore, marginAfter);
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


var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    IconButton = _wp$components.IconButton;
/*
    TODO: add icons to button (non icon button)

    - arrow left:
        <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="dashicon dashicons-arrow-left-alt2"><path d="M14 5l-5 5 5 5-1 2-7-7 7-7z"></path></svg>

    - arrow right: 
        <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="dashicon dashicons-arrow-right-alt2"><path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path></svg>

    - trash bin:
        <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="dashicon dashicons-trash"><path d="M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"></path></svg>

    - circle plus:
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>

*/

registerBlockType('bsx-blocks/img-gallery', {
  title: __('BSX Image Gallery', 'bsx-blocks'),
  icon: 'format-gallery',
  category: 'layout',
  attributes: {
    mediaList: {
      type: 'array',
      default: []
    }
  },
  edit: function edit(props) {
    var className = props.className,
        mediaList = props.attributes.mediaList,
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

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "row"
    }, mediaList.map(function (media, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "col-6 col-sm-3 mb-4"
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
            className: "bsx-ui-img-btn h-auto w-100 px-0",
            onClick: open
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            className: 'img-fluid',
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
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
        className: "button",
        icon: "arrow-left-alt2",
        onClick: function onClick() {
          onClickMoveUp(index);
        },
        label: __('Move backward', 'bsx-blocks')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
        className: "button ml-1",
        icon: "arrow-right-alt2",
        onClick: function onClick() {
          onClickMoveDown(index);
        },
        label: __('Move forward', 'bsx-blocks')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
        className: "button text-danger border-danger ml-auto",
        icon: "trash",
        onClick: function onClick() {
          onClickDelete(index);
        },
        label: __('Remove Image', 'bsx-blocks')
      })));
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "col-6 col-sm-3 mb-4 bsx-ui-img-upload"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onAddImage,
      allowedTypes: "image",
      multiple: true,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "button button-large w-100",
          onClick: open
        }, __('Add Images', 'bsx-blocks'));
      }
    }))));
  },
  save: function save(props) {
    var className = props.className,
        mediaList = props.attributes.mediaList;
    /*
    
                print('
    <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery" data-fn="photoswipe">
        <div class="row">
                ');
    
                foreach( $galleryData as $item ) {
                    print('
    <figure class="col-6 col-sm-3 mb-4" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a class="d-block text-center" href="'.$item[ 'srcTrunc' ].$fileExtension.'" itemprop="contentUrl" data-size="'.$item[ 'size' ].'">
            <script>document.write(\'<img class="img-fluid" src="" itemprop="thumbnail" alt="'.$item[ 'caption' ].'" width="'.$item[ 'width' ].'" height="'.$item[ 'height' ].'" data-fn="lazyload" data-src="'.$item[ 'srcTrunc' ].$thumbSuffix.$fileExtension.'">\');</script>
            <noscript><img class="img-fluid" src="'.$item[ 'srcTrunc' ].$thumbSuffix.$fileExtension.'" itemprop="thumbnail" alt="'.$item->caption.'"></noscript>
        </a>
        <figcaption class="sr-only" itemprop="caption description">'.$item[ 'caption' ].'</figcaption>
    </figure>
                    ');
                }
                
                print('
        </div>
    </div>
                ');
    */

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "my-gallery",
      itemscope: true,
      itemtype: "http://schema.org/ImageGallery",
      "data-fn": "photoswipe"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "row"
    }, mediaList.map(function (media, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        class: "col-6 col-sm-3 mb-4",
        itemprop: "associatedMedia",
        itemscope: true,
        itemtype: "http://schema.org/ImageObject"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        class: "d-block text-center",
        href: media.url,
        itemprop: "contentUrl",
        "data-size": media.width + 'x' + media.height
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: "img-fluid",
        src: "",
        alt: media.alt,
        width: media.thumbWidth,
        height: media.thumbHeight,
        "data-src": media.thumbUrl,
        "data-fn": "lazyload"
      }), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: "img-fluid",
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
/* harmony import */ var _img_gallery_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img-gallery/block.js */ "./src/img-gallery/block.js");
/* harmony import */ var _lazy_img_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy-img/block.js */ "./src/lazy-img/block.js");
/* harmony import */ var _row_with_cols_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./row-with-cols/index.js */ "./src/row-with-cols/index.js");
/* harmony import */ var _section_block_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section/block.js */ "./src/section/block.js");
/* harmony import */ var _wrapper_block_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wrapper/block.js */ "./src/wrapper/block.js");










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
    RadioControl = _wp$components.RadioControl;
/*
    TODO: 
        - !!! check which img sizes exist (small img 200w will NOT have size large 1024w)
        - figure (and caption) optional
        - text align for figure (toolbar)
        - sizes { Max, Large, Medium, Small } -> get all image sizes from img.sizes
        - make own srcset sizes (?)
*/

var getUrlTruncAndExtension = function getUrlTruncAndExtension(url) {
  var urlExplode = url.split('.');
  var fileExtension = urlExplode[urlExplode.length - 1];
  urlExplode.pop();
  var urlWithoutFileExtension = urlExplode.join('.');
  return {
    trunc: urlWithoutFileExtension,
    extension: fileExtension
  };
};

var fullImgIsScaled = function fullImgIsScaled(fullUrl) {
  var urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
};

var getOriginalImgUrl = function getOriginalImgUrl(fullUrl) {
  var truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
};

var getSizesAndWithoutSizesTruncFromUrlTrunc = function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  var urlWithoutFileExtensionExplode = urlTrunc.split('-');
  var sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizesTrunc: urlWithoutFileExtensionExplode.join('-')
  };
};

var makeSizedImgs = function makeSizedImgs(config) {
  var ratio = config.originalWidth / config.originalHeight;
  var urlTruncAndExtension = getUrlTruncAndExtension(config.url);
  var fileExtension = urlTruncAndExtension.extension;
  var urlWithoutFileExtension = urlTruncAndExtension.trunc;
  var sizesAndWithoutSizesTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  var width = sizesAndWithoutSizesTrunc.width;
  var urlWithoutSizesAndFileExtension = sizesAndWithoutSizesTrunc.withoutSizesTrunc;
  /*
  console.log( 'urlWithoutFileExtension: ' + urlWithoutFileExtension );
  console.log( 'fileExtension: ' + fileExtension );
  console.log( 'urlWithoutSizesAndFileExtension: ' + urlWithoutSizesAndFileExtension );
  */

  var returnList = [];
  config.scaleList.forEach(function (scale, index) {
    //console.log( '-----> scale: ' + scale );
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
      /*
      console.log( 'scaledUrl: ' + scaledUrl );
      console.log( 'scaledWidth: ' + scaledWidth );
      console.log( 'scaledHeight: ' + scaledHeight + ' = Math.round( ' + scaledWidth + ' / ' + ratio + ' )' );
      */
    }
  });
  return returnList;
};

var getOriginalImgSizes = function getOriginalImgSizes(originalImgUrl) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');

    img.onload = function () {
      //console.log( 'onload test img in function: ' + img.width + ' x ' + img.height );
      resolve({
        width: img.width,
        height: img.height
      });
      img.remove;
    };

    img.onerror = function (err) {
      reject('Error on loading image "' + originalImgUrl + '"', err);
    };

    img.src = originalImgUrl;
    document.body.appendChild(img);
  });
};

var imageExists = function imageExists(url) {
  return new Promise(function (resolve, reject) {
    //console.log( 'doing imageExists: ' + url );
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
}; // TODO: use array with maps instead, see banner `responsiveMediaSrcIndexList`


var smallMobileSizeStep = 2;
var smallMobileMediaQuery = '(max-width: 459.98px)';
var mobileSizeStep = 1;
var mobileMediaQuery = '(max-width: 767.98px)';
registerBlockType('bsx-blocks/lazy-img', {
  title: __('BSX Lazy Image', 'bsx-blocks'),
  icon: 'format-image',
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
    smallMobileUrl: {
      type: 'string'
    },
    smallMobileWidth: {
      type: 'number'
    },
    smallMobileHeight: {
      type: 'number'
    },
    mobileUrl: {
      type: 'string'
    },
    mobileWidth: {
      type: 'number'
    },
    mobileHeight: {
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
    lowestSrcsetImgSizeIndex: {
      type: 'number',
      default: 1
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
        smallMobileUrl = _props$attributes.smallMobileUrl,
        smallMobileWidth = _props$attributes.smallMobileWidth,
        smallMobileHeight = _props$attributes.smallMobileHeight,
        mobileUrl = _props$attributes.mobileUrl,
        mobileWidth = _props$attributes.mobileWidth,
        mobileHeight = _props$attributes.mobileHeight,
        url = _props$attributes.url,
        width = _props$attributes.width,
        height = _props$attributes.height,
        origWidth = _props$attributes.origWidth,
        origHeight = _props$attributes.origHeight,
        lowestSrcsetImgSizeIndex = _props$attributes.lowestSrcsetImgSizeIndex,
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
        var originalImgUrl, originalWidth, originalHeight, originalImgSizes, existingImgList, x0_75LargeImg, x1_5LargeImg, x2LargeImg, sizedImgsConfig, sizedImgs, newImgSizes, newImgSizeIndex, newLowestSrcsetImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 40;
                  break;
                }

                //console.log( 'img.url: ' + img.url );
                // TEST img object

                /*
                for ( let [ key, value ] of Object.entries( img ) ) {
                    console.log( 'key: "' + key + '", val: "' + value + '"' );
                }
                 console.log( 'img.nonces' );
                if ( img.nonces ) {
                    for ( let [ key, value ] of Object.entries( img.nonces ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }
                 console.log( 'img.sizes' );
                if ( img.sizes ) {
                    for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }
                 console.log( 'img.compat' );
                if ( img.compat ) {
                    for ( let [ key, value ] of Object.entries( img.compat ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }
                */
                //console.log( 'fullImgIsScaled( img.url ): ' + fullImgIsScaled( img.url ) );
                //console.log( 'url               : ' + url );
                //console.log( 'img.sizes.full.url: ' + img.sizes.full.url );
                originalImgUrl = '';
                originalWidth = 0;
                originalHeight = 0;

                if (!fullImgIsScaled(img.url)) {
                  _context.next = 19;
                  break;
                }

                // get original, get sizes
                //console.log( 'getOriginalImgUrl( img.url ): ' + getOriginalImgUrl( img.url ) );
                originalImgUrl = getOriginalImgUrl(img.url); // TODO: load img, get original sizes

                _context.prev = 6;
                _context.next = 9;
                return getOriginalImgSizes(originalImgUrl);

              case 9:
                originalImgSizes = _context.sent;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](6);
                console.error(_context.t0);

              case 15:
                //console.log( 'originalImgSizes done' );
                originalWidth = originalImgSizes.width || 0;
                originalHeight = originalImgSizes.height || 0; //console.log( 'after await: originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

                _context.next = 21;
                break;

              case 19:
                // get sizes from full img
                // check which sizes exist
                originalWidth = img.sizes.full.width;
                originalHeight = img.sizes.full.height;

              case 21:
                if (!(img.sizes.large != undefined)) {
                  _context.next = 30;
                  break;
                }

                // config for making sizes (might change in newer WP versions)
                sizedImgsConfig = {
                  url: img.sizes['large'].url,
                  scaleList: [0.75, 1.5, 2],
                  originalWidth: originalWidth,
                  originalHeight: originalHeight
                };
                sizedImgs = makeSizedImgs(sizedImgsConfig);
                x0_75LargeImg = sizedImgs[0] || {};
                x1_5LargeImg = sizedImgs[1] || {};
                x2LargeImg = sizedImgs[2] || {}; //console.log( 'imageExists calling' );

                _context.next = 29;
                return Promise.all([imageExists(x0_75LargeImg.url), imageExists(x1_5LargeImg.url), imageExists(x2LargeImg.url)]);

              case 29:
                existingImgList = _context.sent;

              case 30:
                // start build list of all really existing img sizes
                newImgSizes = []; // thumbnail

                if (img.sizes.thumbnail != undefined && img.sizes.thumbnail.url) {
                  newImgSizes.push({
                    url: img.sizes.thumbnail.url,
                    width: img.sizes.thumbnail.width,
                    height: img.sizes.thumbnail.height
                  });
                } // medium


                if (img.sizes.medium != undefined && img.sizes.medium.url) {
                  newImgSizes.push({
                    url: img.sizes.medium.url,
                    width: img.sizes.medium.width,
                    height: img.sizes.medium.height
                  });
                }

                if (img.sizes.large != undefined && img.sizes.large.url) {
                  // x0.75 large
                  if (existingImgList[0]) {
                    newImgSizes.push({
                      url: x0_75LargeImg.url,
                      width: x0_75LargeImg.width,
                      height: x0_75LargeImg.height
                    });
                  } // large


                  newImgSizes.push({
                    url: img.sizes.large.url,
                    width: img.sizes.large.width,
                    height: img.sizes.large.height
                  }); // x1.5 large

                  if (existingImgList[1]) {
                    newImgSizes.push({
                      url: x1_5LargeImg.url,
                      width: x1_5LargeImg.width,
                      height: x1_5LargeImg.height
                    });
                  } // x2 large


                  if (existingImgList[1]) {
                    newImgSizes.push({
                      url: x2LargeImg.url,
                      width: x2LargeImg.width,
                      height: x2LargeImg.height
                    });
                  }
                } // full (uploaded or down scaled size)


                newImgSizes.push({
                  url: img.sizes.full.url,
                  width: img.sizes.full.width,
                  height: img.sizes.full.height
                }); // original (unscaled uploaded size)

                if (originalImgUrl) {
                  newImgSizes.push({
                    url: originalImgUrl,
                    width: originalWidth,
                    height: originalHeight
                  });
                } // TEST
                //console.log( '-----> newImgSizes:' );

                /*
                newImgSizes.forEach( ( imgSize, index ) => {
                    console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                } );
                */
                // check if current img size index fits to new img (might be too large)


                newImgSizeIndex = parseInt(imgSizeIndex);

                if (imgSizeIndex >= newImgSizes.length) {
                  newImgSizeIndex = newImgSizes.length - 1; //console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                } // do not use thumbnail for srcset if has square format, start with img sizes index 1 then


                newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1; // do not use thumbnail (square format) for srcset, start with img sizes index 1

                setAttributes({
                  imgId: img.id,
                  imgSizes: newImgSizes,
                  imgSizeIndex: newImgSizeIndex.toString(),
                  smallMobileUrl: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - smallMobileSizeStep].url : '',
                  smallMobileWidth: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - smallMobileSizeStep].width : 0,
                  smallMobileHeight: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - smallMobileSizeStep].height : 0,
                  mobileUrl: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - mobileSizeStep].url : '',
                  mobileWidth: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - mobileSizeStep].width : 0,
                  mobileHeight: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[newImgSizeIndex - mobileSizeStep].height : 0,
                  url: newImgSizes[newImgSizeIndex].url,
                  width: newImgSizes[newImgSizeIndex].width,
                  height: newImgSizes[newImgSizeIndex].height,
                  origWidth: originalWidth,
                  origHeight: originalHeight,
                  lowestSrcsetImgSizeIndex: newLowestSrcsetImgSizeIndex,
                  alt: img.alt
                }); // TEST – TODO: remove

                /*
                for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                    console.log( 'key: "' + key + '", val: "' + value + '"' );
                }
                */

                /*
                console.log( 'mediumUrl: ' + img.sizes.medium.url );
                console.log( 'mediumWidth: ' + img.sizes.medium.width );
                console.log( 'mediumHeight: ' + img.sizes.medium.height );
                console.log( 'largeUrl: ' + img.sizes.large.url );
                console.log( 'largeWidth: ' + img.sizes.large.width );
                console.log( 'largeHeight: ' + img.sizes.large.height );
                */
                //console.log( 'ratio thumbnail ( ' + img.sizes.thumbnail.width + ' / ' + img.sizes.thumbnail.height + ' ): ' + img.sizes.thumbnail.width / img.sizes.thumbnail.height );

                /*
                console.log( 'ratio medium ( ' + img.sizes.medium.width + ' / ' + img.sizes.medium.height + ' ): ' + img.sizes.medium.width / img.sizes.medium.height );
                console.log( 'ratio large ( ' + img.sizes.large.width + ' / ' + img.sizes.large.height + ' ): ' + img.sizes.large.width / img.sizes.large.height );
                console.log( 'ratio full ( ' + img.sizes.full.width + ' / ' + img.sizes.full.height + ' ): ' + img.sizes.full.width / img.sizes.full.height );
                */

              case 40:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 12]]);
      }));
      return _onSelectImage.apply(this, arguments);
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
        smallMobileUrl: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - smallMobileSizeStep].url : '',
        smallMobileWidth: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - smallMobileSizeStep].width : 0,
        smallMobileHeight: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - smallMobileSizeStep].height : 0,
        mobileUrl: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - mobileSizeStep].url : '',
        mobileWidth: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - mobileSizeStep].width : 0,
        mobileHeight: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[value - mobileSizeStep].height : 0,
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
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Image Size', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: className
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("figure", {
      "data-img-size": imgSizeIndex
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("picture", null, smallMobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", {
      media: smallMobileMediaQuery,
      srcset: smallMobileUrl,
      width: smallMobileWidth,
      height: smallMobileHeight
    }), mobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", {
      media: smallMobileUrl ? mobileMediaQuery : smallMobileMediaQuery,
      srcset: mobileUrl,
      width: mobileWidth,
      height: mobileHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      className: 'img-fluid upload-img',
      src: url,
      alt: alt
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-isselected-config-panel"
    }, !figcaption && RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), imgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-upload-btn-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload Image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextControl, {
      label: __('Alt', 'bsx-blocks'),
      value: alt,
      onChange: onChangeMediaAlt
    })))];
  },

  /*
  <script>
      document.write(
          '<picture>'
          + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
          + '<source media="(min-width: 1440px)" srcset="" data-srcset="/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
          + '<source media="(min-width: 1140px)" srcset="" data-srcset="/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
          + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
          + '</picture>'
      );
  </script>
  <noscript><img class="img-fluid" src="/example-img-006-720x480.jpg" alt="Example image"></noscript>
  */
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        imgSizes = _props$attributes2.imgSizes,
        smallMobileUrl = _props$attributes2.smallMobileUrl,
        smallMobileWidth = _props$attributes2.smallMobileWidth,
        smallMobileHeight = _props$attributes2.smallMobileHeight,
        mobileUrl = _props$attributes2.mobileUrl,
        mobileWidth = _props$attributes2.mobileWidth,
        mobileHeight = _props$attributes2.mobileHeight,
        url = _props$attributes2.url,
        width = _props$attributes2.width,
        height = _props$attributes2.height,
        origWidth = _props$attributes2.origWidth,
        origHeight = _props$attributes2.origHeight,
        alt = _props$attributes2.alt,
        figcaption = _props$attributes2.figcaption;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: className
    }, url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("picture", null, smallMobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", {
      media: smallMobileMediaQuery,
      srcset: "",
      "data-srcset": smallMobileUrl,
      "data-width": smallMobileWidth,
      "data-height": smallMobileHeight
    }), mobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("source", {
      media: smallMobileUrl ? mobileMediaQuery : smallMobileMediaQuery,
      srcset: "",
      "data-srcset": mobileUrl,
      "data-width": mobileWidth,
      "data-height": mobileHeight
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
  icon: 'grid-view',
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
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



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

var makeClassNames = function makeClassNames(belowNavbar, marginBefore, marginAfter) {
  var classNames = [];

  if (belowNavbar) {
    classNames.push('below-navbar-content');
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

  return classNames.join(' ');
};

var makeSaveAttributes = function makeSaveAttributes(attributes) {
  var nonEmptyAttributes = {};

  for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    //console.log( 'key: "' + key + '", val: "' + value + '"' );
    if (value) {
      nonEmptyAttributes[key] = value;
    }
  }

  return nonEmptyAttributes;
};

registerBlockType('bsx-blocks/section', {
  title: __('BSX Section', 'bsx-blocks'),
  icon: 'category',
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string',
      default: 'empty'
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
      template: [['bsx-blocks/container', {}, [['core/heading', {
        placeholder: 'Add heading, configure heading level...'
      }]]]],
      templateLock: false
    }];

    var getTemplate = function getTemplate(currentTemplateName) {
      var currentTemplate = templates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var template = getTemplate(templateName);

    var onTemplateChange = function onTemplateChange(value) {
      template = getTemplate(value);
      setAttributes({
        templateName: value
      });
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
    };

    var containerClassName = makeClassNames(belowNavbar, marginBefore, marginAfter);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Section Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "bsxui-icon-text-button-list"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onTemplateChange(template.name);
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: containerClassName,
      id: id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        belowNavbar = _props$attributes2.belowNavbar,
        id = _props$attributes2.id,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var containerClassName = makeClassNames(belowNavbar, marginBefore, marginAfter);
    var saveAttributes = makeSaveAttributes({
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
    ToggleControl = _wp$components.ToggleControl; // TODO: add rounded, border-color, border

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