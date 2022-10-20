/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"img {\\n  width: 200px;\\n  height: 200px;\\n  margin-left: 45%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://advanced-fe-course/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/image.jpg */ \"./src/assets/image.jpg\");\n/* harmony import */ var _src_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/sass/main.scss */ \"./src/sass/main.scss\");\n\r\nconst mainimage = document.getElementById(\"mainImage\")\r\nmainimage.src = _assets_image_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n\r\n;\r\n\r\nconst homework1 = __webpack_require__(/*! ../src/js/homework1 */ \"./src/js/homework1.js\")\r\nconst homework2 = __webpack_require__(/*! ../src/js/homework2 */ \"./src/js/homework2.js\")\r\nconst homework3 = __webpack_require__(/*! ../src/js/homework3 */ \"./src/js/homework3.js\")\r\nconst homework4 = __webpack_require__(/*! ../src/js/homework4 */ \"./src/js/homework4.js\")\r\nconst homework5 = __webpack_require__(/*! ../src/js/homework5 */ \"./src/js/homework5.js\")\r\nconst homework6 = __webpack_require__(/*! ../src/js/homework6 */ \"./src/js/homework6.js\") \r\nconst homework7 = __webpack_require__(/*! ../src/js/homework7 */ \"./src/js/homework7.js\")\r\nconst homework8 = __webpack_require__(/*! ../src/js/homework8 */ \"./src/js/homework8.js\")\r\nconst homework9 = __webpack_require__(/*! ../src/js/homework9 */ \"./src/js/homework9.js\")\r\nconst homework12 = __webpack_require__(/*! ../src/js/homework12 */ \"./src/js/homework12.js\")\r\nconst homework13 = __webpack_require__(/*! ../src/js/homework13 */ \"./src/js/homework13.js\")\r\nconst homework14 = __webpack_require__(/*! ../src/js/homework14 */ \"./src/js/homework14.js\")\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/index.js?");

/***/ }),

/***/ "./src/js/homework1.js":
/*!*****************************!*\
  !*** ./src/js/homework1.js ***!
  \*****************************/
/***/ (() => {

eval("let ballCost = 15.678;\r\nlet gloveCost = 123.965;\r\nlet shoesCost = 90.2345;\r\n\r\n/* document.writeln(\"<p><b>Ціна м'яча</b> = \" + ballCost + \"$</p>\");\r\ndocument.writeln('<p><b>Ціна рукавиць</b> = ' + gloveCost + \"$</p>\");\r\ndocument.writeln('<p><b>Ціна взуття</b> = ' + shoesCost + \"$</p>\"); */\r\n\r\nlet container = document.createElement(\"span\");\r\ncontainer.setAttribute(\"id\", \"container\")\r\ncontainer.style.color = \"red\";\r\ncontainer.innerHTML = \"<p><b>Ціна м'яча</b> = \" + ballCost + \"$</p>\"\r\ndocument.body.append(container);\r\n\r\nlet container2 = document.createElement(\"span\");\r\ncontainer2.setAttribute(\"id\", \"container2\")\r\ncontainer2.style.color = \"red\";\r\ncontainer2.innerHTML = \"<p><b>Ціна рукавиць</b> = \" + gloveCost + \"$</p>\"\r\ndocument.body.append(container2);\r\n\r\nlet container3 = document.createElement(\"span\");\r\ncontainer3.setAttribute(\"id\", \"container\")\r\ncontainer3.style.color = \"red\";\r\ncontainer3.innerHTML = \"<p><b>Ціна взуття</b> = \" + shoesCost + \"$</p>\"\r\ndocument.body.append(container3);\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework1.js?");

/***/ }),

/***/ "./src/js/homework12.js":
/*!******************************!*\
  !*** ./src/js/homework12.js ***!
  \******************************/
/***/ (() => {

eval("async function getRandomChinese(length) {\r\n  let letters = \"\";\r\n\r\n  for(let i = 0; i < length; i++) { \r\n    const sign = [Date.now()].join().slice(8);\r\n    letters += String.fromCharCode(sign);\r\n    await timeToWait (50)\r\n  };\r\n\r\n  return letters \r\n  }\r\n  \r\n  async function displayLet () {\r\n    console.log(await getRandomChinese(4))\r\n  } (displayLet())\r\n\r\n  function timeToWait (ms) {\r\n    return new Promise (resolve => setTimeout(resolve, ms));\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework12.js?");

/***/ }),

