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

/***/ "./src/assets/images/Icons/Crayon-icon.png":
/*!*************************************************!*\
  !*** ./src/assets/images/Icons/Crayon-icon.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Crayon-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Crayon-icon.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Flag-icon.png":
/*!***********************************************!*\
  !*** ./src/assets/images/Icons/Flag-icon.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Flag-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Flag-icon.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Gears-icon.png":
/*!************************************************!*\
  !*** ./src/assets/images/Icons/Gears-icon.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Gears-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Gears-icon.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Linkedin.png":
/*!**********************************************!*\
  !*** ./src/assets/images/Icons/Linkedin.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Linkedin.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Linkedin.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Mail.png":
/*!******************************************!*\
  !*** ./src/assets/images/Icons/Mail.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Mail.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Mail.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Rocket-icon.png":
/*!*************************************************!*\
  !*** ./src/assets/images/Icons/Rocket-icon.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Rocket-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Rocket-icon.png?");

/***/ }),

/***/ "./src/assets/images/Icons/Twitter.png":
/*!*********************************************!*\
  !*** ./src/assets/images/Icons/Twitter.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Twitter.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/Twitter.png?");

/***/ }),

/***/ "./src/assets/images/Icons/fb.png":
/*!****************************************!*\
  !*** ./src/assets/images/Icons/fb.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/fb.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/fb.png?");

/***/ }),

/***/ "./src/assets/images/Icons/unnamed.png":
/*!*********************************************!*\
  !*** ./src/assets/images/Icons/unnamed.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/unnamed.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Icons/unnamed.png?");

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_Icons_Flag_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/Icons/Flag-icon.png */ \"./src/assets/images/Icons/Flag-icon.png\");\n/* harmony import */ var _assets_images_Icons_Crayon_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/Icons/Crayon-icon.png */ \"./src/assets/images/Icons/Crayon-icon.png\");\n/* harmony import */ var _assets_images_Icons_Gears_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/Icons/Gears-icon.png */ \"./src/assets/images/Icons/Gears-icon.png\");\n/* harmony import */ var _assets_images_Icons_Rocket_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/Icons/Rocket-icon.png */ \"./src/assets/images/Icons/Rocket-icon.png\");\n/* harmony import */ var _assets_images_Icons_fb_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/Icons/fb.png */ \"./src/assets/images/Icons/fb.png\");\n/* harmony import */ var _assets_images_Icons_Twitter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/Icons/Twitter.png */ \"./src/assets/images/Icons/Twitter.png\");\n/* harmony import */ var _assets_images_Icons_Mail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/Icons/Mail.png */ \"./src/assets/images/Icons/Mail.png\");\n/* harmony import */ var _assets_images_Icons_Linkedin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/Icons/Linkedin.png */ \"./src/assets/images/Icons/Linkedin.png\");\n/* harmony import */ var _assets_images_Icons_unnamed_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/Icons/unnamed.png */ \"./src/assets/images/Icons/unnamed.png\");\n\n// import './assets/images/background.jpg';\n// import './assets/images/close-up-of-wooden-plank-326311 (1).jpg';\n// import './index.hbs';\n\n// ------------------------gallery---------------------\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });