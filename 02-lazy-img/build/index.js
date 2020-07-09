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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);




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
      console.log('onload test img in function: ' + img.width + ' x ' + img.height);
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
    console.log('doing imageExists: ' + url);
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
};

var mobileMediaQuery = '(max-width: 459.98px)';
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
    imgSize: {
      type: 'string',
      default: '3'
    },
    imgSizes: {
      type: 'array'
    },
    imgId: {
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
    mediumUrl: {
      type: 'string'
    },
    mediumWidth: {
      type: 'number'
    },
    mediumHeight: {
      type: 'number'
    },
    x0_75LargeUrl: {
      type: 'string'
    },
    x0_75LargeWidth: {
      type: 'number'
    },
    x0_75LargeHeight: {
      type: 'number'
    },
    largeUrl: {
      type: 'string'
    },
    largeWidth: {
      type: 'number'
    },
    largeHeight: {
      type: 'number'
    },
    x1_5LargeUrl: {
      type: 'string'
    },
    x1_5LargeWidth: {
      type: 'number'
    },
    x1_5LargeHeight: {
      type: 'number'
    },
    x2LargeUrl: {
      type: 'string'
    },
    x2LargeWidth: {
      type: 'number'
    },
    x2LargeHeight: {
      type: 'number'
    },
    origUrl: {
      type: 'string'
    },
    origWidth: {
      type: 'number'
    },
    origHeight: {
      type: 'number'
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
        imgSize = _props$attributes.imgSize,
        imgSizes = _props$attributes.imgSizes,
        mobileUrl = _props$attributes.mobileUrl,
        mobileWidth = _props$attributes.mobileWidth,
        mobileHeight = _props$attributes.mobileHeight,
        url = _props$attributes.url,
        width = _props$attributes.width,
        height = _props$attributes.height,
        mediumUrl = _props$attributes.mediumUrl,
        mediumWidth = _props$attributes.mediumWidth,
        mediumHeight = _props$attributes.mediumHeight,
        x0_75LargeUrl = _props$attributes.x0_75LargeUrl,
        x0_75LargeWidth = _props$attributes.x0_75LargeWidth,
        x0_75LargeHeight = _props$attributes.x0_75LargeHeight,
        largeUrl = _props$attributes.largeUrl,
        largeWidth = _props$attributes.largeWidth,
        largeHeight = _props$attributes.largeHeight,
        x1_5LargeUrl = _props$attributes.x1_5LargeUrl,
        x1_5LargeWidth = _props$attributes.x1_5LargeWidth,
        x1_5LargeHeight = _props$attributes.x1_5LargeHeight,
        x2LargeUrl = _props$attributes.x2LargeUrl,
        x2LargeWidth = _props$attributes.x2LargeWidth,
        x2LargeHeight = _props$attributes.x2LargeHeight,
        origUrl = _props$attributes.origUrl,
        origWidth = _props$attributes.origWidth,
        origHeight = _props$attributes.origHeight,
        alt = _props$attributes.alt,
        figcaption = _props$attributes.figcaption,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        setState = props.setState;

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(img) {
        var originalImgUrl, originalWidth, originalHeight, originalImgSizes, sizedImgsConfig, sizedImgs, x0_75LargeImg, x1_5LargeImg, x2LargeImg, existingImgList, buildImgSizes, newImgSize, mobileImgSize;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('img.url: ' + img.url); // TEST img object

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

                console.log('fullImgIsScaled( img.url ): ' + fullImgIsScaled(img.url)); //console.log( 'url               : ' + url );
                //console.log( 'img.sizes.full.url: ' + img.sizes.full.url );

                originalImgUrl = '';
                originalWidth = 0;
                originalHeight = 0;

                if (!fullImgIsScaled(img.url)) {
                  _context.next = 20;
                  break;
                }

                // get original, get sizes
                //console.log( 'getOriginalImgUrl( img.url ): ' + getOriginalImgUrl( img.url ) );
                originalImgUrl = getOriginalImgUrl(img.url); // TODO: load img, get original sizes

                _context.prev = 7;
                _context.next = 10;
                return getOriginalImgSizes(originalImgUrl);

              case 10:
                originalImgSizes = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                console.error(_context.t0);

              case 16:
                //console.log( 'originalImgSizes done' );
                originalWidth = originalImgSizes.width || 0;
                originalHeight = originalImgSizes.height || 0; //console.log( 'after await: originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

                _context.next = 22;
                break;

              case 20:
                // get sizes from full img
                // check which sizes exist
                originalWidth = img.sizes.full.width;
                originalHeight = img.sizes.full.height;

              case 22:
                // /TEST
                console.log('originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight); // config for making sizes (might change in newer WP versions)

                sizedImgsConfig = {
                  url: img.sizes['large'].url,
                  scaleList: [0.75, 1.5, 2],
                  originalWidth: originalWidth,
                  originalHeight: originalHeight
                };
                sizedImgs = makeSizedImgs(sizedImgsConfig);
                x0_75LargeImg = sizedImgs[0] || {};
                x1_5LargeImg = sizedImgs[1] || {};
                x2LargeImg = sizedImgs[2] || {};
                console.log('imageExists calling');
                _context.next = 31;
                return Promise.all([imageExists(x0_75LargeImg.url), imageExists(x1_5LargeImg.url), imageExists(x2LargeImg.url)]);

              case 31:
                existingImgList = _context.sent;
                console.log('imageExists done');
                existingImgList.forEach(function (imageExists, index) {
                  console.log('imageExists[ ' + index + ' ]: ' + imageExists);
                }); // start build list of all really existing img sizes

                buildImgSizes = []; // thumbnail

                if (img.sizes.thumbnail.url) {
                  buildImgSizes.push({
                    url: img.sizes.thumbnail.url,
                    width: img.sizes.thumbnail.width,
                    height: img.sizes.thumbnail.height
                  });
                } // medium


                if (img.sizes.medium.url) {
                  buildImgSizes.push({
                    url: img.sizes.medium.url,
                    width: img.sizes.medium.width,
                    height: img.sizes.medium.height
                  });
                }

                if (img.sizes.large.url) {
                  // x0.75 large
                  if (existingImgList[0]) {
                    buildImgSizes.push({
                      url: x0_75LargeImg.url,
                      width: x0_75LargeImg.width,
                      height: x0_75LargeImg.height
                    });
                  } // large


                  buildImgSizes.push({
                    url: img.sizes.large.url,
                    width: img.sizes.large.width,
                    height: img.sizes.large.height
                  }); // x1.5 large

                  if (existingImgList[1]) {
                    buildImgSizes.push({
                      url: x1_5LargeImg.url,
                      width: x1_5LargeImg.width,
                      height: x1_5LargeImg.height
                    });
                  } // x2 large


                  if (existingImgList[1]) {
                    buildImgSizes.push({
                      url: x2LargeImg.url,
                      width: x2LargeImg.width,
                      height: x2LargeImg.height
                    });
                  }
                } // full (uploaded or down scaled size)


                buildImgSizes.push({
                  url: img.sizes.full.url,
                  width: img.sizes.full.width,
                  height: img.sizes.full.height
                }); // original (unscaled uploaded size)

                if (originalImgUrl) {
                  buildImgSizes.push({
                    url: originalImgUrl,
                    width: originalWidth,
                    height: originalHeight
                  });
                } // TEST


                console.log('-----> buildImgSizes:');
                buildImgSizes.forEach(function (imgSize, index) {
                  console.log('mgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"');
                }); // check if img size index fits to new img

                newImgSize = imgSize;

                if (imgSize >= buildImgSizes.length) {
                  newImgSize = buildImgSizes.length - 1;
                } // make mobile img size


                mobileImgSize = imgSize > 0 ? imgSize - 1 : 0;
                setAttributes({
                  imgId: img.id,
                  imgSizes: buildImgSizes,
                  mobileUrl: newImgSize > 0 ? buildImgSizes[newImgSize - 1].url : '',
                  mobileWidth: newImgSize > 0 ? buildImgSizes[newImgSize - 1].width : 0,
                  mobileHeight: newImgSize > 0 ? buildImgSizes[newImgSize - 1].height : 0,
                  url: buildImgSizes[newImgSize].url,
                  width: buildImgSizes[newImgSize].width,
                  height: buildImgSizes[newImgSize].height,
                  mediumUrl: img.sizes.medium.url,
                  mediumWidth: img.sizes.medium.width,
                  mediumHeight: img.sizes.medium.height,
                  x0_75LargeUrl: x0_75LargeImg.url,
                  x0_75LargeWidth: x0_75LargeImg.width,
                  x0_75LargeHeight: x0_75LargeImg.height,
                  largeUrl: img.sizes.large.url,
                  largeWidth: img.sizes.large.width,
                  largeHeight: img.sizes.large.height,
                  x1_5LargeUrl: x1_5LargeImg.url,
                  x1_5LargeWidth: x1_5LargeImg.width,
                  x1_5LargeHeight: x1_5LargeImg.height,
                  x2LargeUrl: x2LargeImg.url,
                  x2LargeWidth: x2LargeImg.width,
                  x2LargeHeight: x2LargeImg.height,
                  origUrl: originalImgUrl,
                  origWidth: originalWidth,
                  origHeight: originalHeight,
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

              case 46:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 13]]);
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

    var imgSizeRadioControlOptions = [];
    imgSizes.forEach(function (imgSize, index) {
      imgSizeRadioControlOptions.push({
        value: index.toString(),
        label: imgSize.width + 'x' + imgSize.height
      });
    });
    var ImgWidthRadioControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
      value: imgSize
    })(function (_ref) {
      var value = _ref.value,
          setState = _ref.setState,
          attributes = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["value", "setState"]);

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RadioControl, {
        label: __('Image size and format', 'bsx-blocks'),
        selected: value,
        options: imgSizeRadioControlOptions,
        onChange: function onChange(value) {
          setState({
            value: value
          });
          setAttributes({
            imgSize: value,
            mobileUrl: value > 0 ? imgSizes[value - 1].url : '',
            mobileWidth: value > 0 ? imgSizes[value - 1].width : 0,
            mobileHeight: value > 0 ? imgSizes[value - 1].height : 0,
            url: imgSizes[value].url,
            width: imgSizes[value].width,
            height: imgSizes[value].height
          });
        }
      });
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: __('Image Size', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ImgWidthRadioControl, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed image width', 'bsx-blocks'),
      value: width,
      onChange: onChangeMediaWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
      label: __('Displayed image height', 'bsx-blocks'),
      value: height,
      onChange: onChangeMediaHeight
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: className
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", null, mobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", {
      media: mobileMediaQuery,
      srcset: mobileUrl,
      width: mobileWidth,
      height: mobileHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: 'img-fluid upload-img',
      src: url,
      alt: alt
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      class: "bsxui-isselected-config-panel"
    }, !figcaption && RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), imgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "bsxui-upload-btn-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload Image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TextControl, {
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
        imgSize = _props$attributes2.imgSize,
        imgSizes = _props$attributes2.imgSizes,
        mobileUrl = _props$attributes2.mobileUrl,
        mobileWidth = _props$attributes2.mobileWidth,
        mobileHeight = _props$attributes2.mobileHeight,
        url = _props$attributes2.url,
        width = _props$attributes2.width,
        height = _props$attributes2.height,
        mediumUrl = _props$attributes2.mediumUrl,
        mediumWidth = _props$attributes2.mediumWidth,
        mediumHeight = _props$attributes2.mediumHeight,
        x0_75LargeUrl = _props$attributes2.x0_75LargeUrl,
        x0_75LargeWidth = _props$attributes2.x0_75LargeWidth,
        x0_75LargeHeight = _props$attributes2.x0_75LargeHeight,
        largeUrl = _props$attributes2.largeUrl,
        largeWidth = _props$attributes2.largeWidth,
        largeHeight = _props$attributes2.largeHeight,
        x1_5LargeUrl = _props$attributes2.x1_5LargeUrl,
        x1_5LargeWidth = _props$attributes2.x1_5LargeWidth,
        x1_5LargeHeight = _props$attributes2.x1_5LargeHeight,
        x2LargeUrl = _props$attributes2.x2LargeUrl,
        x2LargeWidth = _props$attributes2.x2LargeWidth,
        x2LargeHeight = _props$attributes2.x2LargeHeight,
        origUrl = _props$attributes2.origUrl,
        origWidth = _props$attributes2.origWidth,
        origHeight = _props$attributes2.origHeight,
        alt = _props$attributes2.alt,
        figcaption = _props$attributes2.figcaption;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: className
    }, url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", null, mobileUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("source", {
      media: mobileMediaQuery,
      srcset: "",
      "data-srcset": mobileUrl,
      "data-width": mobileWidth,
      "data-height": mobileHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: "img-fluid",
      src: "",
      alt: alt,
      "data-src": url,
      width: width,
      height: height,
      "data-fn": "lazyload"
    })), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      className: "img-fluid",
      src: url,
      alt: alt,
      width: width,
      height: height
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "font-italic",
      value: figcaption
    })));
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

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

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