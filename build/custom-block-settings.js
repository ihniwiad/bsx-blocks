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
function addClassNames(attributes, classNamesString) {
  var belowNavbar = attributes.belowNavbar,
      touchFooter = attributes.touchFooter,
      display = attributes.display,
      marginBefore = attributes.marginBefore,
      marginAfter = attributes.marginAfter,
      marginLeft = attributes.marginLeft,
      marginRight = attributes.marginRight,
      paddingBefore = attributes.paddingBefore,
      paddingAfter = attributes.paddingAfter,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      bgColor = attributes.bgColor,
      textColor = attributes.textColor,
      textSize = attributes.textSize,
      rounded = attributes.rounded,
      textAlign = attributes.textAlign,
      textShadow = attributes.textShadow,
      fontWeight = attributes.fontWeight,
      inverseTextColor = attributes.inverseTextColor,
      headingInheritTextColor = attributes.headingInheritTextColor,
      headingInheritFontWeight = attributes.headingInheritFontWeight,
      width = attributes.width,
      imgThumbnail = attributes.imgThumbnail,
      borderState = attributes.borderState,
      border = attributes.border,
      hoverShadow = attributes.hoverShadow,
      hoverMove = attributes.hoverMove,
      disabled = attributes.disabled;
  var classNames = typeof classNamesString != 'undefined' ? classNamesString.split(' ') : [];

  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }

  if (!!touchFooter) {
    classNames.push('mb-n-footer-space');
  }

  if (!!display) {
    classNames.push('d-' + display);
  }

  if (!!marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight) {
    // all
    classNames.push('m-' + marginBefore);
  } else {
    // top & bottom
    if (!!marginBefore && marginBefore === marginAfter) {
      classNames.push('my-' + marginBefore);
    } else {
      if (!!marginBefore) {
        classNames.push('mt-' + marginBefore);
      }

      if (!!marginAfter) {
        classNames.push('mb-' + marginAfter);
      }
    } // left & right


    if (!!marginLeft && marginLeft === marginRight) {
      classNames.push('mx-' + marginLeft);
    } else {
      if (!!marginLeft) {
        classNames.push('ml-' + marginLeft);
      }

      if (!!marginRight) {
        classNames.push('mr-' + marginRight);
      }
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

  if (!!bgColor) {
    classNames.push('bg-' + bgColor);
  }

  if (!!textColor) {
    classNames.push('text-' + textColor);
  }

  if (!!textSize) {
    classNames.push(textSize);
  }

  if (!!textShadow) {
    classNames.push('text-shadow-' + textShadow);
  }

  if (!!fontWeight) {
    classNames.push('font-weight-' + fontWeight);
  }

  if (!!inverseTextColor) {
    classNames.push('text-inverse');
  }

  if (!!headingInheritTextColor) {
    classNames.push('heading-inherit-text');
  }

  if (!!headingInheritFontWeight) {
    classNames.push('heading-inherit-font-weight');
  }

  if (!!rounded) {
    if (rounded == true || rounded == 'rounded') {
      classNames.push('rounded');
    } else {
      classNames.push('rounded-' + rounded);
    }
  }

  if (!!textAlign) {
    classNames.push('text-' + textAlign);
  }

  if (!!width) {
    classNames.push('w-' + width);
  }

  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
  }

  if (!!border) {
    if (border == 'true') {
      classNames.push('border');
    } else {
      // TODO: what about multipla values, e.g. top and bottom?
      classNames.push('border-' + border);
    }
  }

  if (!!borderState) {
    classNames.push('border-' + borderState);
  }

  if (!!hoverShadow) {
    classNames.push('hover-shadow');
  }

  if (!!hoverMove) {
    classNames.push('hover-move');
  }

  if (!!disabled) {
    classNames.push('disabled');
  }

  return classNames.join(' ');
}

/***/ }),

/***/ "./src/_functions/controls.js":
/*!************************************!*\
  !*** ./src/_functions/controls.js ***!
  \************************************/
