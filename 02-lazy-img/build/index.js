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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);



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
};

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
                  _context.next = 41;
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


                newImgSizes.forEach(function (imgSize, index) {
                  console.log('mgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"');
                }); // check if current img size index fits to new img (might be too large)

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

              case 41:
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