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
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button;
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
    colType: {
      type: 'string',
      default: 'custom'
    },
    enableInheritanceFromRow: {
      type: 'boolean',
      default: true
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
      parentAttributes: parentAttributes
    };
  })(function (props) {
    var className = props.className,
        _props$attributes = props.attributes,
        rowConfig = _props$attributes.rowConfig,
        colConfig = _props$attributes.colConfig,
        fromRowConfig = _props$attributes.fromRowConfig,
        colType = _props$attributes.colType,
        enableInheritanceFromRow = _props$attributes.enableInheritanceFromRow,
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

    var onChangeEnableInheritanceFromRow = function onChangeEnableInheritanceFromRow(value) {
      setAttributes({
        enableInheritanceFromRow: value
      });
    };

    var onClickEnableInheritanceFromRow = function onClickEnableInheritanceFromRow(value) {
      console.log('onClickEnableInheritanceFromRow');
      setAttributes({
        sizeXs: parentAttributes.sizeXs,
        sizeSm: parentAttributes.sizeSm,
        sizeMd: parentAttributes.sizeMd,
        sizeLg: parentAttributes.sizeLg,
        sizeXl: parentAttributes.sizeXl
      });
    };

    var colClassName = makeColClassNames([sizeXs, sizeSm, sizeMd, sizeLg, sizeXl]);
    setAttributes({
      fromRowConfig: parentAttributes.fromRowConfig
    });

    if (!!props.attributes) {
      console.log('build col: ');

      for (var _i = 0, _Object$entries = Object.entries(props.attributes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        console.log('key: "' + key + '", value: "' + value + '"');
      }
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Column Sizes (individual Column)', 'bsx-blocks')
    }, colType === 'custom' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Enable Inheritance', 'bsx-blocks'),
      checked: !!enableInheritanceFromRow,
      onChange: onChangeEnableInheritanceFromRow,
      help: __('Allows overwriting single Column Settings from Row', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      onClick: onClickEnableInheritanceFromRow,
      isSecondary: true,
      disabled: !enableInheritanceFromRow
    }, __('Inherit Settings for this Column', 'bsx-blocks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
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
      "data-from-row-config": fromRowConfig,
      "data-col-type": colType
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
        colType = _props$attributes2.colType,
        enableInheritanceFromRow = _props$attributes2.enableInheritanceFromRow,
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
      "data-from-row-config": fromRowConfig,
      "data-col-type": colType
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
    templateName: {
      type: 'string',
      default: '1-1-1'
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
    }
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
    var clientId = props.clientId,
        className = props.className,
        _props$attributes = props.attributes,
        rowConfig = _props$attributes.rowConfig,
        fromRowConfig = _props$attributes.fromRowConfig,
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
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        children = props.children,
        childrenAttributes = props.childrenAttributes,
        updateBlockAttributes = props.updateBlockAttributes;
    var colsTemplates = [{
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
        d: "M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
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
      var currentTemplate = colsTemplates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.template : [];
    };

    var getColsTemplateLock = function getColsTemplateLock(currentTemplateName) {
      var currentTemplate = colsTemplates.find(function (item) {
        return item.name === currentTemplateName;
      });
      return currentTemplate ? currentTemplate.templateLock : false;
    };

    var colsTemplate = getColsTemplate(templateName);
    var colsTemplateLock = getColsTemplateLock(templateName);
    var allowedBlocks = ['bsx-blocks/col']; //setAttributes( { template: colTemplates[ 0 ].name } );

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

    var onChangeEnableInheritanceToCols = function onChangeEnableInheritanceToCols(value) {
      setAttributes({
        enableInheritanceToCols: value
      });
    };

    var onClickEnableInheritanceToCols = function onClickEnableInheritanceToCols() {
      console.log('onClickEnableInheritanceToCols');
      children.forEach(function (column, index) {
        //console.log( 'childrenAttributes[' + index + ' ]: "' + childrenAttributes[ index ] + '"' );
        if (childrenAttributes[index].enableInheritanceFromRow) {
          var newAttributes = {
            sizeXs: sizeXs,
            sizeSm: sizeSm,
            sizeMd: sizeMd,
            sizeLg: sizeLg,
            sizeXl: sizeXl
          };
          updateBlockAttributes(column.clientId, newAttributes);
        }
      });
    }; // xs


    var onChangeXsColSize = function onChangeXsColSize(value) {
      setAttributes({
        sizeXs: !!value ? value.toString() : ''
      });
    };

    var onChangeXsEqualSize = function onChangeXsEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeXs: 'null'
          });
        } else if (sizeXs == 'null') {
          setAttributes({
            sizeXs: ''
          });
        }
      }
    };

    var onChangeXsAutoSize = function onChangeXsAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeXs: 'auto'
          });
        } else if (sizeXs == 'auto') {
          setAttributes({
            sizeXs: ''
          });
        }
      }
    }; // sm


    var onChangeSmColSize = function onChangeSmColSize(value) {
      setAttributes({
        sizeSm: !!value ? value.toString() : ''
      });
    };

    var onChangeSmEqualSize = function onChangeSmEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeSm: 'null'
          });
        } else if (sizeSm == 'null') {
          setAttributes({
            sizeSm: ''
          });
        }
      }
    };

    var onChangeSmAutoSize = function onChangeSmAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeSm: 'auto'
          });
        } else if (sizeSm == 'auto') {
          setAttributes({
            sizeSm: ''
          });
        }
      }
    }; // md


    var onChangeMdColSize = function onChangeMdColSize(value) {
      setAttributes({
        sizeMd: !!value ? value.toString() : ''
      });
    };

    var onChangeMdEqualSize = function onChangeMdEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeMd: 'null'
          });
        } else if (sizeMd == 'null') {
          setAttributes({
            sizeMd: ''
          });
        }
      }
    };

    var onChangeMdAutoSize = function onChangeMdAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeMd: 'auto'
          });
        } else if (sizeMd == 'auto') {
          setAttributes({
            sizeMd: ''
          });
        }
      }
    }; // lg


    var onChangeLgColSize = function onChangeLgColSize(value) {
      setAttributes({
        sizeLg: !!value ? value.toString() : ''
      });
    };

    var onChangeLgEqualSize = function onChangeLgEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeLg: 'null'
          });
        } else if (sizeLg == 'null') {
          setAttributes({
            sizeLg: ''
          });
        }
      }
    };

    var onChangeLgAutoSize = function onChangeLgAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeLg: 'auto'
          });
        } else if (sizeLg == 'auto') {
          setAttributes({
            sizeLg: ''
          });
        }
      }
    }; // xl


    var onChangeXlColSize = function onChangeXlColSize(value) {
      setAttributes({
        sizeXl: !!value ? value.toString() : ''
      });
    };

    var onChangeXlEqualSize = function onChangeXlEqualSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeXl: 'null'
          });
        } else if (sizeXl == 'null') {
          setAttributes({
            sizeXl: ''
          });
        }
      }
    };

    var onChangeXlAutoSize = function onChangeXlAutoSize(value) {
      if (enableInheritanceToCols) {
        if (value) {
          setAttributes({
            sizeXl: 'auto'
          });
        } else if (sizeXl == 'auto') {
          setAttributes({
            sizeXl: ''
          });
        }
      }
    };

    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Columns Layout', 'bsx-blocks')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "block-editor-block-styles"
    }, colsTemplates.map(function (template, index // eslint-disable-line no-shadow
    ) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        label: template.title,
        onClick: function onClick() {
          onColsTemplateChange(template.name);
        },
        className: 'block-editor-block-styles__item d-flex flex-column ' + (templateName === template.name ? 'is-active' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "block-editor-block-styles__item-preview border-0 p-0"
      }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "block-editor-block-styles__item-label"
      }, template.title));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Row Options', 'bsx-blocks')
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
      label: __('Enable Inheritance', 'bsx-blocks'),
      checked: !!enableInheritanceToCols,
      onChange: onChangeEnableInheritanceToCols,
      help: __('Equal Columns, overwriting single Columns Settings when clicking button below (if Columns allows inheritance)', 'bsx-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      onClick: onClickEnableInheritanceToCols,
      isSecondary: true,
      disabled: !enableInheritanceToCols
    }, __('Inherit Settings to Columns', 'bsx-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('Row config (test)', 'bsx-blocks'),
      value: rowConfig,
      onChange: onChangeRowConfig
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: __('From row config (test)', 'bsx-blocks'),
      value: fromRowConfig,
      onChange: onChangeFromRowConfig
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: rowClassNames,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig,
      "data-template-name": templateName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: colsTemplate,
      templateLock: colsTemplateLock,
      allowedBlocks: allowedBlocks
    }))];
  })),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        rowConfig = _props$attributes2.rowConfig,
        fromRowConfig = _props$attributes2.fromRowConfig,
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
        sizeXl = _props$attributes2.sizeXl;
    var rowClassNames = makeRowClassNames(alignItems, justifyContent, noGutters, formRow);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: rowClassNames,
      "data-row-config": rowConfig,
      "data-from-row-config": fromRowConfig,
      "data-template-name": templateName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
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