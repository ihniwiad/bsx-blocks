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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody;
/*
    TODO: 
        - figure (and caption) optional
        - text align for figure (toolbar)
        - sizes { Max, Large, Medium, Small } -> get all image sizes from img.sizes
        - make own srcset sizes
*/

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
      default: ''
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
    smallUrl: {
      type: 'string'
    },
    smallWidth: {
      type: 'number'
    },
    smallHeight: {
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
        url = _props$attributes.url,
        width = _props$attributes.width,
        height = _props$attributes.height,
        smallUrl = _props$attributes.smallUrl,
        smallWidth = _props$attributes.smallWidth,
        smallHeight = _props$attributes.smallHeight,
        largeUrl = _props$attributes.largeUrl,
        largeWidth = _props$attributes.largeWidth,
        largeHeight = _props$attributes.largeHeight,
        alt = _props$attributes.alt,
        figcaption = _props$attributes.figcaption,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onSelectImage = function onSelectImage(img) {
      setAttributes({
        imgId: img.id,
        url: img.url,
        width: img.sizes.full.width,
        height: img.sizes.full.height,
        smallUrl: img.sizes.medium.url,
        smallWidth: img.sizes.medium.width,
        smallHeight: img.sizes.medium.height,
        largeUrl: img.sizes.large.url,
        largeWidth: img.sizes.large.width,
        largeHeight: img.sizes.large.height,
        alt: img.alt
      }); // TEST – TODO: remove
      //for ( let [ key, value ] of Object.entries( img.sizes ) ) {
      //    console.log( 'key: "' + key + '", val: "' + value + '"' );
      //}

      /*
      console.log( 'smallUrl: ' + img.sizes.medium.url );
      console.log( 'smallWidth: ' + img.sizes.medium.width );
      console.log( 'smallHeight: ' + img.sizes.medium.height );
      console.log( 'largeUrl: ' + img.sizes.large.url );
      console.log( 'largeWidth: ' + img.sizes.large.width );
      console.log( 'largeHeight: ' + img.sizes.large.height );
      */
    };

    var onChangeMediaAlt = function onChangeMediaAlt(value) {
      setAttributes({
        alt: value
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

    var onChangeFigcaption = function onChangeFigcaption(value) {
      setAttributes({
        figcaption: value
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('BSX Block Settings', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Width', 'bsx-blocks'),
      value: width,
      onChange: onChangeMediaWidth
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Height', 'bsx-blocks'),
      value: height,
      onChange: onChangeMediaHeight
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, imgId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: 'upload-img',
      src: url,
      alt: alt
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'bsxui-img-upload-placeholder'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Select / upload Image', 'bsx-blocks'));
      }
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-isselected-config-panel"
    }, !figcaption && RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "figcaption",
      multiline: false,
      placeholder: __('Caption (optional)', 'bsx-blocks'),
      value: figcaption,
      onChange: onChangeFigcaption,
      keepPlaceholderOnFocus: true
    }), imgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bsxui-upload-btn-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: imgId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open,
          isSecondary: true
        }, __('Change / upload Image', 'bsx-blocks'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Alt', 'bsx-blocks'),
      value: alt,
      onChange: onChangeMediaAlt
    })))];
  },

  /*
  <script>
      document.write(
          '<picture>'
          + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/documents/category/3677/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
          + '<source media="(min-width: 1440px)" srcset="" data-srcset="/documents/category/3677/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
          + '<source media="(min-width: 1140px)" srcset="" data-srcset="/documents/category/3677/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
          + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/documents/category/3677/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
          + '</picture>'
      );
  </script>
  <noscript><img class="img-fluid" src="/documents/category/3677/example-img-006-720x480.jpg" alt="Example image"></noscript>
  */
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        url = _props$attributes2.url,
        width = _props$attributes2.width,
        height = _props$attributes2.height,
        smallUrl = _props$attributes2.smallUrl,
        smallWidth = _props$attributes2.smallWidth,
        smallHeight = _props$attributes2.smallHeight,
        largeUrl = _props$attributes2.largeUrl,
        largeWidth = _props$attributes2.largeWidth,
        largeHeight = _props$attributes2.largeHeight,
        alt = _props$attributes2.alt,
        figcaption = _props$attributes2.figcaption;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("script", null, "document.write( '", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("picture", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("source", {
      media: "(max-width: 459.98px)",
      srcset: "",
      "data-srcset": smallUrl,
      "data-width": smallWidth,
      "data-height": smallHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "img-fluid",
      src: "",
      alt: alt,
      width: largeWidth,
      height: largeHeight,
      "data-src": largeUrl,
      "data-fn": "lazyload"
    })), "' );"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("noscript", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "img-fluid",
      src: largeUrl,
      alt: alt,
      width: largeWidth,
      height: largeHeight
    })), figcaption && !RichText.isEmpty(figcaption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "font-italic",
      value: figcaption
    })));
  }
});

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