/***/ "./src/js/homework13.js":
/*!******************************!*\
  !*** ./src/js/homework13.js ***!
  \******************************/
/***/ (() => {

eval("\r\nasync function getStarships() {\r\n  if (ctnPlanets) {\r\n    ctnPlanets.remove()\r\n  }\r\n  if (ctnCharacters) {\r\n    ctnCharacters.remove()\r\n    }\r\n  if (document.getElementById(\"fifthEpisodeStarships\") != null) {\r\n    return;\r\n  }\r\n\r\n  const square = document.createElement(\"div\");\r\n  square.setAttribute(\"id\", \"fifthEpisodeStarships\");\r\n  main.append(square);\r\n  square.style.cssText = \"width: 1200px; height: 800px; margin: auto; margin-top: 2.5%; display: flex; flex-wrap: wrap; flex-direction: row\";\r\n  \r\n  document.querySelector('.overlay').classList.add('active');\r\n  const people = fetch(\"https://swapi.dev/api/films/2/\").then(data => {\r\n    return data.json();\r\n  }).then(films => {\r\n    films.starships.forEach(url => {\r\n      const request = fetch(url).then(d => d.json()).then(starship => {    \r\n        const wrapper = document.createElement(\"div\")\r\n        square.append(wrapper);\r\n        wrapper.innerHTML = '<div class=\"card card-starships\"><h1>' + starship.name + '</h1>' + \r\n        '<h3><p>Birth Yearh: ' + starship.model + '</p></h3>' + \r\n        '<p>Gender: ' + starship.cost_in_credits + '</p></div>';\r\n        \r\n      })     \r\n    })   \r\n    document.querySelector('.overlay').classList.remove('active');\r\n  })   \r\n}\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework13.js?");

/***/ }),

/***/ "./src/js/homework14.js":
/*!******************************!*\
  !*** ./src/js/homework14.js ***!
  \******************************/
/***/ (() => {

eval("// First Function\r\n\r\nconst numberGenerator = generator();\r\n\r\nfunction* generator() {\r\n  let number = 0;\r\n  while (true) \r\n    yield number++;\r\n}\r\n\r\nfunction numberOutput() {\r\n   const firstButton = document.getElementById(\"firstButton\")\r\n   firstButton.innerHTML = \"Next Number\"\r\n\r\n  document.getElementById(\"number\").innerText = `Number Generator: ${\r\n    numberGenerator.next().value\r\n  }`;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework14.js?");

/***/ }),

/***/ "./src/js/homework2.js":
/*!*****************************!*\
  !*** ./src/js/homework2.js ***!
  \*****************************/
/***/ (() => {

eval("function control_n_Number() {\r\n    let number = 0;\r\n    while (!number) {\r\n      number = +prompt(\"Введіть перше число:\");\r\n      if (!number) {\r\n        alert(\"Ви ввели літеру або інший символ.\");\r\n        number = null;\r\n      }\r\n      if (!Number.isInteger(number)) {\r\n        alert(\"Число не є цілим або дорівнює 0!\");\r\n        number = null;\r\n      } \r\n  \r\n      if (number < 0) {\r\n        alert(\"Замаленьке число!\");\r\n        number = null;\r\n      }\r\n    }\r\n    return number;\r\n  }\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework2.js?");

/***/ }),

/***/ "./src/js/homework3.js":
/*!*****************************!*\
  !*** ./src/js/homework3.js ***!
  \*****************************/
/***/ (() => {

eval("// 1) Function #1\r\n\r\nfunction findMax(numbers) {\r\n   const separateNumbers = String(numbers).split(\"\");\r\n\r\n  return Math.max.apply (null, separateNumbers)\r\n  }\r\n\r\nconst numbers = findMax (3412583498765);\r\nconsole.log(numbers)\r\n\r\nlet container4 = document.createElement(\"span\");\r\ncontainer4.setAttribute(\"id\", \"container\")\r\ncontainer4.style.color = \"red\";\r\ncontainer4.innerHTML = \"<b>Function #1</b> \" + \"= \" + numbers + \" --- Створити функцію яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.</p>\"\r\ndocument.body.append(container4);\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework3.js?");

/***/ }),

