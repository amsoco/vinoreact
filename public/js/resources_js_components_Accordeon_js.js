"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Accordeon_js"],{

/***/ "./resources/js/components/Accordeon.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Accordeon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Accordeon.styled.js */ "./resources/js/components/styles/Accordeon.styled.js");
/* harmony import */ var _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/chevronBlack.svg */ "./resources/js/assets/svg/chevronBlack.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Accordeon = function Accordeon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__.AccordeonSection, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: props.titre
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "chevronBlack"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);

/***/ }),

/***/ "./resources/js/components/styles/Accordeon.styled.js":
/*!************************************************************!*\
  !*** ./resources/js/components/styles/Accordeon.styled.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordeonSection": () => (/* binding */ AccordeonSection)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AccordeonSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    // pour bien voir \n    margin: 40px;\n\n\n    button{\n        background: #fff;\n        border: 1px solid #D8D8D8;\n        border-left: none;\n        border-right: none;\n        padding: 10px;\n        display:flex;\n\n        img {\n            height : 12px;\n            margin-left: auto;\n            transition: transform 0.6s ease;\n            margin-top: auto;\n            margin-bottom: auto;\n        }\n\n        p {\n            font-family: 'Gotham';\n            font-weight: 900;\n            font-style: normal;\n            font-size:1.2rem;\n        }\n    }\n\n"])));

/***/ }),

/***/ "./resources/js/assets/svg/chevronBlack.svg":
/*!**************************************************!*\
  !*** ./resources/js/assets/svg/chevronBlack.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chevronBlack.svg?122cca7512d3a55e8676620514202557");

/***/ })

}]);