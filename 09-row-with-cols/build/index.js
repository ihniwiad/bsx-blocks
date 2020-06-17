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

/***/ "./src/col/block.js":
/*!**************************!*\
  !*** ./src/col/block.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


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
    ToggleControl = _wp$components.ToggleControl;
var withSelect = wp.data.withSelect;

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
  icon: 'grid-view',
  category: 'layout',
  parent: ['bsx-blocks/row-with-cols'],
  attributes: {
    colConfig: {
      type: 'string'
    },
    rowConfig: {
      type: 'string'
    },
    fromRowConfig: {
      type: 'string'
    },
    sizeXs: {
      type: 'string'
    },
    sizeSm: {
      type: 'string'
    },
    sizeMd: {
      type: 'string'
    },
    sizeLg: {
      type: 'string'
    },
    sizeXl: {
      type: 'string'
    }
  },
  edit: withSelect(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
        getBlockAttributes = _select.getBlockAttributes; //console.log( 'parentClientId: "' + parentClientId + '"' );


    var ancestorClientIds = getBlockParentsByBlockName(clientId, 'bsx-blocks/row-with-cols'); //console.log( 'ancestorClientIds: "' + ancestorClientIds + '"' );

    ancestorClientIds.forEach(function (ancestorClientId, index) {
      console.log('ancestorClientId[ ' + index + ' ]: "' + ancestorClientId + '"');
    }); // get last item which is parent

    var parentClientId = ancestorClientIds[ancestorClientIds.length - 1];
    var parentAttributes = getBlockAttributes(parentClientId); //console.log( 'parentAttributes: "' + parentAttributes + '"' );

    if (!!parentAttributes) {
      for (var _i = 0, _Object$entries = Object.entries(parentAttributes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        console.log('key: "' + key + '", value: "' + value + '"');
      }
    } //console.log( 'parentAttributes.fromRowConfig: "' + parentAttributes.fromRowConfig + '"' );


    return {
      parentAttributes: parentAttributes
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        rowConfig = _props$attributes.rowConfig,
        colConfig = _props$attributes.colConfig,
        fromRowConfig = _props$attributes.fromRowConfig,
        sizeXs = _props$attributes.sizeXs,
        sizeSm = _props$attributes.sizeSm,
        sizeMd = _props$attributes.sizeMd,
        sizeLg = _props$attributes.sizeLg,
        sizeXl = _props$attributes.sizeXl,
        setAttributes = props.setAttributes,
        parentAttributes = props.parentAttributes;

    var onChangeColConfig = function onChangeColConfig(value) {
      setAttributes({
        colConfig: value
      });
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

    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl]);
    setAttributes({
      fromRowConfig: parentAttributes.fromRowConfig
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('BSX Column Sizes (each single column)', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('XS Column Width', 'bsx-blocks'),
      value: parseInt(sizeXs),
      onChange: onChangeXsColSize,
      min: 0,
      max: 12,
      help: __('1 ... 12 or empty', 'bsx-blocks'),
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Col config (test)', 'bsx-blocks'),
      value: colConfig,
      onChange: onChangeColConfig
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: colClassName,
      "data-col-config": colConfig,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        colConfig = _props$attributes2.colConfig,
        rowConfig = _props$attributes2.rowConfig,
        fromRowConfig = _props$attributes2.fromRowConfig,
        sizeXs = _props$attributes2.sizeXs,
        sizeSm = _props$attributes2.sizeSm,
        sizeMd = _props$attributes2.sizeMd,
        sizeLg = _props$attributes2.sizeLg,
        sizeXl = _props$attributes2.sizeXl;
    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: colClassName,
      "data-col-config": colConfig,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
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
/* harmony import */ var _col_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./col/block.js */ "./src/col/block.js");
/* harmony import */ var _row_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row/block.js */ "./src/row/block.js");



/***/ }),

/***/ "./src/row/block.js":
/*!**************************!*\
  !*** ./src/row/block.js ***!
  \**************************/
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
    SelectControl = _wp$components.SelectControl;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

