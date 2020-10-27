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
  } // if ( belowNavbar ) {
  //     classNames.push( 'below-navbar-content' );
  // }
  // if ( marginBefore && marginBefore === marginAfter ) {
  // 	classNames.push( 'my-' + marginBefore );
  // }
  // else {
  //     if ( marginBefore ) {
  //     	classNames.push( 'mt-' + marginBefore );
  //     }
  //     if ( marginAfter ) {
  //     	classNames.push( 'mb-' + marginAfter );
  //     }
  // }
  // if ( paddingBefore && paddingBefore === paddingAfter ) {
  //     classNames.push( 'py-' + paddingBefore );
  // }
  // else {
  //     if ( paddingBefore ) {
  //         classNames.push( 'pt-' + paddingBefore );
  //     }
  //     if ( paddingAfter ) {
  //         classNames.push( 'pb-' + paddingAfter );
  //     }
  // }


  return classNames.join(' ');
}; // let config = { 
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
// TODO: add to global functions


var addClassNames = function addClassNames(config, classNamesString) {
  var classNames = typeof classNamesString != 'undefined' ? classNamesString.split(' ') : []; // const prefix = 'container';
  // if ( config.isFluid ) {
  //     if ( config.containerBreakpoint === '' ) {
  //         classNames.push( prefix + '-fluid' );
  //     }
  //     else {
  //         classNames.push( prefix + '-' + config.containerBreakpoint );
  //     }
  // }
  // else {
  //     classNames.push( prefix );
  // }

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

  /*
  getEditWrapperProps() {
      return {
          'data-editor-title': 'show',
      };
  },
  */
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
    containerClassName = addClassNames(config, containerClassName);
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
    containerClassName = addClassNames(config, containerClassName);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: containerClassName
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