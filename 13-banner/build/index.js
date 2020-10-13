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

var makeClassNames = function makeClassNames(bannerType, bannerSize, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter) {
  var classNames = [];

  if (true) {
    // always set bannerType and bannerSize to keep debugging easy
    classNames.push('banner-' + bannerType + '-' + bannerSize);
  }

  if (bgAttachment) {
    classNames.push('bg-' + bgAttachment);
  }

  if (bgSize) {
    classNames.push('bg-' + bgSize);
  }

  if (bgPosition) {
    classNames.push('bg-' + bgPosition);
  }

  if (alignItems) {
    classNames.push('d-flex');
    classNames.push('align-items-' + alignItems);
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

var bannerStyle;

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
};

registerBlockType('bsx-blocks/banner', {
  title: __('BSX Banner', 'bsx-blocks'),
  icon: 'category',
  category: 'layout',
  attributes: {
    templateName: {
      type: 'string',
      default: 'empty'
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
        imgId = _props$attributes.imgId,
        imgSizes = _props$attributes.imgSizes,
        imgSizeIndex = _props$attributes.imgSizeIndex,
        url = _props$attributes.url,
        bannerType = _props$attributes.bannerType,
        bannerSize = _props$attributes.bannerSize,
        bgAttachment = _props$attributes.bgAttachment,
        bgSize = _props$attributes.bgSize,
        bgPosition = _props$attributes.bgPosition,
        alignItems = _props$attributes.alignItems,
        marginBefore = _props$attributes.marginBefore,
        marginAfter = _props$attributes.marginAfter,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
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
      template: [['bsx-blocks/container', {
        belowNavbar: true
      }, [['core/heading', {
        placeholder: 'Add heading, configure heading level...',
        level: '1',
        className: 'display-1 text-white text-shadow-darker'
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

    function onSelectImage(_x) {
      return _onSelectImage.apply(this, arguments);
    }

    function _onSelectImage() {
      _onSelectImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(img) {
        var originalImgUrl, originalWidth, originalHeight, originalImgSizes, existingImgList, x0_75LargeImg, x1_5LargeImg, x2LargeImg, sizedImgsConfig, sizedImgs, newImgSizes, newImgSizeIndex;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof img.url !== 'undefined')) {
                  _context.next = 40;
                  break;
                }

                originalImgUrl = '';
                originalWidth = 0;
                originalHeight = 0;

                if (!fullImgIsScaled(img.url)) {
                  _context.next = 19;
                  break;
                }

                // get original, get sizes
                originalImgUrl = getOriginalImgUrl(img.url);
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
                originalWidth = originalImgSizes.width || 0;
                originalHeight = originalImgSizes.height || 0;
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
                x2LargeImg = sizedImgs[2] || {};
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
                } // check if current img size index fits to new img (might be too large)


                newImgSizeIndex = parseInt(imgSizeIndex);

                if (imgSizeIndex >= newImgSizes.length) {
                  newImgSizeIndex = newImgSizes.length - 1;
                } // do not use thumbnail (square format) for srcset, start with img sizes index 1


                setAttributes({
                  imgId: img.id,
                  imgSizes: newImgSizes,
                  imgSizeIndex: newImgSizeIndex.toString(),
                  url: newImgSizes[newImgSizeIndex].url
                });
                console.log('url: ' + newImgSizes[newImgSizeIndex].url);

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

    var onChangeBelowNavbar = function onChangeBelowNavbar(value) {
      setAttributes({
        belowNavbar: value
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
    var bannerClassName = makeClassNames(bannerType, bannerSize, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter);
    bannerStyle = {
      backgroundImage: "url(".concat(url, ")")
    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Banner Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "block-editor-block-styles"
    }, templates.map(function (template, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onTemplateChange(template.name);
        },
        className: 'block-editor-block-styles__item d-flex flex-column ' + (templateName === template.name ? 'is-active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "block-editor-block-styles__item-preview border-0 p-0"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "block-editor-block-styles__item-label"
      }, template.title));
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RadioControl, {
      label: __('Image size and format', 'bsx-blocks'),
      selected: imgSizeIndex.toString(),
      options: imgSizeRadioControlOptions,
      onChange: onChangeImgSizeIndex
    }), imgSizes[imgSizeIndex] != undefined && imgSizes[imgSizeIndex].url != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: imgSizes[imgSizeIndex].url,
      target: "_blank"
    }, __('Preview selected image', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __('Margin', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: __('Margin before', 'bsx-blocks'),
      value: marginBefore,
      onChange: onChangeMarginBefore,
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
      help: __('Spacer before Container', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
      help: __('Spacer after Container', 'bsx-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: bannerClassName,
      style: bannerStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
      template: template,
      renderAppender: hasInnerBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "bsxui-isselected-config-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
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
    }))))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        templateName = _props$attributes2.templateName,
        imgId = _props$attributes2.imgId,
        imgSizes = _props$attributes2.imgSizes,
        imgSizeIndex = _props$attributes2.imgSizeIndex,
        url = _props$attributes2.url,
        bannerType = _props$attributes2.bannerType,
        bannerSize = _props$attributes2.bannerSize,
        bgAttachment = _props$attributes2.bgAttachment,
        bgSize = _props$attributes2.bgSize,
        bgPosition = _props$attributes2.bgPosition,
        alignItems = _props$attributes2.alignItems,
        marginBefore = _props$attributes2.marginBefore,
        marginAfter = _props$attributes2.marginAfter;
    var bannerClassName = makeClassNames(bannerType, bannerSize, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: bannerClassName,
      "data-fn": "lazyload",
      "data-src": url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      class: "banner-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null)));
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