var makeRowClassNames = function makeRowClassNames(alignItems, justifyContent, noGutters, formRow) {
  var prefix = 'col';
  var rowClassNames = ['row'];

  if (alignItems) {
    rowClassNames.push('align-items-' + alignItems);
  }

  if (justifyContent) {
    rowClassNames.push('justify-content-' + justifyContent);
  }

  if (noGutters) {
    rowClassNames.push('no-gutters');
  }

  if (formRow) {
    rowClassNames.push('form-row');
  } //console.log( 'rowClassNames.join( \' \' ): "' + rowClassNames.join( ' ' ) + '"' );


  return rowClassNames.join(' ');
};

registerBlockType('bsx-blocks/row-with-cols', {
  title: __('BSX Columns', 'bsx-blocks'),
  icon: 'grid-view',
  category: 'layout',
  attributes: {
    rowConfig: {
      type: 'string'
    },
    fromRowConfig: {
      type: 'string',
      default: 'Test hello! :D'
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
      type: 'string'
    },
    sizeSm: {
      type: 'string'
    },
    sizeMd: {
      type: 'string'
    },
    sizeLg: {
      type: 'string'
    },
    sizeXl: {
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
  })(withDispatch(function (dispatch) {
    var _dispatch = dispatch('core/block-editor'),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    return {
      updateBlockAttributes: updateBlockAttributes
    };
  })(function (props) {
    var clientId = props.clientId,
        className = props.className,
        _props$attributes = props.attributes,
        rowConfig = _props$attributes.rowConfig,
        fromRowConfig = _props$attributes.fromRowConfig,
        alignItems = _props$attributes.alignItems,
        justifyContent = _props$attributes.justifyContent,
        noGutters = _props$attributes.noGutters,
        formRow = _props$attributes.formRow,
        sizeXs = _props$attributes.sizeXs,
        sizeSm = _props$attributes.sizeSm,
        sizeMd = _props$attributes.sizeMd,
        sizeLg = _props$attributes.sizeLg,
        sizeXl = _props$attributes.sizeXl,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children,
        updateBlockAttributes = props.updateBlockAttributes;
    var colsTemplate = [['bsx-blocks/col', {
      sizeMd: 4
    }], ['bsx-blocks/col', {
      sizeMd: 4
    }], ['bsx-blocks/col', {
      sizeMd: 4
    }]];
    var allowedBlocks = ['bsx-blocks/col'];

    var onChangeRowConfig = function onChangeRowConfig(value) {
      children.forEach(function (column, index) {
        var newAttributes = {
          rowConfig: value
        };
        updateBlockAttributes(column.clientId, newAttributes);
      });
      setAttributes({
        rowConfig: value
      });
    };

    var onChangeFromRowConfig = function onChangeFromRowConfig(value) {
      setAttributes({
        fromRowConfig: value
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

    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Columns Options', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('No Gutters', 'bsx-blocks'),
      checked: !!noGutters,
      onChange: onChangeNoGutters
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Form Row', 'bsx-blocks'),
      checked: !!formRow,
      onChange: onChangeFormRow
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Group Column Settings (overwriting single column settings)', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Row config (test)', 'bsx-blocks'),
      value: rowConfig,
      onChange: onChangeRowConfig
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Row config (test)', 'bsx-blocks'),
      value: fromRowConfig,
      onChange: onChangeFromRowConfig
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: rowClassNames,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: colsTemplate,
      allowedBlocks: allowedBlocks
    }))];
  })),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        rowConfig = _props$attributes2.rowConfig,
        fromRowConfig = _props$attributes2.fromRowConfig,
        alignItems = _props$attributes2.alignItems,
        justifyContent = _props$attributes2.justifyContent,
        noGutters = _props$attributes2.noGutters,
        formRow = _props$attributes2.formRow,
        sizeXs = _props$attributes2.sizeXs,
        sizeSm = _props$attributes2.sizeSm,
        sizeMd = _props$attributes2.sizeMd,
        sizeLg = _props$attributes2.sizeLg,
        sizeXl = _props$attributes2.sizeXl;
    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: rowClassNames,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
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