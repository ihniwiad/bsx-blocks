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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/custom-block-settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/custom-block-settings.js":
/*!**************************************!*\
  !*** ./src/custom-block-settings.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_block_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-block-settings/settings.js */ "./src/global-block-settings/settings.js");
// import './global-block-advanced-settings/settings.js';


/***/ }),

/***/ "./src/global-block-settings/settings.js":
/*!***********************************************!*\
  !*** ./src/global-block-settings/settings.js ***!
  \***********************************************/
/*! exports provided: addGlobalBlockSettings, addAttribute, addSaveProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalBlockSettings", function() { return addGlobalBlockSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttribute", function() { return addAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSaveProps", function() { return addSaveProps; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var addFilter = wp.hooks.addFilter;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls; //restrict to specific block names

var allowedBlocks = ['core/paragraph', 'core/heading'];
/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var addGlobalBlockSettings = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var id = attributes.id,
        textSize = attributes.textSize,
        belowNavbar = attributes.belowNavbar,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter,
        dataTest = attributes.dataTest;

    var onChangeId = function onChangeId(value) {
      setAttributes({
        id: value
      });
    };

    var onChangeTextSize = function onChangeTextSize(value) {
      setAttributes({
        textSize: value
      });
    };

    var onChangeDataTest = function onChangeDataTest(value) {
      setAttributes({
        dataTest: value
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
    }; // If this block supports custom property and is currently selected, add our UI


    if (allowedBlocks.includes(props.name) && props.isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: __('BSX Global Settings', 'bsx-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
        label: __('ID', 'bsx-blocks'),
        value: id,
        onChange: onChangeId,
        help: __('Add ID if necessary (optional).', 'bsx-blocks')
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
          value: 'h2',
          label: __('Heading 5', 'bsx-blocks')
        }, {
          value: 'h3',
          label: __('Heading 4', 'bsx-blocks')
        }, {
          value: 'h4',
          label: __('Heading 3', 'bsx-blocks')
        }, {
          value: 'h5',
          label: __('Heading 2', 'bsx-blocks')
        }, {
          value: 'h6',
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
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
        label: __('data-test attribute (optional)'),
        value: dataTest,
        onChange: onChangeDataTest,
        help: __('This is only a test.')
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
        label: __('ID', 'bsx-blocks'),
        value: id,
        onChange: onChangeId,
        help: __('Add ID if necessary (optional).', 'bsx-blocks')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
        label: __('Below navbar', 'bsx-blocks'),
        checked: !!belowNavbar,
        onChange: onChangeBelowNavbar,
        help: __('Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'addGlobalBlockSettings');
/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function addAttribute(settings) {
  /*
  // If this is a valid block
  if ( allowedBlocks.includes( settings.name ) ) {
       // Use Lodash's assign to gracefully handle if attributes are undefined
      settings.attributes = assign( settings.attributes, {
          additionalAttributes: {
              type: 'string',
          },
      } );
  }
  */
  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    if (typeof settings.attributes.id === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        id: {
          type: 'string'
        }
      });
    }

    if (typeof settings.attributes.belowNavbar === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        belowNavbar: {
          type: 'boolean',
          default: false
        }
      });
    }

    if (typeof settings.attributes.textSize === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textSize: {
          type: 'string'
        }
      });
    }

    if (typeof settings.attributes.marginBefore === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginBefore: {
          type: 'string'
        }
      });
    }

    if (typeof settings.attributes.marginAfter === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginAfter: {
          type: 'string'
        }
      });
    }
    /*if ( typeof settings.attributes.additionalAttributes === 'undefined' ) {
        settings.attributes = Object.assign( settings.attributes, {
            additionalAttributes: {
                type: 'string',
            },
        } );
    }*/


    if (typeof settings.attributes.dataTest === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        dataTest: {
          type: 'string'
        }
      });
    } // add custom props in case of several wp props

    /*
    if ( typeof settings.attributes.align !== 'undefined' ) {
        settings.attributes = Object.assign( settings.attributes, {
            textAlign: {
                type: 'string',
            },
        } );
    }
    else {
        // TODO: remove attr?
    }
    */

  }

  return settings;
} // end addAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addSaveProps(extraProps, blockType, attributes) {
  var id = attributes.id,
      textSize = attributes.textSize,
      belowNavbar = attributes.belowNavbar,
      marginBefore = attributes.marginBefore,
      marginAfter = attributes.marginAfter,
      dataTest = attributes.dataTest; // If the current block is valid, add our prop.

  if (allowedBlocks.includes(blockType.name)) {
    //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;
    if (attributes.id) extraProps.id = attributes.id;
    if (attributes.dataTest) extraProps.dataTest = attributes.dataTest; // class names

    var classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split(' ') : [];

    if (typeof textSize !== 'undefined' && textSize) {
      if (!classNames.includes(textSize)) {
        // add (if not already set)
        classNames.push(textSize);
      }
    } // check wp internal attributes, add custom class names for certain ones
    // NOTE: addedclass name will be updated but never removed (as WP currently does too)
    // text align


    var alignAllowedValues = ['left', 'center', 'right'];
    var alignPrefix = 'text-';

    if (!!attributes.align && alignAllowedValues.includes(attributes.align)) {
      classNames.push(alignPrefix + attributes.align);
    } else {
      for (var i = 0; i < classNames.length; i++) {
        if (classNames[i].indexOf(alignPrefix) == 0 && alignAllowedValues.includes(classNames[i].substring(alignPrefix.length))) {
          classNames.splice(i, 1);
        }
      }
    }

    ;

    if (typeof marginBefore !== 'undefined' && !!marginBefore && marginBefore == marginAfter) {
      if (!classNames.includes('my-' + marginBefore)) {
        // add (if not already set)
        classNames.push('my-' + marginBefore);
      }
    } else {
      if (typeof marginBefore !== 'undefined' && !!marginBefore) {
        if (!(classNames.includes('mt-' + marginBefore) || classNames.includes('my-' + marginBefore))) {
          // add (if not already set)
          classNames.push('mt-' + marginBefore);
        }
      }

      if (typeof marginAfter !== 'undefined' && !!marginAfter) {
        if (!(classNames.includes('mb-' + marginAfter) || classNames.includes('my-' + marginAfter))) {
          // add (if not already set)
          classNames.push('mb-' + marginAfter);
        }
      }
    }

    extraProps.className = classNames.join(' '); // extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
  }

  return extraProps;
} // end addSaveProps()

addFilter('editor.BlockEdit', 'bsx-blocks/add-global-block-settings', addGlobalBlockSettings);
addFilter('blocks.registerBlockType', 'bsx-blocks/custom-attributes', addAttribute);
addFilter('blocks.getSaveContent.extraProps', 'bsx-blocks/apply-extra-attributes', addSaveProps);

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
//# sourceMappingURL=custom-block-settings.js.map