/***/ "./src/js/homework4.js":
/*!*****************************!*\
  !*** ./src/js/homework4.js ***!
  \*****************************/
/***/ (() => {

eval("const students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\n\r\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\r\n\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\n\r\n\r\n\r\n// 1) Get Pairs\r\n\r\nfunction getStudentsPairs(students) { const getPairs = []; \r\n    for (let i = 0; i < themes.length; i++) {\r\n    const boys = students.filter(e => e.slice(-1) !== 'а');\r\n    const girls = students.filter(e => e.slice(-1) === 'а');\r\n    getPairs.push([boys[i], girls[i]]);\r\n    }                                                                                           \r\n    return getPairs }\r\n\r\n  \r\nconst pairs = getStudentsPairs(students);\r\nconsole.log(pairs);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework4.js?");

/***/ }),

/***/ "./src/js/homework5.js":
/*!*****************************!*\
  !*** ./src/js/homework5.js ***!
  \*****************************/
/***/ (() => {

eval("\r\n  \r\n  // 10° Function: Letters combination\r\n  \r\n  function generateCombinations(word) { const resultComb = [];\r\n    if (word.length <= 1) { return word.length == 0 ? [] : [word]; }\r\n    for (let i = 0; i < word.length; i++) { const newArr = word.slice(0, i) + word.slice(i + 1); \r\n     const others = generateCombinations(newArr);\r\n     others && others.forEach((item) => { resultComb.push(word[i] + item); });\r\n    }\r\n    return [...new Set(resultComb)];\r\n   };\r\n   const wordCombinated = generateCombinations('dog');\r\n   console.log(wordCombinated);\r\n\r\n   \r\n   let container5 = document.createElement(\"span\");\r\n   container5.setAttribute(\"id\", \"container\")\r\n   container5.style.color = \"red\";\r\n   container5.innerHTML = \"<p> <b>Function #10 - Combined Letters of a Word:</b> \" + generateCombinations(\"dog\") + \"</p>\"\r\n   document.body.append(container5);\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework5.js?");

/***/ }),

/***/ "./src/js/homework6.js":
/*!*****************************!*\
  !*** ./src/js/homework6.js ***!
  \*****************************/
/***/ (() => {

eval("const students = [{\r\n  name: \"Tanya\",\r\n  course: 3,\r\n  subjects: {\r\n    math: [4, 4, 3, 4],\r\n    algorithms: [3, 3, 3, 4, 4, 4],\r\n    data_science: [5, 5, 3, 4]\r\n  }\r\n}, {\r\n  name: \"Victor\",\r\n  course: 4,\r\n  subjects: {\r\n    physics: [5, 5, 5, 3],\r\n    economics: [2, 3, 3, 3, 3, 5],\r\n    geometry: [5, 5, 2, 3, 5]\r\n  }\r\n}, {\r\n  name: \"Anton\",\r\n  course: 2,\r\n  subjects: {\r\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n    english: [5, 3],\r\n    cosmology: [5, 5, 5, 5]\r\n  }\r\n} ];\r\n\r\n\r\n\r\n// 1° Function\r\n\r\nfunction getSubjects(students) {\r\nconst predmet = (Object.keys(students.subjects).join(\" \"));\r\nconst predmet2 = predmet.split(\" \");\r\n\r\nfor (let i = 0; i < predmet2.length; i++) {\r\n  predmet2[i] = predmet2[i][0].toUpperCase() + predmet2[i].slice(1);\r\n}\r\n\r\nreturn [predmet2.join(\", \").replaceAll('_', ' ')]\r\n}\r\n\r\nconst discipline = getSubjects (students[0]);\r\n\r\nconsole.log(discipline);\r\n\r\nlet container6 = document.createElement(\"span\");\r\ncontainer6.setAttribute(\"id\", \"container\")\r\ncontainer6.style.color = \"red\";\r\ncontainer6.innerHTML = \"<b> Function #1 - Get the Subject: </b>\" + discipline + \"</p>\"\r\ndocument.body.append(container6);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework6.js?");

/***/ }),

/***/ "./src/js/homework7.js":
/*!*****************************!*\
  !*** ./src/js/homework7.js ***!
  \*****************************/
