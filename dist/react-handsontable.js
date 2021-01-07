(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "handsontable"], factory);
	else if(typeof exports === 'object')
		exports["HotTable"] = factory(require("react"), require("handsontable"));
	else
		root["HotTable"] = factory(root["React"], root["Handsontable"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2).default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

var _settingsMapper = __webpack_require__(4);

var _settingsMapper2 = _interopRequireDefault(_settingsMapper);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Handsontable-ReactJS wrapper.
 *
 * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.
 * For example:
 *
 * ```js
 * <HotTable root="hot" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH="all" />
 *
 * // is analogous to
 * let hot = new Handsontable(document.getElementById('hot'), {
 *    data: dataObject,
 *    contextMenu: true,
 *    colHeaders: true,
 *    width: 600
 *    height: 300
 * });
 *
 * ```
 *
 * @class HotTable
 */
var HotTable = function (_React$Component) {
  _inherits(HotTable, _React$Component);

  function HotTable() {
    _classCallCheck(this, HotTable);

    var _this = _possibleConstructorReturn(this, (HotTable.__proto__ || Object.getPrototypeOf(HotTable)).call(this));

    _this.hotInstance = null;
    _this.settingsMapper = new _settingsMapper2.default();
    _this.root = null;
    return _this;
  }

  /**
   * Initialize Handsontable after the component has mounted.
   */


  _createClass(HotTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newSettings = this.settingsMapper.getSettings(this.props);
      this.hotInstance = new _handsontable2.default(document.getElementById(this.root), newSettings);
    }

    /**
     * Call the `updateHot` method and prevent the component from re-rendering the instance.
     *
     * @param {Object} nextProps
     * @param {Object} nextState
     * @returns {Boolean}
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      this.updateHot(this.settingsMapper.getSettings(nextProps));

      return false;
    }

    /**
     * Destroy the Handsontable instance when the parent component unmounts.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hotInstance.destroy();
    }

    /**
     * Render the table.
     *
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      this.root = this.props.root || 'hot' + new Date().getTime();
      return _react2.default.createElement('div', { id: this.root });
    }

    /**
     * Call the `updateSettings` method for the Handsontable instance.
     * @param newSettings
     */

  }, {
    key: 'updateHot',
    value: function updateHot(newSettings) {
      this.hotInstance.updateSettings(newSettings);
    }
  }]);

  return HotTable;
}(_react2.default.Component);

exports.default = HotTable;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsMapper = function () {
  function SettingsMapper() {
    _classCallCheck(this, SettingsMapper);

    this.registeredHooks = _handsontable2.default.hooks.getRegistered();
  }

  /**
   * Parse component settings into Handosntable-compatible settings.
   *
   * @param {Object} properties Object containing properties from the HotTable object.
   * @returns {Object} Handsontable-compatible settings object.
   */


  _createClass(SettingsMapper, [{
    key: 'getSettings',
    value: function getSettings(properties) {
      var newSettings = {};

      if (properties.settings) {
        var settings = properties.settings;
        for (var key in settings) {
          if (settings.hasOwnProperty(key)) {
            newSettings[this.trimHookPrefix(key)] = settings[key];
          }
        }
      }

      for (var _key in properties) {
        if (_key != 'settings' && properties.hasOwnProperty(_key)) {
          newSettings[this.trimHookPrefix(_key)] = properties[_key];
        }
      }

      return newSettings;
    }

    /**
     * Trim the "on" hook prefix.
     *
     * @param {String} prop Settings property.
     * @returns {String} Handsontable-compatible, prefix-less property name.
     */

  }, {
    key: 'trimHookPrefix',
    value: function trimHookPrefix(prop) {
      if (prop.indexOf('on') === 0) {
        var hookName = prop.charAt(2).toLowerCase() + prop.slice(3, prop.length);
        if (this.registeredHooks.indexOf(hookName) > -1) {
          return hookName;
        }
      }

      // returns the string anyway, when we're sure all the hooks are registered, might be changed
      return prop;
    }
  }]);

  return SettingsMapper;
}();

exports.default = SettingsMapper;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-handsontable.js.map