/*! exports provided: ignoreMailtoSpamProtectionToggle, targetToggle, disabledToggle, belowNavbarToggle, touchFooterToggle, inverseTextColorToggle, headingInheritTextColorToggle, headingInheritFontWeightToggle, roundedToggle, linkUrlInput, bgAttachmentFixedLimitedToggle, relInput, dataFnInput, dataFnOptionsInput, dataFnTargetInput, dataTgInput, additionalAttributesInput, stateSelect, buttonStateSelect, bgColorSelect, stateTypeSelect, sizeSelect, marginLeftSelect, marginRightSelect, marginBeforeSelect, marginAfterSelect, displaySelect, alignItemsSelect, paddingBeforeSelect, paddingAfterSelect, paddingLeftSelect, paddingRightSelect, nodeNameSelect, bgPositionSelect, bgSizeSelect, bannerTypeSelect, bannerSizeSelect, bgAttachmentSelect, textShadowSelect, fontWeightSelect, borderSelect, borderStateSelect, scaleSelect, textAlignToolbar, imgUploadClickableImg, imgUploadButton, inlineTemplateSelect, uiTemplateSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMailtoSpamProtectionToggle", function() { return ignoreMailtoSpamProtectionToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetToggle", function() { return targetToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledToggle", function() { return disabledToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belowNavbarToggle", function() { return belowNavbarToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchFooterToggle", function() { return touchFooterToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseTextColorToggle", function() { return inverseTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritTextColorToggle", function() { return headingInheritTextColorToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingInheritFontWeightToggle", function() { return headingInheritFontWeightToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundedToggle", function() { return roundedToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkUrlInput", function() { return linkUrlInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgAttachmentFixedLimitedToggle", function() { return bgAttachmentFixedLimitedToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relInput", function() { return relInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnInput", function() { return dataFnInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnOptionsInput", function() { return dataFnOptionsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFnTargetInput", function() { return dataFnTargetInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTgInput", function() { return dataTgInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalAttributesInput", function() { return additionalAttributesInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSelect", function() { return stateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStateSelect", function() { return buttonStateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorSelect", function() { return bgColorSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateTypeSelect", function() { return stateTypeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeSelect", function() { return sizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginLeftSelect", function() { return marginLeftSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginRightSelect", function() { return marginRightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginBeforeSelect", function() { return marginBeforeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginAfterSelect", function() { return marginAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySelect", function() { return displaySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsSelect", function() { return alignItemsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingBeforeSelect", function() { return paddingBeforeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingAfterSelect", function() { return paddingAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingLeftSelect", function() { return paddingLeftSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingRightSelect", function() { return paddingRightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeNameSelect", function() { return nodeNameSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgPositionSelect", function() { return bgPositionSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgSizeSelect", function() { return bgSizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerTypeSelect", function() { return bannerTypeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerSizeSelect", function() { return bannerSizeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgAttachmentSelect", function() { return bgAttachmentSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textShadowSelect", function() { return textShadowSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightSelect", function() { return fontWeightSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderSelect", function() { return borderSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStateSelect", function() { return borderStateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSelect", function() { return scaleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlignToolbar", function() { return textAlignToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUploadClickableImg", function() { return imgUploadClickableImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUploadButton", function() { return imgUploadButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineTemplateSelect", function() { return inlineTemplateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiTemplateSelect", function() { return uiTemplateSelect; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/_functions/utilities.js");

// wp import
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var _wp$blockEditor = wp.blockEditor,
    URLInput = _wp$blockEditor.URLInput,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    Button = _wp$components.Button; // functions

 // internal vars

var marginPaddingSizes = [{
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
}];
var states = [{
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
}]; // doesn’t have '', has additional 'text-link'

var btnStates = [{
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
  label: __('Link Button', 'bsx-blocks')
}, {
  value: 'text-link',
  label: __('Text link', 'bsx-blocks')
}];
var bgStates = [{
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
}];
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
}, {
  icon: 'editor-alignleft',
  title: __('– unset –', 'bsx-blocks'),
  align: ''
}]; // toggles

var ignoreMailtoSpamProtectionToggle = function ignoreMailtoSpamProtectionToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Spam protected email link (default activated)', 'bsx-blocks'),
    checked: !value,
    onChange: onChangeFunction,
    help: __('If activated email will not be easily readable for machines.', 'bsx-blocks')
  });
};
var targetToggle = function targetToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Open in new tab', 'bsx-blocks'),
    checked: value == '_blank',
    onChange: onChangeFunction
  });
};
var disabledToggle = function disabledToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Disabled', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var belowNavbarToggle = function belowNavbarToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Below navbar', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks')
  });
};
var touchFooterToggle = function touchFooterToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Touch footer', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element touch footer without spacing.', 'bsx-blocks')
  });
};
var inverseTextColorToggle = function inverseTextColorToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inverse text color', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var headingInheritTextColorToggle = function headingInheritTextColorToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inherit text color to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var headingInheritFontWeightToggle = function headingInheritFontWeightToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Inherit font weight to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
var roundedToggle = function roundedToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Rounded', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
}; // url inputs

var linkUrlInput = function linkUrlInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    label: __('Link URL', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var bgAttachmentFixedLimitedToggle = function bgAttachmentFixedLimitedToggle(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Limit fixed background', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks')
  });
}; // text inputs

var relInput = function relInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Rel (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnInput = function dataFnInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnOptionsInput = function dataFnOptionsInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn-options (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataFnTargetInput = function dataFnTargetInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-fn-target (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var dataTgInput = function dataTgInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('data-tg (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
var additionalAttributesInput = function additionalAttributesInput(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Additional attributes (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
}; // selects

var stateSelect = function stateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var buttonStateSelect = function buttonStateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = btnStates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Color / Appearance', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bgColorSelect = function bgColorSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = bgStates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var stateTypeSelect = function stateTypeSelect(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Button Type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: 'outline',
      label: __('Outline', 'bsx-blocks')
    }, {
      value: '',
      label: __('Filled', 'bsx-blocks')
    }]
  });
};
var sizeSelect = function sizeSelect(value, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
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
  });
};
var marginLeftSelect = function marginLeftSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var marginRightSelect = function marginRightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var marginBeforeSelect = function marginBeforeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Spacer before element', 'bsx-blocks')
  });
};
var marginAfterSelect = function marginAfterSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Margin after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Spacer after element', 'bsx-blocks')
  });
};
var displaySelect = function displaySelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'block',
    label: __('Block', 'bsx-blocks')
  }, {
    value: 'inline-block',
    label: __('Inline-block', 'bsx-blocks')
  }, {
    value: 'inline',
    label: __('Inline', 'bsx-blocks')
  }, {
    value: 'flex',
    label: __('Flex', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Display', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var alignItemsSelect = function alignItemsSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
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
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Align items', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var paddingBeforeSelect = function paddingBeforeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer before', 'bsx-blocks')
  });
};
var paddingAfterSelect = function paddingAfterSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer after', 'bsx-blocks')
  });
};
var paddingLeftSelect = function paddingLeftSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer left', 'bsx-blocks')
  });
};
var paddingRightSelect = function paddingRightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = marginPaddingSizes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Padding right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Inner spacer right', 'bsx-blocks')
  });
};
var nodeNameSelect = function nodeNameSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: 'div',
    label: __('div', 'bsx-blocks')
  }, {
    value: 'section',
    label: __('section', 'bsx-blocks')
  }, {
    value: 'ul',
    label: __('ul', 'bsx-blocks')
  }, {
    value: 'ol',
    label: __('ol', 'bsx-blocks')
  }, {
    value: 'li',
    label: __('li', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Node name', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Node name (please edit only if you know what you’re doing)', 'bsx-blocks')
  });
};
var bgPositionSelect = function bgPositionSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
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
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bgSizeSelect = function bgSizeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: 'cover',
    label: __('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: __('Contain', 'bsx-blocks')
  }, {
    value: '100a',
    label: __('100% auto', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var bannerTypeSelect = function bannerTypeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('Fix height', 'bsx-blocks')
  }, {
    value: 'vh',
    label: __('Viewport dependent height', 'bsx-blocks')
  }, {
    value: 'st',
    label: __('Static height', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Banner height type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks')
  });
};
var bannerSizeSelect = function bannerSizeSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '1',
    label: __('1 (biggest)', 'bsx-blocks')
  }, {
    value: '2',
    label: __('2', 'bsx-blocks')
  }, {
    value: '3',
    label: __('3', 'bsx-blocks')
  }, {
    value: '4',
    label: __('4', 'bsx-blocks')
  }, {
    value: '5',
    label: __('5', 'bsx-blocks')
  }, {
    value: '6',
    label: __('6 (smallest)', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Banner height size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    help: __('Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks')
  });
};
var bgAttachmentSelect = function bgAttachmentSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'static',
    label: __('static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: __('fixed', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Background attachement', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var textShadowSelect = function textShadowSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'dark',
    label: __('Dark', 'bsx-blocks')
  }, {
    value: 'darker',
    label: __('Darker', 'bsx-blocks')
  }, {
    value: 'darkest',
    label: __('Darkest', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Text shadow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var fontWeightSelect = function fontWeightSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'light',
    label: __('Light', 'bsx-blocks')
  }, {
    value: 'normal',
    label: __('Normal', 'bsx-blocks')
  }, {
    value: 'bold',
    label: __('Bold', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Font weight', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var borderSelect = function borderSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '',
    label: __('– unset –', 'bsx-blocks')
  }, {
    value: 'true',
    label: __('Around', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: __('Bottom', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Border', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
};
var borderStateSelect = function borderStateSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Border color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues)
  });
}; // radio

var scaleSelect = function scaleSelect(value, onChangeFunction, allowedValues) {
  var defaultValues = [{
    value: '1',
    label: __('100%', 'bsx-blocks')
  }, {
    value: '0.75',
    label: __('75%', 'bsx-blocks')
  }, {
    value: '0.5',
    label: __('50%', 'bsx-blocks')
  }, {
    value: '0.25',
    label: __('25%', 'bsx-blocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
    label: __('Scale', 'bsx-blocks'),
    selected: value + '',
    options: Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["filterByAllowedValueKeys"])(defaultValues, allowedValues),
    onChange: onChangeFunction
  });
}; // toolbar

var textAlignToolbar = function textAlignToolbar(value, onChangeFunction) {
  var defaultValues = states;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    label: __('Alignment', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    alignmentControls: alignmentControls
  });
}; // uploads

var imgUploadClickableImg = function imgUploadClickableImg(imgId, url, onChangeFunction, type) {
  var alt = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'bsx-blocks') : __('Change / upload image', 'bsx-blocks');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        className: "bsxui-config-panel-img-button has-margin-bottom",
        onClick: open
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        class: "bsxui-config-panel-img",
        src: url,
        alt: alt
      }));
    }
  });
};
var imgUploadButton = function imgUploadButton(imgId, onChangeFunction, type) {
  var label = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'bsx-blocks') : __('Change / upload image', 'bsx-blocks');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        onClick: open,
        isSecondary: true
      }, label);
    }
  });
}; // template selects

var inlineTemplateSelect = function inlineTemplateSelect(templates, onChangeFunction) {
  // has no templateName since non selected yet
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "bsxui-initial-inline-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "bsxui-initial-inline-control-heading"
  }, __('Please select template', 'bsx-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map(function (template, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      label: template.title,
      onClick: function onClick() {
        onChangeFunction(template.name);
      },
      className: 'bsxui-icon-text-button-list-item '
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-icon"
    }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-label"
    }, template.title));
  })));
};
var uiTemplateSelect = function uiTemplateSelect(templates, templateName, onChangeFunction) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map(function (template, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      label: template.title,
      onClick: function onClick() {
        onChangeFunction(template.name);
      },
      className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-icon"
    }, template.icon), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "bsxui-icon-text-button-list-item-label"
    }, template.title));
  }));
};

/***/ }),