/***/ (() => {

eval("const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\r\nconst latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\r\nconst litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\r\n\r\n\r\n// Function #1 - Calculate The Salary\r\n\r\nfunction getMyTaxes(salary) {\r\n  return salary * this.tax;\r\n}\r\n\r\nconst theSalary = getMyTaxes.call(ukraine, 1500);\r\n\r\nconsole.log(theSalary);\r\n\r\n\r\nlet container7 = document.createElement(\"span\");\r\ncontainer7.setAttribute(\"id\", \"container\")\r\ncontainer7.style.color = \"red\";\r\ncontainer7.innerHTML = \"<b>Function #1 - Calculate The Salary:</b> \" + theSalary + \"</p>\"\r\ndocument.body.append(container7);\r\n\r\n\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework7.js?");

/***/ }),

/***/ "./src/js/homework8.js":
/*!*****************************!*\
  !*** ./src/js/homework8.js ***!
  \*****************************/
/***/ (() => {

eval("class Student {\r\n  constructor(university, course, fullName, marks, newMarks) {\r\n  this.university = university;\r\n  this.course = course;\r\n  this.fullName = fullName;\r\n  this.marks = marks;\r\n  this.newMarks = newMarks;\r\n  this.dismiss = true;\r\n  } \r\n\r\n  getInfo() {\r\n\r\n    return this.dismiss ? \"Студент \" + this.course + \"го курсу \" + this.university + \", \" + this.fullName : null\r\n  }\r\n\r\n  studentMarks()  {\r\nreturn this.dismiss ? this.marks : null\r\n  }\r\n\r\n  setMark () {\r\nreturn this.dismiss ? this.newMarks : null\r\n  }\r\n\r\n\r\n  getAverageMark () {\r\n\r\nlet sumMarks = 0;\r\nfor (let el = 0; el < this.newMarks.length; el++) {\r\n  sumMarks += this.newMarks[el];\r\n}\r\nreturn this.dismiss ? sumMarks / this.newMarks.length : null\r\n} \r\n\r\ndismissed () {\r\n   this.dismiss = false;\r\n}\r\n\r\nrecovered () {\r\n   this.dismiss = true;\r\n}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework8.js?");

/***/ }),

/***/ "./src/js/homework9.js":
/*!*****************************!*\
  !*** ./src/js/homework9.js ***!
  \*****************************/
/***/ (() => {

eval("function displaySquares() {\r\n  const squares = document.createElement(\"squares\");\r\n  document.body.append(squares);\r\n  squares.style.cssText = \"width: 300px; height: 300px; margin: auto; margin-top: 2.5%; display: flex; flex-wrap: wrap\";\r\n\r\n  for (let i = 0; i < 25; i++) {\r\n      const square = document.createElement(\"square\");\r\n      squares.append(square);\r\n      square.style.cssText = `\r\n      width: 50px;\r\n      height: 50px;\r\n      margin-right: 2px;\r\n      margin-bottom: 2px;\r\n      border-radius: 10px;\r\n      border-style: solid;\r\n      border-width: 3px;\r\n      border-color: black;\r\n      background-color: ${getColor()};\r\n     `\r\n  }\r\n  return squares\r\n}\r\n\r\ndisplaySquares ()\r\n\r\nfunction getColor() {\r\n  hexaCode = \"0123456789abcdef\";\r\n  hexaSymbol = \"#\"\r\n  for (var i = 0; i < 6; i++) {\r\n    hexaSymbol += hexaCode[Math.floor(Math.random() * 16)];\r\n  }\r\n  return hexaSymbol;\r\n}\r\n\r\n\r\nfunction colorChange() {\r\n      let square = document.getElementsByTagName(\"square\");\r\n      for (let i = 0; i < square.length; i++) \r\n      {\r\n        square[i].style.backgroundColor = getColor();\r\n      }\r\n  }\r\n  \r\nsetInterval(colorChange, 500)\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced-fe-course/./src/js/homework9.js?");

/***/ }),

/***/ "./src/assets/image.jpg":
/*!******************************!*\
  !*** ./src/assets/image.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"image.jpg\";\n\n//# sourceURL=webpack://advanced-fe-course/./src/assets/image.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;