/***/ "./src/_functions/utilities.js":
/*!*************************************!*\
  !*** ./src/_functions/utilities.js ***!
  \*************************************/
/*! exports provided: filterByAllowedValueKeys, getTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByAllowedValueKeys", function() { return filterByAllowedValueKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
var filterByAllowedValueKeys = function filterByAllowedValueKeys(mapArray, allowedValues) {
  var filteredValues = [];

  if (typeof allowedValues !== 'undefined' && allowedValues.length > 0) {
    mapArray.forEach(function (item) {
      if (typeof allowedValues.find(function (key) {
        return key === item.value;
      }) !== 'undefined') {
        filteredValues.push(item);
      }
    });
  } else {
    filteredValues = mapArray;
  }

  return filteredValues;
};
var getTemplate = function getTemplate(templates, currentTemplateName) {
  var currentTemplate = templates.find(function (item) {
    return item.name === currentTemplateName;
  });
  return currentTemplate ? currentTemplate : {};
};

/***/ }),

/***/ "./src/custom-block-settings.js":
/*!**************************************!*\
  !*** ./src/custom-block-settings.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_block_settings_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-block-settings/settings.js */ "./src/global-block-settings/settings.js");


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
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");

// TODO: refactor, use external controls, use addClassName()
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
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;

 //restrict to specific block names

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
        textColor = attributes.textColor,
        fontWeight = attributes.fontWeight,
        textShadow = attributes.textShadow,
        belowNavbar = attributes.belowNavbar,
        marginBefore = attributes.marginBefore,
        marginAfter = attributes.marginAfter,
        className = attributes.className; // TEST – force editor to add class names to core blocks created by custom attributes
    // const addClassName = ( value ) => {
    //     // already existing class name(s) – might be undefined
    //     // const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];
    //     // ignore exiting class names to be able to reset once added class names (use custom setting for additional class names)
    //     const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];
    //     // class name value(s) to add (one or multiple space separated)
    //     const valuesArr = value.split( ' ' );
    //     valuesArr.forEach( ( value ) => {
    //         if ( classNamesArr.indexOf( value ) == -1 ) {
    //             // add class name if not already set (avoid infinite adding of equal class name)
    //             classNamesArr.push( value );
    //             setAttributes( { className: classNamesArr.join( ' ' ) } );
    //         }
    //     } );
    // }

    var toAddClassNames = Object(_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_1__["addClassNames"])({
      textSize: textSize,
      textColor: textColor,
      fontWeight: fontWeight,
      textShadow: textShadow,
      belowNavbar: belowNavbar,
      marginBefore: marginBefore,
      marginAfter: marginAfter
    }, 'bsxui-core-block-wrapper'); // if ( allowedBlocks.includes( props.name ) ) {
    //     addClassName( toAddClassNames );
    //     // console.log( 'props: ' + JSON.stringify( props, null, 2 ) );
    // }
    // /TEST
    // TEST 2
    // props.setAttributes( {
    //     className: 'TEST',
    // } );
    // /TEST 2

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

    var onChangeTextColor = function onChangeTextColor(value) {
      setAttributes({
        textColor: value
      });
    };

    var onChangeFontWeight = function onChangeFontWeight(value) {
      setAttributes({
        fontWeight: value
      });
    };

    var onChangeTextShadow = function onChangeTextShadow(value) {
      setAttributes({
        textShadow: value
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
    }; // const onChangeAdditionaClassNames = ( value ) => {
    //     setAttributes( { additionaClassNames: value } );
    // };


    var wrappedBlockEdit = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, allowedBlocks.includes(props.name) && typeof toAddClassNames !== 'undefiend' && toAddClassNames ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: toAddClassNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props)); // If this block supports custom property and is currently selected, add our UI

    if (allowedBlocks.includes(props.name) && props.isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, wrappedBlockEdit, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: __('BSX global settings', 'bsx-blocks')
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
          value: 'h5',
          label: __('Heading 5', 'bsx-blocks')
        }, {
          value: 'h4',
          label: __('Heading 4', 'bsx-blocks')
        }, {
          value: 'h3',
          label: __('Heading 3', 'bsx-blocks')
        }, {
          value: 'h2',
          label: __('Heading 2', 'bsx-blocks')
        }, {
          value: 'h1',
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
      }), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["fontWeightSelect"])(fontWeight, onChangeFontWeight), Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["textShadowSelect"])(textShadow, onChangeTextShadow), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["belowNavbarToggle"])(belowNavbar, onChangeBelowNavbar)));
    }
    /*
                        <TextControl 
                            label={ __( 'Additional class(es)', 'bsx-blocks' ) }
                            value={ additionaClassNames } 
                            onChange={ onChangeAdditionaClassNames }
                            help={ __( 'Use this field instead of WordPress native additional class(es)', 'bsx-blocks' ) }
                        />
    */


    return wrappedBlockEdit;
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
          type: 'boolean'
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

    if (typeof settings.attributes.textColor === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textColor: {
          type: 'string'
        }
      });
    }

    if (typeof settings.attributes.fontWeight === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        fontWeight: {
          type: 'string'
        }
      });
    }

    if (typeof settings.attributes.textShadow === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textShadow: {
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
    } // if ( typeof settings.attributes.additionaClassNames === 'undefined' ) {
    //     settings.attributes = Object.assign( settings.attributes, {
    //         additionaClassNames: {
    //             type: 'string',
    //         },
    //     } );
    // }
    // add custom props in case of several wp props

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
      textColor = attributes.textColor,
      fontWeight = attributes.fontWeight,
      textShadow = attributes.textShadow,
      belowNavbar = attributes.belowNavbar,
      marginBefore = attributes.marginBefore,
      marginAfter = attributes.marginAfter,
      dataTest = attributes.dataTest; // If the current block is valid, add our prop.

  if (allowedBlocks.includes(blockType.name)) {
    //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;
    if (attributes.id) extraProps.id = attributes.id;
    if (attributes.dataTest) extraProps.dataTest = attributes.dataTest; // class names

    var classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split(' ') : [];

    if (typeof textSize !== 'undefined' && !!textSize) {
      if (!classNames.includes(textSize)) {
        // add (if not already set)
        classNames.push(textSize);
      }
    }

    if (typeof textColor !== 'undefined' && !!textColor) {
      if (!classNames.includes('text-' + textColor)) {
        // add (if not already set)
        classNames.push('text-' + textColor);
      }
    }

    if (typeof fontWeight !== 'undefined' && !!fontWeight) {
      if (!classNames.includes('font-weight-' + fontWeight)) {
        // add (if not already set)
        classNames.push('font-weight-' + fontWeight);
      }
    }

    if (typeof textShadow !== 'undefined' && !!textShadow) {
      if (!classNames.includes('text-shadow-' + textShadow)) {
        // add (if not already set)
        classNames.push('text-shadow-' + textShadow);
      }
    }

    if (typeof belowNavbar !== 'undefined' && belowNavbar) {
      if (!classNames.includes('below-navbar-content')) {
        // add (if not already set)
        classNames.push('below-navbar-content');
      }
    } // check wp internal attributes, add custom class names for certain ones
    // NOTE: added class name will be updated but never removed (as WP currently does too)
    // textAlign


    var alignAllowedValues = ['left', 'center', 'right'];
    var alignPrefix = 'text-';
    var textAlignAttrVal = attributes.textAlign != undefined ? attributes.textAlign : attributes.align;

    if (!!textAlignAttrVal && alignAllowedValues.includes(textAlignAttrVal)) {
      classNames.push(alignPrefix + textAlignAttrVal);
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
    } // if ( typeof additionaClassNames !== 'undefined' && additionaClassNames ) {
    //     const additionaClassNamesArr = additionaClassNames.split( ' ' );
    //     additionaClassNamesArr.forEach( ( additionaClassName ) => {
    //         if ( ! classNames.includes( additionaClassName ) ) {
    //             // add (if not already set)
    //             classNames.push( additionaClassName );
    //         }
    //     } );
    // }


    extraProps.className = classNames.join(' '); // extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
  }

  return extraProps;
} // end addSaveProps()
// on register

addFilter('blocks.registerBlockType', 'bsx-blocks/custom-attributes', addAttribute); // on get editor class name
// Our filter function
// function setBlockCustomClassName( className, blockName ) {
//     console.log( 'setBlockCustomClassName() – blockName: ' + blockName + ', className: ' + className )
//     return blockName === 'core/paragraph' ? className + ' TEST-3' : className;
// }
// // Adding the filter
// addFilter(
//     'blocks.getBlockDefaultClassName',
//     'bsx-blocks/set-block-custom-class-name-2',
//     setBlockCustomClassName
// );
// on edit

addFilter('editor.BlockEdit', 'bsx-blocks/add-global-block-settings', addGlobalBlockSettings); // blocks.getSaveElement
// on save

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